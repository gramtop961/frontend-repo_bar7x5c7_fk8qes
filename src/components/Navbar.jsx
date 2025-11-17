import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)
  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="text-xl font-bold tracking-tight text-gray-900">Gaby<span className="text-blue-600">.dev</span></a>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-gray-600 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors">Hire Me</a>
          </nav>
          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded hover:bg-gray-100">
            <span className="sr-only">Menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-gray-700">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="px-4 py-2 rounded bg-blue-600 text-white text-center">Hire Me</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
