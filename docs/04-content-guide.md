# Content Guide

> This document tells you exactly which file to edit for every piece of visible content on the site. No coding experience required beyond basic text editing.

## Quick Reference

| I want to change…                     | Edit this file                                     |
| ------------------------------------- | -------------------------------------------------- |
| Hero name or tagline                  | `src/components/sections/Hero.tsx`                 |
| About Me paragraphs                   | `src/components/sections/About.tsx`                |
| Skills (categories & items)           | `src/data/skills.ts`                               |
| Skills category icons                 | `src/components/sections/Skills.tsx`               |
| Education & Training content          | `src/data/education.ts`                            |
| Project list                          | `src/data/projects.ts`                             |
| Navigation link labels or order       | `src/data/navigation.ts`                           |
| Contact links (email, social)         | `src/data/contact.ts`                              |
| Footer copyright year                 | `src/components/layout/Footer.tsx`                 |
| Footer social icon links              | `src/components/layout/Footer.tsx`                 |
| Contact form placeholder text         | `src/components/sections/Contact.tsx`              |
| Contact Formspree endpoint            | `.env`                                             |
| Browser tab title                     | `index.html` (the `<title>` tag)                   |
| Page meta description                 | `index.html` (the `meta` description tags)         |
| Open Graph / Twitter card image       | `public/og-image.png`                              |
| Profile photo                         | `public/images/profile.jpg`                        |
| Downloadable CV / resume              | `public/CV File/Abdallah Hassoun.pdf`              |
| Favicon                               | `public/favicon.svg` and `public/favicon_io/`      |
| 404 page text                         | `public/404.html`                                  |

---

## Navigation Links

**File:** `src/data/navigation.ts`

Each link has two fields:

```ts
{ label: "About", href: "#about" }
```

| Field   | What to put                          | Example                |
| ------- | ------------------------------------ | ---------------------- |
| `label` | The text a visitor sees in the menu  | `"Projects"`           |
| `href`  | The anchor ID it scrolls to (must start with `#` and match a section `id` in the HTML) | `"#projects"` |

**Rules:**
- The `href` value (without the `#`) must match the `id` attribute on a `<section>` element. Current sections: `#hero`, `#about`, `#skills`, `#projects`, `#education`, `#contact`.
- The order in the array is the order shown on desktop and in the mobile menu.
- Add or remove items by adding/removing objects in the array.

---

## Skills

**File:** `src/data/skills.ts`

Skills are grouped into categories. Each category has a name and an array of skill names:

```ts
{
  name: "Languages",
  items: ["JavaScript", "TypeScript"],
}
```

**To add a new category:**
1. Add a new object to the `skillCategories` array.
2. If you want an icon for it, also update the `categoryIcons` map in `src/components/sections/Skills.tsx` (see next section).

**To add or remove a skill:** Edit the `items` array for its category. Each item is a plain string.

### Category Icons

**File:** `src/components/sections/Skills.tsx` (lines 4–9)

Each category name can be mapped to a Font Awesome icon class. The current mapping:

| Category   | Icon Class                     |
| ---------- | ------------------------------ |
| Languages  | `fa-solid fa-code`             |
| Web        | `fa-solid fa-globe`            |
| Tools      | `fa-solid fa-screwdriver-wrench` |
| Concepts   | `fa-solid fa-lightbulb`        |

**To add an icon for a new category:** Add a new entry to the `categoryIcons` object:
```ts
const categoryIcons: Record<string, string> = {
  ...
  "Your New Category": "fa-solid fa-robot",
}
```
If a category has no entry in the map, it falls back to `fa-solid fa-tag`.

Font Awesome icon classes can be found at https://fontawesome.com/icons.

---

## Projects / Portfolio Items

**File:** `src/data/projects.ts`

Each project has four fields:

```ts
{
  title: "Workly — Service Marketplace",
  description: "A modern, responsive service marketplace homepage prototype...",
  tech: ["HTML", "CSS"],
  githubUrl: "https://github.com/ahdevworker03/Workly-Homepage-Build-Plan",
}
```

