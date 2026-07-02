import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden bg-[#0b1f5c]">

      <Image
        src="/images/hero/hero-background.jpg"
        alt="The Indus Group Hero Banner"
        fill
        priority
        className="object-cover object-left opacity-60"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f5c]/40 via-[#0b1f5c]/20 to-[#0b1f5c]/75" />

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1.5px 1.5px, white 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="absolute -bottom-32 -left-20 w-[500px] h-[500px] bg-blue-400 rounded-full opacity-10 blur-[120px] pointer-events-none" />
      <div className="absolute -top-16 right-0 w-80 h-80 bg-white rounded-full opacity-5 blur-3xl pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto px-2 sm:px-12 lg:pl-20 lg:pr-0 relative z-20 py-28">
        <div className="max-w-5xl lg:max-w-5xl ml-auto text-right">

          <div className="flex items-center justify-end gap-3 mb-7">
            <span className="text-blue-200 text-xs font-semibold tracking-[0.2em] uppercase">
              The Indus Group Co.
            </span>
            <div className="w-8 h-[2px] bg-blue-300" />
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-white leading-[1.1] mb-6">
            Delivering{' '}
            <span className="text-blue-200">Industry-Leading</span>{' '}
            Solutions
          </h1>

          <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed ml-auto max-w-2xl">
            Reliability, innovation, and integrity — across five business verticals built to
            empower enterprises and fuel sustainable growth.
          </p>

          <div className="flex flex-wrap gap-4 justify-end">
            <Link
              href="/businesses"
              className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-lg font-bold text-base hover:bg-blue-50 transition-colors shadow-lg"
            >
              Explore Our Businesses
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-white/10 transition-colors"
            >
              Who We Are
            </Link>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce z-20">
        <ChevronDown className="w-6 h-6" />
      </div>

    </section>
  )
}