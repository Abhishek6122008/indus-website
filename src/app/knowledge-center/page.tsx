import { PageHero } from '@/components/ui/PageHero'
import { BookOpen } from 'lucide-react'

export const metadata = {
  title: 'Knowledge Center | The Indus Group of Co.',
  description: 'Articles, guides, and industry insights from The Indus Group across logistics, enterprise, skill development, real estate, and franchising.',
}

export default function KnowledgeCenterPage() {
  return (
    <>
      <PageHero
        label="Learn & Grow"
        title="Knowledge Center"
        subtitle="Industry insights, practical guides, and expert perspectives from across The Indus Group."
        breadcrumbs={[{ label: 'Knowledge Center' }]}
      />
      <section className="section-padding bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-7 h-7 text-amber-400" />
          </div>
          <h2 className="text-2xl font-bold font-heading text-white mb-3">Content Coming Soon</h2>
          <p className="text-slate-400 max-w-md mx-auto">
            We are curating articles, case studies, and guides. Check back soon — or follow us on
            social media for the latest updates.
          </p>
        </div>
      </section>
    </>
  )
}