| Field         | What to put                                                | Required |
| ------------- | ---------------------------------------------------------- | -------- |
| `title`       | Project name                                                | Yes      |
| `description` | Short summary (1–3 sentences)                               | Yes      |
| `tech`        | Array of technology names shown as tags                     | Yes      |
| `githubUrl`   | Full URL to the GitHub repository (must start with `https://`) | Yes      |

**Rules:**
- Descriptions are plain text (no HTML or Markdown).
- Tech tags are rendered as small accent-colored pills. Order matters — display order follows the array.
- The order of projects in the array is the display order on the page.
- There is currently no field for a live demo URL or screenshot. To add one, a code change is required.

---

## Contact Links

**File:** `src/data/contact.ts`

```ts
{ label: "Instagram", url: "https://www.instagram.com/abdallahhassoun.dev/" }
```

| Field   | What to put                              | Example                                         |
| ------- | ---------------------------------------- | ----------------------------------------------- |
| `label` | Button text                               | `"Send Email"`                                  |
| `url`   | Full URL (use `mailto:` for email links)  | `"mailto:ahdevworker03@gmail.com"`              |

**Rules:**
- URLs starting with `mailto:` open the user's email client. All others open in a new tab.
- The order in the array is the display order.
- These links appear below the contact form under "Or reach out directly:".

---

## Hero Section

**File:** `src/components/sections/Hero.tsx`

All hero text is hardcoded in this file. Editable lines:

| Content              | Line(s) | What to change                                             |
| -------------------- | ------- | ---------------------------------------------------------- |
| Pre-heading text     | 30–32   | Change the text inside `<p>` (e.g., "Hi, I'm")             |
| Your name            | 33–34   | Change the text inside `<h1>`                              |
| Tagline / subtitle   | 36–38   | Change the text inside the first `<p>` after the name      |
| Description          | 39–42   | Change the text inside the second `<p>` after the name     |
| CTA button 1 text    | 49      | "View My Projects"                                         |
| CTA button 2 text    | 56      | "Get In Touch"                                             |
| CTA button 3 text    | 64      | "Download CV"                                              |
| CTA button 3 href    | 60      | Path to the CV file (e.g., `/CV File/Abdallah Hassoun.pdf`)|
| Social links (hero)  | 3–14    | The `socialLinks` array with `label`, `url`, and `icon`    |

### Profile Photo

**File (image):** `public/images/profile.jpg`

**To update:** Replace the file at this path with a new image. The image is referenced in `Hero.tsx` at line 24 as `/images/profile.jpg`.

**Recommended dimensions:** 280×280 px or larger (it displays at 120×120 on mobile, 140×140 on desktop). Use a square, headshot-style photo.

---

## About Section

**File:** `src/components/sections/About.tsx`

Two hardcoded paragraphs. Each is a `<p>` element inside the section.

- **Heading:** "About Me" (line 6)
- **Paragraph 1:** lines 9–13
- **Paragraph 2:** lines 15–20

To change the text, edit the content between the `<p>` tags. To add or remove paragraphs, add or remove `<p>` elements.

---

## Footer

**File:** `src/components/layout/Footer.tsx`

### Copyright Line (line 8–9)

```
&copy; 2026 Abdallah Hassoun.
```
Update the year or name as needed. `&copy;` renders as the © symbol.

### Social Icon Links (lines 22–49)

Three hardcoded social links (Instagram, LinkedIn, GitHub). Each is an `<a>` element with:
- `href` — the profile URL
- `aria-label` — accessible label
- Icon inside (`<i className="fa-brands fa-..." />`)

To add a new social icon, copy one of the existing `<a>` blocks and change the `href`, `aria-label`, and icon class. Font Awesome brand icon classes follow the pattern `fa-brands fa-<name>`.

### Navigation Links (lines 11–20)

These are **not** hardcoded — they automatically render from `src/data/navigation.ts`. To add/remove/reorder footer nav links, edit `src/data/navigation.ts` (see Navigation section above).

---

## Education & Training

**File:** `src/data/education.ts`

This file contains two exports:

### Education (single object)

```ts
{
  institution: "Lebanese International University (LIU)",
  location: "Tripoli, Lebanon",
  degree: "Bachelor of Science in Computer Science",
  expectedGraduation: "July 2028",
  status: "Second-Year Student",
  gpa: "3.08 / 4.00",
}
```

