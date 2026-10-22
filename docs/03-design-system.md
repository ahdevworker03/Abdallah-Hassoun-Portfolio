# Design System

> **Source of truth:** This document is derived entirely from `tailwind.config.js`, `src/index.css`, and the component files in `src/components/`. Every rule below is verifiable against the running code.

## Brand Identity

There is no explicit brand name or logo system. The visual identity is implicit and expressed entirely through the color, typography, and motion choices described below. The dominant impression is **warm minimalism on a dark canvas** — the deep brown-black background is offset by a glowing orange primary and a softer gold accent.

## Brand Philosophy (Inferred)

- **Warmth over cold tech** — The palette uses warm tones (orange, amber, brown) rather than the cool blues common in tech portfolios.
- **Depth through light** — Gradients, glass effects, and glow shadows simulate physical lighting on a flat surface.
- **Restrained motion** — Animations are few, short, and meaningful (scroll reveal, hover lift, button pulse). Motion respects `prefers-reduced-motion`.

## Color Palette

All color values are defined as CSS custom properties on `:root` in `src/index.css` and mapped to Tailwind semantic names in `tailwind.config.js`.

### Semantic Tokens

| Token                  | CSS Variable                 | Hex / RGBA                          | Tailwind Utility             | Usage                                          |
| ---------------------- | ---------------------------- | ----------------------------------- | ---------------------------- | ---------------------------------------------- |
| Background             | `--color-background`         | `#110a07`                           | `bg-background`              | Page background, section backgrounds           |
| Surface                | `--color-surface`            | `#27170f`                           | `bg-surface`                 | Cards, navbar, footer, input backgrounds       |
| Primary                | `--color-primary`            | `#f1841c`                           | `bg-primary` `text-primary`  | CTAs, active links, focus rings                |
| Primary Soft           | `--color-primary-soft`       | `rgba(241, 132, 28, 0.15)`          | `bg-primary-soft`            | Hero glow, card hover overlay, border accents  |
| Primary Hover          | `--color-primary-hover`      | `#d47310`                           | `bg-primary-hover`           | Button hover (primary variant)                 |
| On Primary             | `--color-on-primary`         | `#2d1f14`                           | `text-on-primary`            | Text on solid primary backgrounds              |
| Accent                 | `--color-accent`             | `#cc8842`                           | `text-accent` `bg-accent`    | Pill badges, category icons, GitHub links      |
| Accent Soft            | `--color-accent-soft`        | `rgba(204, 136, 66, 0.15)`          | `bg-accent-soft`             | Pill backgrounds, success/sectional alerts     |
| Text Primary           | `--color-text-primary`       | `#ffffff`                           | `text-text-primary`          | Headings, nav links, body text                 |
| Text Secondary         | `--color-text-secondary`     | `#a3927e`                           | `text-text-secondary`        | Subtle text, taglines, descriptions, footnotes |
| Border                 | `--color-border`             | `rgba(255, 255, 255, 0.06)`         | `border-border`              | Card borders, navbar bottom, hr, input borders |
| Focus Ring             | `--color-focus-ring`         | `rgba(241, 132, 28, 0.3)`           | `ring-focus-ring`            | Input focus ring                               |
| Glass BG               | `--color-glass-bg`           | `rgba(39, 23, 15, 0.7)`             | `bg-glass-bg`                | Navbar background (80% opaque in `.glass-bg`)  |
| Glass Border           | `--color-glass-border`       | `rgba(255, 255, 255, 0.06)`         | `border-glass-border`        | Section bottom borders (shared with `--border`)|
| Glass Shadow           | `--color-glass-shadow`       | `rgba(0, 0, 0, 0.2)`                | `shadow-glass-shadow`        | Reserved for glass surface shadows             |

### Raw Color Values (non‑semantic)

These are used directly in `index.css` utility classes and are not exposed as Tailwind tokens:

| Context       | Value      | Used In                          |
| ------------- | ---------- | -------------------------------- |
| Error text    | `#ef4444`  | Form validation error messages   |
| Error bg      | `rgba(...)`| `bg-red-900/20` for error alerts |
| Warning bg    | `rgba(...)`| `bg-amber-900/20` for config warnings |
| Warning text  | `#fb923c`  | `text-amber-400` for config warnings |
| Gradient end  | `#e8a34a`  | End point of `.gradient-text`    |

### Theme

There is exactly **one theme** — a dark palette. There is no `.dark` class, no light mode, and no theme-switching mechanism. The values in `:root` are constant.

