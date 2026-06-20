import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'

const points = [
  'Empowering MSMEs and trade support entities',
  'Tailored strategies for sustainable progress',
  'Community impact at the core of every solution',
  'Trusted by 1,000+ clients across industries',
]

export function WhoWeAreSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <SectionHeading
              label="Who We Are"
              title="Connecting Businesses to Opportunities"
              align="left"
            />
            <p className="text-slate-600 leading-relaxed mb-6">
              The Indus Group of Co. is a multi-vertical enterprise dedicated to delivering
              industry-leading solutions with reliability, innovation, and integrity. We empower
              MSMEs and trade support entities through tailored strategies that drive sustainable
              growth and meaningful community impact.
            </p>

            <ul className="space-y-3 mb-8">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                  <span className="text-slate-700">{point}</span>
                </li>
              ))}
            </ul>

            <Button href="/about">Learn More About Us</Button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-blue-100 shadow-sm relative">
              <Image
                src="/images/about/company-team-new.jpg"
                alt="The Indus Group team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            <div className="absolute -bottom-5 -left-5 bg-blue-600 rounded-xl p-5 shadow-xl">
              <div className="text-3xl font-bold font-heading text-white">14+</div>
              <div className="text-xs font-semibold text-blue-100 mt-0.5 uppercase tracking-wide">
                Years Experience
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}