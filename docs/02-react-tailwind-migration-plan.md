# React + Tailwind Migration Plan — Abdallah Hassoun Portfolio

## Overview

- ##### Status: Final — Ready for Implementation
- ##### Branch: `migration` (new branch from `main`)
- ##### Goal: Migrate from vanilla HTML/CSS/TS to React + TypeScript + Vite + Tailwind without changing design or content
- ##### Philosophy: The React migration goal is to reproduce the existing portfolio in React with the same design and behavior. New features, redesigns, and visual improvements happen only after the migration is stable.

---

## Table of Contents

- [1. Migration Goals](#1-migration-goals)
- [2. New Tech Stack](#2-new-tech-stack)
- [3. Project Structure](#3-project-structure)
- [4. Component Tree](#4-component-tree)
- [5. Data Extraction Strategy](#5-data-extraction-strategy)
- [6. Styling Migration Strategy](#6-styling-migration-strategy)
- [7. TypeScript Architecture](#7-typescript-architecture)
- [8. Feature Migration — Interactive Logic](#8-feature-migration--interactive-logic)
- [9. Migration Phases](#9-migration-phases)
- [10. Definition of Done — Migration Complete](#10-definition-of-done--migration-complete)
- [11. What We Intentionally Defer](#11-what-we-intentionally-defer)
- [12. Rollback Plan](#12-rollback-plan)

---

## 1. Migration Goals

| Goal                       | Success Criteria                                                  |
| -------------------------- | ----------------------------------------------------------------- |
| **Component architecture** | Every section is an independent, reusable React component         |
| **Proper TypeScript**      | Typed props, typed data models, no`any` unless necessary          |
| **Tailwind styling**       | All styles in Tailwind utility classes, minimal custom CSS        |
| **Data-driven content**    | Skills, projects, contact info live in typed data files, not HTML |
| **Feature parity**         | All 7 interactive features work exactly as they do now            |
| **Visual parity**          | Site looks identical to current production site                   |
| **Clean build pipeline**   | Vite handles dev server, HMR, and production builds               |

---

## 2. New Tech Stack

| Layer           | Technology       | Version       | Purpose                                |
| --------------- | ---------------- | ------------- | -------------------------------------- |
| Framework       | React            | 18.x          | Component-based UI                     |
| Language        | TypeScript       | 5.x           | Type safety                            |
| Build Tool      | Vite             | 5.x           | Dev server, bundling, HMR              |
| Styling         | Tailwind CSS     | 3.x           | Utility-first CSS                      |
| Fonts           | Google Fonts CDN | —             | Sora + DM Sans (kept during migration) |
| Icons           | Font Awesome     | 6.5.1 (CDN)   | CDN kept during migration              |
| Linting         | ESLint           | Latest        | Code quality                           |
| Formatting      | Prettier         | Latest        | Consistent formatting                  |
| Package Manager | npm              | Latest (>= 9) | Dependency management                  |
| Deployment      | Vercel           | —             | Same as current                        |

### Packages to install

```bash
npm create vite@latest . -- --template react-ts
npm install -D tailwindcss postcss autoprefixer
npm install -D eslint @eslint/js typescript-eslint
npm install -D prettier eslint-config-prettier
npx tailwindcss init -p
```

### Environment Requirements

- Node >= 18 (set `engines.node` in `package.json`)
- npm >= 9 (set `engines.npm` in `package.json`)

**Font and icon decisions**: Google Fonts CDN and Font Awesome CDN remain unchanged during migration. Self-hosting fonts and tree-shaking icons are enhancements for later.

## 3. Project Structure

```
.
├── index.html                    # Vite entry point
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── vercel.json                   # Updated for Vite build
├── .gitignore
├── public/
│   ├── favicon.ico
│   ├── CV File/                  # Moved from current assets/
│   │   └── Abdallah Hassoun.pdf
│   └── images/                   # Project screenshots (when added)
    └── src/
        ├── main.tsx                  # React entry point
        ├── App.tsx                   # Root component
        ├── index.css                 # Tailwind directives + custom styles
        ├── data/
        │   ├── skills.ts             # Typed skills data (exports SkillCategory)
        │   ├── projects.ts           # Typed projects data (exports Project)
        │   ├── contact.ts            # Contact links data (exports ContactLink)
        │   └── navigation.ts         # Nav links data (exports NavLink)
        ├── components/
        │   ├── layout/
        │   │   ├── Navbar.tsx        # Owns mobile menu state internally
        │   │   └── Footer.tsx
        │   ├── sections/
        │   │   ├── Hero.tsx
        │   │   ├── About.tsx
        │   │   ├── Skills.tsx
        │   │   ├── Projects.tsx
        │   │   └── Contact.tsx
        │   └── ui/
        │       ├── Button.tsx
        │       ├── SkillPill.tsx
        │       ├── ProjectCard.tsx
        │       ├── ScrollToTop.tsx
        │       └── ThemeToggle.tsx
        └── hooks/
            ├── useTheme.ts           # Dark mode logic (App-level state, no Context)
            ├── useScrollSpy.ts       # Active nav highlighting
            ├── useScrollReveal.ts    # Scroll animations
            └── useScrolledNav.ts     # Navbar scroll state
```

### Key structural decisions:

- **`data/`** — All hardcoded content extracted to typed TypeScript files. Each file exports its own types (no global `types/` directory).
- **`components/layout/`** — Persistent UI (navbar, footer). Navbar owns its mobile menu state internally.
- **`components/sections/`** — One component per page section
- **`components/ui/`** — Reusable small components only when repetition exists (buttons, pills, cards). No standalone ContactLink — contact items use Button.
- **`hooks/`** — All interactive logic extracted from the current monolithic script into focused custom hooks
- **No Context API** — Theme toggle uses App-level state and toggles `dark` class directly on `<html>`.

---

## 4. Component Tree

```
<App>
  <Navbar>
    <ThemeToggle />       ← Dark/light button; mobile menu state managed inside Navbar
  </Navbar>

  <main>
    <Hero />
    <About />
    <Skills>
      <SkillPill />        ← Repeated per skill
    </Skills>
    <Projects>
      <ProjectCard />      ← Repeated per project
    </Projects>
    <Contact />
  </main>

  <Footer />
  <ScrollToTop />          ← Renders nothing until scrolled
</App>
```

---

## 5. Data Extraction Strategy

### Before (current) — Hardcoded HTML

```html
<li class="skills-list"><li>JavaScript</li><li>TypeScript</li>...</li>
```

### After (React) — Typed data + mapped components

```typescript
// src/data/skills.ts
export interface SkillCategory {
  name: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    items: ["JavaScript", "TypeScript"],
  },
  {
    name: "Web",
    items: ["HTML", "CSS"],
  },
  // ...
];
```

```tsx
// src/components/sections/Skills.tsx
{
  skillCategories.map((category) => (
    <div key={category.name}>
      <h3>{category.name}</h3>
      {category.items.map((skill) => (
        <SkillPill key={skill} name={skill} />
      ))}
    </div>
  ));
}
```

### What gets extracted to data files:

| Current Location   | Extracted To                                   | Notes                               |
| ------------------ | ---------------------------------------------- | ----------------------------------- |
| Skills`<li>` items | `src/data/skills.ts`                           | Exports `SkillCategory` type inline |
| Project cards HTML | `src/data/projects.ts`                         | Exports `Project` type inline       |
| Contact links HTML | `src/data/contact.ts`                          | Exports `ContactLink` type inline   |
| Nav links HTML     | `src/data/navigation.ts`                       | Exports `NavLink` type inline       |
| Hero text          | Remains in`Hero.tsx` as JSX (one-off content)  |                                     |
| About text         | Remains in`About.tsx` as JSX (one-off content) |                                     |

**Rule**: Repeated content goes to data files. One-off content stays in components.

---

## 6. Styling Migration Strategy

### 6.1 CSS → Tailwind Mapping

| Current CSS Pattern                      | Tailwind Equivalent                   |
| ---------------------------------------- | ------------------------------------- |
| `--color-background: #fdfdfd`            | `bg-[#fdfdfd] dark:bg-[#0b0e14]`      |
| `--color-primary: #1a56db`               | `text-[#1a56db] dark:text-[#60a5fa]`  |
| `--color-surface: #ffffff`               | `bg-white dark:bg-[#161b22]`          |
| `border-radius: 12px`                    | `rounded-xl`                          |
| `box-shadow` values                      | `shadow-sm`, `shadow-md`, `shadow-lg` |
| `backdrop-filter: blur(12px)`            | `backdrop-blur-xl`                    |
| `transition: all 0.3s cubic-bezier(...)` | `transition-all duration-300`         |
| `padding: 5rem 2rem`                     | `py-20 px-8`                          |
| `max-width: 1000px`                      | `max-w-[1000px]`                      |
| Media queries (767px, 768px, 1024px)     | `md:`, `lg:` breakpoint prefixes      |

### 6.2 Tailwind Config Customization

```javascript
// tailwind.config.js
module.exports = {
  darkMode: "class", // Tailwind's class-based dark mode
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Sora", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#1a56db",
          soft: "rgba(26,86,219,0.1)",
          // dark variants for dark mode
        },
        accent: {
          DEFAULT: "#10b981",
        },
      },
      maxWidth: {
        container: "1000px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
```

### 6.3 What stays as custom CSS

Only these go in `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Gradient text — cannot be done with Tailwind utilities alone */
.gradient-text {
  background: linear-gradient(135deg, #1a56db, #10b981);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Glassmorphism navbar background */
.glass-bg {
  background: rgba(var(--bg-rgb), 0.8);
  backdrop-filter: blur(12px);
}

/* Scroll reveal transition (applied via JS hook) */
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition:
    opacity 800ms cubic-bezier(0.21, 1.02, 0.47, 0.98),
    transform 800ms cubic-bezier(0.21, 1.02, 0.47, 0.98);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

**Rule**: Use Tailwind for everything possible. Custom CSS only for gradient text, glassmorphism blur, and scroll reveal — things Tailwind cannot express.

---

## 7. TypeScript Architecture

### 7.1 Types Co-located with Data Files

Types are exported alongside their data arrays — no global `types/` directory:

```typescript
// src/data/projects.ts
export interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
}

export const projects: Project[] = [ ... ];

// src/data/skills.ts
export interface SkillCategory {
  name: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [ ... ];
```

This keeps related types close to their consumers and avoids maintaining a separate types file for ~4 interfaces.

### 7.2 Component Props

Every component receives typed props. No prop drilling beyond one level.

```typescript
// Example: ProjectCard.tsx
interface ProjectCardProps {
  project: Project;
}

// Example: Button.tsx
interface ButtonProps {
  variant: "primary" | "secondary" | "cv";
  href?: string;
  download?: string;
  onClick?: () => void;
  children: React.ReactNode;
}
```

### 7.3 Custom Hooks (with types)

```typescript
// hooks/useTheme.ts
interface UseThemeReturn {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

// hooks/useScrollSpy.ts
interface UseScrollSpyOptions {
  sectionIds: string[];
  threshold?: number;
}

// hooks/useScrollReveal.ts
// Takes a ref, returns nothing — handles IntersectionObserver internally
```

---

## 8. Feature Migration — Interactive Logic

Current 147-line `script.ts` gets broken into custom hooks:

| Current Feature            | New Hook                            | Logic                                               |
| -------------------------- | ----------------------------------- | --------------------------------------------------- |
| Theme toggle + persistence | `useTheme`                          | React state +`localStorage` + `class` on `<html>`   |
| Mobile hamburger menu      | `Navbar` (internal state)           | Local state in Navbar,`useEffect` for outside click |
| Scroll-aware navbar        | `useScrolledNav`                    | `scroll` event → state toggle                       |
| Active nav highlighting    | `useScrollSpy`                      | `IntersectionObserver` → state                      |
| Scroll reveal animations   | `useScrollReveal`                   | `IntersectionObserver` → class toggle               |
| Scroll-to-top button       | `ScrollToTop` component             | `scroll` event + conditional render                 |
| Smooth scrolling           | Native CSS`scroll-behavior: smooth` | No JS needed                                        |

---

## 9. Migration Phases

### Phase 1: React Foundation + Tooling (Day 1)

- Create `migration` branch from `main`
- Scaffold Vite + React + TypeScript project (`npm create vite@latest`)
- Install Tailwind (tailwindcss, postcss, autoprefixer)
- Install ESLint + Prettier (eslint, @eslint/js, typescript-eslint, prettier, eslint-config-prettier)
- Configure `tailwind.config.js` with custom theme (colors, fonts, spacing)
- Configure ESLint and Prettier
- Configure `vercel.json` for Vite build
- Set `engines` in `package.json` (Node >= 18, npm >= 9)
- Set up folder structure (`src/data`, `src/components/layout`, `src/components/sections`, `src/components/ui`, `src/hooks`)
- Verify `npm run dev` works
- Verify `npm run build` works
- **Milestone**: Blank React page compiles and runs with full tooling

### Phase 2: Content / Data Extraction (Day 1-2)

- Extract skills data + `SkillCategory` type to `src/data/skills.ts`
- Extract projects data + `Project` type to `src/data/projects.ts`
- Extract contact links + `ContactLink` type to `src/data/contact.ts`
- Extract nav links + `NavLink` type to `src/data/navigation.ts`
- Hero and About text stay in their components as JSX (one-off content)
- **Milestone**: All content lives in typed data files, ready for components

### Phase 3: Component Migration (Day 2-4)

Build reusable UI components first:

- `Button.tsx` (3 variants: primary, secondary, CV)
- `SkillPill.tsx`
- `ProjectCard.tsx`

Build section components:

- `Hero.tsx` — gradient name, 3 CTAs
- `About.tsx` — 2 paragraphs, surface background
- `Skills.tsx` — maps skill categories with SkillPill
- `Projects.tsx` — maps project cards
- `Contact.tsx` — contact links rendered with Button component (no standalone ContactLink)

Build layout components:

- `Navbar.tsx` — sticky nav, owns mobile menu state internally
- `Footer.tsx` — copyright, social icons
- `ScrollToTop.tsx` — renders conditionally based on scroll
- `ThemeToggle.tsx` — dark/light button

**Milestone**: All sections render with correct content and basic styling

### Phase 4: Interactive Behavior Migration (Day 3-5)

Implement custom hooks (extracted from `script.ts`):

- `useTheme` — App-level state, toggles `dark` class on `<html>` (no Context API)
- `useScrolledNav` — scroll event → navbar compact state
- `useScrollSpy` — IntersectionObserver → active nav link
- `useScrollReveal` — IntersectionObserver → reveal animations

Wire hooks into components. Verify all 7 interactive features:

1. Hamburger menu (Navbar internal state)
2. Scroll-aware navbar (useScrolledNav)
3. Dark/light theme toggle (useTheme)
4. Active nav highlighting (useScrollSpy)
5. Scroll reveal animations (useScrollReveal)
6. Scroll-to-top button (ScrollToTop component)
7. Smooth scrolling (CSS `scroll-behavior: smooth`)

**Milestone**: All interactive features match the current live site behavior

### Phase 5: Testing, Deployment Verification & Cleanup (Day 5-6)

- Side-by-side visual comparison with live site
- Verify all hover effects and transitions
- Verify responsive behavior (mobile, tablet, desktop)
- Verify all 7 interactive features work identically
- Verify CV download works
- Verify external links (`target="_blank" rel="noopener noreferrer"`)
- Verify dark mode toggles and persists in localStorage
- Run `npm run build` — verify production build with zero errors
- TypeScript compiles with `strict: true` and zero errors
- No console errors
- Deploy `migration` branch to Vercel preview deployment
- Test on multiple devices/browsers
- Final comparison with live site
- Code is organized as specified in folder structure
- Clean up: remove any unused files, verify `.gitignore`

**Milestone**: Migration is complete and deployable

### Phase 6: Enhancements After Migration

Only begin after Phase 5 is complete and the migration branch is merged to `main`:

- See `docs/04-feature-enhancements.md` for the prioritized backlog
- Start with Essential items (SEO, accessibility, project screenshots, contact form)
- Follow with Recommended items
- Never batch more than 2-3 enhancements per commit
- Each enhancement gets its own deploy preview verification

---

## 10. Definition of Done — Migration Complete

The migration is **complete** when:

- [ ] All 7 sections render identically to the current live site
- [ ] All 7 interactive features work identically
- [ ] Dark mode toggles and persists
- [ ] Responsive design matches all 3 breakpoints
- [ ] CV download works
- [ ] All external links open correctly
- [ ] No console errors
- [ ] TypeScript compiles with `strict: true` and zero errors
- [ ] Production build succeeds (`npm run build`)
- [ ] Vercel preview deployment works
- [ ] Code is organized as specified in folder structure
- [ ] ESLint and Prettier pass with zero warnings
- [ ] No Context API usage (App-level state + hooks only)
- [ ] No standalone MobileMenu component (mobile menu owned by Navbar)
- [ ] Types are co-located with data files (no `src/types/` directory)

**At this point**: merge `migration` → `main`, delete `migration` branch, deploy `main` to production.

---

## 11. Out of Scope During Migration

The following are explicitly **out of scope** for the migration phase. They are not forgotten — they belong in the enhancements phase after migration is stable.

### Out of Scope

- **New animations** — staggered reveals, page transitions, micro-interactions beyond what exists
- **Redesign** — no color, spacing, or layout changes. Visual parity is required
- **New features** — no contact form, project filtering, blog, testimonials, or new sections
- **Contact form** — social/email links only (same as current site)
- **Project filtering** — only 3 projects; filtering adds UI with no value
- **Advanced component library** — no Headless UI, Radix, Framer Motion, or state management libraries
- **State management** — no Redux, Zustand, Jotai, or Context API. Component state + custom hooks is sufficient
- **Performance optimization** — no lazy loading, code splitting, or image optimization during migration
- **Accessibility overhaul** — keep current ARIA attributes; skip-link, focus trap, and other a11y improvements come after
- **SEO improvements** — meta tags, Open Graph, Twitter Cards are enhancements
- **Font self-hosting** — Google Fonts CDN stays during migration (@fontsource is an enhancement)
- **Icon tree-shaking** — Font Awesome CDN stays during migration
- **PWA manifest fix** — deferred
- **Any new features not in the current site**

### Rule

Migration = same site, new stack. Enhancements come after migration is stable.

---

## 12. Rollback Plan

If migration hits a blocker:

- `main` branch remains untouched with the current live site
- `migration` branch can be deleted at any point
- Current Vercel deployment continues serving from `main`
- Zero risk to production until merge
