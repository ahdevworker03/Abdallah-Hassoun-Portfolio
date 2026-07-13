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
          <a
            href="#projects"
            className="inline-block w-full max-w-[280px] rounded-md border-2 border-primary bg-primary px-7 py-3 text-center font-body text-base font-medium text-white no-underline transition-all duration-200 hover:brightness-90 md:w-auto"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="inline-block w-full max-w-[280px] rounded-md border-2 border-primary bg-transparent px-7 py-3 text-center font-body text-base font-medium text-primary no-underline transition-all duration-200 hover:bg-primary hover:text-white md:w-auto"
          >
            Get In Touch
          </a>
          <a
            href="/CV File/Abdallah Hassoun.pdf"
            download="Abdallah-Hassoun-CV"
            className="inline-block w-full max-w-[280px] rounded-md border border-text-secondary bg-transparent px-7 py-3 text-center font-body text-base font-medium text-text-secondary no-underline transition-all duration-200 hover:bg-text-secondary hover:text-white md:w-auto"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
