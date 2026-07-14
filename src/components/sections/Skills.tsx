import { skillCategories } from "../../data/skills"
import SkillPill from "../ui/SkillPill"

const categoryIcons: Record<string, string> = {
  Languages: "fa-solid fa-code",
  Web: "fa-solid fa-globe",
  Tools: "fa-solid fa-screwdriver-wrench",
  Concepts: "fa-solid fa-lightbulb",
}

function Skills() {
  return (
    <section id="skills" className="reveal bg-background py-20">
      <div className="mx-auto max-w-container px-4 md:px-8">
        <h2 className="mb-10 font-heading text-3xl font-semibold leading-tight text-text-primary md:text-4xl">
          Skills
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all duration-200 overflow-hidden"
            >
              <div className="flex items-center gap-3">
                <i
                  className={`${categoryIcons[category.name] || "fa-solid fa-tag"} text-lg text-primary`}
                />
                <h3 className="font-heading text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-text-secondary">
                  {category.name}
                </h3>
              </div>
              <hr className="m-0 border-border" />
              <div className="flex-1 flex flex-wrap gap-2 content-start">
                {category.items.map((skill) => (
                  <SkillPill key={skill} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
