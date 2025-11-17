function Services() {
  const services = [
    {
      title: 'Symfony Consulting',
      desc: 'Architecture reviews, performance tuning, best practices, and reliable delivery for complex platforms.'
    },
    {
      title: 'API Design & Development',
      desc: 'REST/GraphQL APIs with API Platform, authentication, rate limiting, and documentation.'
    },
    {
      title: 'Full‑Stack Delivery',
      desc: 'From database schema to frontend integration. Clean code, tests, and CI/CD included.'
    },
  ]

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
