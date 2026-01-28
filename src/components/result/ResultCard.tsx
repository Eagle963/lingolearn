'use client'

import { Trophy, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import type { Lesson } from '@/types'

interface ResultCardProps {
  lesson: Lesson
  score: number
  total: number
  xpEarned: number
  streak: number
  onContinue: () => void
}

export function ResultCard({ lesson, score, total, xpEarned, streak, onContinue }: ResultCardProps) {
  const accuracy = Math.round((score / total) * 100)
  const isPerfect = accuracy === 100

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', duration: 0.5 }}
      className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl text-center"
    >
      {/* Trophy icon */}
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: 'spring' }}
        className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
      >
        <Trophy className="w-10 h-10 text-white" />
      </motion.div>

      <h1 className="text-2xl font-bold text-gray-800 mb-1">Leçon terminée !</h1>
      <p className="text-gray-500 mb-6">
        {lesson.icon} {lesson.title}
      </p>

      {/* Stats grid */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-green-50 rounded-xl p-3"
        >
          <div className="text-xl font-bold text-green-600">{accuracy}%</div>
          <div className="text-xs text-gray-500">Précision</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-yellow-50 rounded-xl p-3"
        >
          <div className="text-xl font-bold text-yellow-600">+{xpEarned}</div>
          <div className="text-xs text-gray-500">XP</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-orange-50 rounded-xl p-3"
        >
          <div className="text-xl font-bold text-orange-600">{streak}🔥</div>
          <div className="text-xs text-gray-500">Série</div>
        </motion.div>
      </div>

      {/* Perfect score bonus */}
      {isPerfect && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl p-3 mb-6 flex items-center gap-3"
        >
          <Award className="w-8 h-8 text-yellow-600" />
          <div className="text-left">
            <p className="font-bold text-yellow-800">Sans faute !</p>
            <p className="text-sm text-yellow-600">+5 gems bonus</p>
          </div>
        </motion.div>
      )}

      <Button onClick={onContinue} className="w-full" size="lg">
        CONTINUER
      </Button>
    </motion.div>
  )
}
