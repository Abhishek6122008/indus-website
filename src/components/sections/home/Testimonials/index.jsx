import { Quote } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'

const testimonials = [
  {
    quote: 'Indus Group brought exceptional innovation and leadership to our international EXIM projects.',
    name: 'Saji Thomas',
    role: 'C.E.O., Fidelis Etairos International',
    initials: 'ST',
  },
  {
    quote: 'A committed team with deep industry insights. Indus Group is a long-term partner for our strategic energy initiatives.',
    name: 'Anuradha Singh',
    role: 'M.D., AMM Pvt. Ltd',
    initials: 'AS',
  },
  {
    quote: 'Their consulting services helped us unlock new markets and streamline operations. True professionals in every sense.',
    name: 'Ashish Dabral',
    role: 'Director, Digipro Logistics Pvt. Ltd.',
    initials: 'AD',
  },
]

export function Testimonials() {
  return (
    <section className="section-padding bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="What Clients Say"
          title="Trusted by Businesses Across Industries"
          subtitle="Our work speaks through the success of those we serve."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white border border-blue-100 rounded-2xl p-7 flex flex-col shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
            >
              <Quote className="w-7 h-7 text-blue-200 mb-4 shrink-0" />
              <p className="text-slate-600 leading-relaxed mb-6 flex-1 italic text-sm">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
