# Abdallah Hassoun Portfolio

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%233178C6.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

A clean, modern, and responsive personal portfolio website built to showcase my journey as a Computer Science student. This project serves as a central hub for my skills, projects, and contact information.

## 🚀 Live Demo

[View Live Site](https://www.abdallahhassoun.com/)

## ✨ Features

- **Responsive Design:** Optimized for all screen sizes, from mobile to desktop.
- **Dark/Light Mode:** Seamless theme switching with persistent user preference using `localStorage`.
- **Mobile Hamburger Menu:** Collapsible navigation with accessible `aria-expanded` support.
- **Scroll Animations:** Smooth entry animations for sections using the `Intersection Observer API`.
- **Active Nav Highlighting:** Dynamically highlights the current section in the nav bar as you scroll.
- **Scroll-to-Top Button:** Appears after scrolling down, enabling one-click return to the top.
- **Glassmorphism Navbar:** Blurred, translucent navigation bar with scroll-aware styling.
- **Clean UI:** Professional typography (Sora + DM Sans), gradient text, and pill-shaped skill tags.
- **Direct CV Download:** Easy access to my professional resume.

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3 (Custom Properties, Flexbox, Grid, Glassmorphism)
- **Scripting:** TypeScript
- **Icons & Fonts:** Font Awesome 6, Google Fonts (Sora, DM Sans)
- **Deployment:** Vercel
- **Version Control:** Git & GitHub

## 📂 Project Structure

```text
.
├── .gitignore               # Ignored files and folders
├── package.json             # Project dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── vercel.json              # Vercel deployment configuration
├── index.html               # Main entry point and site structure
├── script.ts                # TypeScript source (interactivity and theme logic)
├── style.css                # Custom styling and theme definitions
└── assets/
    ├── CV File/             # Contains professional CV/Resume
    ├── favicon_io/          # Website favicons and manifest
    └── images/              # Project screenshots and images
```

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ahdevworker03/Abdallah-Hassoun-Portfolio.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd Abdallah-Hassoun-Portfolio
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Build the TypeScript source:**
   ```bash
   npm run build
   ```
5. **Open `index.html`:** You can open the file directly in your browser or use an extension like "Live Server" in VS Code.

## 📜 Available Scripts

| Command             | Description                                                   |
| ------------------- | ------------------------------------------------------------- |
| `npm run build`     | Compile TypeScript to JavaScript (`tsc`)                      |
| `npm run typecheck` | Check for type errors without emitting files (`tsc --noEmit`) |

## 🌐 Deployment

The project is deployed on **Vercel**. Pushes to the `main` branch are automatically deployed to production. The `vercel.json` configuration is minimal, using the root directory as the output.

To deploy your own copy:
1. Push your code to a GitHub repository.
2. Import the repository into [Vercel](https://vercel.com).
3. Vercel will auto-detect the static HTML output — no additional configuration needed.

## ✉️ Contact

- **Name:** Abdallah Hassoun
- **Email:** [ahdevworker03@gmail.com](mailto:ahdevworker03@gmail.com)
- **LinkedIn:** [Abdallah Hassoun](https://www.linkedin.com/in/ahdevworker03/)
- **GitHub:** [@ahdevworker03](https://github.com/ahdevworker03)
- **Twitter / X:** [@ahdevworker03](https://x.com/ahdevworker03)
- **Instagram:** [@ahdevworker03](https://www.instagram.com/ahdevworker03/)
