# Getting Started

Read this fully before writing a single line of code.

---

## Step 1 — Get the repo running locally

```bash
# Clone the repo
git clone https://github.com/YOUR_ORG/indus-website.git
cd indus-website

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you should see the homepage. If it doesn't load, check that `npm install` completed without errors first.

---

## Step 2 — Find your track

Open [`TASKS.md`](./TASKS.md) and find your assigned track number. Read it fully. It tells you:

- Which branch to create
- Exactly which files you own
- Step-by-step what to build
- A ready-to-use AI prompt for your track

If you don't have a track assigned yet, ask before starting anything.

---

## Step 3 — Create your branch

Never work directly on `main`. Create your branch first:

```bash
git checkout -b feature/your-track-name
```

Use the branch name from your track in `TASKS.md`. For example:

```bash
git checkout -b feature/images
git checkout -b feature/knowledge-center
git checkout -b feature/resources
git checkout -b feature/tools
git checkout -b feature/legal-pages
git checkout -b feature/polish
```

---

## Step 4 — Open your page file before writing anything

Every page already has real code. Open it first to understand what's there before adding anything.

For example, if you are on Track 2:

1. Open [`src/app/knowledge-center/page.jsx`](src/app/knowledge-center/page.jsx) — read what's there
2. You will be **replacing** the placeholder section with new components you build
3. Create your new component files in `src/components/sections/knowledge-center/`

The page file is always your entry point. Start there.

---

## Step 5 — Using AI to write code

AI tools are allowed and encouraged. But give it the project context first or it will generate code that doesn't match the codebase.

### For Claude Code (recommended)

Claude Code automatically reads `CLAUDE.md` when you open the project. Just open the project folder and paste the AI prompt from your track in `TASKS.md`.

### For Cursor

`.cursorrules` is auto-loaded. Paste the AI prompt from your track and add at the start:

```
Read .cursorrules before generating any code.
```

### For GitHub Copilot

`.github/copilot-instructions.md` is auto-loaded. Paste the AI prompt from your track directly.

### For any other AI tool

Paste the full contents of `CLAUDE.md` into the chat first, then paste the AI prompt from your track.

---

## Step 6 — How to build a new section component

Every section follows the same pattern. Here is an example of building a new section called `ArticleCard`:

**1. Create the file in the right folder**

Section components live in `src/components/sections/[page-name]/`. Create a folder for your component:

```
src/components/sections/knowledge-center/ArticleGrid/index.jsx
```

**2. Write the component**

```jsx
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const articles = [
  {
    category: 'Logistics',
    title: 'How Supply Chain Digitisation is Changing Indian Trade',
    description: 'A look at how Indian MSMEs are adopting digital logistics platforms.',
    date: 'June 2025',
    href: '#',
  },
  // add more...
]

export function ArticleGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading label="Insights" title="Latest Articles" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Card key={article.title} hover>
              <Badge variant="blue" className="mb-4">{article.category}</Badge>
              <h3 className="text-slate-900 font-semibold font-heading mb-2">{article.title}</h3>
              <p className="text-slate-600 text-sm mb-4">{article.description}</p>
              <Button href={article.href} variant="outline" size="sm">Read More</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
```

**3. Import it into your page**

```jsx
// src/app/knowledge-center/page.jsx
import { PageHero } from '@/components/ui/PageHero'
import { ArticleGrid } from '@/components/sections/knowledge-center/ArticleGrid'

export default function KnowledgeCenterPage() {
  return (
    <>
      <PageHero title="Knowledge Center" label="Learn & Grow" breadcrumbs={[{ label: 'Knowledge Center' }]} />
      <ArticleGrid />
    </>
  )
}
```

**4. Check it in the browser at `localhost:3000/knowledge-center`**

---

## Step 7 — Reuse existing UI components

Before building anything new, check what's already in `src/components/ui/`. These are ready to use:

| Component | Import | Use for |
|-----------|--------|---------|
| `Button` | `@/components/ui/Button` | Any clickable link or action |
| `Card` | `@/components/ui/Card` | Any boxed content block |
| `SectionHeading` | `@/components/ui/SectionHeading` | Section title + subtitle + label |
| `StatItem` | `@/components/ui/StatItem` | Displaying a number + label |
| `Badge` | `@/components/ui/Badge` | Tags, category labels |
| `PageHero` | `@/components/ui/PageHero` | Full-width dark blue page banner with breadcrumbs |

Example usage:

```jsx
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PageHero } from '@/components/ui/PageHero'

