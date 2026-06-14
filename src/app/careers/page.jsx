import { PageHero } from '@/components/ui/PageHero'
import { WhyWorkWithUs } from '@/components/sections/careers/WhyWorkWithUs'
import { OpenPositions } from '@/components/sections/careers/OpenPositions'
import { CareersCTA } from '@/components/sections/careers/CareersCTA'

export const metadata = {
  title: 'Careers | The Indus Group of Co.',
  description:
    'Join The Indus Group of Co. — explore open positions and build your career with a team that values growth, culture, and impact.',
}

export default function CareersPage() {
  return (
    <>
      <PageHero
        label="Join Our Team"
        title="Careers"
        subtitle="Be part of a team that's reshaping how businesses grow across India. We're always looking for passionate people."
        breadcrumbs={[{ label: 'Careers' }]}
      />

      {/* Why Work With Us Section */}
      <WhyWorkWithUs />

      {/* Open Positions Listings Section */}
      <OpenPositions />

      {/* Closing Call to Action Section */}
      <CareersCTA />
    </>
  )
}