## Typography

Two Google Fonts are loaded via `<link>` in `index.html`:

| Role       | Font      | Weights Loaded   | CSS `font-family` Declaration              |
| ---------- | --------- | ---------------- | ------------------------------------------ |
| Heading    | Sora      | 400, 600, 700    | `font-family: "Sora", sans-serif`          |
| Body       | DM Sans   | 400, 500, 700    | `font-family: "DM Sans", sans-serif`       |

### Tailwind Font Aliases

```js
// tailwind.config.js
fontFamily: {
  heading: ["Sora", "sans-serif"],
  body:    ["DM Sans", "sans-serif"],
}
```

Usage: `font-heading` or `font-body`.

### Observed Type Scale

| Context               | Tailwind Classes                         | Computed Size | Weight        |
| --------------------- | ---------------------------------------- | ------------- | ------------- |
| Hero name (desktop)   | `font-heading text-7xl font-bold`        | `4.5rem`      | 700           |
| Hero name (mobile)    | `font-heading text-5xl font-bold`        | `3rem`        | 700           |
| Section heading (desktop) | `font-heading text-4xl font-semibold` | `2.25rem`     | 600           |
| Section heading (mobile)  | `font-heading text-3xl font-semibold` | `1.875rem`    | 600           |
| Card title            | `font-heading text-lg font-medium`       | `1.125rem`    | 500           |
| Category heading      | `font-heading text-[0.8rem] font-semibold uppercase` | `0.8rem` | 600     |
| Body text             | `text-base`                              | `1rem`        | 400 (default) |
| Tagline               | `text-lg font-medium`                    | `1.125rem`    | 500           |
| Small text            | `text-sm`                                | `0.875rem`    | varies        |
| Tech tag pill         | `text-xs font-semibold`                  | `0.75rem`     | 600           |
| Error/alert messages  | `text-sm`                                | `0.875rem`    | 400 (default) |
| Social icon links (footer) | `text-[1.25rem]`                    | `1.25rem`     | —             |
| Scroll-to-top icon    | `text-[1.1rem]`                          | `1.1rem`      | —             |

### Line Heights

- `leading-tight` — section headings, hero name
- `leading-relaxed` — body paragraphs, descriptions, tagline

### Letter Spacing

- `tracking-tighter` — hero name
- `tracking-widest` — "Hi, I'm" pre-heading
- `tracking-[0.1em]` — category names in skills section

## Spacing Scale

The project uses Tailwind's default spacing scale (multiples of `0.25rem`). The most frequently observed values:

| Class         | Value     | Common Use                                |
| ------------- | --------- | ----------------------------------------- |
| `gap-2`       | `0.5rem`  | Small icon-text gaps                      |
| `gap-3`       | `0.75rem` | Card header icon + title                  |
| `gap-4`       | `1rem`    | Section layout gaps, button groups        |
| `gap-5`       | `1.25rem` | Mobile nav items, form field spacing      |
| `gap-6`       | `1.5rem`  | Section grid gaps, card inner gaps        |
| `p-0`         | `0`       | List reset                                |
| `p-6`         | `1.5rem`  | Card padding, mobile nav container        |
| `p-8`         | `2rem`    | Card padding (ProjectCard)                |
| `px-4`        | `1rem`    | Horizontal page padding (mobile)          |
| `px-6`        | `1.5rem`  | Alert padding                             |
| `px-7`        | `1.75rem` | Button horizontal padding                 |
| `px-[0.8rem]` | `0.8rem`  | Tech tag horizontal padding               |
| `px-[0.85rem]`| `0.85rem` | Skill pill horizontal padding             |
| `py-3`        | `0.75rem` | Button/footer vertical padding            |
| `py-4`        | `1rem`    | Alert vertical padding                    |
| `py-8`        | `2rem`    | Footer vertical padding                   |
| `py-20`       | `5rem`    | Section vertical padding (all sections)   |
| `mb-2`        | `0.5rem`  | "Hi, I'm" spacing                         |
| `mb-4`        | `1rem`    | Section heading bottom margin             |
| `mb-5`        | `1.25rem` | Tagline bottom margin                     |
| `mb-6`        | `1.5rem`  | Hero name bottom margin                   |
| `mb-8`        | `2rem`    | Hero description bottom margin            |
| `mb-10`       | `2.5rem`  | Section heading bottom margin (skills/projects) |

## Border Radius

