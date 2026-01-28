'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showText?: boolean
  className?: string
}

const sizes = {
  sm: 40,
  md: 56,
  lg: 80,
  xl: 120,
}

export function Logo({ size = 'md', showText = false, className }: LogoProps) {
  const dimension = sizes[size]
  const [imgSrc, setImgSrc] = useState('/icons/logo.png')

  return (
    <div className={cn('flex flex-col items-center', className)}>
      <Image
        src={imgSrc}
        alt="LingoLearn"
        width={dimension}
        height={dimension}
        className="object-contain"
        priority
        onError={() => setImgSrc('/icons/logo.svg')}
      />
      {showText && (
        <div className="text-center mt-1">
          <span className="font-bold text-xl bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
            Lingolearn
          </span>
          <p className="text-xs text-gray-500">Serious Fun</p>
        </div>
      )}
    </div>
  )
}
