import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  label?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
  className?: string
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-12',
        align === 'center' ? 'text-center' : 'text-left',
        className,
      )}
    >
      {label && (
        <span
          className={cn(
            'text-sm font-semibold tracking-widest uppercase mb-3 block',
            light ? 'text-blue-300' : 'text-blue-600',
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          'text-3xl md:text-4xl font-bold font-heading mb-4',
          light ? 'text-white' : 'text-navy-900',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'text-lg max-w-2xl leading-relaxed',
            align === 'center' ? 'mx-auto' : '',
            light ? 'text-gray-300' : 'text-gray-600',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
