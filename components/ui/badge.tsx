import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold font-sans transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  // Deteksi status online untuk animasi pulse
  const isOnline = className?.includes('bg-green-500')
  return (
    <div
      className={cn(
        badgeVariants({ variant }),
        // Tambahkan ring dan shadow untuk badge status agar lebih kontras
        variant === 'default' ? 'shadow-sm ring-1 ring-green-400/40' : '',
        variant === 'secondary' ? 'shadow-sm ring-1 ring-gray-400/40' : '',
        isOnline ? 'relative overflow-visible' : '',
        className
      )}
      {...props}
    >
      {isOnline && (
        <span
          className="absolute left-0 top-0 w-full h-full rounded-full animate-pulse-badge bg-green-400/30 z-0"
          style={{ filter: 'blur(2px)' }}
        />
      )}
      <span className={isOnline ? 'relative z-10' : ''}>{props.children}</span>
    </div>
  )
}

export { Badge, badgeVariants }
/* tailwind.config.ts: tambahkan keyframes animate-pulse-badge jika belum ada */
