'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showText?: boolean
  className?: string
}

const sizes = {
  sm: 32,
  md: 48,
  lg: 64,
  xl: 96,
}

export function Logo({ size = 'md', showText = false, className }: LogoProps) {
  const dimension = sizes[size]

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Image
        src="/icons/logo.svg"
        alt="LingoLearn"
        width={dimension}
        height={dimension}
        className="rounded-xl"
        priority
      />
      {showText && (
        <span className="font-bold text-xl text-gray-800">
          Lingo<span className="text-green-500">Learn</span>
        </span>
      )}
    </div>
  )
}
