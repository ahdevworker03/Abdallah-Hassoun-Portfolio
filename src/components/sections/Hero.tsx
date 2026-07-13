import Button from "../ui/Button"

function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center justify-center bg-background text-center"
    >
      <div className="mx-auto flex max-w-[680px] flex-col items-center px-4">
        <p className="mb-2 text-sm uppercase tracking-widest text-text-secondary">
          Hi, I'm
        </p>
        <h1 className="mb-6 font-heading text-[2.5rem] font-bold leading-tight tracking-tighter text-text-primary md:text-[4rem] gradient-text">
          Abdallah Hassoun
        </h1>
        <p className="mb-5 text-[1.1rem] font-medium text-text-secondary">
          First-year CS Student &middot; Aspiring Software Engineer
        </p>
        <p className="mb-8 max-w-[560px] text-base leading-relaxed text-text-secondary">
          I build things to learn. Currently exploring web development,
          algorithms, and what it means to write good code.
        </p>
        <div className="flex flex-col items-center gap-4 md:flex-row md:flex-wrap md:justify-center">
          <Button
            variant="primary"
            href="#projects"
            className="w-full max-w-[280px] md:w-auto"
          >
            View My Projects
          </Button>
          <Button
            variant="secondary"
            href="#contact"
            className="w-full max-w-[280px] md:w-auto"
          >
            Get In Touch
          </Button>
          <Button
            variant="cv"
            href="/CV File/Abdallah Hassoun.pdf"
            download="Abdallah-Hassoun-CV"
            className="w-full max-w-[280px] md:w-auto"
          >
            Download CV
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
