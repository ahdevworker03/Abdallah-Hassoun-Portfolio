import { useState, useRef, useEffect } from "react"
import { navLinks } from "../../data/navigation"
import useScrolledNav from "../../hooks/useScrolledNav"
import useScrollSpy from "../../hooks/useScrollSpy"
import ThemeToggle from "../ui/ThemeToggle"

const sectionIds = ["hero", "about", "skills", "projects", "contact"]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const scrolled = useScrolledNav()
  const activeId = useScrollSpy({ sectionIds })

  useEffect(() => {
    if (!menuOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMenuOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [menuOpen])

  return (
    <nav
      ref={navRef}
      className={`sticky top-0 z-50 glass-bg transition-all duration-300 ${
        scrolled ? "h-16 border-b border-border/5 shadow-sm" : "h-[72px]"
      }`}
    >
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
          {navLinks.map((link) => {
            const isActive = activeId === link.href.replace("#", "")
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-[0.95rem] no-underline transition-colors duration-150 hover:text-primary ${
                    isActive ? "font-semibold text-primary" : "text-text-primary"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            className="flex cursor-pointer flex-col gap-[5px] border-none bg-transparent p-0 lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
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
