import { cn } from '@/lib/utils'

type BadgeProps = {
  children: React.ReactNode
  variant?: 'default' | 'navy' | 'blue' | 'success'
  className?: string
}

const variants = {
  default: 'bg-gray-100 text-gray-700',
  navy: 'bg-navy-800 text-white',
  blue: 'bg-blue-100 text-blue-700',
  success: 'bg-green-100 text-green-700',
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
