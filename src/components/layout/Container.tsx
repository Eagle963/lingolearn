import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('max-w-md mx-auto bg-white min-h-screen shadow-xl', className)}>
      {children}
    </div>
  )
}
