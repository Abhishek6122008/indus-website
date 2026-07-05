import Image from 'next/image'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function CompanyStory() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-blue-100 shadow-sm relative">
              <Image
                src="/images/about/indus-image.jpeg"
                alt="The Indus Group team collaborating"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="absolute -top-5 -right-5 bg-blue-600 rounded-xl p-5 shadow-xl">
              <div className="text-3xl font-bold font-heading text-white">2011</div>
              <div className="text-xs font-semibold text-blue-100 mt-0.5 uppercase tracking-wide">
                Founded
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <SectionHeading
              label="Our Story"
              title="Built on Purpose, Driven by Impact"
              align="left"
            />
            <p className="text-slate-600 leading-relaxed mb-5">
              We empower MSMEs and Trade Support Organizations with tailored global-local solutions,
              helping them thrive in a dynamic market. Our passionate team drives growth through
              customized strategies and specialized expertise.
            </p>
            <p className="text-slate-600 leading-relaxed">
              As a forward-thinking conglomerate, we innovate in logistics, enterprise solutions, and
              skill development. Committed to sustainable progress, we deliver real impact for businesses
              and communities. Together, we build a brighter, more resilient future.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}