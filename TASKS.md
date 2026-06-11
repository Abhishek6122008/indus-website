# Team Task Split

Each person owns specific files and branches. **Do not open or edit files outside your track.** If you think you need to touch someone else's files, talk to them first.

The only files everyone can touch: `README.md`, `TASKS.md`, and their own branch.

---

## Already Done — Do Not Redo

These are complete and working. Do not touch these files unless something is broken.

| What | Files |
|------|-------|
| Project setup (Next.js, Tailwind, TypeScript) | `package.json`, `tsconfig.json`, `next.config.mjs`, `tailwind.config.ts`, `postcss.config.mjs` |
| Global styles + utilities | `src/styles/globals.css`, `src/lib/utils.ts`, `src/types/index.ts` |
| Header + Footer + Root layout | `src/components/layout/Header/`, `src/components/layout/Footer/`, `src/app/layout.tsx` |
| UI component library | `src/components/ui/Button/`, `Card/`, `SectionHeading/`, `StatItem/`, `Badge/`, `PageHero/` |
| Full homepage (all 6 sections) | `src/app/page.tsx`, `src/components/sections/home/` |
| About page (all 5 sections) | `src/app/about/page.tsx`, `src/components/sections/about/` |
| Contact page (form + details) | `src/app/contact/page.tsx`, `src/components/sections/contact/` |
| Businesses overview + all 5 detail pages | `src/app/businesses/` (all pages), `src/components/sections/businesses/` |
| Knowledge Center, Resources, Tools (placeholder shells) | `src/app/knowledge-center/page.tsx`, `src/app/resources/page.tsx`, `src/app/tools/page.tsx` |

---

## Track 1 — Images & Visual Assets

**Branch:** `feature/images`
**Can start immediately — no blockers.**
**Skill level:** Beginner friendly — no coding required, mostly file work and one component edit per image.

### What this track does
Every page currently shows grey placeholder boxes where images should be. Your job is to source real images and wire them in.

### Files you own
```
public/images/hero/
public/images/about/
public/images/businesses/logistics/
public/images/businesses/enterprise/
public/images/businesses/skill-development/
public/images/businesses/real-estate/
public/images/businesses/hbc-franchise/
```

And these section files (only to swap the placeholder, nothing else):
```
src/components/sections/home/HeroSection/index.tsx
src/components/sections/home/WhoWeAreSection/index.tsx
src/components/sections/businesses/ServiceHero/index.tsx
src/components/sections/about/CompanyStory/index.tsx
src/components/sections/home/BusinessesGrid/index.tsx
```

### Step-by-step instructions

**Step 1 — Install the Next.js Image component (already available, just use it)**

No install needed. `next/image` is built in.

**Step 2 — Source images**