| Class           | Value     | Used In                                        |
| --------------- | --------- | ---------------------------------------------- |
| `rounded-sm`    | `0.125rem`| Hamburger menu bar spans                       |
| `rounded-md`    | `0.375rem`| Buttons, inputs, form submit, alert containers |
| `rounded-lg`    | `0.5rem`  | Tech tag pills, ErrorBoundary reload button    |
| `rounded-2xl`   | `1rem`    | Cards (ProjectCard, skill category cards)      |
| `rounded-full`  | `9999px`  | SkillPill, ScrollToTop button, profile photo   |

## Border Widths

| Class       | Value   | Used In                                              |
| ----------- | ------- | ---------------------------------------------------- |
| `border`    | `1px`   | Cards, inputs, secondary/cv buttons, footer, sections|
| `border-2`  | `2px`   | Primary button, form submit button                   |
| `border-[3px]` | `3px` | Profile photo frame                                |
| `border-t`  | `1px`   | Footer top border                                    |
| `border-b`  | `1px`   | Navbar bottom border (when scrolled)                 |

## Shadows

| Shadow               | Definition                                              | Used In                                              |
| -------------------- | ------------------------------------------------------- | ---------------------------------------------------- |
| `shadow-sm`          | Tailwind default                                        | Cards (base state), scrolled navbar                  |
| `shadow-md`          | Tailwind default                                        | Mobile nav dropdown                                  |
| `shadow-lg`          | Tailwind default                                        | Buttons on hover, ScrollToTop button, profile photo  |
| `shadow-xl`          | Tailwind default                                        | ScrollToTop button on hover                          |
| `shadow-glow`        | `0 0 20px var(--color-primary-soft)` (custom)           | ProjectCard on hover, SkillPill on hover             |
| `shadow-primary/25`  | `shadow-lg` tinted with primary at 25% opacity          | Primary button hover                                 |
| `shadow-primary/20`  | `shadow-lg` tinted with primary at 20% opacity          | Secondary button hover                               |
| `shadow-text-secondary/15` | `shadow-lg` tinted with text-secondary at 15%     | CV button hover                                      |

## Glass Effects

Two glass utilities are defined in `src/index.css`:

| Utility        | CSS                                                              | Used In                 |
| -------------- | ---------------------------------------------------------------- | ----------------------- |
| `.glass-bg`    | `background: rgba(39, 23, 15, 0.8); backdrop-filter: blur(12px);` | Navbar                  |
| `.glass-section` | `background: rgba(17, 10, 7, 0.6); backdrop-filter: blur(16px); border-bottom: 1px solid var(--color-border);` | About, Contact sections |

Key characteristics:
- Both use dark, semi-transparent backgrounds over the gradient body
- `backdrop-filter: blur()` creates the frosted-glass effect
- `.glass-section` adds a faint bottom border to visually separate sections

## Motion Principles

### Transition Durations

| Duration    | Used In                                                        |
| ----------- | -------------------------------------------------------------- |
| `200ms`     | Button hover, link color changes, scroll-spy active state, input focus, scale transforms, icon/link hover |
| `300ms`     | Navbar height change, mobile menu open/close, card hover lift, pill hover, ScrollToTop visibility, section transitions |
| `500ms`     | Card hover overlay fade-in                                     |
| `800ms`     | Scroll reveal animation (opacity + translateY)                 |

### Timing Functions

| Function         | Cubic Bezier                                   | Used In                                                   |
| ---------------- | ---------------------------------------------- | --------------------------------------------------------- |
| `ease-smooth`    | `cubic-bezier(0.4, 0, 0.2, 1)` (custom alias) | Card hover, mobile menu, pill hover, ScrollToTop, hamburger animation |
| `ease-reveal`    | `cubic-bezier(0.21, 1.02, 0.47, 0.98)` (custom alias) | Scroll reveal `.reveal` class                      |
| `ease` (default) | `cubic-bezier(0.25, 0.1, 0.25, 1)`            | CV button pulse keyframe                                |
| `duration-200`   | (default `ease`)                                | Button hover, link color changes, icon hover           |

### Keyframe Animations

Only one custom keyframe exists:

```css
@keyframes cv-pulse {
  0%   { transform: scale(1); }
  40%  { transform: scale(1.06); }
  100% { transform: scale(1); }
}
```

Applied to `.btn-cv:active` with a 0.35s duration. Disabled when `prefers-reduced-motion: reduce`.

### Scroll Reveal

The `.reveal` class (defined in `src/index.css`) provides a consistent scroll-triggered fade-in:

