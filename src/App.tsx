import Navbar from "./components/layout/Navbar"
import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import Experience from "./components/sections/Experience"
import Projects from "./components/sections/Projects"
import Skills from "./components/sections/Skills"
import Education from "./components/sections/Education"
import Contact from "./components/sections/Contact"
import Footer from "./components/layout/Footer"
import ScrollToTop from "./components/ui/ScrollToTop"
import useScrollReveal from "./hooks/useScrollReveal"

function App() {
  useScrollReveal()
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-white focus:no-underline focus:shadow-lg"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
