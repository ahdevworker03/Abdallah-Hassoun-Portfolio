const experience = {
  title: "Freelance Software Developer — WhatsApp Outreach Dashboard",
  date: "2026 · Paid Client Project",
  githubUrl: "https://github.com/ahdevworker03/whatsapp-business-automation",
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
  highlights: [
    "Built and deployed a full-stack WhatsApp outreach dashboard that lets the client import contacts, create campaigns, send messages, manage conversations, and automate follow-ups through the official Meta WhatsApp Cloud API.",
    "Implemented CSV/Excel lead import, inbound webhooks, CRM-style conversations, scheduled follow-up automation, and stop-on-human-reply behavior backed by PostgreSQL.",
    "Worked directly with the client to gather requirements, define the project scope and contract, iterate from feedback, validate messaging with real phone numbers, and deploy the completed system to the client's VPS within an 8-day delivery cycle.",
  ],
}

function Experience() {
  return (
    <section id="experience" className="reveal bg-background py-20">
      <div className="mx-auto max-w-container px-4 md:px-8">
        <h2 className="mb-10 font-heading text-3xl font-semibold leading-tight text-text-primary md:text-4xl">
          Experience
        </h2>
        <article className="rounded-2xl border border-border bg-surface p-6 shadow-sm md:p-8">
          <div className="mb-5 flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
            <div>
              <h3 className="font-heading text-lg font-semibold leading-relaxed text-text-primary">
                {experience.title}
              </h3>
              <p className="text-sm text-text-secondary">{experience.date}</p>
            </div>
            <a
              href={experience.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-accent no-underline hover:text-primary"
            >
              <i className="fa-brands fa-github" aria-hidden="true" />
              GitHub
            </a>
          </div>
          <ul className="mb-6 list-disc space-y-3 pl-5 text-sm leading-relaxed text-text-secondary">
            {experience.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
            {experience.tech.map((technology) => (
              <li
                key={technology}
                className="rounded-lg bg-accent-soft px-3 py-1.5 text-xs font-semibold text-accent"
              >
                {technology}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Experience
