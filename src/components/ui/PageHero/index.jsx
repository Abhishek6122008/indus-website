import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export function PageHero({ label, title, subtitle, breadcrumbs, backgroundImage, imagePosition = 'object-center', imageFit = 'object-cover', className }) {
  return (
    <section
      className={cn(
        'pt-28 pb-24 min-h-[420px] lg:min-h-[560px] xl:min-h-[640px] flex items-center relative overflow-hidden',
        'bg-gradient-to-br from-[#0b1f5c] via-[#1e40af] to-blue-600',
        className,
      )}
    >
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            className={cn(imageFit, imagePosition)}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b1f5c]/40 via-[#1e40af]/35 to-blue-600/25 mix-blend-multiply" />
        </>
      )}

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, white 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }}
      />
      {/* Light glow */}
      <div className="absolute -bottom-16 right-0 w-96 h-96 bg-blue-400 rounded-full opacity-10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-1.5 text-xs text-blue-200 mb-6 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/80">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {label && (
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-blue-300" />
            <span className="text-blue-200 text-xs font-semibold tracking-[0.2em] uppercase">{label}</span>
          </div>
        )}
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-white leading-tight mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-blue-100 max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  )
}