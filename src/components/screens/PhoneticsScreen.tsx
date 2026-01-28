'use client'

import { ChevronLeft, Volume2 } from 'lucide-react'
import { vowels, consonants, type PhoneticSound } from '@/data/phonetics'
import { speakText } from '@/lib/audio'
import { useSettingsStore } from '@/stores/useSettingsStore'

interface PhoneticsScreenProps {
  onBack: () => void
  onStart: () => void
}

function SoundCard({ sound }: { sound: PhoneticSound }) {
  const { voiceGender, voiceAccent, voiceSpeed, ttsEnabled } = useSettingsStore()

  const playSound = () => {
    if (!ttsEnabled) return
    speakText(sound.example, {
      gender: voiceGender,
      accent: voiceAccent,
      speed: voiceSpeed,
    })
  }

  return (
    <button
      onClick={playSound}
      className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm active:scale-95 transition-transform"
    >
      <div className="text-2xl font-light text-gray-800 mb-1">{sound.symbol}</div>
      <div className="text-sm text-gray-500">{sound.example}</div>
      <div className="h-1 bg-gray-200 rounded-full mt-3" />
    </button>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 my-6">
      <div className="flex-1 h-px bg-gray-200" />
      <h2 className="font-bold text-gray-700 text-lg">{children}</h2>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  )
}

export function PhoneticsScreen({ onBack, onStart }: PhoneticsScreenProps) {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white px-4 py-3 border-b border-gray-100 sticky top-0 z-20">
        <button onClick={onBack} className="p-2 -ml-2 text-gray-500">
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>

      <div className="px-4 py-6">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Apprends les sons en anglais !
        </h1>
        <p className="text-gray-500 mb-6">
          Entraîne ton oreille et apprends à prononcer les sons en anglais
        </p>

        {/* Start Button */}
        <button
          onClick={onStart}
          className="w-full bg-sky-400 hover:bg-sky-500 text-white font-bold py-4 rounded-2xl shadow-lg active:scale-98 transition mb-4"
        >
          COMMENCER +10 XP
        </button>

        {/* Vowels Section */}
        <SectionTitle>Voyelles</SectionTitle>
        <div className="grid grid-cols-3 gap-3">
          {vowels.map((sound) => (
            <SoundCard key={sound.symbol} sound={sound} />
          ))}
        </div>

        {/* Start Button again */}
        <button
          onClick={onStart}
          className="w-full bg-sky-400 hover:bg-sky-500 text-white font-bold py-4 rounded-2xl shadow-lg active:scale-98 transition my-6"
        >
          COMMENCER +10 XP
        </button>

        {/* Consonants Section */}
        <SectionTitle>Consonnes</SectionTitle>
        <div className="grid grid-cols-3 gap-3">
          {consonants.map((sound) => (
            <SoundCard key={sound.symbol} sound={sound} />
          ))}
        </div>
      </div>
    </div>
  )
}
