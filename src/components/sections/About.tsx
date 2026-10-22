function About() {
  return (
    <section id="about" className="reveal glass-section py-20 md:py-20">
      <div className="mx-auto max-w-[720px] px-4">
        <h2 className="mb-6 font-heading text-3xl font-semibold leading-tight text-text-primary md:text-4xl">
          About Me
        </h2>
        <p className="mb-4 text-base leading-relaxed text-text-secondary last:mb-0">
          I'm a Junior Software Developer with hands-on experience building and deploying real
          software, including a paid client system and a multi-tenant SaaS product. I work across
          React and TypeScript, Node.js and Express, and PostgreSQL with Prisma.
        </p>
        <p className="mb-4 text-base leading-relaxed text-text-secondary last:mb-0">
          My work spans REST APIs, automation, testing, and Linux/cloud deployment. I focus on
          practical problem-solving and maintainable software, using AI-assisted development with
          manual and automated verification.
        </p>
      </div>
    </section>
  )
}

export default About
