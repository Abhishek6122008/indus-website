# GitHub Copilot Instructions — The Indus Group Website

Read this before generating any code suggestions for this project.

---

## Project Overview

Redesign of The Indus Group of Co. website.

- **Source content:** theindusgroup.com
- **Design reference:** axoncsipl.com (layout/structure only — all content is INDUS)
- **Company tagline:** "Delivering industry-leading solutions across verticals with reliability, innovation, and integrity."

---

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** JavaScript (JSX — no TypeScript)
- **Styling:** Tailwind CSS v3
- **Package manager:** npm

Do not install new dependencies without team approval. The stack is confirmed — do not introduce a different framework or CSS library.

---

## Pages & Routes

| Route | File | What it contains |
|-------|------|-----------------|
| `/` | `src/app/page.jsx` | Hero (tagline + CTA), Who We Are snapshot, 5 business vertical cards, stats bar, testimonials, contact CTA |
| `/about` | `src/app/about/page.jsx` | Company story, mission & vision, approach (MSME empowerment), key stats |
| `/businesses` | `src/app/businesses/page.jsx` | Grid of all 5 business vertical cards with links |
| `/businesses/logistics` | `src/app/businesses/logistics/page.jsx` | Logistics & Supply Chain Management detail |
| `/businesses/enterprise-solutions` | `src/app/businesses/enterprise-solutions/page.jsx` | Enterprise Solutions detail |
| `/businesses/skill-development` | `src/app/businesses/skill-development/page.jsx` | Skill Development Solutions detail |
| `/businesses/real-estate` | `src/app/businesses/real-estate/page.jsx` | Real Estate & Infra Projects detail |
| `/businesses/hbc-franchise` | `src/app/businesses/hbc-franchise/page.jsx` | HBC Brand Franchise (Food Chain) detail + franchise enquiry |
| `/knowledge-center` | `src/app/knowledge-center/page.jsx` | Articles, guides, industry insights |
| `/resources` | `src/app/resources/page.jsx` | Downloadable resources and documents |
| `/tools` | `src/app/tools/page.jsx` | Interactive tools / calculators |
| `/contact` | `src/app/contact/page.jsx` | Contact form, phone, emails, social links |

---

## Folder Structure

```
src/
  app/                              # Next.js App Router — one folder per route
  components/
    layout/
      Header/                       # Logo, nav, phone CTA
      Footer/                       # Links, socials, copyright
    ui/                             # Reusable primitives: Button, Card, Badge, etc.
    sections/                       # Page-specific sections (not shared across pages)
      home/                         # Hero, BusinessesGrid, StatsBar, Testimonials, ContactCTA
      about/                        # CompanyStory, MissionVision, OurApproach
      businesses/                   # ServiceHero, ServiceFeatures, ServiceCTA (shared by detail pages)
  styles/
    globals.css
  lib/
    utils.js
public/
  images/
    hero/
    businesses/                     # One subfolder per vertical
    about/
  fonts/
```

---

## Header Nav Order

1. Who We Are → `/about`
2. Businesses → dropdown (5 links)
3. Knowledge Center → `/knowledge-center`
4. Resources → `/resources`
5. Tools → `/tools`
6. +91 7011332238 → prominent phone CTA (top-right, not a standard nav link)

---

## Key Company Data

| Field | Value |
|-------|-------|
| Company name | The Indus Group of Co. |
| Phone | +91 7011332238 |
| Email | info@theindusgroup.com / theindusgroup@outlook.com |
| Social | Instagram, LinkedIn, X (Twitter), YouTube, WhatsApp |
| Stats | 14+ years excellence, 1,000+ clients, 100+ team, Global network, 24/7 support |
| Footer legal links | Careers, Privacy Policy, Terms & Conditions |

---

## Business Verticals

| Vertical | Route slug | Full name |
|----------|-----------|-----------|
| Logistics | `logistics` | Logistics & Supply Chain Management Services |
| Enterprise | `enterprise-solutions` | Enterprise Solutions |
| Skill Dev | `skill-development` | Skill Development Solutions |
| Real Estate | `real-estate` | Real Estate & Infra Projects |
| HBC | `hbc-franchise` | Franchise of HBC Brand (Food Chain) |

---

## Component Conventions

- Each component in its own folder: `ComponentName/index.jsx`
- Always name the exported function — no anonymous default exports
- No TypeScript — plain JavaScript only, no type annotations
- Split files exceeding ~150 lines
- `ui/` = generic and reusable, no page-specific logic
- `sections/` = page-specific, can reference page data directly

---

## Naming Conventions

| Thing | Convention | Example |
|-------|-----------|---------|
| Folders | `kebab-case` | `skill-development/` |
| Components & functions | `PascalCase` | `BusinessCard` |
| Utilities & variables | `camelCase` | `formatPhone` |
| Image files | `kebab-case` | `hero-background.jpg` |

---

## Before Generating Any Code

1. Read this entire file
2. Identify the exact page or component you are working on
3. Check the corresponding `page.jsx` for existing TODO comments
4. Check `src/components/ui/` for existing primitives before creating new ones
5. Do not create files or folders outside the established structure without confirming
6. Do not write TypeScript — all files are `.jsx` or `.js`, no type annotations
