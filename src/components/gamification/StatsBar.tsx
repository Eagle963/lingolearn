'use client'

import { Flame, Zap, Heart, Gift } from 'lucide-react'
import Image from 'next/image'
import { useGameStore } from '@/stores/useGameStore'

export function StatsBar() {
  const { streak, xp, hearts, gems } = useGameStore()

  return (
    <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-4 sticky top-0 z-20 shadow-lg">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Image
          src="/icons/logo.png"
          alt="LingoLearn"
          width={32}
          height={32}
          className="rounded-lg"
        />

        {/* Streak */}
        <div className="flex items-center gap-1.5 bg-white/20 px-2.5 py-1 rounded-full">
          <Flame className="w-4 h-4 text-orange-300" />
          <span className="font-bold text-white text-sm">{streak}</span>
        </div>

        {/* XP */}
        <div className="flex items-center gap-1.5 bg-white/20 px-2.5 py-1 rounded-full">
          <Zap className="w-4 h-4 text-yellow-300" />
          <span className="font-bold text-white text-sm">{xp}</span>
        </div>

        {/* Hearts */}
        <div className="flex items-center gap-1.5 bg-white/20 px-2.5 py-1 rounded-full">
          <Heart className="w-4 h-4 text-red-400" fill="#f87171" />
          <span className="font-bold text-white text-sm">{hearts}</span>
        </div>

        {/* Gems */}
        <div className="flex items-center gap-1.5 bg-white/20 px-2.5 py-1 rounded-full">
          <Gift className="w-4 h-4 text-purple-300" />
          <span className="font-bold text-white text-sm">{gems}</span>
        </div>
      </div>
    </div>
  )
}
