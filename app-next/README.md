# San — Portfolio v2

A premium, dark-first portfolio for a Senior Android Engineer. Built as a real
product: fast, accessible, and handcrafted down to the micro-interactions.

## Stack

- **Next.js 16** (App Router) with **static export** (`output: "export"`)
- **TypeScript** (strict)
- **Tailwind CSS 3.4** + a small design-token system (dark-first, single emerald accent)
- **Framer Motion** for subtle, purposeful animation
- **Lucide** icons

## Sections

Hero · About · Engineering Expertise (bento) · Featured Projects (case studies) ·
Experience (timeline) · Open Source · Contact — plus a premium, printable
`/resume` page.

Everything is data-driven and **honest by default** — no fabricated metrics.
Optional content (e.g. GitHub repos in `data/misc.ts`) is empty until you add
real entries, and empty blocks render nothing.

## Signature components

Aurora background · cursor glow · spotlight cards · magnetic buttons · gradient
text · scrolling marquee · command palette (⌘K) · code & terminal windows ·
hide-on-scroll dock nav with active-section highlighting · animated counters ·
theme toggle.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

## Content (single source of truth)

- **Copy & links:** `lib/site.ts`
- **Résumé:** `data/resume.ts` (drives the `/resume` page)
- **Projects:** `data/projects.ts`
- **Experience:** `data/experience.ts`
- **Expertise domains:** `data/expertise.ts`
- **Stats + GitHub repos:** `data/misc.ts` — `repos` is empty by default; add real
  repositories and the Open Source grid renders them (no fake stars).
- Swap project/device mockups with real screenshots by extending
  `components/sections/projects.tsx` (drop images in `public/` and use `asset()`).

## Deploy (GitHub Pages)

Deployed at `https://san-sk.github.io/Portfolio` via
`.github/workflows/deploy.yml`.

1. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Push to `main` (changes under `app-next/**` trigger the workflow).

The app uses `basePath: "/Portfolio"` in production and `images.unoptimized`
so it runs on Pages without a server. A `.nojekyll` file is emitted so `_next/*`
assets are served.

> The old static site (`../index.html`, `../styles.css`, `../resume.html`) is
> left untouched. Enabling the Actions-based Pages source makes this app the
> live site.
