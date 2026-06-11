import Link from 'next/link'
import { cn } from '@/lib/utils'

const variants = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 border border-blue-600 font-semibold',
  secondary: 'bg-slate-900 text-white hover:bg-slate-800 border border-slate-900',
  outline: 'bg-transparent text-blue-600 hover:bg-blue-600 hover:text-white border-2 border-blue-600',
  ghost: 'bg-transparent text-slate-700 hover:bg-blue-50 border border-transparent',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  href,
  external,
  onClick,
  type = 'button',
  disabled,
}) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
    variants[variant],
    sizes[size],
    className,
  )

  if (href) {
    const linkProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
