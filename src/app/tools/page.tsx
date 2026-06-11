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
      <section className="section-padding bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-6">
            <Wrench className="w-7 h-7 text-amber-400" />
          </div>
          <h2 className="text-2xl font-bold font-heading text-white mb-3">Tools Coming Soon</h2>
          <p className="text-slate-400 max-w-md mx-auto">
            We are building calculators and planning tools for logistics, real estate, and
            franchise decision-making. Stay tuned.
          </p>
        </div>
      </section>
    </>
  )
}
