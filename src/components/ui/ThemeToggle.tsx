import useTheme from "../../hooks/useTheme"

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-none bg-transparent text-[1.1rem] transition-colors duration-150 hover:bg-black/15 dark:hover:bg-white/15"
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
    >
      <span className="theme-icon">{theme === "dark" ? "🌙" : "☀️"}</span>
    </button>
  )
}

export default ThemeToggle