```css
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition:
    opacity 800ms cubic-bezier(0.21, 1.02, 0.47, 0.98),
    transform 800ms cubic-bezier(0.21, 1.02, 0.47, 0.98);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

Triggered by the `useScrollReveal` hook (IntersectionObserver, threshold `0.2`). Applied to the `About`, `Skills`, `Projects`, and `Contact` sections.

### Reduced Motion

A global `prefers-reduced-motion` media query in `index.css` disables all animations and transitions:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

## Accessibility

### Focus Styles

A global `:focus-visible` rule is defined in `index.css` for all elements:

```css
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

Form inputs additionally use `focus:border-primary focus:ring-2 focus:ring-focus-ring` (`--color-focus-ring`) when not in an error state.

### Contrast

- Light text (`#ffffff` / `#a3927e`) on dark backgrounds (`#110a07` / `#27170f`)
- Orange `#f1841c` on dark brown `#2d1f14` for primary button text meets contrast requirements
- Error text in `red-500` (`#ef4444`) on dark backgrounds
- Warning text in `amber-400` (`#fb923c`) on dark backgrounds

### ARIA

Observed ARIA usage across components:

| Attribute              | Component         | Purpose                               |
| ---------------------- | ----------------- | ------------------------------------- |
| `aria-current="page"`  | Navbar links      | Marks active section link             |
| `aria-expanded`        | Navbar hamburger  | Mobile menu open state                |
| `aria-label`           | Hamburger, social links, ScrollToTop | Descriptive labels for icon-only controls |
| `aria-hidden`          | Navbar nav list   | Hides mobile nav when closed          |
| `aria-invalid`         | Form inputs       | Marks invalid fields after touch      |
| `role="alert"`         | Error/status messages | Announces validation or status changes |

### Semantic HTML

- Skip-to-content link as first tabbable element (`href="#main-content"`)
- Landmark elements: `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`, `<form>`
- `<h1>`–`<h3>` hierarchy respected
- `label` elements properly associated with `htmlFor`/`id`
- Icon-only links use `aria-label`
- Tech tags use `<li>` inside `<ul>` for proper list semantics

## Core UI Elements

### Buttons

**Component:** `src/components/ui/Button.tsx`

The `Button` component renders an `<a>` element styled as a button. It has three variants:

**Shared base styles (all variants):**
```
inline-block rounded-md px-7 py-3 font-body text-base font-medium no-underline
transition-all duration-200 hover:scale-[1.02]
```

**Variant-specific styles:**

| Variant    | Default State                                              | Hover State                                              |
| ---------- | ---------------------------------------------------------- | -------------------------------------------------------- |
| `primary`  | `border-2 border-primary bg-primary text-on-primary`       | `hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25` |
| `secondary`| `border border-primary bg-transparent text-primary`        | `hover:bg-primary hover:text-on-primary hover:shadow-lg hover:shadow-primary/20` |
| `cv`       | `border border-text-secondary bg-transparent text-text-secondary btn-cv` | `hover:bg-text-secondary hover:text-white hover:shadow-lg hover:shadow-text-secondary/15` |

- The `btn-cv` class adds a pulse animation on `:active` (see Keyframe Animations section).
- The submit button in the Contact form uses a standalone style (not the `Button` component) with `hover:brightness-110` instead of `hover:bg-primary-hover`, plus a `hover:scale-[1.02]` on an already `w-full` button.

### Forms

**Component:** `src/components/sections/Contact.tsx`

**Input base style** (shared by text, email, and textarea):

```tsx
const inputBase =
  "w-full rounded-md border bg-surface px-4 py-3 font-body text-base text-text-primary transition-colors duration-200 placeholder:text-text-secondary/50 disabled:cursor-not-allowed disabled:opacity-60"
```

**Default input state:** `border-border focus:border-primary focus:ring-2 focus:ring-focus-ring`
**Error input state:** `border-red-500 focus:border-red-500` (applied when `touched && errors[field]`)

- Labels use `text-sm font-medium text-text-primary` with `mb-1.5`.
- Error messages use `text-sm text-red-500` with `role="alert"` and `mt-1`.
- Placeholders use `placeholder:text-text-secondary/50`.
- Disabled state applies `opacity-60` and `cursor-not-allowed`.
- The form uses `noValidate` to suppress browser-native validation.
- The submit button is a `<button>` (not the `Button` component) with `w-full` and `hover:brightness-110`.

### Cards

**Component:** `src/components/ui/ProjectCard.tsx`

