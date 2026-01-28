'use client'

import { Settings, Volume2, VolumeX, Mic, ChevronLeft, Play } from 'lucide-react'
import { useSettingsStore } from '@/stores/useSettingsStore'
import { speakText, getAvailableVoices } from '@/lib/audio'
import { cn } from '@/lib/utils'

interface SettingsScreenProps {
  onBack: () => void
}

export function SettingsScreen({ onBack }: SettingsScreenProps) {
  const {
    soundEffectsEnabled,
    ttsEnabled,
    voiceGender,
    voiceAccent,
    voiceSpeed,
    toggleSoundEffects,
    toggleTTS,
    setVoiceGender,
    setVoiceAccent,
    setVoiceSpeed,
  } = useSettingsStore()

  const testVoice = () => {
    speakText('Hello! This is how I will read English words for you.', {
      gender: voiceGender,
      accent: voiceAccent,
      speed: voiceSpeed,
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-2 -ml-2 text-gray-500">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <Settings className="w-6 h-6 text-gray-700" />
          <h1 className="text-xl font-bold text-gray-800">Paramètres</h1>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Section Audio */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <h2 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Volume2 className="w-5 h-5 text-blue-500" />
            Audio
          </h2>

          {/* Effets sonores */}
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div>
              <p className="font-medium text-gray-800">Effets sonores</p>
              <p className="text-sm text-gray-500">Sons de réussite/erreur</p>
            </div>
            <button
              onClick={toggleSoundEffects}
              className={cn(
                'w-14 h-8 rounded-full transition-colors relative',
                soundEffectsEnabled ? 'bg-green-500' : 'bg-gray-300'
              )}
            >
              <div
                className={cn(
                  'w-6 h-6 bg-white rounded-full shadow absolute top-1 transition-transform',
                  soundEffectsEnabled ? 'translate-x-7' : 'translate-x-1'
                )}
              />
            </button>
          </div>

          {/* TTS activé */}
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div>
              <p className="font-medium text-gray-800">Prononciation</p>
              <p className="text-sm text-gray-500">Lecture audio des mots</p>
            </div>
            <button
              onClick={toggleTTS}
              className={cn(
                'w-14 h-8 rounded-full transition-colors relative',
                ttsEnabled ? 'bg-green-500' : 'bg-gray-300'
              )}
            >
              <div
                className={cn(
                  'w-6 h-6 bg-white rounded-full shadow absolute top-1 transition-transform',
                  ttsEnabled ? 'translate-x-7' : 'translate-x-1'
                )}
              />
            </button>
          </div>
        </div>

        {/* Section Voix */}
        {ttsEnabled && (
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <h2 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Mic className="w-5 h-5 text-purple-500" />
              Configuration de la voix
            </h2>

            {/* Genre de voix */}
            <div className="py-3 border-b border-gray-100">
              <p className="font-medium text-gray-800 mb-3">Type de voix</p>
              <div className="flex gap-3">
                <button
                  onClick={() => setVoiceGender('female')}
                  className={cn(
                    'flex-1 py-3 px-4 rounded-xl font-medium transition-all',
                    voiceGender === 'female'
                      ? 'bg-pink-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700'
                  )}
                >
                  👩 Femme
                </button>
                <button
                  onClick={() => setVoiceGender('male')}
                  className={cn(
                    'flex-1 py-3 px-4 rounded-xl font-medium transition-all',
                    voiceGender === 'male'
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700'
                  )}
                >
                  👨 Homme
                </button>
              </div>
            </div>

            {/* Accent */}
            <div className="py-3 border-b border-gray-100">
              <p className="font-medium text-gray-800 mb-3">Accent</p>
              <div className="space-y-2">
                {getAvailableVoices().map((voice) => (
                  <button
                    key={voice.value}
                    onClick={() => setVoiceAccent(voice.value)}
                    className={cn(
                      'w-full py-3 px-4 rounded-xl text-left font-medium transition-all flex items-center justify-between',
                      voiceAccent === voice.value
                        ? 'bg-indigo-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700'
                    )}
                  >
                    {voice.label}
                    {voiceAccent === voice.value && (
                      <span className="text-white">✓</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Vitesse */}
            <div className="py-3 border-b border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <p className="font-medium text-gray-800">Vitesse</p>
                <span className="text-sm text-gray-500">{voiceSpeed.toFixed(1)}x</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="1.5"
                step="0.1"
                value={voiceSpeed}
                onChange={(e) => setVoiceSpeed(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>Lent</span>
                <span>Normal</span>
                <span>Rapide</span>
              </div>
            </div>

            {/* Test voix */}
            <div className="pt-3">
              <button
                onClick={testVoice}
                className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 active:scale-98 transition shadow-lg"
              >
                <Play className="w-5 h-5" />
                Tester la voix
              </button>
            </div>
          </div>
        )}

        {/* Info */}
        <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
          <p className="text-sm text-blue-700">
            💡 Les voix disponibles dépendent de votre navigateur et système.
            Pour de meilleures voix, utilisez Chrome ou Safari.
          </p>
        </div>
      </div>
    </div>
  )
}
