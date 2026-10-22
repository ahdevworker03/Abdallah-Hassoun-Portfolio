# Roadmap — Abdallah Hassoun Portfolio

> Derivation: This document is based on existing documentation (`docs/03-feature-enhancements.md`, `README.md`), the current codebase state, and observable gaps. Items labeled **extracted** are explicitly mentioned in code or docs. Items labeled **suggested** are inferred from clear gaps in the current implementation.

---

## Vision

A professional, lightweight, single-page portfolio that presents Abdallah Hassoun as a capable developer — making a strong first impression on recruiters and collaborators through fast load times, accessible design, and clear communication of skills and projects.

---

## Current State

A React 19 + TypeScript + Vite + Tailwind CSS 3 static portfolio with six sections (Hero, About, Skills, Projects, Education, Contact). Features include a sticky glass navbar with scroll-spy highlighting, mobile hamburger menu, scroll-triggered reveal animations, a Formspree-powered contact form with client-side validation, keyboard accessibility, `prefers-reduced-motion` support, SEO meta tags, and custom 404 page. Content is separated from UI via typed data files. There is no client-side routing, no backend, no tests, and no CI pipeline beyond Vercel auto-deploy. The site ships a single dark theme.

---

## Timeline

### Short-Term (Next Few Weeks)

| Priority | Item | Source | Effort |
|----------|------|--------|--------|
| High | Add project screenshots + live demo links to project cards | Extracted — `README.md:118`, `docs/03-feature-enhancements.md:166-181`, `docs/04-content-guide.md:123` | Medium |
| High | Self-host Google Fonts via `@fontsource` packages | Extracted — `README.md:119`, `docs/03-feature-enhancements.md:326-329` | Low |
| High | Replace Font Awesome CDN with tree-shaken individual icon imports | Extracted — `README.md:120`, `docs/03-feature-enhancements.md:332-345` | Low |
| Medium | Add `loading="lazy"` to images for deferred loading | Extracted — `docs/03-feature-enhancements.md:300-306` | Low |
| Medium | Responsive images with `srcset` / `sizes` | Extracted — `docs/03-feature-enhancements.md:308-323` | Low |
| Medium | Polish mobile menu animation (slide + hamburger-to-X) | Extracted — `docs/03-feature-enhancements.md:109-115` | Low |
| Medium | Add footer quick nav links | Extracted — `docs/03-feature-enhancements.md:477-482` | Low |
| Medium | Move hardcoded hero/about text into data files | Suggested — `docs/04-content-guide.md:357-372` flags hardcoded content | Low |

### Medium-Term (3–6 Months)

| Priority | Item | Source | Effort |
|----------|------|--------|--------|
| High | Add unit / integration tests (Vitest + React Testing Library) | Suggested — no test setup exists anywhere in the project | Medium |
| High | Implement dark/light theme toggle with `useTheme` hook | Suggested — README mentions "persistent user preference"; code has no theme switch | Medium |
| Medium | Refined hover states and micro-interactions (buttons, cards, pills) | Extracted — `docs/03-feature-enhancements.md:32-55` | Low |
| Medium | Glassmorphism on section backgrounds (About, Contact) | Extracted — `docs/03-feature-enhancements.md:24-30` | Low |
| Medium | Gradient section backgrounds for added depth | Extracted — `docs/03-feature-enhancements.md:17-22` | Low |
| Medium | Smooth theme transition animation (300ms on color properties) | Extracted — `docs/03-feature-enhancements.md:447-452` | Low |
| Low | Gradient overlay on project card hover | Extracted — `docs/03-feature-enhancements.md:469-474` | Low |

### Long-Term (6+ Months)

| Item | Source | Notes |
|------|--------|-------|
| Add a blog or writing section | Suggested — would demonstrate communication skills; no code hint exists | Requires content creation |
| Add project filter or search | Suggested — only useful if project count grows significantly | Premature with 3 projects |
| Animated section dividers or progress indicator on scroll | Extracted — `docs/03-feature-enhancements.md:457-465` | Keep subtle |
| i18n (English / Arabic) | Suggested — Abdallah's name suggests possible bilingual audience; no code hint | High effort for a portfolio |

---

## Planned Improvements (Explicitly Documented)

These are documented in `README.md:116-121` and `docs/03-feature-enhancements.md`:

