import { cn } from '@/lib/utils'

type StatItemProps = {
  value: string
  label: string
  light?: boolean
  className?: string
}

export function StatItem({ value, label, light = false, className }: StatItemProps) {
  return (
    <div className={cn('text-center', className)}>
      <div
        className={cn(
          'text-4xl md:text-5xl font-bold font-heading mb-2',
          light ? 'text-white' : 'text-blue-600',
        )}
      >
        {value}
      </div>
      <div
        className={cn(
          'text-sm md:text-base font-medium',
          light ? 'text-blue-100' : 'text-slate-600',
        )}
      >
        {label}
      </div>
    </div>
  )
}
