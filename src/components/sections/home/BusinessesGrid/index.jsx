import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'

const businesses = [
  {
    title: 'Logistics & Supply Chain Management',
    tagline: 'Connecting pathways for seamless trade.',
    description:
      'We provide comprehensive, end-to-end logistics and supply chain solutions for domestic and international trade. From freight management to last-mile delivery, our expertise ensures your goods move efficiently, reliably, and on time.',
    exploreLabel: 'Explore Logistics',
    href: '/businesses/logistics',
    image: '/images/businesses/logistics/logistic-supply-chain.jpeg',
    flip: false,
  },
  {
    title: 'Enterprise Solutions',
    tagline: 'Strategies that drive real growth.',
    description:
      'Our enterprise consulting arm delivers tailored B2B strategies for MSMEs, corporates, and trade entities. We specialise in market expansion, energy sector consulting, and business development — helping clients unlock new opportunities.',
    exploreLabel: 'Explore Solutions',
    href: '/businesses/enterprise-solutions',
    image: '/images/businesses/enterprise/enterprise-hero.png',
    flip: true,
  },
  {
    title: 'Skill Development Solutions',
    tagline: 'Upskilling the workforce of tomorrow.',
    description:
      'We deliver professional training programmes and workforce development initiatives that equip individuals and organisations with the skills needed to stay competitive. From certifications to on-site training, we build capability at scale.',
    exploreLabel: 'Explore Programmes',
    href: '/businesses/skill-development',
    image: '/images/businesses/skill-development/skill-dev-hero.png',
    flip: false,
  },
  {
    title: 'Real Estate & Infra Projects',
    tagline: 'Building foundations for lasting value.',
    description:
      'The Indus Group brings expertise in property development and infrastructure projects — identifying, developing, and delivering high-value assets. Whether residential, commercial, or industrial, we create spaces that perform.',
    exploreLabel: 'Explore Projects',
    href: '/businesses/real-estate',
    image: '/images/businesses/real-estate/real-estate-hero.png',
    flip: true,
  },
]

export function BusinessesGrid() {
  return (
    <div>
      <div className="bg-blue-50 section-padding pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Businesses Verticals"
            title="Four Verticals, One Vision"
            subtitle="Focused excellence across four business domains, each designed to create lasting value."
          />
        </div>
      </div>

      {businesses.map((b, i) => (
        <section key={b.href} className={i % 2 === 0 ? 'bg-blue-50' : 'bg-white'}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className={b.flip ? 'lg:order-2' : 'lg:order-1'}>
                <div className="aspect-[4/3] rounded-2xl border border-blue-100 shadow-sm overflow-hidden relative">
                  <Image
                    src={b.image}
                    alt={b.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className={b.flip ? 'lg:order-1' : 'lg:order-2'}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-[2px] bg-blue-600" />
                  <span className="text-blue-600 text-xs font-semibold tracking-[0.18em] uppercase">
                    Business Vertical
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-3 leading-tight">
                  {b.title}
                </h2>

                <p className="text-blue-600 font-medium italic mb-5">{b.tagline}</p>
                <p className="text-slate-600 leading-relaxed mb-8">{b.description}</p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href={b.href}
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-blue-700 hover:-translate-y-0.5 transition-all"
                  >
                    {b.exploreLabel}
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 border-2 border-blue-200 text-blue-700 px-6 py-3 rounded-lg font-semibold text-sm hover:bg-blue-50 hover:-translate-y-0.5 transition-all"
                  >
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}