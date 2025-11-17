function Hero() {
  return (
    <section id="home" className="pt-28 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold mb-3">Munich-based Full‑Stack Developer</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900">
            Hi, I’m Gaby — I build robust web apps with Symfony & modern PHP
          </h1>
          <p className="mt-5 text-lg text-gray-600">
            I help startups and teams ship reliable, maintainable platforms: clean architecture, API-first design, and production-ready deployments.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="px-5 py-3 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors">Start a project</a>
            <a href="#projects" className="px-5 py-3 rounded border border-gray-300 text-gray-800 hover:bg-gray-50">See my work</a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-green-500"></span> Available for freelance</div>
            <div>Based in Munich, Germany</div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 opacity-10 absolute inset-0 blur-3xl"/>
          <div className="relative bg-white/70 backdrop-blur rounded-2xl border border-gray-200 p-6 shadow-lg">
            <ul className="grid grid-cols-2 gap-4 text-sm">
              <li className="p-4 rounded-lg bg-gray-50">Symfony 6/7</li>
              <li className="p-4 rounded-lg bg-gray-50">API Platform</li>
              <li className="p-4 rounded-lg bg-gray-50">Doctrine ORM</li>
              <li className="p-4 rounded-lg bg-gray-50">MySQL/PostgreSQL</li>
              <li className="p-4 rounded-lg bg-gray-50">Docker & CI/CD</li>
              <li className="p-4 rounded-lg bg-gray-50">React/Vue Frontends</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
