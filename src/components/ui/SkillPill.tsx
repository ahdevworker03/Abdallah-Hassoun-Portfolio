interface SkillPillProps {
  name: string
}

function SkillPill({ name }: SkillPillProps) {
  return (
    <span className="inline-block cursor-default rounded-full border border-accent/25 bg-accent-soft px-[0.85rem] py-[0.35rem] font-body text-sm font-medium text-accent transition-all duration-300 hover:scale-105 hover:bg-accent hover:text-white hover:shadow-glow">
      {name}
    </span>
  )
}

export default SkillPill
