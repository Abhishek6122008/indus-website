import { PageHero } from '@/components/ui/PageHero'
import { WhyWorkWithUs } from '@/components/sections/careers/WhyWorkWithUs'
import { OpenPositions } from '@/components/sections/careers/OpenPositions'
import { CareersCTA } from '@/components/sections/careers/CareersCTA'

export const metadata = {
  title: 'Careers | The Indus Group of Co.',
  description:
    'Join our team at The Indus Group of Co. Explore open positions, learn about our values, and build your career with us.',
}

export default function CareersPage() {
  return (
    <>
      <PageHero
        label="Join Our Team"
        title="Careers"
        subtitle="Grow with a multi-vertical enterprise built on reliability, innovation, and integrity."
        breadcrumbs={[{ label: 'Careers' }]}
      />
      <WhyWorkWithUs />
      <OpenPositions />
      <CareersCTA />
    </>
  )
}