// Section heading with label line
<SectionHeading label="Our Story" title="Who We Are" subtitle="A brief description here." />

// Dark card (hover effect)
<Card hover dark>Your content</Card>

// Light card (default)
<Card hover>Your content</Card>

// Primary blue button
<Button href="/contact">Get in Touch</Button>

// Outline button
<Button href="/about" variant="outline">Learn More</Button>

// Page hero banner
<PageHero
  label="Our Story"
  title="About Us"
  subtitle="Short description here."
  breadcrumbs={[{ label: 'About' }]}
/>
```

---

## Step 8 — Committing and opening a PR

**Commit as you go — small and focused:**

```bash
git add src/app/knowledge-center/page.jsx src/components/sections/knowledge-center/
git commit -m "feat: add ArticleGrid and CategoryFilter to Knowledge Center"
```

**Commit message prefixes:**

| Prefix | When to use |
|--------|------------|
| `feat:` | New section or page |
| `fix:` | Something broken |
| `style:` | Visual/spacing tweak, no logic change |
| `refactor:` | Restructuring code, same output |
| `chore:` | Config or non-UI work |

**When your track is complete, open a PR:**

1. Push your branch: `git push -u origin feature/your-track-name`
2. Open a PR on GitHub — the PR template will auto-fill
3. Fill it out fully — what you built, any decisions you made
4. Request a review from your team lead
5. **Do not merge your own PR**

---

## Quick reference — design system

The site uses **Poppins** for headings (`font-heading`) and **Inter** for body text (`font-body`).

### Colour palette

| Token | Value | Use for |
|-------|-------|---------|
| `bg-white` | `#ffffff` | Main section backgrounds |
| `bg-blue-50` | `#eff6ff` | Alternate section backgrounds (tinted) |
| `bg-blue-600` | `#2563eb` | Stats bars, CTA sections, primary buttons |
| `bg-[#0b1f5c]` | Deep navy | Hero sections, footer background |
| `text-slate-900` | Near black | All headings and primary text |
| `text-slate-600` | Medium grey | Body text and descriptions |
| `text-blue-600` | Corporate blue | Labels, links, icons |
| `border-blue-100` | Light blue | Card borders |

### Section background pattern

Alternate between `bg-white` and `bg-blue-50` as you stack sections:

```jsx
<section className="section-padding bg-white">...</section>
<section className="section-padding bg-blue-50">...</section>
<section className="section-padding bg-white">...</section>
```

For bold CTA / stats sections, use `bg-blue-600` with white text.

### Section spacing

Always use the `section-padding` utility class on every `<section>` — it applies `py-16 md:py-24` consistently:

```jsx
<section className="section-padding bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* your content */}
  </div>
</section>
```

### Section label pattern

Every section uses this accent label above the heading:

```jsx
<div className="flex items-center gap-3 mb-4">
  <div className="w-6 h-[2px] bg-blue-600" />
  <span className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase">
    Section Label
  </span>
</div>
```

Or just use `SectionHeading` with the `label` prop — it handles this automatically.

---

## If something is broken

1. `npm run build` — always run this first. It catches missing imports and broken JSX before you open a PR.
2. Read the error message — it tells you the exact file and line number.
3. Check import paths use `@/` — for example `@/components/ui/Button`, not `../../components/ui/Button`.
4. If the dev server crashes, stop it (`Ctrl+C`) and run `npm run dev` again.
5. Check that your new files use the `.jsx` extension, not `.tsx` or `.ts`.

If you are genuinely stuck after trying the above, ask — but always include the full error message and the file it's in.
