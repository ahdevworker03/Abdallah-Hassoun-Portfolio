export interface Project {
  title: string
  description: string
  tech: string[]
  githubUrl: string
  liveUrl?: string
  featured?: boolean
}
export const projects: Project[] = [
  {
    title: "Multi-tenant vehicle rental management SaaS",
    description:
      "A full-stack, multi-tenant SaaS built for vehicle rental businesses to manage customers, vehicles, rentals, payments, maintenance, expenses, tasks, and business insights from one platform. Built with React, TypeScript, Node.js, Express, PostgreSQL, Prisma, and Tailwind CSS, with authentication, role-based access, organization-level data isolation, an Arabic RTL interface, dashboards, reporting, and operational workflows. Uses a contract-first OpenAPI architecture to generate typed React Query clients and Zod validation schemas across the frontend and backend.",
    tech: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "Tailwind CSS"],
    githubUrl: "https://github.com/ahdevworker03/vehicle-rental-platform",
    featured: true,
  },
  {
    title: "Abdallah Hassoun — Portfolio",
    description:
      "A responsive personal portfolio built to showcase my software engineering projects, skills, education, and experience in one place. Developed with React, TypeScript, Vite, and Tailwind CSS, with reusable components, scroll-based interactions, a validated contact form, downloadable CV, and accessibility features including keyboard navigation and reduced-motion support. The site uses a data-driven structure that separates portfolio content from the UI, making projects and skills easy to maintain without changing component logic.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    githubUrl: "https://github.com/ahdevworker03/Abdallah-Hassoun-Portfolio",
    liveUrl: "https://www.abdallahhassoun.com/",
  },
]
