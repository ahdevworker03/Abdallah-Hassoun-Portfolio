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
    title: "Vehicle Rental Management SaaS",
    description:
      "A full-stack, multi-tenant vehicle rental SaaS built with React, Node.js, PostgreSQL, and Prisma. Features authentication, rental workflows, analytics, and a responsive Arabic RTL dashboard.",
    tech: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "Tailwind CSS"],
    githubUrl: "https://github.com/ahdevworker03/vehicle-rental-platform",
    featured: true,
  },
  {
    title: "Abdallah Hassoun — Portfolio",
    description:
      "A modern, responsive portfolio built with React, TypeScript, and Tailwind CSS to showcase my projects, skills, and journey as a software engineering student.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/ahdevworker03/Abdallah-Hassoun-Portfolio",
    liveUrl: "https://www.abdallahhassoun.com/",
  },
]
