import { PageHero } from '@/components/ui/PageHero'
import { CompanyStory } from '@/components/sections/about/CompanyStory'
import { MissionVision } from '@/components/sections/about/MissionVision'
import { OurApproach } from '@/components/sections/about/OurApproach'
import { KeyStats } from '@/components/sections/about/KeyStats'

export const metadata = {
  title: 'Who We Are | The Indus Group of Co.',
  description:
    'Learn about The Indus Group — our story, mission, vision, and the approach that drives everything we do.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="The Indus Group"
        title="Who We Are"
        subtitle="A multi-vertical enterprise built on reliability, innovation, and integrity — empowering businesses across India."
        breadcrumbs={[{ label: 'Who We Are' }]}
      />
      <CompanyStory />
      <MissionVision />
      <OurApproach />
      <KeyStats />
    </>
  )
}
