import Link from 'next/link'
import { Phone, Mail, ArrowRight } from 'lucide-react'

export function ContactCTA() {
  return (
    <section className="section-padding bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-6 h-[2px] bg-blue-300" />
          <span className="text-blue-200 text-xs font-semibold tracking-[0.2em] uppercase">Get In Touch</span>
          <div className="w-6 h-[2px] bg-blue-300" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
          Ready to Work Together?
        </h2>
        <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Reach out and discover how The Indus Group can drive growth for your business.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-lg font-bold text-base hover:bg-blue-50 transition-colors shadow-lg"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="tel:+917011332238"
            className="inline-flex items-center gap-2 text-white font-semibold hover:text-blue-100 transition-colors"
          >
            <Phone className="w-5 h-5" />
            +91 7011 332 238
          </a>
          <a
            href="mailto:info@theindusgroup.com"
            className="inline-flex items-center gap-2 text-white font-semibold hover:text-blue-100 transition-colors"
          >
            <Mail className="w-5 h-5" />
            info@theindusgroup.com
          </a>
        </div>
      </div>
    </section>
  )
}
