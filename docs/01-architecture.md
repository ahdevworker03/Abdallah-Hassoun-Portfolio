# Current Architecture

## Overview

A static single-page personal portfolio for Abdallah Hassoun, a Software Developer. The site showcases projects, skills, and provides a contact form. Built with React 19, TypeScript, Vite, and Tailwind CSS. Content is separated from UI using plain TypeScript data files. There is no routing, no backend, and no external state management.

**Live URL:** https://www.abdallahhassoun.com

## Tech Stack

| Layer           | Technology                                          |
| --------------- | --------------------------------------------------- |
| Framework       | React 19                                            |
| Language        | TypeScript (strict mode, ES2023 target)             |
| Bundler / Dev   | Vite 8 + @vitejs/plugin-react                       |
| Styling         | Tailwind CSS 3 + CSS custom properties              |
| Icons           | Font Awesome 6.5.1 (CDN)                            |
| Fonts           | Google Fonts — Sora (headings), DM Sans (body)      |
| Lint            | ESLint 9 (flat config) + typescript-eslint          |
| Format          | Prettier                                            |
| Deployment      | Vercel                                              |

## Folder Structure

```
.
├── index.html                 # Vite HTML entry — mounts #root, loads Google Fonts + FA CDN
├── vite.config.ts             # Vite config (React plugin only)
├── tailwind.config.js         # Theme tokens: fonts, colors (via CSS vars), shadows, transitions
├── postcss.config.js          # PostCSS: tailwindcss + autoprefixer
├── tsconfig.json              # Project references (app + node)
├── tsconfig.app.json          # Strict TS config for src/ (ES2023, DOM, bundler resolution)
├── tsconfig.node.json         # TS config for vite.config.ts (Node target)
├── eslint.config.js           # ESLint flat config — recommended JS + TS rules, Prettier integration
├── prettierrc                 # No semicolons, double quotes, trailing commas
├── vercel.json                # Vercel deployment: build command, output dir, framework
├── package.json               # Dependencies, scripts, engine requirements (Node >=18, npm >=9)
│
├── public/                    # Static assets served from root
│   ├── favicon.svg
│   ├── og-image.png           # Open Graph / Twitter card image
│   ├── 404.html               # Custom 404 page (inline styles, same brand colors)
│   ├── favicon_io/            # Multi-format favicons + site.webmanifest
│   ├── images/
│   │   └── profile.jpg        # Hero profile photo
│   └── CV File/
│       └── Abdallah Hassoun.pdf   # Downloadable CV
│
├── src/
│   ├── main.tsx               # Entry point — createRoot, StrictMode, ErrorBoundary
│   ├── App.tsx                # Root component — assembles layout + sections
│   ├── index.css              # Tailwind directives, CSS custom properties, utility classes
│   ├── assets/                # Reserved for static imports (currently empty)
│   ├── components/
│   │   ├── layout/            # Navbar, Footer
│   │   ├── sections/          # Hero, About, Skills, Projects, Education, Contact
│   │   ├── ui/                # Button, ProjectCard, SkillPill, ScrollToTop
│   │   └── ErrorBoundary.tsx  # Class-based error boundary
│   ├── data/                  # Static content (typed exports)
│   │   ├── navigation.ts      # NavLink[] — label + href
│   │   ├── skills.ts          # SkillCategory[] — grouped skill names
│   │   ├── education.ts       # Education + TrainingItem[] — education and training data
│   │   ├── projects.ts        # Project[] — title, description, tech, githubUrl
│   │   └── contact.ts         # ContactLink[] — label + url
│   └── hooks/
│       ├── useScrollReveal.ts # Scroll-triggered fade-in via IntersectionObserver
│       ├── useScrolledNav.ts  # Navbar shrink-on-scroll boolean
│       └── useScrollSpy.ts    # Active section detection via IntersectionObserver
```

## Component Hierarchy

