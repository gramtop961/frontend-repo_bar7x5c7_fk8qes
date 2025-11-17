function Projects() {
  const projects = [
    {
      name: 'Marketplace Platform',
      stack: 'Symfony, API Platform, React, PostgreSQL, Docker',
      result: 'Launched v1 in 8 weeks, 10k+ users in first quarter.'
    },
    {
      name: 'Logistics API',
      stack: 'Symfony, Messenger, Redis, MySQL, Kubernetes',
      result: 'Reduced processing time by 60% with async workers.'
    },
    {
      name: 'Subscription Billing',
      stack: 'Symfony, Stripe, Webhooks, Hexagonal Architecture',
      result: 'Improved reliability, <1% failed charges.'
    },
  ]

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Selected work</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.name} className="p-6 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">{p.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{p.stack}</p>
              <p className="text-gray-700 mt-3">{p.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