- **Project screenshots** — Add preview images to each `ProjectCard`. Infrastructure: `public/images/projects/` directory, `screenshot` field in `Project` type, responsive `<img>` in card. _(README, feature-enhancements)_
- **Live demo links** — Add `demoUrl?: string` to `Project` type; render a secondary "Live Demo" button when present. _(README, feature-enhancements)_
- **Self-hosted fonts** — Replace Google Fonts CDN `<link>` with `@fontsource/sora` and `@fontsource/dm-sans` npm packages. Import in `index.css`. Remove render-blocking external request. _(README, feature-enhancements)_
- **Tree-shaken icons** — Replace `index.html` Font Awesome CDN with `@fortawesome/react-fontawesome` + individual icon imports (`faGithub`, `faLinkedin`, `faInstagram`, `faEnvelope`, `faCode`, etc.). _(README, feature-enhancements)_
- **Theme toggle** — README claims "Light / dark theme with persistent user preference" but no theme-switching code exists. Either remove the claim or implement the feature. _(suggested — documented gap)_

All items in `docs/03-feature-enhancements.md` sections **Essential** and **Recommended** are in scope.

---

## Optional Ideas

- Scroll-triggered parallax-light effect on hero content
- Staggered reveal animation for skill pills and project cards
- Keyboard shortcut (e.g., `t`) to toggle theme
- Animated skill progress bars or radial gauges (only if backed by authentic proficiency data)
- Contact form honeypot field for spam reduction

---

## Deferred Ideas

Explicitly postponed in `docs/03-feature-enhancements.md:542-549`:

| Idea | Reason |
|------|--------|
| Animated hero backgrounds (particles, moving gradients) | Accessibility risk, performance cost |
| Status badges on projects | Visual clutter for 3 projects |
| Accent color customization | Over-engineering for a portfolio |
| Project filter UI | Only 3 projects; unnecessary complexity |
| Custom cursor | Distracting, hurts usability |
| Easter eggs (Konami code, hidden jokes) | Not aligned with professional tone |
| Loading screens | Makes site feel slower |

---

## Out-of-Scope

- **Backend or database** — No server, no auth, no CMS. All content is static TypeScript.
- **Client-side routing** — Anchor navigation only. No React Router or page transitions.
- **Analytics / tracking** — Not present in source. Would require opt-in privacy notice.
- **User accounts or comments** — No login, no comment system, no dashboard.
- **Monorepo or CI beyond Vercel** — Single project, single deployment target.

---

## Technical Debt

| Area | Observation | Suggested Fix |
|------|-------------|---------------|
| No test suite | Zero test files, no testing dependencies in `package.json` | Add Vitest + `@testing-library/react`; write smoke tests for each section |
| `src/assets/` is empty | Directory reserved for imported assets but unused | Either remove or use for imported images to get cache-busting hashes |
| Public directory images have no hash | `/images/profile.jpg`, `/og-image.png` served without content hash | Migrate to Vite asset imports or add manual cache busting |
| README inaccuracy | Claims "Light / dark theme with persistent user preference" — not implemented | Sync docs with code |
| No `.env.example` in Vite strict mode | Only `VITE_FORMSPREE_ENDPOINT` is checked; missing env causes soft warning | Already handled gracefully — low priority |
| `tailwind.config.js` uses CJS-style JSDoc type annotation | `@type {import('tailwindcss').Config}` is correct but unnecessary for `.js` ESM | Cosmetic — no functional impact |
| CSS custom properties duplicated in `:root` and `tailwind.config.js` | Colors defined in both places; must stay in sync manually | Single source of truth not feasible with Tailwind v3 |
| Formspree endpoint exposed in `.env.example` public placeholder | `f/xwvgppwo` is the real form ID in `.env` but example uses a placeholder | Already correct — placeholder is safe |
| Hardcoded text in components | Hero, About, contact messages, validation errors are in JSX | Move to data files for non-developer editing |

---

## Guiding Principles

From `docs/02-development-rules.md` and `docs/01-current-architecture.md`:

1. **Simplicity over abstraction** — No routing, no state management, no backend. Flat components, explicit props.
2. **Content–presentation separation** — All text in `src/data/` files; component changes only for structure or behavior.
3. **Tailwind-first styling** — Custom CSS only for effects impossible in utility classes (glass, gradients, keyframes).
4. **Performance mindfulness** — Single static build, GPU-accelerated animations, passive listeners, reduced-motion support.
5. **Accessibility as default** — Semantic HTML, ARIA attributes, focus indicators, skip-to-content, contrast compliance.
6. **No enterprise over-engineering** — Build for a personal portfolio, not a SaaS product. Keep future growth in mind but don't build for it now.
7. **Improvements only, no rewrites** — Preserve current behavior; add value clearly. No architecture rewrites without explicit approval.
8. **Verify before merge** — Deploy preview, test on mobile + desktop, check both themes (when implemented).
