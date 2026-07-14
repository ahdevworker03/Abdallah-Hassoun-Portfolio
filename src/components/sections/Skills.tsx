import { skillCategories } from "../../data/skills"
import SkillPill from "../ui/SkillPill"

function Skills() {
  return (
    <section id="skills" className="reveal bg-background py-20">
      <div className="mx-auto max-w-container px-4 md:px-8">
        <h2 className="mb-10 font-heading text-3xl font-semibold leading-tight text-text-primary md:text-4xl">
          Skills
        </h2>
        {skillCategories.map((category) => (
          <div key={category.name} className="mb-8 last:mb-0">
            <h3 className="mb-3 font-heading text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-text-secondary">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <SkillPill key={skill} name={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
