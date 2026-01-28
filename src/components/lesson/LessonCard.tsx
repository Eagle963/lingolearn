'use client'

import { Zap, Lock, Check } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { Lesson } from '@/types'

interface LessonCardProps {
  lesson: Lesson
  isCompleted: boolean
  isLocked: boolean
  onClick: () => void
}

export function LessonCard({ lesson, isCompleted, isLocked, onClick }: LessonCardProps) {
  return (
    <motion.button
      onClick={() => !isLocked && onClick()}
      disabled={isLocked}
      className={cn(
        'relative bg-white rounded-xl p-4 shadow-sm border border-gray-100 transition-all w-full text-left',
        isLocked ? 'opacity-50 cursor-not-allowed' : 'active:scale-95 hover:shadow-md'
      )}
      whileTap={isLocked ? {} : { scale: 0.95 }}
    >
      {/* Completed badge */}
      {isCompleted && (
        <div className="absolute -top-1.5 -right-1.5 bg-green-500 rounded-full p-1 shadow">
          <Check className="w-3 h-3 text-white" />
        </div>
      )}

      {/* Locked overlay */}
      {isLocked && (
        <div className="absolute inset-0 bg-gray-900/10 rounded-xl flex items-center justify-center">
          <Lock className="w-6 h-6 text-gray-500" />
        </div>
      )}

      {/* Content */}
      <div className="text-3xl mb-2">{lesson.icon}</div>
      <h3 className="font-semibold text-gray-800 text-sm">{lesson.title}</h3>

      <div className="flex items-center gap-1 mt-1">
        <Zap className="w-3 h-3 text-yellow-500" />
        <span className="text-xs text-gray-500">+{lesson.xpReward} XP</span>
        <span className="ml-auto text-xs">{'⭐'.repeat(lesson.difficulty)}</span>
      </div>
    </motion.button>
  )
}
