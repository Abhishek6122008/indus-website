import { Store, MapPin, Users, Package, Megaphone, Headphones } from 'lucide-react'
import { ServiceHero } from '@/components/sections/businesses/ServiceHero'
import { ServiceFeatures } from '@/components/sections/businesses/ServiceFeatures'
import { ServiceCTA } from '@/components/sections/businesses/ServiceCTA'

export const metadata = {
  title: 'HBC Brand Franchise | The Indus Group of Co.',
  description:
    'Own a proven food chain franchise with full operational support — from site selection and training to ongoing supply chain management.',
}

const features = [
  {
    Icon: Store,
    title: 'Complete Franchise Package',
    description:
      'A fully developed business model with brand licence, operational playbook, and everything you need to launch and run your outlet.',
  },
  {
    Icon: MapPin,
    title: 'Site Selection Assistance',
    description:
      'Our team supports you in identifying and evaluating high-traffic, commercially viable locations for your franchise outlet.',
  },
  {
    Icon: Users,
    title: 'Training & Onboarding',
    description:
      'Comprehensive training for the franchisee and their staff — covering operations, quality standards, customer service, and brand values.',
  },
  {
    Icon: Package,
    title: 'Supply Chain Support',
    description:
      'Centralised procurement ensures consistent product quality and competitive pricing across all franchise outlets.',
  },
  {
    Icon: Megaphone,
    title: 'Marketing & Branding',
    description:
      'National marketing support, brand assets, and local campaign materials to help you attract and retain customers from day one.',
  },
  {
    Icon: Headphones,
    title: 'Ongoing Operational Support',
    description:
      'A dedicated support team to assist with day-to-day operations, problem solving, and continuous improvement as your franchise grows.',
  },
]

export default function HbcFranchisePage() {
  return (
    <>
      <ServiceHero
        title="Franchise of HBC Brand"
        subtitle="A proven, ready-to-run food chain franchise opportunity with full support from launch to growth."
        slug="hbc-franchise"
      />
      <ServiceFeatures features={features} heading="What the Franchise Includes" />
      <ServiceCTA
        title="Interested in the HBC Franchise?"
        description="Send us a franchise enquiry and our team will walk you through the opportunity in detail."
      />
    </>
  )
}
