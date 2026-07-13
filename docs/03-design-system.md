# Design System — Abdallah Hassoun Portfolio v2

> Status: Planning
> Purpose: Define visual language before implementation
> Principle: Elevate the current design, don't reinvent it

---

## 1. Design Philosophy

**Clean. Confident. Intentional.**

The current site is already clean and functional. v2 tightens spacing, deepens visual hierarchy, and applies a consistent glassmorphism layer. Nothing flashy. Everything purposeful.

Every visual decision should answer: _Does this make the content clearer or the experience smoother?_

---

## 2. Color System

### 2.1 Suggested Palette (Refined from Current)

The current palette works well. Suggested refinements:

| Token               | Current   | Proposed  | Reason                                              |
| ------------------- | --------- | --------- | --------------------------------------------------- |
| Primary             | `#1a56db` | `#2563eb` | Slightly more vibrant blue, better contrast on dark |
| Primary (dark mode) | `#60a5fa` | `#60a5fa` | Keep — already good                                 |
| Accent              | `#10b981` | `#10b981` | Keep — emerald green is distinctive                 |
| Background (light)  | `#fdfdfd` | `#fafafa` | Slightly warmer, less sterile                       |
| Background (dark)   | `#0b0e14` | `#0a0e14` | Keep — deep navy-black works                        |
| Surface (light)     | `#ffffff` | `#ffffff` | Keep — clean white cards                            |
| Surface (dark)      | `#161b22` | `#161b22` | Keep — GitHub-dark is familiar to devs              |

### 2.2 Full Color Tokens

```css
:root {
  /* Light mode */
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-primary: #2563eb;
  --color-primary-soft: rgba(37, 99, 235, 0.08);
  --color-accent: #10b981;
  --color-accent-soft: rgba(16, 185, 129, 0.08);
  --color-text-primary: #111827;
  --color-text-secondary: #4b5563;
  --color-border: rgba(0, 0, 0, 0.06);

  /* Glass effect */
  --color-glass-bg: rgba(255, 255, 255, 0.7);
  --color-glass-border: rgba(255, 255, 255, 0.3);
  --color-glass-shadow: rgba(0, 0, 0, 0.04);
}

[data-theme="dark"] {
  --color-background: #0a0e14;
  --color-surface: #161b22;
  --color-primary: #60a5fa;
  --color-primary-soft: rgba(96, 165, 250, 0.1);
  --color-accent: #34d399;
  --color-accent-soft: rgba(52, 211, 153, 0.1);
  --color-text-primary: #f9fafb;
  --color-text-secondary: #9ca3af;
  --color-border: rgba(255, 255, 255, 0.06);

  --color-glass-bg: rgba(22, 27, 34, 0.7);
  --color-glass-border: rgba(255, 255, 255, 0.06);
  --color-glass-shadow: rgba(0, 0, 0, 0.2);
}
```

# 2.3 Gradient

```css
/* Used for: hero name, section accents, hover states */
--gradient-primary: linear-gradient(
  135deg,
  var(--color-primary),
  var(--color-accent)
);
```

Single gradient reused throughout. No random gradient variations.

### 2.4 Usage Rules

- **Primary** — interactive elements (links, buttons, active states)
- **Accent** — decorative accents (gradient text, skill pills, hover glows)
- **Surface** — cards, about section, footer
- **Background** — page body, skills section, contact section
- **Text primary** — headings, body text
- **Text secondary** — eyebrow text, dates, captions, muted info
- **Border** — subtle separators, card borders

---

## 3. Typography

### 3.1 Font Stack

| Role     | Font               | Weights       | Usage                        |
| -------- | ------------------ | ------------- | ---------------------------- |
| Headings | Sora               | 400, 600, 700 | h1–h4, navbar logo           |
| Body     | DM Sans            | 400, 500, 700 | Paragraphs, buttons, UI text |
| Mono     | _(none currently)_ | —             | Code snippets if added later |

Loaded via Google Fonts CDN during migration. Self-hosting via `@fontsource` can be considered during the enhancements phase.

### 3.2 Type Scale (Refined)

