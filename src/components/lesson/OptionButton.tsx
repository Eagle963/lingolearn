'use client'

import { Check, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface OptionButtonProps {
  option: string
  index: number
  isSelected: boolean
  isCorrect: boolean | null
  correctIndex: number
  disabled: boolean
  onClick: () => void
}

export function OptionButton({
  option,
  index,
  isSelected,
  isCorrect,
  correctIndex,
  disabled,
  onClick,
}: OptionButtonProps) {
  const isRevealed = isCorrect !== null
  const isThisCorrect = index === correctIndex
  const isThisWrong = isSelected && !isThisCorrect && isRevealed

  let style = 'bg-white border-2 border-gray-200'
  let iconBg = 'bg-gray-100 text-gray-600'

  if (isRevealed) {
    if (isThisCorrect) {
      style = 'bg-green-100 border-2 border-green-500'
      iconBg = 'bg-green-500 text-white'
    } else if (isThisWrong) {
      style = 'bg-red-100 border-2 border-red-500'
      iconBg = 'bg-red-500 text-white'
    } else {
      style = 'bg-gray-50 border-2 border-gray-200 opacity-50'
    }
  }

  const letter = String.fromCharCode(65 + index) // A, B, C, D

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'w-full p-4 rounded-xl text-left font-medium transition-all',
        style
      )}
      whileTap={disabled ? {} : { scale: 0.98 }}
    >
      <div className="flex items-center gap-3">
        <div className={cn('w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold', iconBg)}>
          {isRevealed && isThisCorrect ? (
            <Check className="w-5 h-5" />
          ) : isThisWrong ? (
            <X className="w-5 h-5" />
          ) : (
            letter
          )}
        </div>
        <span className="text-gray-800">{option}</span>
      </div>
    </motion.button>
  )
}
