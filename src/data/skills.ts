export interface SkillCategory {
  name: string
  items: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    items: ["JavaScript", "TypeScript"],
  },
  {
    name: "Web",
    items: ["HTML", "CSS"],
  },
  {
    name: "Tools",
    items: ["Git", "GitHub", "VS Code"],
  },
  {
    name: "Concepts",
    items: ["Object-Oriented Programming", "Data Structures", "Problem Solving"],
  },
]
