import Button from "../ui/Button"

const socialLinks = [
  {
    label: "GitHub",
    url: "https://github.com/ahdevworker03",
    icon: "fa-brands fa-github",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/ahdevworker03/",
    icon: "fa-brands fa-linkedin",
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/ahdevworker03/",
    icon: "fa-brands fa-instagram",
  },
]

function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center justify-center bg-background text-center gradient-hero"
    >
      <div className="mx-auto flex max-w-[680px] flex-col items-center px-4">
        <img
          src="/images/profile.jpg"
          alt="Abdallah Hassoun"
          width={120}
          height={120}
          className="mb-6 h-[120px] w-[120px] rounded-full border-[3px] border-primary-soft object-cover shadow-lg md:h-[140px] md:w-[140px]"
        />
        <p className="mb-2 text-sm uppercase tracking-widest text-text-secondary">Hi, I'm</p>
        <h1 className="mb-6 font-heading text-5xl font-bold leading-tight tracking-tighter text-text-primary md:text-7xl gradient-text">
          Abdallah Hassoun
        </h1>
        <p className="mb-5 text-lg font-medium leading-relaxed text-text-secondary">
          Second-Year Computer Science Student &middot; Frontend Developer
        </p>
        <p className="mb-8 max-w-[560px] text-base leading-relaxed text-text-secondary">
          I enjoy turning ideas into real, working applications while continuously improving my
          skills through hands-on projects. Currently building with React & TypeScript as I work
          toward becoming a full-stack developer.
        </p>
        <div className="flex flex-col items-center gap-4 md:flex-row md:flex-wrap md:justify-center">
          <Button variant="primary" href="#projects" className="w-full max-w-[280px] md:w-auto">
            View My Projects
          </Button>
          <Button variant="secondary" href="#contact" className="w-full max-w-[280px] md:w-auto">
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
        <div className="mt-6 flex items-center gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="inline-block text-[1.2rem] text-text-secondary no-underline transition-all duration-200 hover:scale-110 hover:text-primary"
            >
              <i className={link.icon} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
