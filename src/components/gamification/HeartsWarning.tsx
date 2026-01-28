'use client'

import { Heart, RotateCcw, Gem } from 'lucide-react'
import { useGameStore } from '@/stores/useGameStore'

export function HeartsWarning() {
  const { hearts, refillHearts, spendGems, gems } = useGameStore()

  if (hearts > 0) return null

  const handleRefillWithGems = () => {
    if (spendGems(50)) {
      refillHearts()
    }
  }

  const handleWatchAd = () => {
    // Simule regarder une pub
    refillHearts()
  }

  return (
    <div className="mx-4 mb-4 bg-red-50 border border-red-200 rounded-xl p-4">
      <div className="flex items-center gap-2 mb-3">
        <Heart className="w-6 h-6 text-red-500" />
        <span className="text-red-700 font-medium">Plus de vies !</span>
      </div>

      <p className="text-sm text-red-600 mb-3">
        Vous avez perdu toutes vos vies. Rechargez pour continuer à apprendre.
      </p>

      <div className="flex gap-2">
        <button
          onClick={handleWatchAd}
          className="flex-1 bg-red-500 text-white px-4 py-2 rounded-lg font-medium flex items-center justify-center gap-2 active:scale-95 transition"
        >
          <RotateCcw className="w-4 h-4" />
          Pub gratuite
        </button>

        <button
          onClick={handleRefillWithGems}
          disabled={gems < 50}
          className="flex-1 bg-purple-500 text-white px-4 py-2 rounded-lg font-medium flex items-center justify-center gap-2 active:scale-95 transition disabled:opacity-50"
        >
          <Gem className="w-4 h-4" />
          50 gems
        </button>
      </div>
    </div>
  )
}