```
<StrictMode>
  <ErrorBoundary>
    <App>
      <Navbar />              ← sticky, uses useScrolledNav + useScrollSpy
      <main id="main-content">
        <Hero />              ← profile image, tagline, 3 CTA buttons (View Projects, Get In Touch, Download CV)
        <About />             ← two bio paragraphs
        <Skills />            ← iterates skillCategories, renders SkillPill per item
        <Projects />          ← iterates projects, renders ProjectCard per project
        <Education />         ← renders education card and training/coursework cards
        <Contact />           ← form (name/email/message) + contact link buttons
      </main>
      <Footer />              ← copyright, nav links, social icons
      <ScrollToTop />         ← fixed button, appears after 300px scroll
    </App>
  </ErrorBoundary>
</StrictMode>
```

### Layout Components

- **Navbar** — Sticky top navigation. Reads `navLinks` from `data/navigation.ts`. Uses `useScrolledNav` to reduce height on scroll. Uses `useScrollSpy` to highlight the active section link. Mobile hamburger menu toggles a full-screen overlay; closes on outside click or Escape key. Contains a skip-to-main-content link (first focusable element in `App`).
- **Footer** — Copyright line, quick nav links, social icon links (Instagram, LinkedIn, GitHub via Font Awesome CDN).
- **ScrollToTop** — Fixed circular button in bottom-right corner. Becomes visible after 300px vertical scroll. Smooth-scrolls to `(0, 0)` on click.

### Section Components

Each section is a full-width block identified by an `id` attribute used for anchor scrolling and scroll-spy detection:

- **Hero** — Centered presentation with profile photo (`/images/profile.jpg`), gradient name heading, tagline, description paragraph, and three `Button` CTAs (View Projects, Get In Touch, Download CV). Social links (GitHub, LinkedIn) below the CTAs. Background uses the `.gradient-hero` radial glow utility.
- **About** — Two paragraphs of personal bio. Minimal, no props or data imports.
- **Skills** — Reads `skillCategories` from `data/skills.ts`. Renders a responsive grid (1 col mobile, 2 col md, 4 col lg) with category cards. Each card has a Font Awesome icon, category name, and renders individual skills as `SkillPill` components.
- **Projects** — Reads `projects` from `data/projects.ts`. Renders a responsive grid of `ProjectCard` components.
- **Education** — Reads `education` and `trainingItems` from `data/education.ts`. Renders a formal education card (institution, degree, GPA, status) and a stacked list of training/coursework cards with certificate links.
- **Contact** — Contains a validated form (name, email, message) that POSTs to Formspree, and a row of `Button` links from `contactLinks` (Instagram, LinkedIn, GitHub, Send Email). Tracks dirty state (`touched`) to show validation errors only after blur. Displays inline error/success/configuration-missing alerts.

### UI Components

- **Button** — Renders an `<a>` styled as a button. Three variants:
  - `primary` — solid orange background
  - `secondary` — transparent with orange border
  - `cv` — subtle border with `btn-cv` pulse animation on click
- **ProjectCard** — Article card with title, description, tech tags (accent-colored pills), and a "View on GitHub" link. Hover effect lifts the card and adds a glow shadow + gradient overlay.
- **SkillPill** — Rounded badge with accent color. Hover effect scales up, fills with accent background, and applies glow shadow.
- **ErrorBoundary** — Class component that catches render errors, logs them to console, and displays a fallback UI with "Something went wrong" message and reload button.

## Data Flow

All content flows unidirectionally:

1. **Static data** is defined in `src/data/` files as typed arrays of objects.
2. **Section components** import and iterate over the data directly, passing individual items as props to UI components.
3. **Form state** is entirely local to the `Contact` component — `useState` hooks manage form values, validation errors, touched state, and submission status.
4. **Scroll-derived state** (`scrolled`, `activeId`, `visible`) is managed by custom hooks that read `window.scrollY` or use `IntersectionObserver`.

There is no Context API, no prop drilling beyond one level, and no global state.

## State Management

All state is local to components:

