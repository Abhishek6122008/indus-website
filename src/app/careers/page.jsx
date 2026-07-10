import { PageHero } from '@/components/ui/PageHero'
import { CareerHighlights } from '@/components/sections/careers/CareerHighlights'
import { WhyWorkWithUs } from '@/components/sections/careers/WhyWorkWithUs'
import { JoinUs } from '@/components/sections/careers/JoinUs'
import { PerksBenefits } from '@/components/sections/careers/PerksBenefits'
import { CareersCTA } from '@/components/sections/careers/CareersCTA'

export const metadata = {
  title: 'Careers | The Indus Group Co.',
  description:
    'Join The Indus Group Co. — explore open positions and build your career with a team that values growth, culture, and impact.',
}

export default function CareersPage() {
  return (
    <>
      <PageHero
        label="Join Our Team"
        title="Build a career at The Indus Group"
        subtitle="Join a growing team shaping the future of logistics, enterprise, skill development, and infrastructure across India."
        breadcrumbs={[{ label: 'Careers' }]}
        backgroundImage="/images/about/careers-hero.png"
        imagePosition="object-center"
      />
      <CareerHighlights />
      <WhyWorkWithUs />
      <JoinUs />
      <PerksBenefits />
      <CareersCTA />
    </>
  )
}