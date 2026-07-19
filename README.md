# Santhanam K — Portfolio

A premium, engineering-focused portfolio for a Senior Android Engineer. The
experience is built around two hand-crafted "shells":

- **Desktop** → an engineer's IDE (window chrome, activity rail, file tabs, status bar).
- **Mobile** → a native-feeling Android app (Material top app bar + bottom navigation).

The site lives in [`app-next/`](./app-next).

## Tech

Next.js (App Router, static export) · TypeScript · Tailwind CSS · Framer Motion ·
Lucide Icons. Deployed to GitHub Pages via GitHub Actions.

## Develop

```bash
cd app-next
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to app-next/out
```

## Content

Everything is data-driven and honest — no fabricated metrics. Edit the files in
[`app-next/data`](./app-next/data):

- `expertise.ts` — engineering domains (mirrors résumé skill groups)
- `projects.ts` — featured case studies
- `experience.ts` — timeline
- `misc.ts` — stats + GitHub repos
- `services.ts` — "Work with me" offerings
- `notes.ts` — engineering notes / blog (add posts here)
- `resume.ts` — content for the `/resume` page

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the static
export and publishes it to GitHub Pages.