| Field               | What to put                                      | Example               |
| ------------------- | ------------------------------------------------ | --------------------- |
| `institution`       | University or school name                         | `"MIT"`               |
| `location`          | City and country                                 | `"Cambridge, USA"`    |
| `degree`            | Full degree name                                 | `"BSc in CS"`         |
| `expectedGraduation`| Expected graduation date                         | `"June 2025"`         |
| `status`            | Current standing                                 | `"Senior"`            |
| `gpa`               | GPA string (or `"N/A"` if not applicable)         | `"3.5 / 4.0"`         |

### Training Items (array)

Each training/coursework item:

```ts
{
  title: "Understanding TypeScript",
  provider: "Udemy",
  instructor: "Maximilian Schwarzmüller",
  status: "Completed",
  certificateUrl: "https://...",
}
```

| Field            | Required | What to put                            | Example                     |
| ---------------- | -------- | -------------------------------------- | --------------------------- |
| `title`          | Yes      | Course or training name                | `"React – The Complete Guide"` |
| `location`       | No       | Physical location (onsite training)    | `"Nahr al-Bared, Lebanon"`  |
| `description`    | No       | Key learnings as plain text            | `"Covered HTML, CSS, Git"`  |
| `duration`       | No       | Length of the program                  | `"30 Hours"`                |
| `provider`       | No       | Platform or organization               | `"Udemy"`                   |
| `instructor`     | No       | Instructor name                        | `"Maximilian Schwarzmüller"`|
| `status`         | Yes      | `"Completed"` or `"Ongoing"`           | `"Ongoing"`                 |
| `certificateUrl` | No       | Full URL to the certificate            | `"https://..."`             |

**Rules:**
- Use `"Completed"` for finished courses and `"Ongoing"` for in-progress ones.
- Certificate URLs open in a new tab. Only include if a verifiable certificate exists.
- The order in the array is the display order on the page.

---

## Contact Form

**File:** `src/components/sections/Contact.tsx`

### Form Text

| Content                   | Line(s) | Notes                              |
| ------------------------- | ------- | ---------------------------------- |
| Section heading           | 102–103 | "Get In Touch"                     |
| Section description       | 105–108 | Paragraph below the heading        |
| Name field placeholder    | 125     | `placeholder="Your name"`          |
| Email field placeholder   | 147     | `placeholder="your@email.com"`     |
| Message field placeholder | 169     | `placeholder="Your message..."`    |
| Submit button text        | 207     | `"Send Message"` (changes to "Sending..." during submission) |
| Success message           | 113     | "Message sent! I'll get back to you soon."              |
| Error message             | 198     | "Something went wrong. Please try again or email me directly." |
| Config missing warning    | 189     | "The contact form is not configured yet. Please email me directly using the links below." |

### Validation Error Messages (lines 24–34, in the `validate` function)

| Field   | Error                    | Condition                   |
| ------- | ------------------------ | --------------------------- |
| name    | "Name is required"       | Field is empty              |
| email   | "Email is required"      | Field is empty              |
| email   | "Please enter a valid email" | Invalid email format    |
| message | "Message is required"    | Field is empty              |
| message | "Message must be at least 10 characters" | Fewer than 10 characters |

### Formspree Integration

**Environment variable:** `VITE_FORMSPREE_ENDPOINT` in `.env`

The contact form sends a POST request to this endpoint. The current value:

```
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xwvgppwo
```

**To change the Formspree form:**
1. Go to https://formspree.io and create a new form.
2. Copy the form endpoint URL.
3. Open `.env` and replace the value.
4. Also update `.env.example` with the new placeholder so other developers know the variable is needed.

If the variable is missing or empty, the form displays an amber warning and the submit button is disabled.

---

## Metadata & SEO

**File:** `index.html`

Edit the content inside the `<head>` tag:

