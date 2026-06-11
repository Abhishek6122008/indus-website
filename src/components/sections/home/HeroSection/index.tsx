import Link from 'next/link'
import { Play, ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 overflow-hidden">

      {/* Dot grid background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Blue glow accent */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-500 rounded-full opacity-5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">
        <div className="max-w-3xl">
          <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-6 block">
            The Indus Group of Co.
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white leading-tight mb-6">
            Delivering{' '}
            <span className="text-blue-400">Industry-Leading</span>{' '}
            Solutions Across Verticals
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
            With reliability, innovation, and integrity — empowering MSMEs and enterprises
            through tailored strategies and sustainable growth.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.youtube.com/@theindusgroupco"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-md font-semibold text-base hover:bg-blue-700 transition-colors"
            >
              <Play className="w-5 h-5 fill-white" />
              Discover Indus
            </a>
            <Link
              href="/businesses"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-md font-semibold text-base hover:bg-white/10 transition-colors"
            >
              Explore Businesses
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
