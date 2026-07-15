# Abdallah Hassoun — Portfolio

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Vercel-000?logo=vercel&logoColor=white)](https://vercel.com)

Personal portfolio website for Abdallah Hassoun, a first-year Computer Science student and aspiring software engineer. Built to showcase projects, skills, and provide a way to get in touch.

**Live site**: [https://www.abdallahhassoun.com](https://www.abdallahhassoun.com)

## Features

- Responsive layout — mobile-first, adapts to all screen sizes
- Scroll-triggered section reveal animations
- Active navigation highlighting based on scroll position
- Interactive contact form with inline validation (powered by Formspree)
- Downloadable CV
- Keyboard accessible with skip-to-content link and focus indicators
- Respects `prefers-reduced-motion`

## Tech Stack

| Layer       | Technology                             |
| ----------- | -------------------------------------- |
| Framework   | React 19                               |
| Language    | TypeScript (strict)                    |
| Bundler     | Vite 8                                 |
| Styling     | Tailwind CSS 3 + CSS custom properties |
| Icons       | Font Awesome 6 (CDN)                   |
| Fonts       | Sora (headings), DM Sans (body)        |
| Deployment  | Vercel                                 |
| Lint/Format | ESLint 9 + Prettier                    |

## Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Hero, About, Skills, Projects, Education, Contact
│   └── ui/           # Button, ProjectCard, SkillPill, ScrollToTop
├── data/             # Static content (navigation, skills, education, projects, contact)
├── hooks/            # useScrollSpy, useScrollReveal, useScrolledNav
├── App.tsx           # Root component
├── main.tsx          # Entry point
└── index.css         # Tailwind directives, CSS custom properties, utilities
```

Content is separated from UI in `src/data/`. Editing a project, skill, or nav link only requires changing the corresponding data file — no component edits needed.

## Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9

### Clone & Install

```
git clone <repo-url>
cd <repo-directory>
npm install
```

### Development

```
npm run dev
```

Opens a local dev server at `http://localhost:5173` with hot module replacement.

### Build

```
npm run build
```

Produces an optimized production build in `dist/`.

### Preview

```
npm run preview
```

Serves the production build locally.

### Lint & Format

```
npm run lint
npm run format
```

### Environment Variables

| Variable                  | Required | Description                 |
| ------------------------- | -------- | --------------------------- |
| `VITE_FORMSPREE_ENDPOINT` | Yes      | Formspree form endpoint URL |

Copy `.env.example` to `.env` and set the value. The contact form will not work without this variable.

### Deployment

The project is configured for Vercel deployment. Push to the `main` branch — Vercel auto-deploys using the settings in `vercel.json`.

Manual deploy:

```
npm run build
npx vercel --prod
```

## Accessibility

- Skip-to-content link visible on tab focus
- Custom focus-visible indicators on all interactive elements
- ARIA attributes on nav (`aria-current`), hamburger (`aria-expanded`), and icon links (`aria-label`)
- Semantic HTML — landmarks, headings, labeled form controls
- `prefers-reduced-motion` fully supported — all animations disabled when detected
- Proper color contrast throughout

## Performance

- Static single-page build — no client-side routing overhead
- CSS custom properties (no reflows on theme values)
- GPU-accelerated animations (opacity and transform only)
- No external runtime dependencies beyond React

## Author

**Abdallah Hassoun**

- GitHub: [https://github.com/ahdevworker03](https://github.com/ahdevworker03)
- LinkedIn: [https://www.linkedin.com/in/ahdevworker03/](https://www.linkedin.com/in/ahdevworker03/)
- Instagram: [https://www.instagram.com/abdallahhassoun.dev/](https://www.instagram.com/abdallahhassoun.dev/)
- X/Twitter: [https://x.com/ahdevworker03](https://x.com/ahdevworker03)
