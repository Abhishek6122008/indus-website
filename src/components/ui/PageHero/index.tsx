import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type Crumb = { label: string; href?: string }

type PageHeroProps = {
  label?: string
  title: string
  subtitle?: string
  breadcrumbs?: Crumb[]
  className?: string
}

export function PageHero({ label, title, subtitle, breadcrumbs, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        'pt-20 pb-16 relative overflow-hidden',
        'bg-gradient-to-br from-[#0b1f5c] via-[#1e40af] to-blue-600',
        className,
      )}
    >
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
