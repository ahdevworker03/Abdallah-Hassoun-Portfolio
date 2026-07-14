import { useState, useEffect } from "react"

function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300)
    }

    onScroll()

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <button
      id="scroll-top-btn"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-8 right-8 z-[200] flex h-11 w-11 items-center justify-center rounded-full border-none bg-primary text-white text-[1.1rem] no-underline shadow-lg transition-all duration-300 ease-smooth hover:bg-primary-hover hover:scale-110 hover:shadow-xl ${
        visible ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-75 pointer-events-none"
      }`}
    >
      ↑
    </button>
  )
}

export default ScrollToTop
