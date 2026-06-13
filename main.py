"""
The Indus Group – Chatbot API
Run:  uvicorn main:app --reload --port 8000
"""

from __future__ import annotations

import logging
import os
from contextlib import asynccontextmanager
from functools import lru_cache
from typing import Optional

import requests
from bs4 import BeautifulSoup
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from mistralai import Mistral
from pydantic import BaseModel, Field

# ── env & logging ────────────────────────────────────────────────────────────
load_dotenv()
logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")
log = logging.getLogger(__name__)

# ── config ───────────────────────────────────────────────────────────────────
MISTRAL_API_KEY: str = os.environ["MISTRAL_API_KEY"]          # raises if missing
MODEL:           str = os.getenv("MISTRAL_MODEL", "mistral-small-latest")
MAX_TOKENS:      int = int(os.getenv("MAX_TOKENS", "600"))
MAX_CHARS_PAGE:  int = int(os.getenv("MAX_CHARS_PAGE", "5000"))
ALLOWED_ORIGINS: list[str] = os.getenv("ALLOWED_ORIGINS", "http://localhost:3000").split(",")

SCRAPE_URLS: list[str] = [
    "https://theindusgroup.com/",
    "https://theindusgroup.com/about.html",
    "https://theindusgroup.com/kc.html",
    "https://theindusgroup.com/resourses.html",
    "https://theindusgroup.com/tools.html",
]

SYSTEM_PROMPT_TEMPLATE = """\
You are the official virtual assistant of The Indus Group.

STRICT RULES — follow every one, always:
1. Answer ONLY from the website content below.
2. Never use outside knowledge or training data.
3. Never answer coding questions or general knowledge questions.
4. Never guess or infer beyond what is explicitly stated.
5. If the answer is not in the content, reply exactly:
   "I couldn't find that on The Indus Group website. Please contact us directly for more details."

Website content:
{context}
"""

# ── scraper ──────────────────────────────────────────────────────────────────

def _scrape(url: str, max_chars: int) -> str:
    headers = {"User-Agent": "Mozilla/5.0 (compatible; IndusBotScraper/1.0)"}
    try:
        r = requests.get(url, headers=headers, timeout=15)
        r.raise_for_status()
        soup = BeautifulSoup(r.text, "html.parser")
        for tag in soup(["script", "style", "meta", "link", "noscript"]):
            tag.decompose()
        text = " ".join(soup.get_text(" ", strip=True).split())
        text = text[:max_chars]
        log.info("Scraped %s  (%d chars)", url, len(text))
        return text
    except Exception as exc:
        log.warning("Failed to scrape %s: %s", url, exc)
        return ""


@lru_cache(maxsize=1)
def load_context() -> str:
    """Scrape all pages once and cache the result for the process lifetime."""
    chunks = [
        f"--- {url} ---\n{text}"
        for url in SCRAPE_URLS
        if (text := _scrape(url, MAX_CHARS_PAGE))
    ]
    if not chunks:
        raise RuntimeError("Could not scrape any page — check network access.")
    ctx = "\n\n".join(chunks)
    log.info("Context ready: %d chars total", len(ctx))
    return ctx


# ── lifespan: warm up the cache at startup ───────────────────────────────────
@asynccontextmanager
async def lifespan(app: FastAPI):
    log.info("Warming up context cache…")
    try:
        load_context()
        log.info("Context cache ready.")
    except Exception as exc:
        log.error("Startup scrape failed: %s", exc)
    yield


# ── app ──────────────────────────────────────────────────────────────────────
app = FastAPI(
    title="Indus Group Chatbot API",
    version="1.0.0",
    description="RAG chatbot grounded in The Indus Group website content.",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = Mistral(api_key=MISTRAL_API_KEY)


# ── schemas ──────────────────────────────────────────────────────────────────
class ChatRequest(BaseModel):
    message: str = Field(..., min_length=1, max_length=500, examples=["What services do you offer?"])


class ChatResponse(BaseModel):
    reply: str
    model: str


class HealthResponse(BaseModel):
    status: str
    context_chars: int
    model: str


# ── routes ───────────────────────────────────────────────────────────────────
@app.get("/health", response_model=HealthResponse, tags=["meta"])
def health():
    """Liveness + readiness check."""
    try:
        ctx = load_context()
        return HealthResponse(status="ok", context_chars=len(ctx), model=MODEL)
    except Exception as exc:
        raise HTTPException(status_code=503, detail=str(exc))


@app.post("/chat", response_model=ChatResponse, tags=["chat"])
def chat(req: ChatRequest):
    """
    Send a user message and receive a grounded reply from the Indus Group assistant.

    - **message**: plain-text question (1–500 chars)
    """
    try:
        context = load_context()
    except RuntimeError as exc:
        raise HTTPException(status_code=503, detail=str(exc))

    system_prompt = SYSTEM_PROMPT_TEMPLATE.format(context=context)

    try:
        response = client.chat.complete(
            model=MODEL,
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user",   "content": req.message},
            ],
            temperature=0.1,
            max_tokens=MAX_TOKENS,
        )
    except Exception as exc:
        log.error("Mistral API error: %s", exc)
        raise HTTPException(status_code=502, detail="AI service unavailable. Please try again shortly.")

    reply = response.choices[0].message.content.strip()
    return ChatResponse(reply=reply, model=MODEL)


@app.post("/refresh-context", tags=["meta"])
def refresh_context():
    """Force a re-scrape of all pages (clears the in-memory cache)."""
    load_context.cache_clear()
    try:
        ctx = load_context()
        return {"status": "refreshed", "context_chars": len(ctx)}
    except RuntimeError as exc:
        raise HTTPException(status_code=503, detail=str(exc))