| State                     | Location        | Mechanism                                    |
| ------------------------- | --------------- | -------------------------------------------- |
| Navbar shrink             | Navbar          | `useScrolledNav()` — boolean from scrollY    |
| Active nav link           | Navbar          | `useScrollSpy()` — string from IntersectionObserver |
| Mobile menu open/close    | Navbar          | `useState` boolean + click-outside listener  |
| Scroll-to-top visibility  | ScrollToTop     | `useState` boolean from scrollY              |
| Form values, errors, touched, status | Contact | Multiple `useState` hooks + local `validate()` |
| Reveal animation trigger  | App             | `useScrollReveal()` — side-effect only       |

No external libraries (Redux, Zustand, etc.) are used.

## Custom Hooks

| Hook               | File                          | Purpose                                                                 |
| ------------------ | ----------------------------- | ----------------------------------------------------------------------- |
| `useScrollReveal`  | `src/hooks/useScrollReveal.ts`| Queries all `.reveal` elements, adds `.visible` class via IntersectionObserver (threshold 0.2) when they enter the viewport. Unobserves after reveal. Called once in `App`. |
| `useScrolledNav`   | `src/hooks/useScrolledNav.ts` | Returns `true` when `window.scrollY > threshold` (default 20px). Uses passive scroll listener. |
| `useScrollSpy`     | `src/hooks/useScrollSpy.ts`   | Accepts `sectionIds[]` and `threshold`. Uses IntersectionObserver to return the ID of the most recently intersecting section. Used by Navbar to set `aria-current`. |

## Styling Architecture

### Tailwind CSS

The project uses Tailwind CSS 3 with utility classes applied directly in JSX. The configuration file (`tailwind.config.js`) extends the default theme with:

- **Font families**: `heading` → Sora, `body` → DM Sans
- **Colors**: 12 semantic color tokens mapped to CSS custom properties (e.g., `primary`, `surface`, `text-primary`, `glass-*`)
- **Max width**: `container` → 1000px (not the default Tailwind `container`)
- **Shadow**: `glow` → 0 0 20px `var(--color-primary-soft)`
- **Transition timing**: `smooth` (standard ease), `reveal` (bouncy spring-like curve)

### CSS Custom Properties

Defined in `:root` inside `index.css`:

```
--color-background: #110a07
--color-surface: #27170f
--color-primary: #f1841c
--color-primary-soft: rgba(241, 132, 28, 0.15)
--color-primary-hover: #d47310
--color-on-primary: #2d1f14
--color-accent: #cc8842
--color-accent-soft: rgba(204, 136, 66, 0.15)
--color-text-primary: #ffffff
--color-text-secondary: #a3927e
--color-border: rgba(255, 255, 255, 0.06)
--color-focus-ring: rgba(241, 132, 28, 0.3)
--color-glass-bg: rgba(39, 23, 15, 0.7)
--color-glass-border: rgba(255, 255, 255, 0.06)
--color-glass-shadow: rgba(0, 0, 0, 0.2)
```

There is only one theme — a dark palette. There is no light/dark toggle.

### Utility CSS Classes (in `index.css`)

- `.gradient-text` — orange gradient text fill (used on the hero name)
- `.gradient-hero` — radial glow gradient for the hero section background
- `.glass-bg` — semi-transparent dark background with blur (navbar)
- `.glass-section` — section background with backdrop blur and bottom border
- `.reveal` / `.reveal.visible` — opacity + translateY transition triggered by `useScrollReveal`
- `.btn-cv` — pulse animation on the CV download button click

### Responsive Design

Mobile-first approach with Tailwind breakpoints:
- `md:` (768px) — two-column grids, horizontal footer layout
- `lg:` (1024px) — four-column skills grid, three-column projects grid, horizontal nav

### Accessibility & Motion

- `prefers-reduced-motion` media query disables animations and transitions site-wide
- `:focus-visible` outlines use `--color-primary`
- Skip-to-content link is the first tabbable element

## Assets Handling

