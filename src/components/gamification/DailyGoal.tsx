'use client'

import { Target, Check } from 'lucide-react'
import { useGameStore } from '@/stores/useGameStore'

export function DailyGoal() {
  const { dailyXp, dailyGoal } = useGameStore()
  const progress = Math.min((dailyXp / dailyGoal) * 100, 100)
  const isComplete = progress >= 100

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Target className="w-5 h-5 text-green-500" />
          <span className="font-semibold text-gray-800">Objectif du jour</span>
        </div>
        <span className="text-sm text-gray-500">{dailyXp}/{dailyGoal} XP</span>
      </div>

      <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-500 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      {isComplete && (
        <div className="flex items-center gap-2 mt-2 text-green-600">
          <Check className="w-4 h-4" />
          <span className="text-sm font-medium">Objectif atteint !</span>
        </div>
      )}
    </div>
  )
}
