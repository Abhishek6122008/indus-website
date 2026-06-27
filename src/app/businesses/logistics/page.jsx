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
    title: 'Integrated Logistics Solutions',
    description:
      'Technology-driven logistics solutions for manufacturers and traders, providing seamless end-to-end logistics support.',
  },
  {
    Icon: Globe,
    title: 'Global Reach',
    description:
      'Domestic and international logistics services designed to simplify trade and transportation across markets.',
  },
  {
    Icon: Warehouse,
    title: 'Industries Served',
    description:
      'Specialized logistics solutions supporting multiple industries through warehousing, distribution, and supply chain management.',
  },
  {
    Icon: BarChart3,
    title: 'Supply Chain Optimization',
    description:
      'Improving operational efficiency, reducing costs, and streamlining logistics processes through integrated solutions.',
  },
  {
    Icon: Package,
    title: 'End-to-End Logistics',
    description:
      'Complete logistics support from shipment origin to final delivery with visibility and reliability.',
  },
  {
    Icon: Smartphone,
    title: 'Technology-Driven Services',
    description:
      'Digital logistics tools and tracking systems that provide transparency and better control over operations.',
  },
]

export default function LogisticsPage() {
  return (
    <>
      <ServiceHero
        title="Integrated Logistics Solutions"
        subtitle="Your global logistics partner for seamless supply chains. Streamlining operations with efficiency, reliability, and global reach."
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
