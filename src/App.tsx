import Navbar from "./components/layout/Navbar"
import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import Footer from "./components/layout/Footer"
import ScrollToTop from "./components/ui/ScrollToTop"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        {/*
          Skills — Phase 3C
          Projects — Phase 3C
          Contact — Phase 3C
        */}
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
