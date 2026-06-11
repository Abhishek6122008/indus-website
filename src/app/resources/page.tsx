import { PageHero } from '@/components/ui/PageHero'
import { FolderOpen } from 'lucide-react'

export const metadata = {
  title: 'Resources | The Indus Group of Co.',
  description: 'Downloadable resources, templates, and documents from The Indus Group.',
}

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        label="Downloads"
        title="Resources"
        subtitle="Useful documents, templates, and reference materials for clients and partners."
        breadcrumbs={[{ label: 'Resources' }]}
      />
      <section className="section-padding bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-6">
            <FolderOpen className="w-7 h-7 text-amber-400" />
          </div>
          <h2 className="text-2xl font-bold font-heading text-white mb-3">Resources Coming Soon</h2>
          <p className="text-slate-400 max-w-md mx-auto">
            We are preparing downloadable resources for our clients and partners. Contact us
            directly if you need specific documentation in the meantime.
          </p>
        </div>
      </section>
    </>
  )
}
