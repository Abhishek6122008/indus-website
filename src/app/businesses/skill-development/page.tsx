import { BookOpen, Building2, Wrench, Star, Monitor, GraduationCap } from 'lucide-react'
import { ServiceHero } from '@/components/sections/businesses/ServiceHero'
import { ServiceFeatures } from '@/components/sections/businesses/ServiceFeatures'
import { ServiceCTA } from '@/components/sections/businesses/ServiceCTA'

export const metadata = {
  title: 'Skill Development Solutions | The Indus Group of Co.',
  description:
    'Professional training, corporate workforce development, and placement support to build the workforce of tomorrow.',
}

const features = [
  {
    Icon: BookOpen,
    title: 'Professional Training Programmes',
    description:
      'Industry-recognised certification courses designed to upskill individuals and improve career outcomes across sectors.',
  },
  {
    Icon: Building2,
    title: 'Corporate Workforce Training',
    description:
      "On-site training programmes for enterprises — customised to your industry, your processes, and your team's learning gaps.",
  },
  {
    Icon: Wrench,
    title: 'Vocational Education',
    description:
      'Hands-on, practical skill development for trade and technical roles — preparing workers for real-world job requirements.',
  },
  {
    Icon: Star,
    title: 'Leadership Development',
    description:
      'Management and leadership programmes for mid-level and senior professionals to build confident, capable teams.',
  },
  {
    Icon: Monitor,
    title: 'Digital Skills Training',
    description:
      'Technology literacy and digital transformation programmes to prepare individuals and organisations for the digital economy.',
  },
  {
    Icon: GraduationCap,
    title: 'Placement Support',
    description:
      'Career guidance, resume development, and job placement assistance to connect trained talent with the right opportunities.',
  },
]

export default function SkillDevelopmentPage() {
  return (
    <>
      <ServiceHero
        title="Skill Development Solutions"
        subtitle="Building the workforce of tomorrow through professional training, vocational education, and career support."
        slug="skill-development"
      />
      <ServiceFeatures features={features} heading="Training & Development Programmes" />
      <ServiceCTA
        title="Invest in Your Workforce"
        description="Speak to our training team about customised programmes for your organisation or career goals."
      />
    </>
  )
}
