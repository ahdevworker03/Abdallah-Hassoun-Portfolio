# Abdallah Hassoun — Portfolio

Personal portfolio website for Abdallah Hassoun, a first-year Computer Science student and aspiring software engineer. Built to showcase projects, skills, and provide a way to get in touch.

**Live site**: [https://www.abdallahhassoun.com](https://www.abdallahhassoun.com)

## Features

- Light / dark theme with persistent user preference
- Responsive layout — mobile-first, adapts to all screen sizes
- Scroll-triggered section reveal animations
- Active navigation highlighting based on scroll position
- Interactive contact form with inline validation (powered by Formspree)
- Downloadable CV
- Keyboard accessible with skip-to-content link and focus indicators
- Respects `prefers-reduced-motion`

## Tech Stack

| Layer       | Technology                              |
| ----------- | --------------------------------------- |
| Framework   | React 19                                |
| Language    | TypeScript (strict)                     |
| Bundler     | Vite 8                                  |
| Styling     | Tailwind CSS 3 + CSS custom properties  |
| Icons       | Font Awesome 6 (CDN)                    |
| Fonts       | Sora (headings), DM Sans (body)         |
| Deployment  | Vercel                                  |
| Lint/Format | ESLint + Prettier                       |

## Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Hero, About, Skills, Projects, Contact
│   └── ui/           # Button, ProjectCard, SkillPill, ThemeToggle, ScrollToTop
├── data/             # Static content (navigation, skills, projects, contact)
├── hooks/            # useTheme, useScrollSpy, useScrollReveal, useScrolledNav
├── App.tsx           # Root component
├── main.tsx          # Entry point
└── index.css         # Tailwind directives, CSS custom properties, utilities
```

Content is separated from UI in `src/data/`. Editing a project, skill, or nav link only requires changing the corresponding data file — no component edits needed.

## Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9

### Installation

```
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

### Environment Variables

| Variable                    | Required | Description                    |
| --------------------------- | -------- | ------------------------------ |
| `VITE_FORMSPREE_ENDPOINT`   | Yes      | Formspree form endpoint URL    |

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
- Proper color contrast in both light and dark themes

## Performance

- Static single-page build — no client-side routing overhead
- CSS custom properties for theme switching (no reflows)
- GPU-accelerated animations (opacity and transform only)
- No external runtime dependencies beyond React

## Screenshots

*Screenshots coming soon.*

## Future Improvements

- Project screenshots with live demo links
- Self-hosted fonts (remove Google Fonts CDN dependency)
- Tree-shaken icon library (replace full Font Awesome CDN with individual imports)

## License

This project is for personal portfolio use.

## Author

**Abdallah Hassoun**

- GitHub: [https://github.com/ahdevworker03](https://github.com/ahdevworker03)
- LinkedIn: [https://www.linkedin.com/in/ahdevworker03/](https://www.linkedin.com/in/ahdevworker03/)
- Portfolio: [https://www.abdallahhassoun.com](https://www.abdallahhassoun.com)
