import { Home, Building2, Factory, HardHat, BarChart3, Layers } from 'lucide-react'
import { ServiceHero } from '@/components/sections/businesses/ServiceHero'
import { ServiceIntro } from '@/components/sections/businesses/ServiceIntro'
import { ServiceFeatures } from '@/components/sections/businesses/ServiceFeatures'
import { RealEstatePartnersStrip } from '@/components/sections/businesses/RealEstatePartnersStrip'
import { ProjectFocus } from '@/components/sections/businesses/ProjectFocus'
import { ServiceCTA } from '@/components/sections/businesses/ServiceCTA'

export const metadata = {
  title: 'Real Estate & Infra Projects | The Indus Group Co.',
  description:
    'Property development and infrastructure project expertise — residential, commercial, industrial, and civic.',
}

const features = [
  {
    image: '/images/businesses/real-estate/services/leasing.png',
    title: 'Commercial & Industrial Leasing',
    description:
      'We specialize in securing prime industrial spaces and warehouses that fit your operational needs, handling all negotiations from start to finish.',
  },
  {
    image: '/images/businesses/real-estate/services/project-management.png',
    title: 'Project Management',
    description:
      'Our team provides full-service project management for residential and industrial properties, ensuring quality, timelines, and budgets are met.',
  },
  {
    image: '/images/businesses/real-estate/services/investment-advisory.png',
    title: 'Investment Advisory',
    description:
      'Leverage our market insights for opportunities in affordable/luxury housing and the booming industrial warehouse sector.',
  },
  {
    image: '/images/businesses/real-estate/services/land-acquisition.png',
    title: 'Land Acquisition',
    description:
      'We assist in identifying and acquiring suitable land parcels for affordable, luxury, and industrial development, managing all due diligence.',
  },
  {
    image: '/images/businesses/real-estate/services/valuation.png',
    title: 'Valuation Services',
    description:
      'Get accurate and reliable property valuations for transaction, financing, or compliance purposes, conducted by our certified professionals.',
  },
  {
    image: '/images/businesses/real-estate/services/legal-documentation.png',
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
        backgroundImage="/images/businesses/real-estate/real-estate-hero.png"
      />
      <ServiceIntro
        heading="Your Partner in Property Growth"
        description="At The Indus Group of Co. , we focus on key growth sectors within the real estate market. We specialize in developing and managing a diverse portfolio of affordable and luxury residential projects, alongside state-of-the-art industrial warehouses. Our expert team helps clients navigate opportunities in these high-demand segments, from initial investment to final delivery, ensuring every project meets our standards of quality and value."
      />
      <ServiceFeatures features={features} heading="Our Core Real Estate Services" />
      <RealEstatePartnersStrip />
      <ProjectFocus />
      <ServiceCTA
        title="Discuss Your Real Estate Needs"
        description="Tell us about your property requirements and our team will get back to you with the right solution."
      />
    </>
  )
}
