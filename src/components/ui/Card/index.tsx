import { cn } from '@/lib/utils'

type CardProps = {
  children: React.ReactNode
  className?: string
  hover?: boolean
  padding?: boolean
}

export function Card({ children, className, hover = false, padding = true }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-xl border border-gray-100 shadow-sm',
        hover && 'transition-all duration-300 hover:shadow-md hover:-translate-y-1',
        padding && 'p-6',
        className,
      )}
    >
      {children}
    </div>
  )
}