| Tag                        | Line | Current Value                                               |
| -------------------------- | ---- | ----------------------------------------------------------- |
| `<title>`                  | 35   | `Abdallah Hassoun — Portfolio`                              |
| `<meta name="description">`| 25   | `Abdallah Hassoun — First-year CS student and aspiring software engineer. Portfolio of web development projects, skills, and contact information.` |
| `<meta property="og:title">` | 26 | `Abdallah Hassoun — Portfolio`                              |
| `<meta property="og:description">` | 27 | `First-year CS student. Web developer. Building things to learn.` |
| `<meta property="og:image">` | 28  | `https://www.abdallahhassoun.com/og-image.png`              |
| `<meta property="og:url">` | 29    | `https://www.abdallahhassoun.com/`                          |
| `<meta name="twitter:title">` | 32 | `Abdallah Hassoun — Portfolio`                             |
| `<meta name="twitter:description">` | 33 | `First-year CS student. Web developer.`                 |
| `<meta name="twitter:image">` | 34  | `https://www.abdallahhassoun.com/og-image.png`              |

**Rules:**
- The Open Graph URL and image must be absolute URLs (starting with `https://`).
- The `og:image` should point to the actual deployed domain, not a local path.
- When you change the domain, update `og:url` and all `og:image` / `twitter:image` paths.

---

## Open Graph Image

**File:** `public/og-image.png`

This is the image shown when the site is shared on social media (LinkedIn, Twitter, Slack, etc.).

**To update:** Replace the file at this path. Keep the same filename (`og-image.png`) or update the path in `index.html`.

**Recommended dimensions:** 1200×630 px (the standard OG image ratio).

---

## CV / Resume File

**File:** `public/CV File/Abdallah Hassoun.pdf`

**To update:** Replace the PDF file at this path. The download button in the Hero section is hardcoded at `src/components/sections/Hero.tsx` line 60:

```tsx
href="/CV File/Abdallah Hassoun.pdf"
download="Abdallah-Hassoun-CV"
```

If you rename the file or change the path, update the `href` value in `Hero.tsx` to match.

---

## Favicon

**Primary file:** `public/favicon.svg`
**Fallback formats:** `public/favicon_io/` (`.ico`, `16x16.png`, `32x32.png`, `apple-touch-icon.png`, `android-chrome-*`)

All references are in `index.html` (lines 5–23).

**To update:** Replace the files in `public/favicon_io/` with your own favicon set (use a favicon generator like https://realfavicongenerator.net). Keep the same filenames or update the `<link>` tags in `index.html`.

---

## 404 Page

**File:** `public/404.html`

A standalone HTML page served by Vercel for any route that doesn't exist. Editable content:

| Element           | Line(s) | Current Text                                      |
| ----------------- | ------- | ------------------------------------------------- |
| Page title        | 6       | `404 — Abdallah Hassoun`                          |
| Heading           | 91      | `404`                                             |
| Description       | 92      | `Page not found. The link you followed may be broken or the page has been moved.` |
| Button text       | 93      | `Back to Home`                                    |

---

## Environment Variables

**File:** `.env` (live values) / `.env.example` (template)

| Variable                  | Purpose                                          | Used In                        |
| ------------------------- | ------------------------------------------------ | ------------------------------ |
| `VITE_FORMSPREE_ENDPOINT` | Formspree form endpoint for the contact form POST | `src/components/sections/Contact.tsx` (line 5) |

**To set up locally:**
1. Copy `.env.example` to `.env`.
2. Replace `https://formspree.io/f/your-form-id` with your actual Formspree endpoint URL.

**Note:** Vite exposes environment variables prefixed with `VITE_` to client-side code via `import.meta.env`.

---

## Content Not Currently Editable Via Data Files

The following areas require editing component JSX because their text is hardcoded. They have no corresponding data file:

| Content                    | File                                      |
| -------------------------- | ----------------------------------------- |
| Hero name, tagline, description | `src/components/sections/Hero.tsx`    |
| About Me paragraphs        | `src/components/sections/About.tsx`       |
| Footer copyright text      | `src/components/layout/Footer.tsx`        |
| Footer social icon links   | `src/components/layout/Footer.tsx`        |
| Contact form placeholders  | `src/components/sections/Contact.tsx`     |
| Contact form success/error/warning messages | `src/components/sections/Contact.tsx` |
| Validation error messages  | `src/components/sections/Contact.tsx`     |
| Category icon mapping      | `src/components/sections/Skills.tsx`      |
| 404 page text              | `public/404.html`                         |

If any of these become content that changes frequently, they are candidates for moving into `src/data/` files.
