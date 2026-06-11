import { PageHero } from '@/components/ui/PageHero'
import { BusinessesGrid } from '@/components/sections/home/BusinessesGrid'

export const metadata = {
  title: 'Our Businesses | The Indus Group of Co.',
  description:
    'Explore the five business verticals of The Indus Group — Logistics, Enterprise Solutions, Skill Development, Real Estate, and HBC Franchise.',
}

export default function BusinessesPage() {
  return (
    <>
      <PageHero
        label="What We Do"
        title="Our Businesses"
        subtitle="Five focused verticals, each built to deliver lasting value for clients across industries."
        breadcrumbs={[{ label: 'Businesses' }]}
      />
      <BusinessesGrid />
    </>
  )
}
