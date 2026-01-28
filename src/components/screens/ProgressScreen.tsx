'use client'

import { BarChart3, Trophy, Calendar, TrendingUp, Award, Target } from 'lucide-react'
import { useGameStore } from '@/stores/useGameStore'
import { categories } from '@/data/categories'
import { lessons } from '@/data/lessons'
import { cn } from '@/lib/utils'

export function ProgressScreen() {
  const { xp, level, streak, completedLessons, dailyXp } = useGameStore()

  const totalLessons = lessons.length
  const completedCount = completedLessons.length
  const overallProgress = Math.round((completedCount / totalLessons) * 100)

  // Calculate category stats
  const categoryStats = categories.map(category => {
    const categoryLessons = lessons.filter(l => category.lessonIds.includes(l.id))
    const completedInCategory = categoryLessons.filter(l => completedLessons.includes(l.id)).length
    const percentage = Math.round((completedInCategory / categoryLessons.length) * 100)
    return {
      ...category,
      completed: completedInCategory,
      total: categoryLessons.length,
      percentage,
    }
  })

  // Weekly activity (simulated for demo)
  const weekDays = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']
  const weekActivity = [3, 2, 4, 1, 0, 2, dailyXp > 0 ? 1 : 0]

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-6 sticky top-0 z-20 shadow-lg">
        <div className="flex items-center gap-3">
          <BarChart3 className="w-7 h-7 text-white" />
          <h1 className="text-xl font-bold text-white">Ma Progression</h1>
        </div>
      </div>

      {/* Overall Progress Card */}
      <div className="px-4 py-4">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-gray-800">Progression globale</h2>
            <span className="text-2xl font-bold text-blue-600">{overallProgress}%</span>
          </div>

          <div className="flex items-center gap-6">
            {/* Progress Ring */}
            <div className="relative w-24 h-24">
              <svg className="w-24 h-24 transform -rotate-90">
                <circle
                  cx="48" cy="48" r="40"
                  stroke="#e5e7eb" strokeWidth="8" fill="none"
                />
                <circle
                  cx="48" cy="48" r="40"
                  stroke="url(#progressGradient)"
                  strokeWidth="8" fill="none" strokeLinecap="round"
                  strokeDasharray={`${overallProgress * 2.51} 251`}
                />
                <defs>
                  <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <Trophy className="w-8 h-8 text-yellow-500" />
              </div>
            </div>

            <div className="flex-1 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Leçons terminées</span>
                <span className="font-semibold text-gray-800">{completedCount}/{totalLessons}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">XP Total</span>
                <span className="font-semibold text-yellow-600">{xp} XP</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Niveau actuel</span>
                <span className="font-semibold text-green-600">Niveau {level}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Weekly Activity */}
      <div className="px-4 pb-4">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-green-500" />
            <h2 className="font-bold text-gray-800">Activité de la semaine</h2>
          </div>
          <div className="flex justify-between items-end gap-2">
            {weekDays.map((day, index) => (
              <div key={day} className="flex flex-col items-center gap-1">
                <div
                  className={cn(
                    'w-8 rounded-t-lg transition-all',
                    weekActivity[index] > 0
                      ? 'bg-gradient-to-t from-green-400 to-green-500'
                      : 'bg-gray-200'
                  )}
                  style={{ height: `${Math.max(weekActivity[index] * 15, 8)}px` }}
                />
                <span className="text-xs text-gray-500">{day}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
            <span className="text-sm text-gray-500">Total cette semaine</span>
            <span className="font-bold text-green-600">{weekActivity.reduce((a, b) => a + b, 0)} leçons</span>
          </div>
        </div>
      </div>

      {/* Categories Progress */}
      <div className="px-4 pb-4">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-purple-500" />
            <h2 className="font-bold text-gray-800">Progression par catégorie</h2>
          </div>
          <div className="space-y-4">
            {categoryStats.map(cat => (
              <div key={cat.id}>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <div className={cn('w-8 h-8 rounded-lg bg-gradient-to-br flex items-center justify-center', cat.color)}>
                      <span className="text-sm">{cat.icon}</span>
                    </div>
                    <span className="font-medium text-gray-700 text-sm">{cat.name}</span>
                  </div>
                  <span className="text-sm text-gray-500">{cat.completed}/{cat.total}</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={cn('h-full rounded-full transition-all duration-500 bg-gradient-to-r', cat.color)}
                    style={{ width: `${cat.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements Summary */}
      <div className="px-4 pb-4">
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-4 border border-yellow-100">
          <div className="flex items-center gap-2 mb-3">
            <Award className="w-5 h-5 text-yellow-600" />
            <h2 className="font-bold text-gray-800">Accomplissements</h2>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white rounded-xl p-3 text-center shadow-sm">
              <div className="text-2xl mb-1">🔥</div>
              <div className="font-bold text-orange-600">{streak}</div>
              <div className="text-xs text-gray-500">Jours de suite</div>
            </div>
            <div className="bg-white rounded-xl p-3 text-center shadow-sm">
              <div className="text-2xl mb-1">🏆</div>
              <div className="font-bold text-yellow-600">{Math.floor(xp / 100)}</div>
              <div className="text-xs text-gray-500">Paliers XP</div>
            </div>
            <div className="bg-white rounded-xl p-3 text-center shadow-sm">
              <div className="text-2xl mb-1">⭐</div>
              <div className="font-bold text-purple-600">{categoryStats.filter(c => c.percentage === 100).length}</div>
              <div className="text-xs text-gray-500">Catégories 100%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Milestone */}
      <div className="px-4 pb-4">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Prochain objectif</p>
              <p className="font-bold text-lg">Terminer {5 - (completedCount % 5)} leçons de plus</p>
            </div>
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
              <Target className="w-7 h-7 text-white" />
            </div>
          </div>
          <div className="mt-3 h-2 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full transition-all"
              style={{ width: `${((completedCount % 5) / 5) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
