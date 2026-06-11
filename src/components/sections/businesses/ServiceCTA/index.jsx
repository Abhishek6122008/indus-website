import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export function ServiceCTA({
  title = 'Ready to Get Started?',
  description = 'Talk to our team and find out how this service can work for your business.',
}) {
  return (
    <section className="section-padding bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-6 h-[2px] bg-blue-300" />
          <span className="text-blue-200 text-xs font-semibold tracking-[0.2em] uppercase">Enquire Now</span>
          <div className="w-6 h-[2px] bg-blue-300" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">{title}</h2>
        <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">{description}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="tel:+917011332238"
            className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
          >
            <Phone className="w-5 h-5" />
            +91 7011 332 238
          </a>
        </div>
      </div>
    </section>
  )
}
