'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type VoiceGender = 'male' | 'female'
export type VoiceAccent = 'en-US' | 'en-GB' | 'en-AU'

interface SettingsState {
  // Audio settings
  soundEffectsEnabled: boolean
  ttsEnabled: boolean
  voiceGender: VoiceGender
  voiceAccent: VoiceAccent
  voiceSpeed: number // 0.5 to 2.0
  voiceVolume: number // 0 to 1

  // Actions
  toggleSoundEffects: () => void
  toggleTTS: () => void
  setVoiceGender: (gender: VoiceGender) => void
  setVoiceAccent: (accent: VoiceAccent) => void
  setVoiceSpeed: (speed: number) => void
  setVoiceVolume: (volume: number) => void
  resetSettings: () => void
}

const initialState = {
  soundEffectsEnabled: true,
  ttsEnabled: true,
  voiceGender: 'female' as VoiceGender,
  voiceAccent: 'en-US' as VoiceAccent,
  voiceSpeed: 0.9,
  voiceVolume: 1,
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      ...initialState,

      toggleSoundEffects: () => set((state) => ({
        soundEffectsEnabled: !state.soundEffectsEnabled
      })),

      toggleTTS: () => set((state) => ({
        ttsEnabled: !state.ttsEnabled
      })),

      setVoiceGender: (gender) => set({ voiceGender: gender }),

      setVoiceAccent: (accent) => set({ voiceAccent: accent }),

      setVoiceSpeed: (speed) => set({ voiceSpeed: Math.max(0.5, Math.min(2, speed)) }),

      setVoiceVolume: (volume) => set({ voiceVolume: Math.max(0, Math.min(1, volume)) }),

      resetSettings: () => set(initialState),
    }),
    {
      name: 'lingolearn-settings',
    }
  )
)
