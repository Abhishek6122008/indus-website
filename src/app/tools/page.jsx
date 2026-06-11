import { PageHero } from '@/components/ui/PageHero'
import { Wrench } from 'lucide-react'

export const metadata = {
  title: 'Tools | The Indus Group of Co.',
  description: 'Interactive tools and calculators from The Indus Group.',
}

export default function ToolsPage() {
  return (
    <>
      <PageHero
        label="Interactive"
        title="Tools"
        subtitle="Calculators and interactive tools to help you plan, estimate, and make better business decisions."
        breadcrumbs={[{ label: 'Tools' }]}
      />
      <section className="section-padding bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-white border border-blue-100 flex items-center justify-center mx-auto mb-6 shadow-sm">
            <Wrench className="w-7 h-7 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold font-heading text-slate-900 mb-3">Tools Coming Soon</h2>
          <p className="text-slate-600 max-w-md mx-auto">
            We are building calculators and planning tools for logistics, real estate, and
            franchise decision-making. Stay tuned.
          </p>
        </div>
      </section>
    </>
  )
}
