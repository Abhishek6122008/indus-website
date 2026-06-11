import { cn } from '@/lib/utils'

const variants = {
  default: 'bg-slate-100 text-slate-700',
  dark: 'bg-slate-800 text-white',
  blue: 'bg-blue-100 text-blue-700',
  success: 'bg-green-100 text-green-700',
}

export function Badge({ children, variant = 'default', className }) {
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
