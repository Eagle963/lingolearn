'use client'

import { useState } from 'react'
import { StatsBar, DailyGoal, WordOfDay, HeartsWarning } from '@/components/gamification'
import { CategoryCard } from '@/components/lesson'
import { categories } from '@/data/categories'

interface HomeScreenProps {
  onLessonStart: (lessonId: number) => void
}

export function HomeScreen({ onLessonStart }: HomeScreenProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <StatsBar />

      {/* Daily Goal */}
      <div className="px-4 py-4">
        <DailyGoal />
      </div>

      {/* Word of the Day */}
      <div className="px-4 pb-4">
        <WordOfDay />
      </div>

      {/* Hearts Warning */}
      <HeartsWarning />

      {/* Categories */}
      <div className="px-4">
        {categories.map(category => (
          <CategoryCard
            key={category.id}
            category={category}
            isExpanded={expandedCategory === category.id}
            onToggle={() =>
              setExpandedCategory(
                expandedCategory === category.id ? null : category.id
              )
            }
            onLessonStart={onLessonStart}
          />
        ))}
      </div>
    </div>
  )
}
