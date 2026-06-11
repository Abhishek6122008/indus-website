import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function ContactCTA() {
  return (
    <section className="section-padding bg-gradient-to-r from-navy-900 to-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
          Ready to Work Together?
        </h2>
        <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Reach out to us and discover how The Indus Group can drive growth for your business.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="/contact" size="lg">
            Get in Touch
          </Button>
          <a
            href="tel:+917011332238"
            className="inline-flex items-center gap-2 text-white font-semibold text-lg hover:text-blue-300 transition-colors"
          >
            <Phone className="w-5 h-5" />
            +91 7011 332 238
          </a>
        </div>
      </div>
    </section>
  )
}
