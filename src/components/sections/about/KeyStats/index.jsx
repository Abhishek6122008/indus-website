const stats = [
  { value: '14+', label: 'Years of Experience', detail: 'Serving clients since 2010' },
  { value: '1,000+', label: 'Clients Served', detail: 'Across industries nationwide' },
  { value: '100+', label: 'Team Members', detail: 'Experts across all verticals' },
  { value: 'Global', label: 'Network Reach', detail: 'International trade connections' },
  { value: '24/7', label: 'Support Available', detail: 'Always on for our clients' },
]

export function KeyStats() {
  return (
    <section className="section-padding bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-6 h-[2px] bg-blue-300" />
            <span className="text-blue-200 text-xs font-bold tracking-[0.2em] uppercase">By the Numbers</span>
            <div className="w-6 h-[2px] bg-blue-300" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white">
            The Indus Group in Numbers
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold font-heading text-white mb-1">{stat.value}</div>
              <div className="text-sm font-semibold text-blue-100 mb-0.5">{stat.label}</div>
              <div className="text-xs text-blue-200/70">{stat.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
