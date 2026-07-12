const stats = [
  { value: '200+', label: 'Years of Collective Experience' },
  { value: '5,000+', label: 'Trusted Clients' },
  { value: '1,000+', label: 'Team Members' },
  { value: 'Global', label: 'Network Presence' },
  { value: '24/7', label: 'Support Available' },
]

export function StatsBar() {
  return (
    <section className="bg-[#0b1f5c] py-14">
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
