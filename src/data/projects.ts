export interface Project {
  title: string
  description: string
  tech: string[]
  githubUrl: string
}

export const projects: Project[] = [
  {
    title: "Workly — Service Marketplace",
    description:
      "A modern, responsive service marketplace homepage prototype designed to connect clients with skilled freelancers. Built with a focus on speed and clarity using pure CSS.",
    tech: ["HTML", "CSS"],
    githubUrl: "https://github.com/ahdevworker03/Workly-Homepage-Build-Plan",
  },
  {
    title: "Aurora Stay Landing Page",
    description:
      "Aurora Stay is a luxury-inspired hotel landing page built with HTML and CSS only. The design is modern, elegant, and responsive, with a calm premium tone throughout the layout.",
    tech: ["HTML", "CSS"],
    githubUrl: "https://github.com/ahdevworker03/Aurora-Stay-landing-page",
  },
  {
    title: "Bean & Craft Coffee",
    description:
      "A sophisticated frontend project for a premium coffee brand. Features a warm visual identity, glassmorphism, and elegant hover effects using modular Vanilla CSS.",
    tech: ["HTML", "CSS"],
    githubUrl: "https://github.com/ahdevworker03/BeanCraft-Coffe",
  },
]
