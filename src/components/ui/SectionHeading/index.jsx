import { cn } from '@/lib/utils'

export function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
  light = false,
  className,
}) {
  return (
    <div
      className={cn(
        'mb-12',
        align === 'center' ? 'text-center' : 'text-left',
        className,
      )}
    >
      {label && (
        <div className={cn('flex items-center gap-3 mb-4', align === 'center' && 'justify-center')}>
          <div className={cn('w-6 h-[2px]', light ? 'bg-blue-400' : 'bg-blue-600')} />
          <span
            className={cn(
              'text-xs font-semibold tracking-[0.2em] uppercase',
              light ? 'text-blue-300' : 'text-blue-600',
            )}
          >
            {label}
          </span>
        </div>
      )}
      <h2
        className={cn(
          'text-3xl md:text-4xl font-bold font-heading mb-4',
          light ? 'text-white' : 'text-slate-900',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'text-lg max-w-2xl leading-relaxed',
            align === 'center' ? 'mx-auto' : '',
            light ? 'text-blue-100' : 'text-slate-600',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
