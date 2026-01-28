'use client'

import { ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { LessonCard } from './LessonCard'
import { useGameStore } from '@/stores/useGameStore'
import { getLessonById } from '@/data/lessons'
import type { Category } from '@/types'

interface CategoryCardProps {
  category: Category
  isExpanded: boolean
  onToggle: () => void
  onLessonStart: (lessonId: number) => void
}

// Map des icônes par catégorie
const categoryIcons: Record<string, string> = {
  basics: '📚',
  conversation: '💬',
  travel: '✈️',
  food: '🍽️',
  shopping: '🛍️',
  work: '💼',
  tech: '💻',
  emails: '📧',
  grammar: '📝',
  idioms: '🗣️',
}

export function CategoryCard({ category, isExpanded, onToggle, onLessonStart }: CategoryCardProps) {
  const { completedLessons, hearts } = useGameStore()

  const lessons = category.lessonIds.map(id => getLessonById(id)).filter(Boolean)
  const completedCount = lessons.filter(l => l && completedLessons.includes(l.id)).length
  const isLocked = hearts === 0

  return (
    <div className="mb-4">
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between mb-3"
      >
        <div className="flex items-center gap-3">
          <div
            className={cn(
              'w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center shadow-md',
              category.color
            )}
          >
            <span className="text-xl">{categoryIcons[category.id] || '📖'}</span>
          </div>
          <div className="text-left">
            <h2 className="font-bold text-gray-800">{category.name}</h2>
            <p className="text-xs text-gray-500">
              {completedCount}/{lessons.length} leçons
            </p>
          </div>
        </div>
        <ChevronRight
          className={cn(
            'w-5 h-5 text-gray-400 transition-transform duration-200',
            isExpanded && 'rotate-90'
          )}
        />
      </button>

      {/* Lessons grid */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-3 pb-2">
              {lessons.map(lesson => lesson && (
                <LessonCard
                  key={lesson.id}
                  lesson={lesson}
                  isCompleted={completedLessons.includes(lesson.id)}
                  isLocked={isLocked}
                  onClick={() => onLessonStart(lesson.id)}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
