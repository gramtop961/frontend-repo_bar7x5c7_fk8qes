import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="text-gray-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Services />
        <Projects />
        <Contact />
        <footer className="py-10 text-center text-sm text-gray-500 border-t border-gray-200">
          © {new Date().getFullYear()} Gaby — Freelance Full‑Stack Developer in Munich. Built with care.
        </footer>
      </main>
    </div>
  )
}

export default App
