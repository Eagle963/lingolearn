'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ResultCard } from '@/components/result/ResultCard'
import { useGameStore } from '@/stores/useGameStore'
import { getLessonById } from '@/data/lessons'

interface ResultScreenProps {
  lessonId: number
  score: number
  total: number
  xpEarned: number
  onContinue: () => void
}

export function ResultScreen({ lessonId, score, total, xpEarned, onContinue }: ResultScreenProps) {
  const lesson = getLessonById(lessonId)
  const { streak, addXp, addDailyXp, completeLesson, addGems, incrementStreak } = useGameStore()

  useEffect(() => {
    // Add XP and complete lesson
    addXp(xpEarned)
    addDailyXp(xpEarned)
    completeLesson(lessonId)

    // Bonus for perfect score
    if (score === total) {
      addGems(5)
    }

    // Increment streak (would check date in real app)
    incrementStreak()
  }, [])

  if (!lesson) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-400 via-orange-400 to-orange-500 flex flex-col items-center justify-center p-6">
      {/* Confetti effect placeholder */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Add confetti animation here if desired */}
      </motion.div>

      <ResultCard
        lesson={lesson}
        score={score}
        total={total}
        xpEarned={xpEarned}
        streak={streak}
        onContinue={onContinue}
      />
    </div>
  )
}
