import { useState } from "react"
import { navLinks } from "../../data/navigation"
import ThemeToggle from "../ui/ThemeToggle"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 h-[72px] glass-bg transition-all duration-300">
      <div className="mx-auto flex h-full max-w-[1000px] items-center justify-between px-4">
          <a href="#hero" className="flex items-center gap-[0.6rem] font-heading text-[1.2rem] font-bold text-primary no-underline">
          <img
            src="/favicon_io/apple-touch-icon.png"
            alt="Abdallah Hassoun"
            className="block h-8 w-8 rounded-full object-cover"
          />
          Abdallah Hassoun
        </a>

        <ul
          className={`m-0 flex list-none gap-8 p-0 ${
            menuOpen
              ? "absolute left-0 top-16 flex w-full flex-col gap-5 bg-surface p-6 shadow-md"
              : "hidden lg:flex"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[0.95rem] text-text-primary no-underline transition-colors duration-150 hover:text-primary"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            className="flex cursor-pointer flex-col gap-[5px] border-none bg-transparent p-0 lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="block h-[2px] w-6 rounded-sm bg-text-primary" />
            <span className="block h-[2px] w-6 rounded-sm bg-text-primary" />
            <span className="block h-[2px] w-6 rounded-sm bg-text-primary" />
          </button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
