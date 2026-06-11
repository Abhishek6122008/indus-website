import { StatItem } from '@/components/ui/StatItem'

const stats = [
  { value: '14+', label: 'Years of Industry Experience' },
  { value: '1,000+', label: 'Satisfied Clients' },
  { value: '100+', label: 'Team Members' },
  { value: 'Global', label: 'Network Presence' },
  { value: '24/7', label: 'Support & Monitoring' },
]

export function StatsBar() {
  return (
    <section className="bg-navy-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat) => (
            <StatItem key={stat.label} value={stat.value} label={stat.label} light />
          ))}
        </div>
      </div>
    </section>
  )
}
