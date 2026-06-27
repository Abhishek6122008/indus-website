const stats = [
  { value: '14+', label: 'Years of Excellence' },
  { value: '1,000+', label: 'Satisfied Clients' },
  { value: '100+', label: 'Team Members' },
  { value: 'Global', label: 'Network Presence' },
  { value: '24/7', label: 'Support Available' },
]

export function StatsBar() {
  return (
    <section className="bg-blue-600 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-bold font-heading text-white mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-blue-100 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
