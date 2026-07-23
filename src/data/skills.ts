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
    items: ["React", "Vite", "Tailwind CSS", "Responsive Design"],
  },
  {
    name: "Developer Tools",
    items: ["Git & GitHub", "npm", "pnpm", "Postman", "Vercel", "Linux (Ubuntu)"],
  },
  {
    name: "Core Concepts",
    items: [
      "Component-Based Architecture",
      "React Hooks",
      "State Management",
      "DOM Manipulation",
      "API Integration",
    ],
  },
]
