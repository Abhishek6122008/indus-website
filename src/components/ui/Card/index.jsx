import { cn } from '@/lib/utils'

export function Card({ children, className, hover = false, padding = true, dark = false }) {
  return (
    <div
      className={cn(
        'rounded-2xl border',
        dark
          ? 'bg-blue-900 border-blue-800'
          : 'bg-white border-blue-100 shadow-sm',
        hover && 'transition-all duration-300 hover:-translate-y-1',
        hover && (dark ? 'hover:border-blue-600' : 'hover:shadow-md hover:border-blue-200'),
        padding && 'p-6',
        className,
      )}
    >
      {children}
    </div>
  )
}