Project cards are `<article>` elements with:
- `rounded-2xl border border-border bg-surface p-8 shadow-sm`
- Flex column layout with `gap-4`
- Hover: `hover:-translate-y-2 hover:border-primary-soft hover:shadow-glow` (300ms `ease-smooth`)
- On hover, a gradient overlay fades in via `group-hover:opacity-100` with 500ms transition:
  ```css
  bg-gradient-to-t from-primary-soft/30 via-transparent to-transparent
  ```
- Title: `font-heading text-lg font-medium text-text-primary`
- Description: `text-[0.95rem] leading-relaxed text-text-secondary`
- Tech tags: `<li>` elements with `rounded-lg bg-accent-soft px-[0.8rem] py-[0.4rem] text-xs font-semibold text-accent`
- GitHub link: `text-[0.9rem] font-medium text-accent` with `hover:text-primary hover:scale-[1.02]`

**Skill category cards** (in Skills section) use a similar pattern:
- `rounded-2xl border border-border bg-surface p-6 shadow-sm`
- Flex column with `gap-3`
- Icon in `text-lg text-accent`
- Category heading: `font-heading text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-text-secondary`
- Divider `<hr>` with `border-border`

### Pills / Badges

**Component:** `src/components/ui/SkillPill.tsx`

```css
inline-block max-w-[calc(100%-1.5rem)] break-words cursor-default
rounded-full border border-accent/25 bg-accent-soft
px-[0.85rem] py-[0.35rem] font-body text-sm font-medium text-accent
transition-all duration-300 ease-smooth
hover:scale-105 hover:bg-accent hover:text-white hover:shadow-glow
```

Pills have a two-state visual:
- **Default:** Transparent background with accent border/color
- **Hover:** Solid accent fill with white text and glow shadow

Tech tags in ProjectCard are similar (rounded-lg, smaller text-xs) but with no hover effect.

### Navigation

**Component:** `src/components/layout/Navbar.tsx`

**Desktop (lg+):**
- Horizontal row layout: `lg:flex lg:flex-row lg:gap-8`
- Links: `text-[0.95rem] no-underline transition-all duration-200 hover:text-primary hover:tracking-wide`
- Active link: `font-semibold text-primary` with `aria-current="page"`
- Logo: `font-heading text-[1.2rem] font-bold text-primary`
- Background: `.glass-bg` (`rgba(39, 23, 15, 0.8)` + `backdrop-filter: blur(12px)`)
- When scrolled (`useScrolledNav` returns true): height shrinks from `h-[72px]` to `h-16`, adds `border-b border-border/5 shadow-sm`

**Mobile (< lg):**
- Hamburger button (three `<span>` bars, animates to X when open). Uses `rounded-sm` bars of `h-[2px] w-6`.
- Menu slides down as a `absolute` full-width column with `bg-surface p-6 shadow-md`.
- Transitions: `opacity` + `translateY` with 300ms `ease-smooth`.
- Closes on outside click (`mousedown` listener) or Escape key.
- Non-active links have `tabIndex={-1}` when menu is closed.
- `aria-hidden` on the `<ul>` reflects visibility.

### Icons

- **Library:** Font Awesome 6.5.1 (Free) loaded via CDN `<link>` in `index.html`.
- **Usage pattern:** `<i className="fa-brands fa-github" />` or `<i className="fa-solid fa-code" />`
- **Icon categories observed:**
  - `fa-brands fa-github`, `fa-linkedin`, `fa-instagram` — social links
  - `fa-solid fa-code` — Languages category
  - `fa-solid fa-globe` — Web category
  - `fa-solid fa-screwdriver-wrench` — Tools category
  - `fa-solid fa-lightbulb` — Concepts category
  - `fa-solid fa-tag` — fallback category icon
- **Styling:** Icons use Tailwind text color/size utilities (`text-lg`, `text-[1.2rem]`, `text-accent`, `text-text-secondary`). No custom icon styling beyond color and size.

### Hover States (Consistent Patterns)

All interactive elements follow one of these hover patterns:

