'use client'

import type { VoiceGender, VoiceAccent } from '@/stores/useSettingsStore'

// Cache des voix disponibles
let cachedVoices: SpeechSynthesisVoice[] = []
let voicesLoaded = false

// Noms de voix connues par genre (pour les principaux navigateurs/OS)
const KNOWN_FEMALE_VOICES = [
  // macOS/iOS
  'samantha', 'victoria', 'karen', 'moira', 'fiona', 'tessa', 'veena', 'allison',
  // Windows
  'zira', 'hazel', 'susan', 'linda', 'catherine', 'heather', 'jenny',
  // Google
  'google us english female', 'google uk english female',
  // Android
  'female',
  // Common
  'ava', 'emily', 'emma', 'olivia', 'sophia', 'siri female', 'cortana'
]

const KNOWN_MALE_VOICES = [
  // macOS/iOS
  'daniel', 'alex', 'fred', 'tom', 'oliver', 'aaron', 'arthur',
  // Windows
  'david', 'mark', 'richard', 'george', 'james', 'sean', 'guy',
  // Google
  'google us english male', 'google uk english male',
  // Android
  'male',
  // Common
  'evan', 'liam', 'nathan', 'paul', 'siri male'
]

// Charger les voix
export function loadVoices(): Promise<SpeechSynthesisVoice[]> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      resolve([])
      return
    }

    const getVoices = () => {
      const voices = speechSynthesis.getVoices()
      if (voices.length > 0) {
        cachedVoices = voices
        voicesLoaded = true
        resolve(voices)
        return true
      }
      return false
    }

    if (getVoices()) return

    speechSynthesis.onvoiceschanged = () => {
      getVoices()
    }

    // Fallback timeout
    setTimeout(() => {
      if (!voicesLoaded) {
        cachedVoices = speechSynthesis.getVoices()
        resolve(cachedVoices)
      }
    }, 1000)
  })
}

// Déterminer le genre d'une voix
function detectVoiceGender(voice: SpeechSynthesisVoice): 'male' | 'female' | 'unknown' {
  const nameLower = voice.name.toLowerCase()

  // Vérifier les noms connus
  if (KNOWN_FEMALE_VOICES.some(n => nameLower.includes(n))) {
    return 'female'
  }
  if (KNOWN_MALE_VOICES.some(n => nameLower.includes(n))) {
    return 'male'
  }

  // Heuristiques supplémentaires
  if (nameLower.includes('female') || nameLower.includes('woman')) {
    return 'female'
  }
  if (nameLower.includes('male') || nameLower.includes('man')) {
    return 'male'
  }

  return 'unknown'
}

// Trouver la meilleure voix selon les préférences
export function findBestVoice(gender: VoiceGender, accent: VoiceAccent): SpeechSynthesisVoice | null {
  // S'assurer que les voix sont chargées
  if (cachedVoices.length === 0 && typeof window !== 'undefined' && 'speechSynthesis' in window) {
    cachedVoices = speechSynthesis.getVoices()
  }

  if (cachedVoices.length === 0) {
    return null
  }

  // Filtrer par langue anglaise avec l'accent souhaité
  const accentVoices = cachedVoices.filter(v =>
    v.lang === accent || v.lang.replace('_', '-') === accent
  )

  // Fallback sur toutes les voix anglaises
  const englishVoices = accentVoices.length > 0
    ? accentVoices
    : cachedVoices.filter(v => v.lang.startsWith('en'))

  if (englishVoices.length === 0) {
    return cachedVoices[0] || null
  }

  // Filtrer par genre
  const genderVoices = englishVoices.filter(v => detectVoiceGender(v) === gender)

  // Préférer les voix locales (meilleure qualité)
  const localVoices = genderVoices.filter(v => v.localService)

  if (localVoices.length > 0) {
    return localVoices[0]
  }

  if (genderVoices.length > 0) {
    return genderVoices[0]
  }

  // Fallback: retourner une voix anglaise
  return englishVoices[0]
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
      utterance.lang = voice.lang
    } else {
      utterance.lang = accent
    }

    utterance.rate = speed
    utterance.volume = volume
    // Ne pas modifier le pitch - laisser la voix naturelle
    utterance.pitch = 1

    utterance.onend = () => resolve()
    utterance.onerror = (e) => reject(e)

    speechSynthesis.speak(utterance)
  })
}

// Lister les voix disponibles pour debug
export function listAvailableVoices(): { name: string; lang: string; gender: string }[] {
  if (cachedVoices.length === 0 && typeof window !== 'undefined' && 'speechSynthesis' in window) {
    cachedVoices = speechSynthesis.getVoices()
  }

  return cachedVoices
    .filter(v => v.lang.startsWith('en'))
    .map(v => ({
      name: v.name,
      lang: v.lang,
      gender: detectVoiceGender(v)
    }))
}

// Effets sonores
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
    audio.play().catch(() => {})
  } catch {
    // Ignorer
  }
}

// Liste des accents pour l'UI
export function getAvailableVoices(): { label: string; value: VoiceAccent }[] {
  return [
    { label: '🇺🇸 Américain', value: 'en-US' },
    { label: '🇬🇧 Britannique', value: 'en-GB' },
    { label: '🇦🇺 Australien', value: 'en-AU' },
  ]
}
