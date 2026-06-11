import { LucideIcon } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'

export type ServiceFeature = {
  Icon: LucideIcon
  title: string
  description: string
}

type ServiceFeaturesProps = {
  features: ServiceFeature[]
  heading?: string
}

export function ServiceFeatures({ features, heading = 'What We Offer' }: ServiceFeaturesProps) {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading label="Our Services" title={heading} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-blue-50 border border-blue-100 rounded-2xl p-7 hover:border-blue-200 hover:shadow-md transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-white border border-blue-200 flex items-center justify-center mb-5 shadow-sm">
                <f.Icon className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-slate-900 font-semibold font-heading text-base mb-2">{f.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
