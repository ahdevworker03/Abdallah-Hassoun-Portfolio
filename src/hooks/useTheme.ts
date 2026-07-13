import { useState, useEffect, useCallback } from "react"

type Theme = "light" | "dark"

interface UseThemeReturn {
  theme: Theme
  toggleTheme: () => void
}

function useTheme(): UseThemeReturn {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("theme")
    return saved === "dark" ? "dark" : "light"
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }, [])

  return { theme, toggleTheme }
}

export default useTheme
