'use client'

import { Zap, Flame, Trophy, Gift, Lock, Settings } from 'lucide-react'
import { motion } from 'framer-motion'
import { useGameStore } from '@/stores/useGameStore'
import { Logo } from '@/components/layout/Logo'
import { levelProgress } from '@/lib/utils'

interface ProfileScreenProps {
  onSettingsClick?: () => void
}

export function ProfileScreen({ onSettingsClick }: ProfileScreenProps) {
  const { xp, level, streak, gems, completedLessons } = useGameStore()
  const progress = levelProgress(xp)

  const badges = [
    { id: 'first', icon: '🌱', name: 'Premier pas', earned: completedLessons.length >= 1 },
    { id: 'five', icon: '⭐', name: '5 étoiles', earned: completedLessons.length >= 5 },
    { id: 'century', icon: '🏆', name: 'Centurion', earned: xp >= 100 },
    { id: 'streak7', icon: '🔥', name: 'Semaine de feu', earned: streak >= 7 },
    { id: 'ten', icon: '💎', name: 'Collectionneur', earned: completedLessons.length >= 10 },
    { id: 'master', icon: '👑', name: 'Maître', earned: completedLessons.length >= 50 },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
              <span className="text-4xl">🧑‍💻</span>
            </div>
            <div className="text-white">
              <h1 className="text-2xl font-bold">Apprenant</h1>
              <p className="text-green-100">Niveau {level} • {xp} XP total</p>
            </div>
          </div>
          {onSettingsClick && (
            <button
              onClick={onSettingsClick}
              className="p-3 bg-white/20 rounded-full text-white hover:bg-white/30 transition"
            >
              <Settings className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-4 shadow-sm"
        >
          <h2 className="font-bold text-gray-800 mb-4">📊 Statistiques</h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-4 text-center">
              <Zap className="w-8 h-8 text-yellow-500 mx-auto mb-1" />
              <div className="text-2xl font-bold text-gray-800">{xp}</div>
              <div className="text-xs text-gray-500">XP Total</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4 text-center">
              <Flame className="w-8 h-8 text-orange-500 mx-auto mb-1" />
              <div className="text-2xl font-bold text-gray-800">{streak}</div>
              <div className="text-xs text-gray-500">Jours de suite</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 text-center">
              <Trophy className="w-8 h-8 text-green-500 mx-auto mb-1" />
              <div className="text-2xl font-bold text-gray-800">{completedLessons.length}</div>
              <div className="text-xs text-gray-500">Leçons</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 text-center">
              <Gift className="w-8 h-8 text-purple-500 mx-auto mb-1" />
              <div className="text-2xl font-bold text-gray-800">{gems}</div>
              <div className="text-xs text-gray-500">Gems</div>
            </div>
          </div>
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-4 shadow-sm"
        >
          <h2 className="font-bold text-gray-800 mb-3">🏅 Badges</h2>
          <div className="flex gap-3 flex-wrap">
            {badges.map(badge => (
              <div
                key={badge.id}
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow ${
                  badge.earned
                    ? 'bg-gradient-to-br from-green-400 to-green-600'
                    : 'bg-gray-200 opacity-50'
                }`}
                title={badge.name}
              >
                {badge.earned ? (
                  <span className="text-2xl">{badge.icon}</span>
                ) : (
                  <Lock className="w-6 h-6 text-gray-400" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Level Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-4 shadow-sm"
        >
          <h2 className="font-bold text-gray-800 mb-3">📈 Niveau {level}</h2>
          <div className="h-4 bg-gray-100 rounded-full overflow-hidden mb-2">
            <motion.div
              className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <p className="text-sm text-gray-500 text-right">
            {progress} / 100 XP pour niveau {level + 1}
          </p>
        </motion.div>

        {/* App Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl p-4 shadow-sm"
        >
          <div className="flex items-center justify-center">
            <Logo size="md" showText />
          </div>
          <p className="text-center text-xs text-gray-400 mt-2">
            Version 1.0.0 • Made with ❤️
          </p>
        </motion.div>
      </div>
    </div>
  )
}
