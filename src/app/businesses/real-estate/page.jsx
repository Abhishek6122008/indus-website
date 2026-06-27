import { Home, Building2, Factory, HardHat, BarChart3, Layers } from 'lucide-react'
import { ServiceHero } from '@/components/sections/businesses/ServiceHero'
import { ServiceIntro } from '@/components/sections/businesses/ServiceIntro'
import { ServiceFeatures } from '@/components/sections/businesses/ServiceFeatures'
import { ServiceCTA } from '@/components/sections/businesses/ServiceCTA'

export const metadata = {
  title: 'Real Estate & Infra Projects | The Indus Group of Co.',
  description:
    'Property development and infrastructure project expertise — residential, commercial, industrial, and civic.',
}

const features = [
  {
    Icon: Home,
    title: 'Residential Development',
    description:
      'Quality housing projects in emerging and established markets — designed for comfort, value, and long-term appreciation.',
  },
  {
    Icon: Building2,
    title: 'Commercial Properties',
    description:
      'Office spaces, retail complexes, and commercial hubs built for modern business needs and optimal tenant experience.',
  },
  {
    Icon: Factory,
    title: 'Industrial Infrastructure',
    description:
      'Warehousing, logistics parks, and industrial estates — strategically developed to support supply chain and manufacturing operations.',
  },
  {
    Icon: HardHat,
    title: 'Project Management',
    description:
      'End-to-end construction project management covering planning, procurement, contractor coordination, and delivery oversight.',
  },
  {
    Icon: BarChart3,
    title: 'Property Consulting',
    description:
      'Market valuation, investment advisory, and due diligence services for buyers, sellers, and developers making informed decisions.',
  },
  {
    Icon: Layers,
    title: 'Infrastructure Projects',
    description:
      'Roads, utilities, and civic infrastructure development in partnership with government and private sector stakeholders.',
  },
]

export default function RealEstatePage() {
  return (
    <>
      <ServiceHero
        title="Real Estate Solutions"
        subtitle="Specializing in Affordable Housing, Luxury Properties, and Industrial Warehouses"
        slug="real-estate"
      />
      <ServiceIntro
        heading="Your Partner in Property Growth"
        description="At The Indus Group, we focus on key growth sectors within the real estate market. We specialize in developing and managing a diverse portfolio of affordable and luxury residential projects, alongside state-of-the-art industrial warehouses. Our expert team helps clients navigate opportunities in these high-demand segments, from initial investment to final delivery, ensuring every project meets our standards of quality and value."
      />
      <ServiceFeatures features={features} heading="Real Estate & Infrastructure Services" />
      <ServiceCTA
        title="Explore a Real Estate Opportunity"
        description="Connect with our real estate team to discuss development projects, investment, or property advisory."
      />
    </>
  )
}