- **Images**: `/images/profile.jpg` served from the `public/` directory (referenced as absolute path in `<img src>`).
- **Icons**: Font Awesome 6.5.1 loaded via CDN `<link>` in `index.html`. Used with `<i className="fa-brands fa-*" />`.
- **Fonts**: Google Fonts (Sora weights 400/600/700, DM Sans weights 400/500/700) loaded via `<link>` in `index.html`.
- **Favicons**: Multiple formats in `public/favicon_io/`, referenced from `index.html`. Primary favicon is `/favicon.svg`.
- **CV**: `public/CV File/Abdallah Hassoun.pdf`, served as a download via `<a download>`.
- **Open Graph**: `og-image.png`, `og:title`, `og:description`, `og:url`, `og:type` set in `index.html`. Twitter card meta tags also present.
- **`src/assets/`**: Exists but is empty — no imported assets.

## Environment Variables

| Variable                  | Required | Default | Purpose                                        |
| ------------------------- | -------- | ------- | ---------------------------------------------- |
| `VITE_FORMSPREE_ENDPOINT` | Yes      | —       | Formspree form endpoint for contact form POST  |

Referenced in `src/components/sections/Contact.tsx` via `import.meta.env.VITE_FORMSPREE_ENDPOINT`. If missing, the form displays a warning banner and the submit button is disabled. The `.env.example` file documents this variable with a placeholder value.

## Build Process

### Development

```bash
npm run dev    # vite — starts local dev server with HMR
npm run preview # vite preview — serves production build locally
npm run format # prettier --write src/**/*.{ts,tsx,css}
npm run lint   # eslint .
```

### Production

```bash
npm run build  # tsc -b && vite build
```

The build runs TypeScript project compilation (`tsc -b`, which compiles both `tsconfig.app.json` and `tsconfig.node.json`) followed by Vite production bundling. Output lands in `dist/`.

## Deployment

- **Platform**: Vercel
- **Trigger**: Auto-deploys from the `main` branch
- **Configuration** (`vercel.json`):
  - `buildCommand`: `npm run build`
  - `outputDirectory`: `dist`
  - `framework`: `vite`
- **Custom 404**: `public/404.html` is served by Vercel for unmatched routes. It is a self-contained HTML page with inline styles matching the portfolio's brand colors.

## Project Philosophy

Inferred from structure, naming, and implementation patterns:

- **Simplicity over abstraction** — No routing library, no state management, no backend. Content is static TypeScript data. Components are flat (no nesting beyond one level), props are explicit, and data flows directly from data files to presentational components.
- **Separation of content from presentation** — All user-facing text lives in `src/data/` as typed exports. Changing any visible content requires editing only the data file, not component JSX.
- **Local state only** — Hooks and state are scoped to the component that needs them. No Context, no prop drilling.
- **Tailwind-first styling** — Almost all styling uses Tailwind utility classes. Custom CSS is reserved for animations, glass effects, gradient text, and custom properties that Tailwind cannot express.
- **Performance mindfulness** — Single static build, no runtime overhead beyond React, CSS animations limited to `opacity` and `transform` (GPU-accelerated), `passive` scroll listeners, `prefers-reduced-motion` support.

## Important Implementation Decisions

- **No dark/light toggle** — Despite color tokens being named generically (`--color-primary`, `--color-surface`), the project ships a single dark theme. There is no `useTheme` hook, no `.dark` class, and no theme-switching UI.
- **Formspree integration** — The contact form POSTs JSON to a Formspree endpoint. The endpoint is configured via `VITE_FORMSPREE_ENDPOINT` env var, making it easy to swap. Validation runs client-side only (no server-side validation on Formspree).
- **Class-based ErrorBoundary** — The only class component in the project. Required because React error boundaries cannot be implemented as function components.
- **No client-side routing** — Navigation uses anchor links (`#about`, `#skills`, etc.) with smooth scrolling. All sections are rendered inline in a single page — no React Router.
- **`src/assets/` is empty** — All images and static files are served from `public/` rather than imported through Vite's asset pipeline. This means no cache-busting hashes for these files.
- **No `container` class usage** — Tailwind's `max-w-container` is set to 1000px but is applied manually (`mx-auto max-w-container` or `mx-auto max-w-[...]`) rather than using Tailwind's built-in `container` class.
- **Reveal animation via class toggling** — `useScrollReveal` uses a class-based approach (`.reveal` + `.visible`) rather than a library like `framer-motion` or `react-spring`. The hook runs once and unobserves elements after reveal.
