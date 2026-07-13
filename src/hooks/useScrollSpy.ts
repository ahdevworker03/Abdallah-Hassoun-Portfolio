import { useState, useEffect } from "react"

interface UseScrollSpyOptions {
  sectionIds: string[]
  threshold?: number
}

function useScrollSpy({ sectionIds, threshold = 0.4 }: UseScrollSpyOptions): string | null {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
            break
          }
        }
      },
      { threshold },
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [sectionIds, threshold])

  return activeId
}

export default useScrollSpy
