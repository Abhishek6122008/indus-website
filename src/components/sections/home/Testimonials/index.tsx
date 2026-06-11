import { Quote } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'

const testimonials = [
  {
    quote:
      "The Indus Group's expertise in international trade has been invaluable. Their logistics solutions helped us expand to new markets seamlessly.",
    name: 'Client, International Trade',
  },
  {
    quote:
      "Their enterprise consulting helped us navigate a complex energy project with confidence. The team's depth of knowledge and professionalism is unmatched.",
    name: 'Client, Energy Projects',
  },
  {
    quote:
      'When it came to market expansion, The Indus Group gave us a clear strategy and hands-on support. Our growth has been remarkable since working with them.',
    name: 'Client, Market Expansion',
  },
]

export function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="What Clients Say"
          title="Trusted by Businesses Across Industries"
          subtitle="Our work speaks through the success of those we serve."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Card key={i} className="flex flex-col">
              <Quote className="w-8 h-8 text-blue-100 mb-4 shrink-0" />
              <p className="text-gray-600 leading-relaxed mb-6 italic flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <div className="w-8 h-0.5 bg-blue-600 mb-3" />
                <p className="text-sm font-semibold text-navy-800">{t.name}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
