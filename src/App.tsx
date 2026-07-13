import Navbar from "./components/layout/Navbar"
import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import Skills from "./components/sections/Skills"
import Projects from "./components/sections/Projects"
import Footer from "./components/layout/Footer"
import ScrollToTop from "./components/ui/ScrollToTop"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        {/*
          Contact — Phase 3C-3
        */}
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
