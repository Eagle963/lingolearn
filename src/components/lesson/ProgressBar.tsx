'use client'

import { motion } from 'framer-motion'

interface ProgressBarProps {
  current: number
  total: number
  className?: string
}

export function ProgressBar({ current, total, className }: ProgressBarProps) {
  const progress = (current / total) * 100

  return (
    <div className={`bg-gray-100 rounded-full h-2.5 overflow-hidden ${className || ''}`}>
      <motion.div
        className="bg-gradient-to-r from-green-400 to-green-500 h-full rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />
    </div>
  )
}
