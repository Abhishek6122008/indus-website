import { PageHero } from '@/components/ui/PageHero'
import { CategoryFilter } from '@/components/sections/knowledge-center/CategoryFilter'

export const metadata = {
  title: 'Knowledge Center | The Indus Group of Co.',
  description:
    'Articles, guides, and industry insights from The Indus Group across logistics, enterprise, skill development, real estate, and franchise growth.',
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

      <CategoryFilter />
    </>
  )
}