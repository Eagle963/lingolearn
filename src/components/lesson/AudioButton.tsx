'use client'

import { Volume2, VolumeX } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { speakText } from '@/lib/utils'
import { cn } from '@/lib/utils'

interface AudioButtonProps {
  text: string
  lang?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
  autoPlay?: boolean
}

export function AudioButton({
  text,
  lang = 'en',
  size = 'md',
  className,
  autoPlay = false,
}: AudioButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasPlayed, setHasPlayed] = useState(false)

  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  }

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  }

  const handlePlay = async () => {
    if (isPlaying) return

    setIsPlaying(true)
    try {
      await speakText(text, lang)
    } catch (error) {
      console.error('Audio playback failed:', error)
    } finally {
      setIsPlaying(false)
      setHasPlayed(true)
    }
  }

  // Auto-play on mount if enabled
  if (autoPlay && !hasPlayed) {
    handlePlay()
  }

  return (
    <motion.button
      onClick={handlePlay}
      disabled={isPlaying}
      className={cn(
        'rounded-full flex items-center justify-center transition-all',
        'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md',
        'hover:shadow-lg active:scale-95',
        isPlaying && 'animate-pulse',
        sizes[size],
        className
      )}
      whileTap={{ scale: 0.9 }}
      aria-label="Écouter la prononciation"
    >
      {isPlaying ? (
        <VolumeX className={iconSizes[size]} />
      ) : (
        <Volume2 className={iconSizes[size]} />
      )}
    </motion.button>
  )
}