| Level               | Current Size                 | Proposed Size                       | Element                 |
| ------------------- | ---------------------------- | ----------------------------------- | ----------------------- |
| h1 (hero name)      | 2.5rem → 3.5rem (responsive) | `text-5xl md:text-6xl lg:text-7xl`  | Hero name only          |
| h2 (section titles) | 1.8rem                       | `text-3xl md:text-4xl`              | "About", "Skills", etc. |
| h3 (subsection)     | 1.2rem                       | `text-xl md:text-2xl`               | Skill category names    |
| h4 (card titles)    | 1.1rem                       | `text-lg`                           | Project card titles     |
| Body                | 1rem (16px)                  | `text-base` (keep)                  | Paragraphs              |
| Body small          | —                            | `text-sm`                           | Tech tags, footer       |
| Eyebrow             | 0.9rem                       | `text-sm uppercase tracking-widest` | "Hi, I'm"               |
| Button              | 0.95rem                      | `text-sm md:text-base`              | CTA buttons             |

### 3.3 Line Heights

```
Headings:  leading-tight (1.25)
Body:      leading-relaxed (1.625)
UI/text:   leading-normal (1.5)
```

### 3.4 Font Weights

```
Regular:  400  → body text, UI elements
Medium:   500  → buttons, skill pills, nav links
Semi-bold: 600 → section titles, card titles
Bold:     700  → hero name
```

### 3.5 Typography Rules

- Section titles get `font-heading font-semibold`
- Body text gets `font-body text-secondary` (using text-secondary color)
- Hero name gets `font-heading font-bold gradient-text`
- No all-caps except eyebrow text
- No italic except for emphasis in about section

---

## 4. Spacing System

### 4.1 Section Spacing

| Space               | Value              | Usage                              |
| ------------------- | ------------------ | ---------------------------------- |
| Section padding (y) | `py-20 md:py-28`   | Top and bottom of each section     |
| Section padding (x) | `px-6 md:px-8`     | Horizontal padding inside sections |
| Container max-width | `max-w-[1000px]`   | Keep current container width       |
| Section gap         | `gap-16 md:gap-20` | Space between sections             |

### 4.2 Component Spacing

| Space             | Value        | Usage                               |
| ----------------- | ------------ | ----------------------------------- |
| Card padding      | `p-6 md:p-8` | Inside cards and surface containers |
| Card gap (grid)   | `gap-6`      | Between project/skill cards         |
| Element stack gap | `gap-4`      | Between heading and content         |
| Inline gap        | `gap-2`      | Between buttons, skill pills, tags  |
| Nav link gap      | `gap-8`      | Between navigation links            |

### 4.3 Spacing Philosophy

