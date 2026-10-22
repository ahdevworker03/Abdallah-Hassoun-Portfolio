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
    title: "Markab — مَركب",
    description:
      "Production-ready multi-tenant vehicle rental SaaS for rental lifecycle operations, payments, maintenance, expenses, tasks, dashboards, and reports. Built with organization-level tenant isolation, role-based access, and a contract-first OpenAPI architecture, with automated regression testing and deployment work.",
    tech: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "OpenAPI", "Docker"],
    githubUrl: "https://github.com/ahdevworker03/markab",
    liveUrl: "https://markab-lb.com",
    featured: true,
  },
  {
    title: "WhatsApp Outreach Dashboard",
    description:
      "A deployed client dashboard for WhatsApp campaigns, contact management, conversations, and automated follow-ups using the official Meta WhatsApp Cloud API.",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Meta WhatsApp Cloud API",
      "Webhooks",
      "Linux VPS",
    ],
    githubUrl: "https://github.com/ahdevworker03/whatsapp-business-automation",
  },
  {
    title: "Content OS — AI-Assisted Content Production & Rendering System",
    description:
      "An AI-assisted content production system with structured workflows, reusable renderer models and layouts, and a React/TypeScript Studio for reviewing and editing carousel output. Includes deterministic PNG, PDF, and ZIP exports through an automated Playwright capture pipeline with render-integrity checks.",
    tech: ["React", "TypeScript", "Vite", "Playwright", "JSON-based Content Workflows"],
    githubUrl: "https://github.com/ahdevworker03/Content-OS",
  },
]
