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
    Icon: Building2,
    title: 'Commercial & Industrial Leasing',
    description:
      'We specialize in securing prime industrial spaces and warehouses that fit your operational needs, handling all negotiations from start to finish.',
  },
  {
    Icon: HardHat,
    title: 'Project Management',
    description:
      'Our team provides full-service project management for residential and industrial properties, ensuring quality, timelines, and budgets are met.',
  },
  {
    Icon: BarChart3,
    title: 'Investment Advisory',
    description:
      'Leverage our market insights for opportunities in affordable/luxury housing and the booming industrial warehouse sector.',
  },
  {
    Icon: Home,
    title: 'Land Acquisition',
    description:
      'We assist in identifying and acquiring suitable land parcels for affordable, luxury, and industrial development, managing all due diligence.',
  },
  {
    Icon: Layers,
    title: 'Valuation Services',
    description:
      'Get accurate and reliable property valuations for transaction, financing, or compliance purposes, conducted by our certified professionals.',
  },
  {
    Icon: Factory,
    title: 'Legal & Documentation',
    description:
      'Our experts ensure a smooth and secure transaction process by handling all legal paperwork, title verification, and contract drafting with precision.',
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
      <ServiceFeatures features={features} heading="Our Core Real Estate Services" />
      <ServiceCTA
        title="Explore a Real Estate Opportunity"
        description="Connect with our real estate team to discuss development projects, investment, or property advisory."
      />
    </>
  )
}