- **Generous but not wasteful** — sections breathe, content doesn't feel cramped
- **Consistent rhythm** — multiples of 4 (Tailwind's default scale)
- **Mobile reduces padding** — `px-6` on mobile, `px-8` on desktop
- **No section has more than 2 levels of nested spacing**

---

## 5. Component Design Tokens

### 5.1 Buttons

Three variants, consistent with current site.

#### Primary Button

```
bg:           --color-primary (#2563eb)
text:         white
padding:      px-6 py-3
radius:       rounded-lg
font:         font-body font-medium
hover:        bg slightly darker + slight scale
transition:   transition-all duration-200
```

#### Secondary Button (Outline)

```
bg:           transparent
border:       2px solid --color-primary
text:         --color-primary
padding:      px-6 py-3
radius:       rounded-lg
font:         font-body font-medium
hover:        bg fills with primary, text becomes white
transition:   transition-all duration-200
```

#### CV Button

```
bg:           transparent
border:       1px solid --color-border
text:         --color-text-secondary
padding:      px-6 py-3
radius:       rounded-lg
font:         font-body font-medium
hover:        border becomes primary, text becomes primary
transition:   transition-all duration-200
```

### 5.2 Cards (Projects)

```
bg:           --color-surface
border:       1px solid --color-border
radius:       rounded-xl
padding:      p-6
shadow:       shadow-sm
hover:        -translate-y-2 + shadow-lg + border becomes --color-primary-soft
transition:   transition-all duration-300 (smooth cubic-bezier)
```

#### Glass Card Variant (new)

```
bg:           --color-glass-bg
backdrop:     backdrop-blur-lg
border:       1px solid --color-glass-border
radius:       rounded-xl
padding:      p-6
shadow:       shadow-sm
```

**Usage rule**: Glass cards used sparingly — only for the About section and maybe Contact. Not every card.

### 5.3 Skill Pills

```
bg:           --color-accent-soft
text:         --color-accent
radius:       rounded-full
padding:      px-4 py-2
font:         font-body font-medium text-sm
hover:        scale-105 + bg intensifies slightly
transition:   transition-all duration-300
```

### 5.4 Tech Tags (Project Cards)

```
bg:           --color-primary-soft
text:         --color-primary
radius:       rounded-full
padding:      px-3 py-1
font:         font-body text-xs font-medium
no hover effect
```

### 5.5 Contact Links

```
Same as Secondary Button (outline)
Plus icon on the left (Font Awesome)
```

### 5.6 Navbar

```
position:     sticky top-0 z-50
bg:           --color-glass-bg
backdrop:     backdrop-blur-xl
border-bottom: 1px solid --color-glass-border
padding:      px-6 py-4
transition:   py-3 when scrolled (compact)
```

---

## 6. Glassmorphism Guidelines

### Where to use

| Element                    | Glass? | Reason                                |
| -------------------------- | ------ | ------------------------------------- |
| Navbar                     | ✅ Yes | Always visible, gives depth           |
| About section background   | ✅ Yes | Adds visual interest, breaks flatness |
| Contact section background | ✅ Yes | Bookend with navbar                   |
| Hero                       | ❌ No  | Clean, direct, no distraction         |
| Project cards              | ❌ No  | Cards already have hover lift         |
| Skills                     | ❌ No  | Flat is cleaner for lists             |
| Footer                     | ❌ No  | Solid surface grounds the page        |

### Rule of thumb

**Glass = persistent UI (navbar) or section backgrounds. Never on interactive elements (cards, buttons).**

### Glass Recipe

```css
.glass {
  background: var(--color-glass-bg);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--color-glass-border);
}
```

Dark mode automatically adjusts via CSS custom properties — no extra work.

---

## 7. Shadows

| Token         | Value                                | Usage                  |
| ------------- | ------------------------------------ | ---------------------- |
| `shadow-xs`   | `0 1px 2px rgba(0,0,0,0.04)`         | Subtle card rest state |
| `shadow-sm`   | `0 1px 3px rgba(0,0,0,0.06)`         | Cards, scrolled navbar |
| `shadow-md`   | `0 4px 6px rgba(0,0,0,0.07)`         | _(reserved)_           |
| `shadow-lg`   | `0 10px 25px rgba(0,0,0,0.08)`       | Card hover lift        |
| `shadow-glow` | `0 0 20px var(--color-primary-soft)` | Skill pill hover glow  |

Dark mode shadows are slightly more intense (Tailwind handles this with `dark:shadow-*`).

---

## 8. Borders & Radius

| Element         | Border Radius          |
| --------------- | ---------------------- |
| Cards           | `rounded-xl` (12px)    |
| Buttons         | `rounded-lg` (8px)     |
| Skill pills     | `rounded-full`         |
| Sections        | No radius (full width) |
| Navbar          | No radius (full width) |
| Inputs (future) | `rounded-lg`           |

**Border rule**: Subtle 1px borders on all cards and surface elements. Use `--color-border` token. No heavy borders anywhere.

---

## 9. Responsive Rules

### Breakpoints (Tailwind defaults)

| Prefix   | Width   | Usage                |
| -------- | ------- | -------------------- |
| _(none)_ | 0–767px | Mobile (base styles) |
| `md:`    | 768px+  | Tablet               |
| `lg:`    | 1024px+ | Desktop              |

### Responsive Behavior

| Element             | Mobile               | Tablet               | Desktop                  |
| ------------------- | -------------------- | -------------------- | ------------------------ |
| Hero name           | `text-5xl`           | `text-6xl`           | `text-7xl`               |
| Section title       | `text-3xl`           | `text-4xl`           | `text-4xl`               |
| Project grid        | 1 column             | 2 columns            | 3 columns                |
| Nav links           | Hidden (hamburger)   | Visible inline       | Visible inline           |
| CTA buttons         | Stacked vertical     | Inline row           | Inline row               |
| Section padding (y) | `py-16`              | `py-20`              | `py-28`                  |
| Section padding (x) | `px-4`               | `px-6`               | `px-8`                   |
| Container           | Full width - padding | Full width - padding | `max-w-[1000px]` mx-auto |

### Mobile-First Approach

All base styles are mobile. Tablet/desktop overrides use `md:` and `lg:` prefixes. No `max-width` media queries.

---

## 10. Animation Principles

### Philosophy

**Animations should feel native, not decorative.** Every motion has a purpose:

- Reveal content as user scrolls
- Provide feedback on interaction
- Guide attention, not distract from it

### Timing

| Duration | Easing                                 | Usage                                      |
| -------- | -------------------------------------- | ------------------------------------------ |
| 150ms    | ease                                   | Micro-interactions (button hover color)    |
| 200ms    | ease                                   | Button hover, link hover                   |
| 300ms    | `cubic-bezier(0.4, 0, 0.2, 1)`         | Card lift, navbar scroll, skill pill hover |
| 800ms    | `cubic-bezier(0.21, 1.02, 0.47, 0.98)` | Scroll reveal (sections)                   |

### Scroll Reveal (Improved)

Current: All sections reveal simultaneously when they enter viewport.

**Improvement**: Staggered reveals within sections.

```
Section enters viewport
  → Title fades in (0ms delay)
  → Content fades in (150ms delay)
  → Cards stagger (75ms between each card)
```

Same animation (fade-in-up, 800ms, custom cubic-bezier), just staggered for polish.

### Hover States

| Element           | Effect                                                    |
| ----------------- | --------------------------------------------------------- |
| Buttons (primary) | Background darkens,`scale: 1.02`                          |
| Buttons (outline) | Background fills with color, text inverts                 |
| Cards             | `translateY(-8px)`, shadow upgrades to `lg`, border glows |
| Skill pills       | `scale(1.05)`, background intensifies, soft glow          |
| Nav links         | Color shifts to primary                                   |
| Social icons      | Color shifts to primary,`scale: 1.1`                      |

### What NOT to animate

- No page transitions (over-engineering for a single page)
- No parallax (distracting, hurts accessibility)
- No auto-playing animations (user-triggered only)
- No scroll-jacking or smooth scroll overrides (respects browser default)
- No heavy framer-motion orchestration (CSS transitions + IntersectionObserver is sufficient)

---

## 11. Iconography

| Library              | Usage                                                             |
| -------------------- | ----------------------------------------------------------------- |
| Font Awesome (React) | Social icons (GitHub, LinkedIn, Instagram)                        |
| Font Awesome (React) | Email icon                                                        |
| Emoji or SVG         | Theme toggle (☀️/🌙 → replaced with proper icons in enhancements) |

**Rule**: Only load the 3 brand icons we actually use. Font Awesome React package is tree-shakeable.

---

## 12. What This Design System Replaces

| Current Issue                          | v2 Solution                                     |
| -------------------------------------- | ----------------------------------------------- |
| CSS variables scattered in`:root`      | Tailwind config + minimal custom properties     |
| Inconsistent naming (BEM + kebab-case) | Tailwind utilities everywhere, no naming needed |
| Hardcoded values repeated              | Design tokens enforced via Tailwind config      |
| Glassmorphism only on navbar           | Extended to About + Contact section backgrounds |
| No staggered animations                | Subtle stagger on scroll reveals                |
| H1 size jumps between breakpoints      | Smooth responsive scale                         |
| No design token for borders            | `--color-border` added                          |
| No glow effect tokens                  | `shadow-glow` added for pills                   |

---

## 13. Tailwind Config (Reference)

```javascript
// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Sora", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      colors: {
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        primary: {
          DEFAULT: "var(--color-primary)",
          soft: "var(--color-primary-soft)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          soft: "var(--color-accent-soft)",
        },
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        border: "var(--color-border)",
        glass: {
          bg: "var(--color-glass-bg)",
          border: "var(--color-glass-border)",
          shadow: "var(--color-glass-shadow)",
        },
      },
      maxWidth: {
        container: "1000px",
      },
      boxShadow: {
        glow: "0 0 20px var(--color-primary-soft)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        reveal: "cubic-bezier(0.21, 1.02, 0.47, 0.98)",
      },
    },
  },
  plugins: [],
};
```
