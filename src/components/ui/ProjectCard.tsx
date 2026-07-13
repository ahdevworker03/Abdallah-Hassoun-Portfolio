import type { Project } from "../../data/projects"

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-8 shadow-sm transition-all duration-300 ease-smooth hover:-translate-y-2 hover:border-primary-soft hover:shadow-lg">
      <h3 className="m-0 font-heading text-[1.05rem] font-semibold text-text-primary">
        {project.title}
      </h3>
      <p className="m-0 flex-1 text-[0.95rem] leading-relaxed text-text-secondary">
        {project.description}
      </p>
      <ul className="m-0 flex flex-wrap gap-[0.4rem] list-none p-0">
        {project.tech.map((tech) => (
          <li
            key={tech}
            className="rounded-lg bg-primary-soft px-[0.8rem] py-[0.4rem] text-xs font-semibold text-primary"
          >
            {tech}
          </li>
        ))}
      </ul>
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-block text-[0.9rem] font-medium text-primary no-underline transition-colors duration-180 hover:text-accent"
      >
        View on GitHub
      </a>
    </article>
  )
}

export default ProjectCard
