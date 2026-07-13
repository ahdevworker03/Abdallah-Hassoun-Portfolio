import { projects } from "../../data/projects"
import ProjectCard from "../ui/ProjectCard"

function Projects() {
  return (
    <section id="projects" className="reveal bg-surface py-20">
      <div className="mx-auto grid max-w-container grid-cols-1 gap-6 px-4 md:grid-cols-2 md:px-8 lg:grid-cols-3">
        <h2 className="col-span-full mb-10 font-heading text-[1.6rem] font-bold text-text-primary md:text-[2rem]">
          Projects
        </h2>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
