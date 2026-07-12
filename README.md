# Santhanam K — Portfolio & Resume

A modern, animated personal portfolio and an ATS-friendly 2-page resume.

## Files

- `index.html` — Portfolio homepage (hero, work, skills, timeline, contact) with dark mode, scroll reveal, marquee, counter animations, cursor spotlight, and card tilt.
- `resume.html` — ATS-optimized resume, tuned to fit two A4 pages when printed.
- `styles.css` — Shared design system: light/dark tokens, motion, print rules.

## Features

- **Dark mode** — respects `prefers-color-scheme` and remembers your choice.
- **Motion** — reveal-on-scroll, animated counters, gradient shift, cycling role words, 3D card tilt, marquee tech stack.
- **Performance-friendly** — vanilla HTML/CSS/JS, no build step, respects `prefers-reduced-motion`.
- **ATS-safe resume** — single-column semantic HTML, standard headings, keyword-rich skills, print rules that flatten colors and fit A4 in 2 pages.

## Editing

Open the HTML files in any editor and update text directly. All colors, spacing, and motion tokens live at the top of `styles.css` under `:root` and `[data-theme="dark"]`.

## Exporting the resume

1. Open `resume.html` in Chrome or Edge.
2. Click **Download PDF** (or use `Cmd/Ctrl + P`).
3. Set: **Destination: Save as PDF**, **Paper: A4**, **Margins: Default**, **Background graphics: off** (for the cleanest ATS output).

## Local preview

Any static server works. For example:

```bash
python3 -m http.server 4000
# then open http://localhost:4000
```

## Tech

HTML5, modern CSS (custom properties, `backdrop-filter`, `mask-image`, `IntersectionObserver`), vanilla JS. Fonts: Inter + JetBrains Mono via Google Fonts.
