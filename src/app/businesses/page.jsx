import { PageHero } from '@/components/ui/PageHero'
import { BusinessesGrid } from '@/components/sections/home/BusinessesGrid'

export const metadata = {
  title: 'Our Businesses | The Indus Group Co.',
  description:
    'Explore the four business verticals of The Indus Group — Logistics, Enterprise Solutions, Skill Development, and Real Estate.',
}

export default function BusinessesPage() {
  return (
    <>
      <PageHero
        label="What We Do"
        title="Our Businesses"
        subtitle="Four focused verticals, each built to deliver lasting value for clients across industries."
        breadcrumbs={[{ label: 'Businesses' }]}
      />
      <BusinessesGrid />
    </>
  )
}
