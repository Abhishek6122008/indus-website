import { Truck, Globe, Package, BarChart3, Warehouse, Smartphone } from 'lucide-react'
import { ServiceHero } from '@/components/sections/businesses/ServiceHero'
import { ServiceFeatures } from '@/components/sections/businesses/ServiceFeatures'
import { ServiceCTA } from '@/components/sections/businesses/ServiceCTA'

export const metadata = {
  title: 'Logistics & Supply Chain | The Indus Group of Co.',
  description:
    'End-to-end logistics and supply chain management for domestic and international trade — freight, last-mile delivery, warehousing, and more.',
}

const features = [
  {
    Icon: Truck,
    title: 'Domestic Freight Management',
    description:
      'Road, rail, and air freight solutions covering India — ensuring reliable movement of goods with full visibility at every stage.',
  },
  {
    Icon: Globe,
    title: 'International Trade Logistics',
    description:
      'Customs clearance, import/export documentation, and international freight forwarding. We navigate global trade so you can focus on your business.',
  },
  {
    Icon: Package,
    title: 'Last-Mile Delivery',
    description:
      'Reliable last-mile networks that connect suppliers to end customers efficiently — reducing delays and improving satisfaction.',
  },
  {
    Icon: BarChart3,
    title: 'Supply Chain Consulting',
    description:
      'End-to-end supply chain analysis and optimisation. We identify bottlenecks, reduce costs, and build resilient systems for long-term efficiency.',
  },
  {
    Icon: Warehouse,
    title: 'Warehousing Solutions',
    description:
      'Strategically located warehousing facilities including cold chain management — built to support your distribution and storage needs.',
  },
  {
    Icon: Smartphone,
    title: 'Technology Integration',
    description:
      'Real-time shipment tracking and digital logistics platforms that give you full control and transparency over your supply chain.',
  },
]

export default function LogisticsPage() {
  return (
    <>
      <ServiceHero
        title="Logistics & Supply Chain Management"
        subtitle="End-to-end logistics solutions for domestic and international trade — reliable, traceable, and built for scale."
        slug="logistics"
      />
      <ServiceFeatures
        features={features}
        heading="Logistics Services We Offer"
      />
      <ServiceCTA
        title="Ready to Streamline Your Supply Chain?"
        description="Talk to our logistics team to find a solution tailored to your trade and distribution needs."
      />
    </>
  )
}
