# The Indus Group Website — AI Instructions (Antigravity)

Read this file fully before generating any code for this project.

## What this project is

Redesign of The Indus Group of Co. website.
Content from theindusgroup.com, layout inspired by axoncsipl.com.
Next.js 14+ App Router, TypeScript. Styling TBD — do not assume any CSS framework.

## Company data

- **Name:** The Indus Group of Co.
- **Tagline:** "Delivering industry-leading solutions across verticals with reliability, innovation, and integrity."
- **Phone:** +91 7011332238
- **Email:** info@theindusgroup.com / theindusgroup@outlook.com
- **Socials:** Instagram, LinkedIn, X (Twitter), YouTube, WhatsApp
- **Stats:** 14+ years experience | 1,000+ clients | 100+ team | Global network | 24/7 support
- **Footer legal links:** Careers, Privacy Policy, Terms & Conditions

## Pages & what each contains

| Route | Purpose |
|-------|---------|
| `/` | Hero, Who We Are snapshot, 5 vertical cards, stats bar, testimonials, contact CTA |
| `/about` | Company story, mission/vision, MSME empowerment approach, key stats |
| `/businesses` | Overview grid of all 5 verticals |
| `/businesses/logistics` | Logistics & Supply Chain Management Services detail |
| `/businesses/enterprise-solutions` | Enterprise Solutions detail |
| `/businesses/skill-development` | Skill Development Solutions detail |
| `/businesses/real-estate` | Real Estate & Infra Projects detail |
| `/businesses/hbc-franchise` | HBC Brand Franchise (Food Chain) detail + franchise enquiry |
| `/knowledge-center` | Articles and industry insights |
| `/resources` | Downloadable resources and documents |
| `/tools` | Interactive tools / calculators |
| `/contact` | Contact form, phone, email, social links |

## Where files go

```
src/app/[route]/page.tsx          # One folder per route
src/components/layout/Header/     # Logo, nav, phone CTA
src/components/layout/Footer/     # Links, socials, legal, copyright
src/components/ui/                # Reusable primitives (Button, Card, etc.)
src/components/sections/[page]/   # Page-specific sections
src/lib/utils.ts                  # Shared utilities
src/types/index.ts                # BusinessVertical type + other shared types
public/images/[category]/         # hero/ | businesses/ | about/
```

## Header nav order

Who We Are → Businesses (dropdown, 5 links) → Knowledge Center → Resources → Tools → +91 7011332238 (CTA)

## Naming rules

- Folders: `kebab-case` | Components: `PascalCase` | Variables: `camelCase`
- Named exports only — no anonymous default exports
- Props interface in same file: `[ComponentName]Props`

## Before generating any code

1. Read this file fully
2. Check the `page.tsx` for your target page — follow the TODO comments
3. Check `src/components/ui/` before creating a new primitive
4. Do not create new folders or install packages without confirming first
