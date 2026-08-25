export interface SkillCategory {
  name: string
  items: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript"],
  },
  {
    name: "Frontend",
    items: [
      "React",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Responsive Web Design",
      "RTL Interfaces",
    ],
  },
  {
    name: "Backend",
    items: ["Node.js", "Express.js", "REST API Development"],
  },
  {
    name: "Database",
    items: ["PostgreSQL", "Prisma ORM", "SQL"],
  },
  {
    name: "Developer Tools",
    items: ["Git", "GitHub", "pnpm", "npm", "Postman", "Vercel", "Docker", "Linux (Ubuntu)"],
  },
  {
    name: "Core Concepts",
    items: [
      "Component-Based Architecture",
      "React Hooks",
      "State Management",
      "API Integration",
      "Database Design",
      "Authentication & Authorization",
      "Responsive Design",
      "Multi-Tenant Applications",
    ],
  },
]
