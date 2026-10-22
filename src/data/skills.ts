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
      "Responsive Web Design",
      "RTL Interfaces",
    ],
  },
  {
    name: "Backend & APIs",
    items: ["Node.js", "Express.js", "REST APIs", "OpenAPI", "Webhooks", "Meta WhatsApp Cloud API"],
  },
  {
    name: "Database",
    items: ["PostgreSQL", "Prisma ORM", "SQL", "Relational Database Design", "Migrations"],
  },
  {
    name: "Testing",
    items: ["Vitest", "React Testing Library", "Supertest", "Playwright"],
  },
  {
    name: "Engineering",
    items: [
      "Authentication & Authorization",
      "Multi-Tenancy",
      "API Validation",
      "Transactional Workflows",
      "Scheduled Automation",
    ],
  },
  {
    name: "Deployment & Tools",
    items: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "Docker",
      "Docker Compose",
      "Linux VPS",
      "Cloudflare Pages",
      "Cloudflare DNS",
      "Cloudflare R2",
      "Vercel",
      "Postman",
    ],
  },
  {
    name: "AI-Assisted Development",
    items: [
      "Coding Agents",
      "Planning & Implementation",
      "Debugging & Review",
      "Testing & Documentation",
      "Manual & Automated Verification",
    ],
  },
  {
    name: "Spoken Languages",
    items: ["Arabic — Native", "English — Good working proficiency"],
  },
]
