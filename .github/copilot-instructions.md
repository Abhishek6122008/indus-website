# GitHub Copilot Instructions — The Indus Group Website

Read this before generating any code suggestions for this project.

## What this project is

Redesign of The Indus Group of Co. website.
Content from theindusgroup.com, layout inspired by axoncsipl.com.
Next.js 14+ App Router, TypeScript. Styling TBD — do not suggest any CSS framework until confirmed.

## Company

- **Name:** The Indus Group of Co.
- **Tagline:** "Delivering industry-leading solutions across verticals with reliability, innovation, and integrity."
- **Phone:** +91 7011332238
- **Email:** info@theindusgroup.com / theindusgroup@outlook.com
- **Socials:** Instagram, LinkedIn, X (Twitter), YouTube, WhatsApp

## Page routes

- `/` — Hero, 5 vertical cards, stats (14+ yrs, 1000+ clients, 100+ team), testimonials, CTA
- `/about` — Company story, mission/vision, MSME empowerment approach, key stats
- `/businesses` — Overview grid of 5 verticals
- `/businesses/logistics` — Logistics & Supply Chain Management
- `/businesses/enterprise-solutions` — Enterprise Solutions
- `/businesses/skill-development` — Skill Development Solutions
- `/businesses/real-estate` — Real Estate & Infra Projects
- `/businesses/hbc-franchise` — HBC Brand Franchise (Food Chain)
- `/knowledge-center` — Articles, guides, industry insights
- `/resources` — Downloadable resources
- `/tools` — Interactive tools
- `/contact` — Contact form, phone, email, social links

## Where things go

- `src/app/[route]/page.tsx` — page files
- `src/components/ui/` — reusable primitives (Button, Card, etc.)
- `src/components/sections/[page]/` — page-specific sections
- `src/components/layout/Header/` and `Footer/` — site layout
- `src/lib/utils.ts` — utilities | `src/types/index.ts` — types
- `public/images/[category]/` — images

## Rules

- Named exports only — no anonymous default exports
- Props interface in same file: `[ComponentName]Props`
- Folders: kebab-case | Components: PascalCase | Variables: camelCase
- No new packages without confirming the tech stack first
