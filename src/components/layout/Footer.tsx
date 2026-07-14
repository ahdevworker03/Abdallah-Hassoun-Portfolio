import { navLinks } from "../../data/navigation"

function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-8">
      <div className="mx-auto flex max-w-[1000px] justify-center px-4">
        <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
          <p className="m-0 text-sm text-text-secondary">
            &copy; 2026 Abdallah Hassoun.
          </p>
          <nav aria-label="Quick navigation" className="flex gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary no-underline transition-colors duration-200 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/abdallahhassoun.dev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-block text-[1.25rem] text-text-secondary no-underline transition-all duration-200 hover:scale-110 hover:text-primary"
            >
              <i className="fa-brands fa-instagram" />
            </a>
            <a
              href="https://www.linkedin.com/in/ahdevworker03/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-block text-[1.25rem] text-text-secondary no-underline transition-all duration-200 hover:scale-110 hover:text-primary"
            >
              <i className="fa-brands fa-linkedin" />
            </a>
            <a
              href="https://github.com/ahdevworker03"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-block text-[1.25rem] text-text-secondary no-underline transition-all duration-200 hover:scale-110 hover:text-primary"
            >
              <i className="fa-brands fa-github" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