Go to [theindusgroup.com](https://theindusgroup.com) and right-click → Save Image for:
- A hero/banner image (for the homepage hero)
- A company/team photo (for Who We Are and About page)
- One image per business vertical (logistics trucks, office/enterprise, training, real estate/building, food/HBC)

Name them in kebab-case: `logistics-hero.jpg`, `company-team.jpg`, etc.

**Step 3 — Place images in the right folder**

```
public/images/hero/hero-background.jpg
public/images/about/company-team.jpg
public/images/businesses/logistics/logistics-hero.jpg
public/images/businesses/enterprise/enterprise-hero.jpg
public/images/businesses/skill-development/skill-dev-hero.jpg
public/images/businesses/real-estate/real-estate-hero.jpg
public/images/businesses/hbc-franchise/hbc-hero.jpg
```

**Step 4 — Open each section file and replace the placeholder**

Open `src/components/sections/home/WhoWeAreSection/index.tsx`.

Find this block:
```tsx
<div className="aspect-[4/3] bg-blue-50 rounded-2xl border border-blue-100 flex items-center justify-center">
  <span className="text-blue-300 text-sm">[ Company Image ]</span>
</div>
```

Replace it with:
```tsx
import Image from 'next/image'

<div className="aspect-[4/3] rounded-2xl overflow-hidden">
  <Image
    src="/images/about/company-team.jpg"
    alt="The Indus Group team"
    width={800}
    height={600}
    className="w-full h-full object-cover"
  />
</div>
```

Do the same for every other placeholder. The pattern is identical — find the `[ X Image ]` span, swap the whole `<div>` for a Next.js `<Image>` tag.

**Step 5 — Check your work**

Run `npm run dev` and visit each page. Images should load. Run `npm run build` — it must pass before opening your PR.

### AI prompt to use

```
I'm working on Track 1 of the Indus Group website — adding real images.
Read CLAUDE.md so you understand the project structure.

I need to replace placeholder image blocks in these files:
- src/components/sections/home/WhoWeAreSection/index.tsx
- src/components/sections/about/CompanyStory/index.tsx
- src/components/sections/home/BusinessesGrid/index.tsx

Each file has a div containing a span like [ Company Image ] or [ Logistics Image ].
Replace each placeholder block with a Next.js <Image> component pointing to
the correct path in public/images/.

Use the Next.js Image component from 'next/image'.
Maintain the same aspect ratio and rounded corners.
Do not change any other code in these files.
```

**Do not touch:** any logic, colors, text content, or layout code.

---

## Track 2 — Knowledge Center Page

**Branch:** `feature/knowledge-center`
**Can start immediately — no blockers.**
**Skill level:** Intermediate — build a card grid layout with filtering.

### What this track does
The Knowledge Center page at `/knowledge-center` currently shows a "coming soon" message. Your job is to build a proper article/insight card grid with category filtering.

### Files you own
```
src/app/knowledge-center/page.tsx
src/components/sections/home/knowledge-center/   ← create your section files here
```

Wait — create your sections in:
```
src/components/sections/knowledge-center/
```

### Step-by-step instructions

**Step 1 — Open the page file**

Open `src/app/knowledge-center/page.tsx`. It currently has a placeholder section. You will replace that placeholder section with real components you build.

**Step 2 — Create a section folder**

Create this folder and file:
```
src/components/sections/knowledge-center/ArticleGrid/index.tsx
```

**Step 3 — Build the ArticleGrid component**

Each article card should show:
- A category badge (e.g. "Logistics", "Enterprise")
- Article title
- Short description (2–3 lines)
- Date
- "Read More" button or link

Use the `Card` component from `src/components/ui/Card` for each card.
Use the `Badge` component from `src/components/ui/Badge` for category labels.
Use `SectionHeading` from `src/components/ui/SectionHeading` for the section header.

Start with 6 placeholder articles hardcoded in an array. Real content comes later.

**Step 4 — Build a CategoryFilter component**

Create:
```
src/components/sections/knowledge-center/CategoryFilter/index.tsx
```

This is a row of filter buttons: All | Logistics | Enterprise | Skill Development | Real Estate | Franchise

Make it a `'use client'` component with `useState` to track the active filter.
Filter the articles array based on the selected category.

**Step 5 — Wire it into the page**

Open `src/app/knowledge-center/page.tsx` and replace the placeholder section with your new components:

```tsx
import { PageHero } from '@/components/ui/PageHero'
import { CategoryFilter } from '@/components/sections/knowledge-center/CategoryFilter'
import { ArticleGrid } from '@/components/sections/knowledge-center/ArticleGrid'

export default function KnowledgeCenterPage() {
  return (
    <>
      <PageHero
        label="Learn & Grow"
        title="Knowledge Center"
        subtitle="Industry insights, practical guides, and expert perspectives."
        breadcrumbs={[{ label: 'Knowledge Center' }]}
      />
      <CategoryFilter />
      <ArticleGrid />
    </>
  )
}
```

**Step 6 — Check your work**

Visit `localhost:3000/knowledge-center`. Cards should show. Filtering should work. Run `npm run build` — it must pass.

### AI prompt to use

```
I'm working on Track 2 — the Knowledge Center page for the Indus Group website.
Read CLAUDE.md first so you understand the project.

Open src/app/knowledge-center/page.tsx — replace the placeholder section with:
1. An ArticleGrid component (src/components/sections/knowledge-center/ArticleGrid/index.tsx)
   - Shows 6 placeholder article cards
   - Each card: category badge, title, short description, date, Read More link
   - Uses Card from @/components/ui/Card and Badge from @/components/ui/Badge
2. A CategoryFilter component (src/components/sections/knowledge-center/CategoryFilter/index.tsx)
   - 'use client' component
   - Filter buttons: All, Logistics, Enterprise, Skill Development, Real Estate, Franchise
   - Filters the article grid

Color scheme: white/blue-50 backgrounds, blue-600 accents. No dark or amber colors.
Follow the exact same patterns as src/components/sections/home/Testimonials/index.tsx for card style.
```

**Do not touch:** any other page or component outside your section files.

---

## Track 3 — Resources Page

**Branch:** `feature/resources`
**Can start immediately — no blockers.**
**Skill level:** Beginner-friendly — mostly layout work.

### What this track does
The Resources page at `/resources` shows "coming soon". Build a proper resource download list.

### Files you own
```
src/app/resources/page.tsx
src/components/sections/resources/   ← create your sections here
```

### Step-by-step instructions

**Step 1 — Open the page file**

Open `src/app/resources/page.tsx`.

**Step 2 — Create a ResourcesList component**

Create:
```
src/components/sections/resources/ResourcesList/index.tsx
```

Each resource item should show:
- An icon (use lucide-react: `FileText`, `Download`, `BookOpen`, etc.)
- Resource title
- Short description
- File type badge (PDF, DOCX, etc.) using `Badge` from `src/components/ui/Badge`
- A download button using `Button` from `src/components/ui/Button`

Start with 6–8 placeholder resources hardcoded. Real files come later.

**Step 3 — Create a ResourceCategories component**

Create:
```
src/components/sections/resources/ResourceCategories/index.tsx
```

A simple row of category chips to filter by type: All | Guides | Templates | Reports | Presentations

**Step 4 — Wire into the page**

```tsx
import { PageHero } from '@/components/ui/PageHero'
import { ResourceCategories } from '@/components/sections/resources/ResourceCategories'
import { ResourcesList } from '@/components/sections/resources/ResourcesList'

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        label="Downloads"
        title="Resources"
        subtitle="Useful documents, templates, and reference materials."
        breadcrumbs={[{ label: 'Resources' }]}
      />
      <ResourceCategories />
      <ResourcesList />
    </>
  )
}
```

**Step 5 — Check your work**

Visit `localhost:3000/resources`. Run `npm run build`.

### AI prompt to use

```
I'm working on Track 3 — the Resources page for the Indus Group website.
Read CLAUDE.md first.

Open src/app/resources/page.tsx — replace the placeholder section with:
1. ResourcesList component (src/components/sections/resources/ResourcesList/index.tsx)
   - 6–8 placeholder downloadable resource cards
   - Each item: lucide icon, title, description, file type Badge, Download Button
   - Use Button from @/components/ui/Button and Badge from @/components/ui/Badge
2. ResourceCategories component (src/components/sections/resources/ResourceCategories/index.tsx)
   - Filter chips: All, Guides, Templates, Reports, Presentations
   - 'use client' with useState for active filter

Color scheme: white/blue-50 sections, blue-600 accents. Match the style of other pages.
```

---

## Track 4 — Tools Page

**Branch:** `feature/tools`
**Can start immediately — no blockers.**
**Skill level:** Intermediate — requires interactive React components with state.

### What this track does
The Tools page at `/tools` shows "coming soon". Build at least 2 useful interactive tools for business clients.

### Files you own
```
src/app/tools/page.tsx
src/components/sections/tools/   ← create your tools here
```

### Step-by-step instructions

**Step 1 — Open the page file**

Open `src/app/tools/page.tsx`.

**Step 2 — Plan your tools**

Build these 2 tools (both need `'use client'`):

**Tool A — Freight Cost Estimator**
Create: `src/components/sections/tools/FreightEstimator/index.tsx`
- Inputs: origin city, destination city, weight (kg), cargo type dropdown
- Output: estimated cost range and transit time
- Values can be hardcoded/estimated — this is a UI tool not a live calculator

**Tool B — Franchise ROI Calculator**
Create: `src/components/sections/tools/FranchiseCalculator/index.tsx`
- Inputs: investment amount (slider), city tier (Tier 1/2/3), outlet size
- Output: estimated monthly revenue, break-even period, projected ROI %
- Values are indicative estimates — label them clearly as such

**Step 3 — Build a ToolsGrid landing section**

Create: `src/components/sections/tools/ToolsGrid/index.tsx`
- Shows both tools as cards with a title, description, and "Open Tool" button
- Clicking opens the tool below (use `useState` to toggle which tool is visible)

**Step 4 — Wire into the page**

```tsx
import { PageHero } from '@/components/ui/PageHero'
import { ToolsGrid } from '@/components/sections/tools/ToolsGrid'

export default function ToolsPage() {
  return (
    <>
      <PageHero
        label="Interactive"
        title="Tools"
        subtitle="Calculators and planning tools for better business decisions."
        breadcrumbs={[{ label: 'Tools' }]}
      />
      <ToolsGrid />
    </>
  )
}
```

**Step 5 — Check your work**

Visit `localhost:3000/tools`. Both calculators should work. Run `npm run build`.

### AI prompt to use

```
I'm working on Track 4 — the Tools page for the Indus Group website.
Read CLAUDE.md first.

Open src/app/tools/page.tsx — replace the placeholder section with a ToolsGrid.
Build two interactive 'use client' calculator tools:

1. FreightEstimator (src/components/sections/tools/FreightEstimator/index.tsx)
   - Inputs: origin city (select), destination city (select), weight kg (number input), cargo type (select)
   - Output: estimated cost range and transit time (hardcoded logic is fine)

2. FranchiseCalculator (src/components/sections/tools/FranchiseCalculator/index.tsx)
   - Inputs: investment amount (range slider), city tier (radio), outlet size (select)
   - Output: estimated monthly revenue, break-even months, ROI %
   - Label all outputs as "indicative estimates"

3. ToolsGrid (src/components/sections/tools/ToolsGrid/index.tsx)
   - Shows both as cards, clicking one expands/shows that calculator below

Color scheme: white/blue-50 backgrounds, blue-600 accents. Input fields: white with blue focus ring.
Follow the ContactForm pattern in src/components/sections/contact/ContactForm/index.tsx for input styling.
```

---

## Track 5 — Legal & Missing Pages

**Branch:** `feature/legal-pages`
**Can start immediately — no blockers.**
**Skill level:** Beginner-friendly — mostly content layout.

### What this track does
The footer links to `/careers`, `/privacy-policy`, and `/terms` — these pages don't exist yet. Your job is to create them.

### Files you own
```
src/app/careers/page.tsx          ← create this file (folder doesn't exist yet)
src/app/privacy-policy/page.tsx   ← create this file
src/app/terms/page.tsx            ← create this file
```

### Step-by-step instructions

**Step 1 — Create the folder structure**

In your code editor or terminal, create:
```
src/app/careers/
src/app/privacy-policy/
src/app/terms/
```

**Step 2 — Build the Careers page** (`src/app/careers/page.tsx`)

Sections needed:
- `PageHero` with title "Careers" (import from `@/components/ui/PageHero`)
- A "Why Work With Us" section — 4 cards with benefits (growth, culture, impact, learning)
- An "Open Positions" section — 3–4 placeholder job cards. Each card: job title, department badge, location, "Apply Now" button linking to `mailto:info@theindusgroup.com`
- A closing CTA: "Don't see your role? Send your CV to info@theindusgroup.com"

**Step 3 — Build the Privacy Policy page** (`src/app/privacy-policy/page.tsx`)

- `PageHero` with title "Privacy Policy"
- A content section with standard privacy policy text (use placeholder text that covers: data collection, usage, cookies, contact info). Keep it clean with headings and paragraphs.
- Use `bg-white` and `prose`-style layout (just `<h2>` and `<p>` tags inside a max-width container)

**Step 4 — Build the Terms page** (`src/app/terms/page.tsx`)

Same structure as Privacy Policy but with Terms & Conditions content.

**Step 5 — Check your work**

Click the footer links — Careers, Privacy Policy, Terms & Conditions. All three should load. Run `npm run build`.

### AI prompt to use

```
I'm working on Track 5 — legal and missing pages for the Indus Group website.
Read CLAUDE.md first.

Create these three new pages:

1. src/app/careers/page.tsx
   - Use PageHero from @/components/ui/PageHero with title "Careers"
   - "Why Work With Us" section — 4 benefit cards using Card from @/components/ui/Card
   - "Open Positions" section — 3 job listing cards (Job title, Badge for department, location, Apply button)
   - Closing CTA to email info@theindusgroup.com

2. src/app/privacy-policy/page.tsx
   - PageHero with title "Privacy Policy"
   - Long-form content section (bg-white, max-w-3xl, prose-style with h2 and p tags)
   - Standard placeholder privacy policy text

3. src/app/terms/page.tsx
   - Same structure as privacy policy but Terms & Conditions content

Color scheme: white/blue-50 backgrounds, blue-600 accents. No dark or amber colors.
Follow the exact same section patterns used in other pages.
```

**Do not touch:** any existing pages or layout components.

---

## Track 6 — Animations & Polish

**Branch:** `feature/polish`
**Start after Tracks 1–5 are merged, or in parallel on a fresh branch.**
**Skill level:** Intermediate to Advanced.

### What this track does
The site looks great but feels static. Add subtle scroll animations and interaction polish to make it feel alive.

### Files you own
You can add CSS classes to any section component, but **do not change any content, colors, or layout logic** — only add animation-related classes or wrappers.

```
src/styles/globals.css           ← add custom animation keyframes here
src/components/sections/**       ← add animate classes only
```

### Step-by-step instructions

**Step 1 — Use Tailwind's built-in animate utilities first**

Tailwind has `animate-fade-in`, `animate-bounce`, `animate-pulse` built in. Use these before adding anything custom.

**Step 2 — Add scroll reveal animations**

The best zero-dependency way in Next.js is the Intersection Observer API. Create a reusable hook:

Create: `src/lib/useScrollReveal.ts`

```ts
'use client'
import { useEffect, useRef } from 'react'

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('revealed') },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}
```

Add CSS in `src/styles/globals.css`:
```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}
```

Then wrap section content with `<div ref={ref} className="reveal">`.

**Step 3 — Smooth hover lift on cards**

Find all `hover:shadow-md` cards and add `transition-all duration-300`. Most already have this — verify they all do.

**Step 4 — Add a page loading bar**

Research `next/nprogress` or a simple CSS-based top loading bar for route transitions.

**Step 5 — Mobile responsiveness audit**

Open DevTools, switch to mobile view, and check every page at 375px width. Fix any text overflow, button wrapping, or layout breaks you find.

### AI prompt to use

```
I'm working on Track 6 — animations and polish for the Indus Group website.
Read CLAUDE.md first.

1. Create src/lib/useScrollReveal.ts — a custom hook using IntersectionObserver
   that adds a 'revealed' class when an element scrolls into view.

2. Add .reveal and .reveal.revealed CSS to src/styles/globals.css
   (fade up animation: opacity 0→1, translateY 24px→0, 0.5s ease)

3. Wrap the main content div in these section components with the hook:
   - src/components/sections/home/WhoWeAreSection/index.tsx
   - src/components/sections/home/Testimonials/index.tsx
   - src/components/sections/about/MissionVision/index.tsx
   - src/components/sections/about/OurApproach/index.tsx

Do not change any colors, layout, content, or props.
Only add the animation wrapper — nothing else.
```

---

## Dependency Order

```
Immediately ──┬── Track 1 (Images)
              ├── Track 2 (Knowledge Center)
              ├── Track 3 (Resources)
              ├── Track 4 (Tools)
              └── Track 5 (Legal Pages)

After above ──── Track 6 (Animations & Polish)
```

Tracks 1–5 are fully independent and can all run in parallel. Track 6 should wait until the others are merged so it doesn't conflict.
