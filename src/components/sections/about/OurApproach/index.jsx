import { Handshake, TrendingUp, Users, ShieldCheck } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'

const pillars = [
  {
    Icon: Handshake,
    title: 'MSME Empowerment',
    description:
      "We believe small and medium businesses are the backbone of India's economy. Our solutions are designed with their scale, budget, and growth aspirations in mind.",
  },
  {
    Icon: TrendingUp,
    title: 'Tailored Strategies',
    description:
      "No two businesses are the same. We take the time to understand each client's unique context and craft strategies that fit — not generic templates, but real plans.",
  },
  {
    Icon: Users,
    title: 'Community Impact',
    description:
      'Our work goes beyond profit. Whether training the next generation of skilled workers or building infrastructure, we measure success by the communities we strengthen.',
  },
  {
    Icon: ShieldCheck,
    title: 'Reliability & Integrity',
    description:
      'We keep our commitments. Our clients trust us because we say what we mean, do what we say, and stand by our work long after the project is complete.',
  },
]

export function OurApproach() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="How We Work"
          title="Our Approach"
          subtitle="Four principles at the core of everything The Indus Group does."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((p, i) => (
            <div key={p.title} className="flex gap-5 bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <div className="shrink-0 w-11 h-11 rounded-xl bg-white border border-blue-200 flex items-center justify-center mt-0.5 shadow-sm">
                <p.Icon className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-blue-400 text-xs font-bold font-heading">0{i + 1}</span>
                  <h3 className="text-slate-900 font-semibold font-heading">{p.title}</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
