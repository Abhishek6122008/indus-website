import { Target, Eye } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function MissionVision() {
  return (
    <section className="section-padding bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Purpose"
          title="Mission & Vision"
          subtitle="The principles that guide every decision we make."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Mission */}
          <div className="bg-white border border-blue-100 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              We deliver unparalleled value through integrated, sustainable solutions, empowering
              our workforce and enriching communities.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white border border-blue-100 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              To be recognized as &quot;Maximizing value through innovation, optimization, and adaptability.&quot;
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
