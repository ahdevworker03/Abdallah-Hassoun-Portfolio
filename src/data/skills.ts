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
      "HTML",
      "CSS",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "React",
      "Vite",
      "Responsive Web Design",
    ],
  },
  {
    name: "Developer Tools",
    items: ["Git", "GitHub", "npm", "VS Code", "Postman", "Vercel", "Linux (Ubuntu)"],
  },
  {
    name: "Core Concepts",
    items: [
      "Component-Based Architecture",
      "React Hooks",
      "State Management",
      "DOM Manipulation",
      "API Integration",
      "Object-Oriented Programming",
      "Data Structures & Algorithms",
    ],
  },
]
