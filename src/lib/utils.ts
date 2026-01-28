import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind CSS classes avec gestion des conflits
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Calcule le niveau basé sur l'XP total
 */
export function calculateLevel(xp: number): number {
  return Math.floor(xp / 100) + 1
}

/**
 * Calcule l'XP nécessaire pour le niveau suivant
 */
export function xpForNextLevel(level: number): number {
  return level * 100
}

/**
 * Calcule le pourcentage de progression vers le niveau suivant
 */
export function levelProgress(xp: number): number {
  return xp % 100
}

/**
 * Calcule l'XP gagné basé sur le score
 */
export function calculateXpEarned(baseXp: number, score: number, totalQuestions: number): number {
  const accuracy = score / totalQuestions
  return Math.round(baseXp * accuracy)
}

/**
 * Vérifie si le streak doit être incrémenté
 */
export function shouldIncrementStreak(lastActiveAt: Date): boolean {
  const now = new Date()
  const lastActive = new Date(lastActiveAt)
  const diffHours = (now.getTime() - lastActive.getTime()) / (1000 * 60 * 60)
  const isDifferentDay = now.toDateString() !== lastActive.toDateString()

  return diffHours < 48 && isDifferentDay
}

/**
 * Vérifie si le streak doit être reset
 */
export function shouldResetStreak(lastActiveAt: Date): boolean {
  const now = new Date()
  const lastActive = new Date(lastActiveAt)
  const diffHours = (now.getTime() - lastActive.getTime()) / (1000 * 60 * 60)

  return diffHours > 48
}

/**
 * Formate un nombre avec séparateur de milliers
 */
export function formatNumber(num: number): string {
  return num.toLocaleString('fr-FR')
}

/**
 * Génère une URL pour le Text-to-Speech (Google TTS)
 */
export function getTTSUrl(text: string, lang: string = 'en'): string {
  return `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=${lang}&client=tw-ob`
}

/**
 * Joue un son audio
 */
export function playAudio(url: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const audio = new Audio(url)
    audio.onended = () => resolve()
    audio.onerror = () => reject(new Error('Audio playback failed'))
    audio.play().catch(reject)
  })
}

/**
 * Joue un son TTS pour un texte donné
 */
export function speakText(text: string, lang: string = 'en'): Promise<void> {
  // Utilise l'API Web Speech si disponible
  if ('speechSynthesis' in window) {
    return new Promise((resolve) => {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = lang === 'en' ? 'en-US' : 'fr-FR'
      utterance.rate = 0.9
      utterance.onend = () => resolve()
      speechSynthesis.speak(utterance)
    })
  }
  // Fallback vers Google TTS
  return playAudio(getTTSUrl(text, lang))
}

/**
 * Délai asynchrone
 */
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Mélange un tableau (Fisher-Yates shuffle)
 */
export function shuffle<T>(array: T[]): T[] {
  const result = [...array]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}
