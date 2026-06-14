import { Award, Users, Globe, HeadphonesIcon, Briefcase } from 'lucide-react'

const reasons = [
  {
    icon: Award,
    stat: '14+',
    label: 'Years of Experience',
    desc: 'Over a decade of proven expertise across multiple industry verticals.',
  },
  {
    icon: Users,
    stat: '1,000+',
    label: 'Trusted Clients',
    desc: 'Businesses across India and globally rely on us for critical solutions.',
  },
  {
    icon: Briefcase,
    stat: '100+',
    label: 'Team Members',
    desc: 'A professional, multi-disciplinary team dedicated to your success.',
  },
  {
    icon: Globe,
    stat: 'Global',
    label: 'Network',
    desc: 'International reach with local expertise across key markets.',
  },
  {
    icon: HeadphonesIcon,
    stat: '24/7',
    label: 'Support & Monitoring',
    desc: 'Round-the-clock support to keep your operations running smoothly.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#c00]">
            Why Choose Us?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((r) => {
            const Icon = r.icon
            return (
              <div
                key={r.label}
                className="flex flex-col items-center text-center border border-slate-200 rounded-2xl p-6 hover:shadow-md hover:border-blue-200 transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <div className="text-2xl font-bold font-heading text-slate-900 mb-0.5">{r.stat}</div>
                <div className="text-sm font-semibold text-slate-700 mb-2">{r.label}</div>
                <p className="text-xs text-slate-500 leading-relaxed">{r.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