| Pattern                  | Applied To                                                   |
| ------------------------ | ------------------------------------------------------------ |
| `hover:scale-[1.02]`     | All Button variants, submit button, GitHub link              |
| `hover:scale-105`        | SkillPill                                                    |
| `hover:scale-110`        | ScrollToTop button, social icon links, footer social icons   |
| `hover:-translate-y-2`   | ProjectCard                                                  |
| `hover:text-primary`     | Navbar links, footer nav links, footer social icons, social icon links in Hero |
| `hover:bg-primary`       | Secondary Button (switches to solid)                         |
| `hover:bg-primary-hover` | Primary Button                                               |
| `hover:shadow-lg`        | All Button variants                                          |
| `hover:shadow-glow`      | ProjectCard, SkillPill                                       |
| `hover:brightness-110`   | Contact form submit button                                   |
| `hover:opacity-90`       | ErrorBoundary reload button                                  |
| `hover:border-primary-soft` | ProjectCard                                              |
| `hover:tracking-wide`    | Navbar links                                                 |

## Gradients

Two gradient utilities are defined in `src/index.css`:

### `.gradient-text`

```css
background: linear-gradient(135deg, #f1841c, #e8a34a);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

Used on the hero name `<h1>`. Creates a warm orange-to-gold text gradient.

### `.gradient-hero`

```css
background: radial-gradient(
  ellipse 80% 60% at 50% -20%,
  var(--color-primary-soft) 0%,
  transparent 70%
);
```

Used on the hero `<section>`. Creates a soft orange glow emanating from the top-center.

### Body Gradient

```css
body {
  background: linear-gradient(180deg, var(--color-background) 0%, var(--color-surface) 100%);
}
```

A subtle top-to-bottom dark gradient applied to the page body.

### Card Hover Overlay

```css
bg-gradient-to-t from-primary-soft/30 via-transparent to-transparent
```

A Tailwind gradient that fades from primary-soft at the bottom to transparent. Only visible on ProjectCard hover.

## Component Styling Rules

### Composition Over Inheritance

- All styling is applied directly as Tailwind utility classes in JSX. No CSS inheritance chains or `@apply` directives are used.
- Utility classes are composed inline, not extracted into reusable CSS classes (except for effects that Tailwind cannot express: `.glass-bg`, `.gradient-text`, `.reveal`, `.btn-cv`).

### Tailwind First, Custom CSS When Necessary

Custom CSS is used only for:
- CSS custom property definitions (`:root`)
- Backdrop-filter glass effects (not expressible as Tailwind utilities in v3)
- Gradient text (not natively supported by Tailwind)
- Keyframe animations
- Scroll reveal classes (require class-based JS hook)
- Global `:focus-visible` style
- `prefers-reduced-motion` media query

### Consistent Layout Container

The project uses a `max-w-container` custom value of `1000px` (set in `tailwind.config.js`). This is applied via `mx-auto max-w-container` (or inline `mx-auto max-w-[...]`) on all section wrappers and the navbar inner div.

### Section Patterns

Every page section follows this structure:
```
<section id="..." className="reveal [glass-section|bg-background|bg-surface] py-20">
  <div className="mx-auto max-w-container px-4 [md:px-8]">
    <h2 className="font-heading text-3xl font-semibold ... md:text-4xl">
      Section Title
    </h2>
    ...content...
  </div>
</section>
```

## Design Do's and Don'ts (Derived from Code)

| Do                                                               | Don't                                                          |
| ---------------------------------------------------------------- | -------------------------------------------------------------- |
| Use `font-heading` for all headings and `font-body` for UI text  | Use raw `font-family` in component files                       |
| Use semantic color tokens (`bg-primary`, `text-text-secondary`)  | Apply hex values directly in JSX                               |
| Apply `reveal` class to sections for scroll-triggered animation  | Build custom scroll animations per component                   |
| Use the `Button` component for all CTA links                     | Write raw `<a>` with button styles elsewhere                   |
| Use `transition-all duration-200` for micro-interactions         | Animate unrelated properties together (use `transition-colors` when only color changes) |
| Place interactive elements on `z-10` above card overlays         | Forget `pointer-events-none` on decorative overlays            |
| Add `aria-label` to icon-only links and buttons                  | Leave icon-only controls without accessible labels             |
| Respect `prefers-reduced-motion` for all animations              | Animate `width`, `height`, `top`, `left` (causes layout reflow)|

## Edge Cases

- **Formspree endpoint missing:** The contact form shows an amber warning and disables the submit button. All styling uses `bg-amber-900/20` and `text-amber-400`.
- **Error state (form submission failure):** Shows `bg-red-900/20` alert with `text-red-400`.
- **Success state:** Shows `bg-accent-soft` alert with `text-accent`.
- **No JavaScript:** The page renders server-side via Vite's static build, but all interactive features (form submission, scroll reveal, scroll-to-top) require JavaScript.
