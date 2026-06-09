<div align="center">

# Indus Website Redesign

**Collaborative redesign, development, and maintenance of the Indus website.**

![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)
![Contributions](https://img.shields.io/badge/contributions-intern%20friendly-blue?style=flat-square)
![Branch](https://img.shields.io/badge/main%20branch-protected-red?style=flat-square)
![Status](https://img.shields.io/badge/status-awaiting%20source%20code-orange?style=flat-square)

</div>

---

> [!NOTE]
> The original source code has not yet arrived. In the meantime, all interns should read and follow this guide carefully. This README will be expanded significantly once the codebase is received.

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

These files are already in place and ready to use:

```
indus-website/
├── .gitignore                              # Keeps build output, .env, and editor junk out of git
└── .github/
    ├── pull_request_template.md            # Auto-fills every new PR — fill it out honestly
    └── ISSUE_TEMPLATE/
        ├── bug_report.md                   # Structured bug reports with repro steps
        └── feature_request.md             # Feature proposals with problem + solution framing
```

---

## Using AI Tools

AI coding assistants (Claude Code, Copilot, Cursor, etc.) are allowed. But there are rules.

> [!IMPORTANT]
> **Project-specific skills and workflows will be added once the source code arrives.** These files will contain the architecture decisions, naming conventions, design patterns, and rules that AI must follow to generate code that actually fits this codebase.

> [!WARNING]
> **Before generating any code with an AI tool, you must tell it to read the project skills and workflows first.** Skipping this means the AI produces generic code that conflicts with project conventions — it will be rejected in review.

Once those files exist, your prompt to the AI should start with something like:

```
Read the project skills and workflows before generating any code.
```

Exact instructions will be added here when the source code arrives.

---

<div align="center">

*More details on project structure, setup, and dev workflow coming once the source code arrives.*

</div>
