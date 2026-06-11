import Link from 'next/link'
import { Truck, Building2, GraduationCap, Building, UtensilsCrossed, ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'

const businesses = [
  {
    Icon: Truck,
    title: 'Logistics & Supply Chain',
    description: 'End-to-end logistics and supply chain solutions for domestic and international trade.',
    href: '/businesses/logistics',
    iconClass: 'text-blue-600 bg-blue-50',
  },
  {
    Icon: Building2,
    title: 'Enterprise Solutions',
    description: 'B2B consulting, MSME support, market expansion strategies, and energy sector expertise.',
    href: '/businesses/enterprise-solutions',
    iconClass: 'text-purple-600 bg-purple-50',
  },
  {
    Icon: GraduationCap,
    title: 'Skill Development',
    description: 'Professional training programmes and workforce upskilling for a competitive edge.',
    href: '/businesses/skill-development',
    iconClass: 'text-green-600 bg-green-50',
  },
  {
    Icon: Building,
    title: 'Real Estate & Infra',
    description: 'Property development and infrastructure projects with strong investment potential.',
    href: '/businesses/real-estate',
    iconClass: 'text-orange-600 bg-orange-50',
  },
  {
    Icon: UtensilsCrossed,
    title: 'HBC Brand Franchise',
    description: 'Join the HBC food chain franchise — a proven business model with full support.',
    href: '/businesses/hbc-franchise',
    iconClass: 'text-red-600 bg-red-50',
  },
]

export function BusinessesGrid() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Businesses"
          title="Five Verticals, One Vision"
          subtitle="Focused excellence across five business domains, each designed to create lasting value for our clients."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {businesses.map((b) => (
            <Card key={b.href} hover>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${b.iconClass}`}>
                <b.Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold font-heading text-navy-800 mb-2">{b.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{b.description}</p>
              <Link
                href={b.href}
                className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:gap-2 transition-all duration-200"
              >
                Explore <ArrowRight className="w-4 h-4" />
              </Link>
            </Card>
          ))}

          {/* View All CTA card */}
          <Card className="bg-navy-800 border-navy-800 flex flex-col items-center justify-center text-center min-h-[200px]">
            <h3 className="text-lg font-semibold font-heading text-white mb-2">View All Businesses</h3>
            <p className="text-gray-300 text-sm mb-5">See the full overview of our business verticals.</p>
            <Link
              href="/businesses"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-white transition-colors"
            >
              Explore All <ArrowRight className="w-4 h-4" />
            </Link>
          </Card>
        </div>
      </div>
    </section>
  )
}
