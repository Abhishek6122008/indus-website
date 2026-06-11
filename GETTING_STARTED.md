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

Open [`TASKS.md`](./TASKS.md) and find your assigned track. Read it fully. It tells you:

- Which branch to create
- Exactly which files you own
- What to build, in what order
- What you must NOT touch

If you don't have a track assigned yet, ask before starting anything.

---

## Step 3 — Create your branch

Never work directly on `main`. Create your branch first:

```bash
git checkout -b feature/your-track-name
```

Use the branch name from your track in `TASKS.md`. For example:

```bash
git checkout -b feature/about-contact
git checkout -b feature/businesses-set-a
git checkout -b feature/content-pages
```

---

## Step 4 — Open your page file before writing anything

Every page already has a `page.tsx` with comments listing exactly what sections it needs. Open it first.

For example, if you're on Track 4:

- Open [`src/app/about/page.tsx`](src/app/about/page.tsx) — read the section list in the comments
- Open [`src/app/contact/page.tsx`](src/app/contact/page.tsx) — same

These comments are your brief. Build what they say, in the order they say it.

---

## Step 5 — Using AI to write code

AI tools are allowed and encouraged. But you **must** give it the project context first or it will generate code that doesn't match the codebase and your PR will be rejected.

### For Claude Code (recommended)

Claude Code automatically reads `CLAUDE.md` when you open the project. Just open the project folder in Claude Code and it's loaded. Then tell it what to build:

```
I'm working on Track 4 — the About page. 
Read CLAUDE.md, then read src/app/about/page.tsx.
Build the sections listed in the TODO comments.
```

### For Cursor

`.cursorrules` is auto-loaded. Start your prompt with:

```
Read .cursorrules before generating any code.
I'm building the [page name] page. 
The file is src/app/[route]/page.tsx — read it first.
```

### For GitHub Copilot

`.github/copilot-instructions.md` is auto-loaded. Just tell it:

```
Read .github/copilot-instructions.md before generating.
Build the [section name] component for the [page] page.
```

### For any other AI tool

Paste the contents of `CLAUDE.md` directly into the chat, then say:

```
This is the project context. 
Now read src/app/[your page]/page.tsx and build the sections listed there.
```

---

## Step 6 — How to build a section

Every section follows the same pattern. Here's an example for building a `PageHero` section:

**1. Create the file in the right folder**

Your section components go in `src/components/sections/[page-name]/`. Create a new folder for each component:

```
src/components/sections/about/PageHero/index.tsx
```

**2. Write the component**

```tsx
import { cn } from '@/lib/utils'

type PageHeroProps = {
  title: string
  subtitle?: string
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-navy-900 py-20 text-white text-center">
      <h1 className="text-4xl md:text-5xl font-bold font-heading">{title}</h1>
      {subtitle && <p className="text-gray-300 mt-4 text-lg">{subtitle}</p>}
    </section>
  )
}
```

**3. Import it into your page**

```tsx
// src/app/about/page.tsx
import { PageHero } from '@/components/sections/about/PageHero'

export default function AboutPage() {
  return (
    <div>
      <PageHero title="Who We Are" />
      {/* TODO: next section */}
    </div>
  )
}
```

**4. Check it in the browser at `localhost:3000/about`**

---

## Step 7 — Reuse existing UI components

Before building anything, check what's already in `src/components/ui/`. These are ready to use:

| Component | Import | Use for |
|-----------|--------|---------|
| `Button` | `@/components/ui/Button` | Any clickable link or action |
| `Card` | `@/components/ui/Card` | Any boxed content block |
| `SectionHeading` | `@/components/ui/SectionHeading` | Section title + subtitle |
| `StatItem` | `@/components/ui/StatItem` | Displaying a number + label |
| `Badge` | `@/components/ui/Badge` | Tags and labels |

Example usage:

```tsx
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { SectionHeading } from '@/components/ui/SectionHeading'

// Inside your component:
<SectionHeading label="Our Story" title="Who We Are" subtitle="A brief description here." />
<Card hover>Your content</Card>
<Button href="/contact" variant="primary">Get in Touch</Button>
```

---

## Step 8 — Committing and opening a PR

**Commit as you go — small and focused:**

```bash
git add src/app/about/page.tsx src/components/sections/about/PageHero/
git commit -m "feat: add PageHero section to About page"
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
5. Do not merge your own PR

---

## Quick reference — design system

The site uses **Poppins** for headings (`font-heading`) and **Inter** for body text (`font-body`).

**Colours:**

| Token | Value | Use for |
|-------|-------|---------|
| `navy-950` | `#0a1628` | Footer background |
| `navy-900` | `#0f2444` | Dark sections, hero gradients |
| `navy-800` | `#1e3a5f` | Primary navy, headings, buttons |
| `blue-600` | Tailwind default | CTAs, links, accents |
| `gray-50` | Tailwind default | Light section backgrounds |
| `white` | `#ffffff` | Card backgrounds, text on dark |

**Section spacing:** use the `section-padding` utility class on every `<section>` — it applies `py-16 md:py-24` consistently.

```tsx
<section className="section-padding bg-white">
  ...
</section>
```

---

## If something is broken

1. `npm run build` — check for TypeScript or lint errors before asking for help
2. Read the error message carefully — it usually tells you exactly which file and line
3. Check that your import paths use `@/` (e.g. `@/components/ui/Button`, not `../../components/ui/Button`)
4. If the dev server crashes, stop it (`Ctrl+C`) and run `npm run dev` again

If you're genuinely stuck after trying the above, ask — but include the error message and which file it's in.
