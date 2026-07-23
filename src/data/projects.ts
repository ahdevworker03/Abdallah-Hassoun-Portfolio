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
    title: "Car Rental Management System",
    description:
      "A frontend-first MVP for managing car rental businesses with an Arabic RTL mobile-first interface, built to validate the product before backend development.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "shadcn/ui"],
    githubUrl: "https://github.com/ahdevworker03/car-rental-management-system",
    liveUrl: "https://car-rental-management-system-car-re.vercel.app/",
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
