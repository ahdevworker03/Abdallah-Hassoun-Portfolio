import type { Project } from "../../data/projects"

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex self-start flex-col overflow-hidden rounded-2xl border border-border bg-surface p-8 shadow-sm transition-all duration-300 ease-smooth hover:-translate-y-2 hover:border-primary-soft hover:shadow-glow">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-soft/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10 flex flex-col gap-4">
        <h3 className="m-0 font-heading text-lg font-medium text-text-primary">{project.title}</h3>

        <p className="text-[0.95rem] leading-relaxed text-text-secondary">{project.description}</p>
      </div>

      <div className="relative z-10 flex flex-col gap-4 pt-6">
        <ul className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-lg bg-accent-soft px-3 py-1.5 text-xs font-semibold text-accent"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:scale-[1.02] hover:opacity-90"
            >
              <i className="fa-solid fa-arrow-up-right-from-square text-xs" />
              Live Demo
            </a>
          )}

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-text-primary transition-all duration-200 hover:border-primary hover:text-primary"
          >
            <i className="fa-brands fa-github" />
            GitHub
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
