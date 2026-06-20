import { Mail, ArrowRight } from 'lucide-react'

export function CareersCTA() {
  return (
    <section className="section-padding bg-blue-600 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2 blur-2xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-700 rounded-full opacity-35 translate-x-1/3 translate-y-1/3 blur-3xl" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-6 h-[2px] bg-blue-300" />
          <span className="text-blue-200 text-xs font-semibold tracking-[0.2em] uppercase">Join Our Team</span>
          <div className="w-6 h-[2px] bg-blue-300" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
          Don&apos;t see your role?
        </h2>
        <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          We are always looking for exceptional talent to join our growing team. Send your CV and a cover letter to us!
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:info@theindusgroup.com?subject=General Application - Careers"
            className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg font-bold text-base transition-colors shadow-lg group"
          >
            <Mail className="w-5 h-5" />
            Send Your CV
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          <span className="text-white/80 font-medium block w-full mt-4">
            or email us directly at{' '}
            <a
              href="mailto:info@theindusgroup.com"
              className="text-white underline hover:text-blue-100 transition-colors"
            >
              info@theindusgroup.com
            </a>
          </span>
        </div>
      </div>
    </section>
  )
}
