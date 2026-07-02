import { PageHero } from '@/components/ui/PageHero'
import { CompanyStory } from '@/components/sections/about/CompanyStory'
import { MeetOurTeam } from '@/components/sections/about/MeetOurTeam'
import { MissionVision } from '@/components/sections/about/MissionVision'
import { OurApproach } from '@/components/sections/about/OurApproach'

export const metadata = {
  title: 'Who We Are | The Indus Group Co.',
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
      <MeetOurTeam />
      <OurApproach />
    </>
  )
}
