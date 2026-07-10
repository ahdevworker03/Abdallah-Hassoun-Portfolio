# Gemini Project Context: Abdallah Hassoun Portfolio

This project is a clean, modern, and responsive personal portfolio website for **Abdallah Hassoun**, a Computer Science student. It serves as a central hub for showcasing skills, projects, and contact information.

## Project Overview

-   **Purpose:** Personal branding and project showcase.
-   **Core Technologies:**
    -   **HTML5:** Semantic structure.
    -   **CSS3:** Custom variables, Flexbox, and Grid for layout; BEM-inspired naming convention.
    -   **JavaScript/TypeScript:** Interactivity, theme switching, and scroll animations.
-   **Architecture:** Static frontend application with no build dependencies.

## Key Features

-   **Responsive Design:** Optimized for mobile, tablet, and desktop views.
-   **Dark/Light Mode:** Persistent theme preference stored in `localStorage`.
-   **Modern UI/UX:** Features a glassmorphism navbar, sophisticated color tokens, and elevation-based interactions (refined shadows).
-   **Fluid Animations:** Uses `Intersection Observer API` with custom cubic-bezier curves for natural entry reveals and active navigation highlighting.
-   **Interactive Components:** Functional hamburger menu, smooth scrolling, and a responsive "scroll-to-top" button.

## Directory Structure

```text
.
├── assets/
│   ├── CV File/         # Contains professional CV/Resume (PDF)
│   ├── favicon_io/      # Website favicons and manifest
│   └── images/          # Project screenshots and other images
├── index.html           # Main entry point and semantic structure
├── script.js            # Main logic: theme, nav, animations, scroll-top
└── style.css            # Global styles, variables, and responsive layout
```

## Development Guide

### Building and Running

Since this is a static project, no build or installation steps are required.

1.  **Local Development:** Open `index.html` directly in any modern web browser.
2.  **Recommended Workflow:** Use a live server extension (e.g., "Live Server" for VS Code) to see changes in real-time.
3.  **Deployment:** Optimized for hosting on GitHub Pages, Netlify, or Vercel.

### Development Conventions

-   **Styling:**
    -   Use CSS variables defined in `:root` and `[data-theme="dark"]` for colors, shadows, and transitions.
    -   Follow the BEM-like naming convention for components (e.g., `.component__element--modifier`).
    -   Prioritize mobile-first responsive design using media queries.
-   **JavaScript:**
    -   Write clean, modular Vanilla JS within `script.js`.
    -   Use `DOMContentLoaded` to ensure the DOM is ready before executing logic.
    -   Leverage modern browser APIs like `IntersectionObserver` for performance-efficient animations and `window.scrollY` for scroll-responsive UI.
-   **HTML:**
    -   Maintain semantic HTML structure for accessibility and SEO.
    -   Ensure `alt` tags are present for all images.

## Common Tasks

-   **Adding a Project:** Update the `<section class="projects">` in `index.html` with a new `<article class="project-card">`.
-   **Updating Skills:** Modify the lists within `<section class="skills">` in `index.html`.
-   **Modifying Colors:** Update the variables in the `:root` or `[data-theme="dark"]` blocks in `style.css`.
-   **Updating CV:** Replace the file in `assets/CV File/` and ensure the link in `index.html` points to the correct filename.
