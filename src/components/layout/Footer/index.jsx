'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { Phone, Mail, Instagram, Linkedin, Youtube, ChevronDown, MessageCircle, X, Send, Bot, Loader2 } from 'lucide-react'


const API_URL = process.env.NEXT_PUBLIC_CHATBOT_URL || 'http://localhost:8000'


const quickLinks = [
  { label: 'Who We Are', href: '/about' },
  { label: 'Businesses', href: '/businesses' },
  { label: 'Knowledge Center', href: '/knowledge-center' },
  { label: 'Resources', href: '/resources' },
  { label: 'Tools', href: '/tools' },
  { label: 'Contact', href: '/contact' },
]

const resourceLinks = [
  { label: 'Incoterms 2020 Wallchart', href: 'https://2go.iccwbo.org/incoterms-2020-practical-free-wallchart-fr.html' },
  { label: 'XE Currency Converter', href: 'https://www.xe.com/' },
  { label: 'Track & Trace', href: 'https://www.track-trace.com/' },
]

const businesses = [
  { label: 'Logistics & Supply Chain', href: '/businesses/logistics' },
  { label: 'Enterprise Solutions', href: '/businesses/enterprise-solutions' },
  { label: 'Skill Development', href: '/businesses/skill-development' },
  { label: 'Real Estate & Infra', href: '/businesses/real-estate' },
  { label: 'HBC Brand Franchise', href: '/businesses/hbc-franchise' },
]

// ── SocialMenu ────────────────────────────────────────────────────────────────
function SocialMenu() {
  return (
    <div className="fixed bottom-6 left-6 z-50 group">
      <button className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#0b1f5c] text-white shadow-lg hover:bg-blue-700 transition">
        SOCIAL
        <ChevronDown className="w-4 h-4" />
      </button>

      <div className="absolute bottom-full left-0 mb-3 w-56 rounded-xl bg-white shadow-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
        <a
          href="https://www.instagram.com/the_indusgroup"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100"
        >
          <Instagram className="w-5 h-5" />
          Instagram
        </a>
        <a
          href="https://www.linkedin.com/company/the-indus-group-co/posts/?feedView=all"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100"
        >
          <Linkedin className="w-5 h-5" />
          LinkedIn
        </a>
        <a
          href="https://youtube.com/@theindusgroupco"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100"
        >
          <Youtube className="w-5 h-5" />
          YouTube
        </a>
      </div>
    </div>
  )
}

// ── Chatbot internals ─────────────────────────────────────────────────────────
function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-2 h-2 rounded-full bg-blue-400 animate-bounce"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  )
}

function Message({ msg }) {
  const isBot = msg.role === 'assistant'
  return (
    <div className={`flex gap-2 ${isBot ? 'items-start' : 'items-end justify-end'}`}>
      {isBot && (
        <div className="w-7 h-7 rounded-full bg-[#0b1f5c] flex items-center justify-center shrink-0 mt-0.5">
          <Bot className="w-4 h-4 text-white" />
        </div>
      )}
      <div
        className={`max-w-[78%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
          isBot
            ? 'bg-gray-100 text-gray-800 rounded-tl-sm'
            : 'bg-[#0b1f5c] text-white rounded-br-sm'
        }`}
      >
        {msg.content}
      </div>
    </div>
  )
}

// ── ChatbotWidget ─────────────────────────────────────────────────────────────
function ChatbotWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm the Indus Group assistant. Ask me anything about our businesses, services, or how to get in touch.",
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100)
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const send = async () => {
    const text = input.trim()
    if (!text || loading) return

    setMessages((prev) => [...prev, { role: 'user', content: text }])
    setInput('')
    setLoading(true)

    try {
      const res = await fetch(`${API_URL}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      })
      if (!res.ok) throw new Error()
      const data = await res.json()
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }])
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: "Sorry, I'm having trouble connecting right now. Please try again shortly." },
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat window */}
      {open && (
        <div className="w-[360px] flex flex-col rounded-2xl shadow-2xl border border-gray-200 bg-white overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3.5 bg-[#0b1f5c]">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-white text-sm font-semibold">Indus Assistant</p>
              <p className="text-blue-300 text-xs">Powered by The Indus Group</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/60 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="overflow-y-auto px-4 py-4 space-y-3 max-h-[360px]">
            {messages.map((msg, i) => (
              <Message key={i} msg={msg} />
            ))}
            {loading && (
              <div className="flex items-start gap-2">
                <div className="w-7 h-7 rounded-full bg-[#0b1f5c] flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-gray-100 rounded-2xl rounded-tl-sm">
                  <TypingDots />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 px-3 py-3 border-t border-gray-100">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask something…"
              disabled={loading}
              className="flex-1 text-sm px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition"
            />
            <button
              onClick={send}
              disabled={!input.trim() || loading}
              className="w-9 h-9 rounded-xl bg-[#0b1f5c] flex items-center justify-center text-white disabled:opacity-40 hover:bg-blue-800 transition shrink-0"
              aria-label="Send"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-14 h-14 rounded-full bg-[#0b1f5c] shadow-lg flex items-center justify-center hover:bg-blue-800 transition-all hover:scale-105 active:scale-95"
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        {open ? <X className="w-6 h-6 text-white" /> : <MessageCircle className="w-6 h-6 text-white" />}
      </button>
    </div>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────
export function Footer() {
  return (
    <>
      <SocialMenu />
      <ChatbotWidget />

      <footer className="bg-[#0b1f5c] text-blue-200">
        {/* Main */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-white text-xs font-bold">TIG</span>
                </div>
                <span className="text-white text-base font-bold font-heading">The Indus Group of Co.</span>
              </div>
              <p className="text-sm leading-relaxed mb-6 max-w-sm text-blue-200/80">
                Delivering industry-leading solutions across verticals with reliability, innovation, and integrity.
              </p>
              <div className="space-y-2.5">
                <a href="tel:+917011332238" className="flex items-center gap-2.5 text-sm hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                  +91 7011 332 238
                </a>
                <a href="mailto:info@theindusgroup.com" className="flex items-center gap-2.5 text-sm hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  info@theindusgroup.com
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold font-heading mb-5 text-xs uppercase tracking-widest">Quick Links</h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-blue-200/70 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources & Tools */}
            <div>
              <h4 className="text-white font-semibold font-heading mb-5 text-xs uppercase tracking-widest">Resources & Tools</h4>
              <ul className="space-y-2.5">
                {resourceLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-200/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Businesses */}
            <div>
              <h4 className="text-white font-semibold font-heading mb-5 text-xs uppercase tracking-widest">Our Businesses</h4>
              <ul className="space-y-2.5">
                {businesses.map((b) => (
                  <li key={b.href}>
                    <Link href={b.href} className="text-sm text-blue-200/70 hover:text-white transition-colors">
                      {b.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">

            {/* Legal */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-blue-200/50">
              <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            </div>

            <p className="text-xs text-blue-200/50">
              © {new Date().getFullYear()} The Indus Group of Co.
            </p>

          </div>
        </div>
      </footer>
    </>
  )
}
