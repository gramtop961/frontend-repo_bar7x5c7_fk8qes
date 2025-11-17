function Skills() {
  const skills = [
    { name: 'Symfony', level: 'Expert' },
    { name: 'PHP 8.x', level: 'Expert' },
    { name: 'API Platform', level: 'Advanced' },
    { name: 'MySQL / PostgreSQL', level: 'Advanced' },
    { name: 'Redis', level: 'Advanced' },
    { name: 'Docker', level: 'Advanced' },
    { name: 'AWS / Hetzner', level: 'Advanced' },
    { name: 'CI/CD', level: 'Advanced' },
    { name: 'React / Vue', level: 'Advanced' },
    { name: 'Testing (PHPUnit)', level: 'Advanced' },
  ]

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Core skills</h2>
        <p className="text-gray-600 mb-8">Strong engineering fundamentals, pragmatic problem solving, and battle-tested Symfony experience.</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((s) => (
            <div key={s.name} className="p-4 rounded-xl border border-gray-200 bg-gray-50">
              <div className="font-semibold text-gray-800">{s.name}</div>
              <div className="text-sm text-gray-500">{s.level}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
