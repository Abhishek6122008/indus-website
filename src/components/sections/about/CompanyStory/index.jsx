import { SectionHeading } from '@/components/ui/SectionHeading'

export function CompanyStory() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] bg-blue-50 rounded-2xl border border-blue-100 flex items-center justify-center">
              {/* TODO: Replace with actual image — public/images/about/company-story.jpg */}
              <span className="text-blue-300 text-sm">[ Company Story Image ]</span>
            </div>
            <div className="absolute -top-5 -right-5 bg-blue-600 rounded-xl p-5 shadow-xl">
              <div className="text-3xl font-bold font-heading text-white">2010</div>
              <div className="text-xs font-semibold text-blue-100 mt-0.5 uppercase tracking-wide">Founded</div>
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
              The Indus Group of Co. was founded with one clear purpose: to bridge the gap between
              opportunity and execution for Indian businesses. Starting as a focused logistics and
              trade support firm, we quickly recognised that our clients needed more — broader
              expertise, deeper relationships, and a partner who understood the full journey of
              business growth.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Today, we operate across five distinct business verticals, each serving a specific
              need in the market. From supply chain management to skill development, from real
              estate to food franchise — the Indus Group is where ambition meets execution. We
              have grown with our clients, and their success is our most enduring measure of
              achievement.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
