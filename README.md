<div align="center">

# The Indus Group — Website Redesign

**Redesigning the web presence of The Indus Group Co.**

![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)
![Contributions](https://img.shields.io/badge/contributions-intern%20friendly-blue?style=flat-square)
![Branch](https://img.shields.io/badge/main%20branch-protected-red?style=flat-square)
![Status](https://img.shields.io/badge/status-in%20progress-blue?style=flat-square)

</div>

---

> [!NOTE]
> **New here?** Read these three files before doing anything else — in this order:
> 1. [`GETTING_STARTED.md`](./GETTING_STARTED.md) — how to run the project, how to use AI, how to build and submit your work
> 2. [`TASKS.md`](./TASKS.md) — find your track and see exactly which files you own
> 3. This README — contribution rules and commit conventions

---

## Contribution Guide

Welcome to the team. Before writing a single line of code, make sure you understand how we collaborate in this repo.

### The golden rule — no direct pushes to `main`

Every change goes through a Pull Request. No exceptions. Direct pushes to `main` are blocked. This keeps the branch stable and ensures nothing merges without a second pair of eyes.

### Step-by-step workflow

**1. Branch off `main` with a clear name**

```
feature/navbar-redesign
fix/footer-alignment
chore/update-dependencies
```

**2. Write small, focused commits**

One logical change per commit. The message should explain *why*, not just what.

```
# Bad
fixed stuff

# Good
fix: correct mobile nav overflow on small screens
```

We follow [Conventional Commits](https://www.conventionalcommits.org/). Every commit message starts with a prefix that tells reviewers what kind of change it is at a glance:

| Prefix | Use when you… | Example |
|--------|--------------|---------|
| `feat` | Add something new to the website | `feat: add contact form to homepage` |
| `fix` | Fix a bug or broken behaviour | `fix: resolve broken nav link on mobile` |
| `docs` | Change documentation only | `docs: update README setup instructions` |
| `style` | Fix formatting, spacing, typos — no logic change | `style: fix indentation in hero section` |
| `refactor` | Restructure code without changing what it does | `refactor: extract header into its own component` |
| `chore` | Repo setup, config, tooling — no app code touched | `chore: add .gitignore and PR template` |
| `perf` | Improve performance | `perf: lazy-load images on landing page` |
| `test` | Add or update tests | `test: add unit tests for form validation` |

> [!TIP]
> Not sure which to use? Ask yourself: *does this change what the user sees or experiences?* If yes, it's likely `feat` or `fix`. If no, it's probably `chore`, `refactor`, or `style`.

**3. Open a Pull Request**

Fill out the PR template fully. Reviewers shouldn't need to ask you what the PR does or why — it should all be in the description.

**4. Get it reviewed — don't merge your own work**

Request a review from at least one teammate. If you get feedback, address it or discuss it in the comments. Don't ignore it and merge anyway.

### Habits worth building

| Habit | Why it matters |
|-------|---------------|
| Pull before you push | Avoids merge conflicts before they happen |
| Never commit `.env` or secrets | Once it's in git history, it's very hard to fully remove |
| Keep PRs small | Large PRs are hard to review and slow to merge |
| Speak up early when blocked | Don't let work stall silently — a quick message saves hours |

---

## Repo Structure

```
indus-website/
├── public/
│   ├── images/
│   │   ├── hero/                        # Homepage hero images
│   │   ├── businesses/                  # One subfolder per vertical
│   │   └── about/                       # About page images
│   └── fonts/
├── src/
│   ├── app/                             # Next.js App Router — one folder = one route
│   │   ├── layout.tsx                   # Root layout (Header + Footer)
│   │   ├── page.tsx                     # Home  /
│   │   ├── about/page.tsx               # Who We Are  /about
│   │   ├── businesses/
│   │   │   ├── page.tsx                 # Businesses overview  /businesses
│   │   │   ├── logistics/page.tsx       # Logistics & Supply Chain  /businesses/logistics
│   │   │   ├── enterprise-solutions/    # Enterprise Solutions
│   │   │   ├── skill-development/       # Skill Development Solutions
│   │   │   ├── real-estate/             # Real Estate & Infra Projects
│   │   │   └── hbc-franchise/           # HBC Brand Franchise (Food Chain)
│   │   ├── knowledge-center/page.tsx    # Knowledge Center
│   │   ├── resources/page.tsx           # Resources
│   │   ├── tools/page.tsx               # Tools
│   │   └── contact/page.tsx             # Contact
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header/                  # Logo, nav, +91 7011332238 CTA
│   │   │   └── Footer/                  # Links, socials, legal, copyright
│   │   ├── ui/                          # Reusable primitives: Button, Card, Badge, etc.
│   │   └── sections/                    # Page-specific sections
│   │       ├── home/
│   │       ├── about/
│   │       └── businesses/
│   ├── styles/globals.css
│   ├── lib/utils.ts
│   └── types/index.ts
├── CLAUDE.md                            # AI context — read before generating any code
├── .cursorrules                         # Cursor AI rules
├── .gitignore
└── .github/
    ├── copilot-instructions.md          # GitHub Copilot instructions
    ├── antigravity-instructions.md      # Antigravity instructions
    ├── pull_request_template.md
    └── ISSUE_TEMPLATE/
        ├── bug_report.md
        └── feature_request.md
```

Each `page.tsx` has comments listing exactly what sections it needs. Open it before you start anything on that page.

---

## Using AI Tools

AI coding assistants (Claude Code, Copilot, Cursor, etc.) are welcome. But you must follow these rules — no exceptions.

> [!IMPORTANT]
> **This repo has dedicated AI context files that must be read before generating any code.** These files contain the project architecture, page breakdown, naming conventions, and folder rules. Without reading them, the AI will produce generic code that doesn't fit this codebase and will be rejected in review.

### Which file to use per tool

| Tool | File to read |
|------|-------------|
| Claude Code | [`CLAUDE.md`](./CLAUDE.md) — auto-loaded when you open the project |
| Cursor | [`.cursorrules`](./.cursorrules) — auto-loaded by Cursor |
| GitHub Copilot | [`.github/copilot-instructions.md`](./.github/copilot-instructions.md) — auto-loaded by Copilot |
| Antigravity | [`.github/antigravity-instructions.md`](./.github/antigravity-instructions.md) |
| Any other AI | Point it to [`CLAUDE.md`](./CLAUDE.md) — it has the most detail |

### How to start a session with any AI

Always begin with:

```
Read CLAUDE.md (or .cursorrules / copilot-instructions.md) before generating any code.
```

> [!WARNING]
> If you skip this step and the AI generates code that ignores the project structure or conventions, the PR will be sent back. It takes 10 seconds to paste that instruction — just do it.

---

<div align="center">

*More details on project structure, setup, and dev workflow coming once the source code arrives.*

</div>
