import { useState } from "react"
import useTheme from "../../hooks/useTheme"

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const [rotating, setRotating] = useState(false)

  const handleClick = () => {
    setRotating(true)
    toggleTheme()
    setTimeout(() => setRotating(false), 300)
  }

  return (
    <button
      className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-none bg-transparent text-[1.1rem] transition-all duration-200 hover:scale-110 hover:bg-black/15 dark:hover:bg-white/15"
      aria-label="Toggle dark mode"
      onClick={handleClick}
    >
      <span className={`theme-icon ${rotating ? "rotating" : ""}`}>
        {theme === "dark" ? "🌙" : "☀️"}
      </span>
    </button>
  )
}

export default ThemeToggle
