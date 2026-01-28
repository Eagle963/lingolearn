'use client'

import { Check, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

interface FeedbackBannerProps {
  isCorrect: boolean
  correctAnswer?: string
  onContinue: () => void
}

export function FeedbackBanner({ isCorrect, correctAnswer, onContinue }: FeedbackBannerProps) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={cn(
        'p-5 border-t-2',
        isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
      )}
    >
      <div className="flex items-center gap-3 mb-3">
        <div
          className={cn(
            'w-10 h-10 rounded-full flex items-center justify-center',
            isCorrect ? 'bg-green-500' : 'bg-red-500'
          )}
        >
          {isCorrect ? (
            <Check className="w-6 h-6 text-white" />
          ) : (
            <X className="w-6 h-6 text-white" />
          )}
        </div>
        <div>
          <span
            className={cn(
              'font-bold text-lg',
              isCorrect ? 'text-green-700' : 'text-red-700'
            )}
          >
            {isCorrect ? 'Excellent !' : 'Pas tout à fait...'}
          </span>
          {!isCorrect && correctAnswer && (
            <p className="text-sm text-red-600">Réponse : {correctAnswer}</p>
          )}
        </div>
      </div>

      <Button
        onClick={onContinue}
        variant={isCorrect ? 'primary' : 'danger'}
        className="w-full"
        size="lg"
      >
        CONTINUER
      </Button>
    </motion.div>
  )
}
