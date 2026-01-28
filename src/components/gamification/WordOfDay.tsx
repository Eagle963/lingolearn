'use client'

import { Sparkles, Volume2 } from 'lucide-react'
import { getWordOfDay } from '@/data/words'
import { speakText } from '@/lib/utils'

export function WordOfDay() {
  const word = getWordOfDay()

  const handleSpeak = () => {
    speakText(word.word, 'en')
  }

  return (
    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-4 text-white shadow-lg">
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="w-5 h-5" />
        <span className="font-semibold text-sm opacity-90">Mot du jour</span>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-2xl font-bold">{word.word}</div>
        <span className="text-white/70 text-sm">{word.phonetic}</span>
        <button
          onClick={handleSpeak}
          className="ml-auto p-2 bg-white/20 rounded-full hover:bg-white/30 transition"
          aria-label="Prononcer le mot"
        >
          <Volume2 className="w-4 h-4" />
        </button>
      </div>

      <div className="text-white/90 mt-1">{word.meaning}</div>
      <div className="text-white/70 text-sm mt-2 italic">&quot;{word.example}&quot;</div>
    </div>
  )
}
