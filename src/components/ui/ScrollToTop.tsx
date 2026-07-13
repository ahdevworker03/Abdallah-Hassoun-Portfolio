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
      className={`fixed bottom-8 right-8 z-[200] flex h-11 w-11 items-center justify-center rounded-full border-none bg-primary text-white text-[1.1rem] no-underline shadow transition-all duration-200 ease-in-out hover:bg-[#1648c0] ${
        visible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      ↑
    </button>
  )
}

export default ScrollToTop
