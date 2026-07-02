import { PageHero } from '@/components/ui/PageHero'
import { TeamGrid } from '@/components/sections/team/TeamGrid'

export const metadata = {
  title: 'Meet Our Team | The Indus Group Co.',
  description: 'Get to know the people behind The Indus Group Co. — our core team and interns driving growth and innovation.',
}

export default function MeetOurTeamPage() {
  return (
    <>
      <PageHero
        label="Our People"
        title="Meet Our Team"
        subtitle="The passionate individuals behind The Indus Group Co."
        breadcrumbs={[{ label: 'Meet Our Team' }]}
        backgroundImage="/images/team/meet-our-team-hero.png"
        imagePosition="object-center"
        contentClassName="!mx-0"
      />
      <TeamGrid />
    </>
  )
}