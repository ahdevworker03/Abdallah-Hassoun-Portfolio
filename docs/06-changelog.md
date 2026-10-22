# Changelog

All notable changes to this project are documented here.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [Unreleased]
### Added
- Education & Learning section between Projects and Contact with formal education card and training/coursework cards
- Education data file (`src/data/education.ts`) with typed interfaces for education and training items
- Navigation link to Education section
- Changelog documentation for the Education & Learning enhancement
- Course links and certificate link for professional development entries
- Backend and Database skill categories with expanded technical skills
- Location, email, and phone details in the Contact section

### Changed
- Updated the Hero and About sections to reflect the current full-stack focus, vehicle rental platform, and internship goal
- Replaced the previous car rental project with the Vehicle Rental Management SaaS project
- Added Vite to the portfolio project technology tags
- Condensed the vehicle rental project description for a balanced project card layout
- Redesigned the Contact section as a responsive panel with a "Let's Connect" introduction, icon-based contact details, and a separate form area

### Removed
- Direct-contact button group from the Contact section
- Previous onsite frontend training entry and older car rental project entry

### Fixed
- Corrected the `Authentication & Authorization` skill label
- Preserved Formspree submission and validation behavior during the Contact section redesign

---

## [0.4.0] — 2026-07-14

### Added
- Contact form with client-side validation, touched tracking, and Formspree integration
- Interactive form states: loading spinner, success message, error alert, config-missing warning
- Keyboard accessibility: skip-to-content link, focus-visible indicators on all interactive elements
- ARIA attributes: `aria-current` on nav links, `aria-expanded` on hamburger, `aria-label` on icon-only controls, `role="alert"` on form messages, `aria-invalid` on form fields
- SEO meta tags: description, Open Graph (`og:title`, `og:description`, `og:image`, `og:url`), Twitter Card (`summary_large_image`)

### Changed
- Refined hero section presentation: profile photo layout, three-tier CTA buttons, social link row
- Enhanced skills section with category grid, icons, and glass-style card layout
- Improved project cards with hover lift, glow shadow, and gradient overlay
- Applied visual polish and motion refinements across all sections
- Updated color scheme: adjusted palette, smoother transitions, consistent hover states
- Refactored codebase for improved readability and maintainability
- Set Formspree endpoint in `.env.example` with placeholder value

---

## [0.3.0] — 2026-07-13

### Added
- React 19 + Vite 8 project foundation with TypeScript strict mode
- Component-driven architecture: `layout/`, `sections/`, `ui/` component directories
- Custom hooks: `useScrollReveal` (IntersectionObserver-based reveal), `useScrolledNav` (navbar shrink on scroll), `useScrollSpy` (active section detection)
- Error boundary component with fallback UI and reload button
- Scroll-to-top button with threshold-based visibility
- Typed data files for all user-facing content (`navigation.ts`, `skills.ts`, `projects.ts`, `contact.ts`)
- Project documentation: architecture overview, design system, content guide

### Changed
- Migrated from plain HTML/CSS/JS to React 19 + TypeScript
- Replaced vanilla CSS with Tailwind CSS 3 utility classes
- Extracted inline content into separate data files with TypeScript interfaces
- Adopted semantic color tokens mapped from CSS custom properties to Tailwind
- Replaced instant mobile menu toggle with animated hamburger-to-X pattern
- Isolated component styling; removed global style cascade

### Removed
- Legacy vanilla JS and CSS files
- Migration tracking documentation

### Fixed
- Asset paths, favicon paths, and CV download path after restructure

---

## [0.2.0] — 2026-07-11
_This release corresponds to the `typescript-complete` tag._

### Added
- TypeScript configuration with strict mode, project references, and ES2023 target
- Vite bundler setup with `@vitejs/plugin-react`
- Vercel deployment configuration (`vercel.json`)
- ESLint flat config with TypeScript-aware rules
- Prettier formatting configuration
- Environment variable template (`.env.example`)
- Enhanced README with feature list, tech stack table, project structure, accessibility notes, and deployment instructions

### Changed
- Migrated project to TypeScript with full type definitions
- Restructured project for component-based architecture
- Updated `.gitignore` for TypeScript/Vite/Node patterns

### Removed
- Legacy `GEMINI.md` file
- Git-tracked enhancement plan document

---

## [0.1.0] — 2026-05-23

### Added
- Initial portfolio website with Hero, About, Skills, Projects, and Contact sections
- Dark theme with warm orange/gold accent palette
- Sticky navigation bar with scroll-spy active section tracking
- Mobile hamburger menu
- Scroll-triggered section reveal animations via IntersectionObserver
- Project cards with tech tags and GitHub repository links
- Downloadable CV and email contact buttons
- Social media links (GitHub, LinkedIn, Instagram)
- Profile photo and favicon package (SVG, ICO, PNG, Apple Touch Icon)
- Open Graph image (`og-image.png`)
- Custom domain configuration (`abdallahhassoun.com`)

### Changed
- Refined UI with glassmorphism navbar, smooth animations, and modern visual tokens _(2026-05-23)_
- Updated project portfolio descriptions and ordering _(2026-05-02)_
- Replaced profile photo and reorganised asset directory structure _(2026-04-12)_
- Removed inline comments from JavaScript files _(2026-04-17)_

### Fixed
- Asset path resolution after folder restructure
- Favicon paths for cross-browser compatibility
- CV download path for correct file serving

---

## Review Notes

- **Version boundaries:** No formal semver tags exist in the repository. The four version entries were derived from logical architectural milestones in the commit history: initial build (HTML/CSS/JS), TypeScript migration, React migration, and post-migration feature work.
- **Non-semver tag used:** The tag `typescript-complete` (at commit `b0e2b8c`) was treated as the boundary for version `0.2.0`. The original tag name is noted in the version heading.
- **Date selection:** Each version uses the date of the last commit in that milestone group.
- **If formalising versions in the future:** Consider tagging the current `HEAD` as `v0.4.0` to establish a semver baseline, then tag subsequent milestones as they're completed.
