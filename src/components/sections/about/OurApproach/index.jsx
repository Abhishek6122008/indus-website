import { Users, RotateCw, ShieldCheck } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'

const pillars = [
  {
    Icon: Users,
    title: 'Equal Opportunity',
    description:
      'At INDUS Group Co. , we prioritize equality, diversity, and inclusion across all our global operations. We are deeply committed to cultivating an inclusive workplace where every individual feels valued and respected. By fostering an environment where diverse talents and perspectives thrive, we empower our teams to collaborate effectively, driving collective innovation and success.',
  },
  {
    Icon: RotateCw,
    title: 'RE-Cycle (Environmental)',
    description:
      'We provide end-to-end management of reusable packaging and consumables in transport & logistics, committed to minimizing our environmental footprint through sustainable practices for a healthier planet.',
  },
  {
    Icon: ShieldCheck,
    title: 'Social Responsibility',
    description:
      "We offer biofuel and Sustainable Aviation Fuel solutions to significantly reduce maritime and aviation CO2 emissions. Beyond environmental benefits, we're dedicated to fostering positive community and workforce impacts through fair labor, safety, inclusion, and social development initiatives.",
  },
]

export function OurApproach() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Values"
          title="Equal Opportunity & ESG"
          subtitle="The commitments and sustainable practices at the core of everything The Indus Group Co. does."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {pillars.map((p, i) => (
            <div key={p.title} className="flex flex-col gap-5 bg-blue-50 rounded-2xl p-6 border border-blue-100 h-full">
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

