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

// Full narrative content imported from theindusgroup.com/logistics.html
const contentSections = [
  {
    heading: 'Why Choose Us?',
    body:
      'We eliminate the complexities of logistics and supply chain management. As a leading provider of integrated global solutions, we streamline your operations to ensure efficient and reliable delivery of your goods.',
  },
  {
    heading: 'Integrated Logistics Solutions',
    body:
      'The digital era has reshaped industries worldwide, and logistics is no exception. Now, logistics is embracing this digital revolution, reshaping its approach and future. The Indus Group drives this change with advanced, integrated logistics solutions for manufacturers and traders. Leveraging technology, we deliver smarter, faster, and more efficient supply chain services. From domestic shipping to global freight and warehousing, we provide end-to-end logistics support. Trust us for seamless, reliable solutions that keep your business moving forward.',
  },
  {
    heading: 'Industries Served',
    body:
      'We deliver specialized logistics solutions across diverse industries, from retail to pharmaceuticals. Our tailored services and extensive expertise ensure your supply chain runs seamlessly. Beyond transport, we provide comprehensive warehousing and end-to-end logistics. Our dedicated team is committed to exceeding your expectations in both domestic and international markets.',
  },
  {
    heading: 'Our Solutions',
    body:
      'We grow your business by solving three key challenges in global trade. Our team closes the gap in international trade knowledge and simplifies complex supply chain solutions. We also provide cash flow for your cargo release through our technology-driven services. With our personalized customer service, we manage your entire shipment process. By consolidating all your logistics needs with us, you can significantly reduce both cost and time. This integrated approach ensures your goods are delivered safely and efficiently.',
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

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {contentSections.map((s) => (
            <div key={s.heading}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-[2px] bg-blue-600" />
                <h2 className="text-2xl md:text-3xl font-bold font-heading text-slate-900">
                  {s.heading}
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

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
