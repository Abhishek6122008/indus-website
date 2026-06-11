import { Briefcase, TrendingUp, Zap, FileText, Handshake, ShieldCheck } from 'lucide-react'
import { ServiceHero } from '@/components/sections/businesses/ServiceHero'
import { ServiceFeatures } from '@/components/sections/businesses/ServiceFeatures'
import { ServiceCTA } from '@/components/sections/businesses/ServiceCTA'

export const metadata = {
  title: 'Enterprise Solutions | The Indus Group of Co.',
  description:
    'Tailored B2B consulting, market expansion, and energy sector advisory for MSMEs and enterprises.',
}

const features = [
  {
    Icon: Briefcase,
    title: 'MSME Business Consulting',
    description:
      'Tailored B2B strategies for small and medium enterprises — covering operations, growth planning, and market positioning.',
  },
  {
    Icon: TrendingUp,
    title: 'Market Expansion',
    description:
      'Market research, entry strategy, and growth planning to help you break into new geographies and customer segments with confidence.',
  },
  {
    Icon: Zap,
    title: 'Energy Sector Consulting',
    description:
      'Expertise in energy infrastructure, project development, and regulatory navigation for businesses in the energy and utilities space.',
  },
  {
    Icon: FileText,
    title: 'Trade Support Services',
    description:
      'Export-import guidance, trade finance advisory, and documentation support to simplify cross-border business.',
  },
  {
    Icon: Handshake,
    title: 'Business Development',
    description:
      'Identifying strategic partnerships, new revenue streams, and growth opportunities that align with your business objectives.',
  },
  {
    Icon: ShieldCheck,
    title: 'Corporate Advisory',
    description:
      'Governance, compliance, and regulatory guidance — ensuring your business operates with integrity and meets all obligations.',
  },
]

export default function EnterpriseSolutionsPage() {
  return (
    <>
      <ServiceHero
        title="Enterprise Solutions"
        subtitle="Tailored B2B strategies that help MSMEs and enterprises grow — with clarity, confidence, and a clear path forward."
        slug="enterprise-solutions"
      />
      <ServiceFeatures features={features} heading="Enterprise Services We Offer" />
      <ServiceCTA
        title="Ready to Grow Your Business?"
        description="Let our enterprise team craft a strategy built around your specific goals and market."
      />
    </>
  )
}
