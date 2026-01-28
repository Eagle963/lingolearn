'use client'

import type { VoiceGender, VoiceAccent } from '@/stores/useSettingsStore'

// Cache des voix disponibles
let cachedVoices: SpeechSynthesisVoice[] = []

// Charger les voix
export function loadVoices(): Promise<SpeechSynthesisVoice[]> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      resolve([])
      return
    }

    const voices = speechSynthesis.getVoices()
    if (voices.length > 0) {
      cachedVoices = voices
      resolve(voices)
      return
    }

    speechSynthesis.onvoiceschanged = () => {
      cachedVoices = speechSynthesis.getVoices()
      resolve(cachedVoices)
    }
  })
}

// Trouver la meilleure voix selon les préférences
export function findBestVoice(gender: VoiceGender, accent: VoiceAccent): SpeechSynthesisVoice | null {
  if (cachedVoices.length === 0) {
    loadVoices()
    cachedVoices = speechSynthesis?.getVoices() || []
  }

  // Filtrer par langue anglaise
  const englishVoices = cachedVoices.filter(v =>
    v.lang.startsWith('en-') || v.lang === 'en'
  )

  // Préférer les voix natives/premium
  const nativeVoices = englishVoices.filter(v =>
    !v.name.toLowerCase().includes('google') || v.localService
  )

  // Filtrer par accent
  const accentVoices = (nativeVoices.length > 0 ? nativeVoices : englishVoices)
    .filter(v => v.lang === accent || v.lang.startsWith(accent.split('-')[0]))

  // Filtrer par genre (heuristique basée sur le nom)
  const genderKeywords = gender === 'female'
    ? ['female', 'woman', 'samantha', 'victoria', 'karen', 'moira', 'fiona', 'susan', 'zira', 'hazel']
    : ['male', 'man', 'daniel', 'james', 'david', 'mark', 'alex', 'tom', 'george', 'oliver']

  const genderVoices = accentVoices.filter(v =>
    genderKeywords.some(k => v.name.toLowerCase().includes(k))
  )

  return genderVoices[0] || accentVoices[0] || englishVoices[0] || null
}

// Parler un texte avec les paramètres
export function speakText(
  text: string,
  options: {
    gender?: VoiceGender
    accent?: VoiceAccent
    speed?: number
    volume?: number
  } = {}
): Promise<void> {
  const { gender = 'female', accent = 'en-US', speed = 0.9, volume = 1 } = options

  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      reject(new Error('Speech synthesis not supported'))
      return
    }

    // Annuler toute lecture en cours
    speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(text)
    const voice = findBestVoice(gender, accent)

    if (voice) {
      utterance.voice = voice
    }

    utterance.lang = accent
    utterance.rate = speed
    utterance.volume = volume
    utterance.pitch = gender === 'female' ? 1.1 : 0.9

    utterance.onend = () => resolve()
    utterance.onerror = (e) => reject(e)

    speechSynthesis.speak(utterance)
  })
}

// Effets sonores (URLs de sons libres de droits)
const SOUND_EFFECTS = {
  correct: '/sounds/correct.mp3',
  wrong: '/sounds/wrong.mp3',
  levelUp: '/sounds/level-up.mp3',
  complete: '/sounds/complete.mp3',
  click: '/sounds/click.mp3',
  streak: '/sounds/streak.mp3',
}

// Jouer un effet sonore
export function playSoundEffect(
  effect: keyof typeof SOUND_EFFECTS,
  volume: number = 1
): void {
  if (typeof window === 'undefined') return

  try {
    const audio = new Audio(SOUND_EFFECTS[effect])
    audio.volume = volume
    audio.play().catch(() => {
      // Ignorer les erreurs (autoplay bloqué, fichier manquant, etc.)
    })
  } catch {
    // Ignorer
  }
}

// Liste des voix disponibles pour l'UI
export function getAvailableVoices(): { label: string; value: VoiceAccent }[] {
  return [
    { label: '🇺🇸 Américain', value: 'en-US' },
    { label: '🇬🇧 Britannique', value: 'en-GB' },
    { label: '🇦🇺 Australien', value: 'en-AU' },
  ]
}
