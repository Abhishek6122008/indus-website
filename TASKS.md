# Team Task Split

Each person owns specific files and branches. **Do not open or edit files outside your track.** If you think you need to touch someone else's files, talk to them first — don't just do it.

The only files everyone can touch: `README.md`, `TASKS.md`, and their own branch.

---

## Already Done — Do Not Redo

These are complete. Do not touch these files unless something is broken.

| What | Files |
|------|-------|
| Project setup (Next.js, Tailwind, TypeScript) | `package.json`, `tsconfig.json`, `next.config.mjs`, `tailwind.config.ts`, `postcss.config.mjs` |
| Global styles + utilities | `src/styles/globals.css`, `src/lib/utils.ts`, `src/types/index.ts` |
| Header + Footer + Root layout | `src/components/layout/Header/`, `src/components/layout/Footer/`, `src/app/layout.tsx` |
| UI component library | `src/components/ui/Button/`, `Card/`, `SectionHeading/`, `StatItem/`, `Badge/` |
| Full homepage | `src/app/page.tsx`, `src/components/sections/home/` (all 6 sections) |

---

## Track 4 — About + Contact Pages

**Branch:** `feature/about-contact`
**Can start immediately — no blockers.**

Files you own:
```
src/app/about/page.tsx
src/app/contact/page.tsx
src/components/sections/about/   ← create your section files here
```

Tasks — About page (`/about`):
- [ ] `PageHero` — full-width banner, title "Who We Are"
- [ ] `CompanyStory` — The Indus Group of Co. background and founding narrative
- [ ] `MissionVision` — mission statement + vision statement side by side with icons
- [ ] `OurApproach` — MSME empowerment, tailored strategies, community impact
- [ ] `KeyStats` — reuse `StatItem` from `src/components/ui/StatItem` for: 14+ yrs, 1,000+ clients, 100+ team, global network, 24/7 support

Tasks — Contact page (`/contact`):
- [ ] `ContactDetails` — Phone: +91 7011332238, Email: info@theindusgroup.com / theindusgroup@outlook.com, WhatsApp link
- [ ] `ContactForm` — fields: Name, Email, Message + Submit (use `Button` from `src/components/ui/Button`)
- [ ] `SocialLinks` — Instagram, LinkedIn, X (Twitter), YouTube, WhatsApp

UI components available for you to use: `Button`, `Card`, `SectionHeading`, `StatItem`

**Do not touch:** layout components, homepage, business pages

---

## Track 5 — Businesses Overview + Set A

**Branch:** `feature/businesses-set-a`
**Can start immediately — no blockers. Coordinate with Track 6 on shared section components.**

Files you own:
```
src/app/businesses/page.tsx
src/app/businesses/logistics/page.tsx
src/app/businesses/enterprise-solutions/page.tsx
src/app/businesses/skill-development/page.tsx
src/components/sections/businesses/   ← create ALL shared section components here
```

Tasks — Shared section components (build these first, Track 6 will reuse them):
- [ ] `ServiceHero` — page banner with service title, short description, hero background
- [ ] `ServiceDetails` — main content block: what the service is, who it's for, key features list
- [ ] `ServiceCTA` — bottom contact prompt using `Button`

Tasks — Businesses overview page (`/businesses`):
- [ ] `BusinessesOverviewGrid` — 5 cards, same pattern as homepage but larger with more description

Tasks — Detail pages:
- [ ] `/businesses/logistics` — Logistics & Supply Chain: end-to-end logistics, domestic + international trade, supply chain management
- [ ] `/businesses/enterprise-solutions` — Enterprise Solutions: B2B consulting, MSME support, market expansion, energy sector
- [ ] `/businesses/skill-development` — Skill Development: training programmes, workforce upskilling, certifications, target audience

UI components available: `Button`, `Card`, `SectionHeading`, `Badge`

**Do not touch:** real-estate or hbc-franchise pages (Track 6 owns those)

---

## Track 6 — Businesses Set B

**Branch:** `feature/businesses-set-b`
**Depends on Track 5 — wait for `ServiceHero`, `ServiceDetails`, `ServiceCTA` to be merged before building.**

Files you own:
```
src/app/businesses/real-estate/page.tsx
src/app/businesses/hbc-franchise/page.tsx
```

Tasks:
- [ ] `/businesses/real-estate` — Real Estate & Infra: property development, infrastructure projects, investment opportunities. Use `ServiceHero`, `ServiceDetails`, `ServiceCTA` from Track 5.
- [ ] `/businesses/hbc-franchise` — HBC Brand Franchise: franchise model overview, food chain details, investment info. This page has an **extra section** the others don't — a `FranchiseEnquiry` block with a form or call-to-action for franchise applications.

**Do not touch:** logistics, enterprise, or skill-development pages

---

## Track 7 — Content Pages

**Branch:** `feature/content-pages`
**Can start immediately — no blockers.**

Files you own:
```
src/app/knowledge-center/page.tsx
src/app/resources/page.tsx
src/app/tools/page.tsx
```

Tasks:
- [ ] Knowledge Center (`/knowledge-center`) — articles/insights grid with category filters. Content TBD from theindusgroup.com — build the layout and card structure first, wire in real content when it arrives.
- [ ] Resources (`/resources`) — list of downloadable documents/templates. Build a clean list/grid layout. Content TBD.
- [ ] Tools (`/tools`) — interactive tools or calculators. Functionality TBD — build the page shell and placeholder UI for now.

UI components available: `Button`, `Card`, `SectionHeading`, `Badge`

**Do not touch:** layout, homepage, business pages, about, contact

---

## Dependency Order

```
Everything unblocked ──┬── Track 4 (About + Contact)
                       ├── Track 5 (Businesses Set A)  ──→  Track 6 (Businesses Set B)
                       └── Track 7 (Content Pages)
```

Track 6 is the only one with a blocker — it needs Track 5's shared section components first.
All other tracks can start in parallel right now.
