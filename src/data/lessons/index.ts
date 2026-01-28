import type { Lesson } from '@/types'
import { basicsLessons } from './basics'
import { conversationLessons } from './conversation'
import { travelLessons } from './travel'
import { foodLessons } from './food'
import { shoppingLessons } from './shopping'
import { workLessons } from './work'
import { techLessons } from './tech'
import { emailsLessons } from './emails'
import { grammarLessons } from './grammar'
import { idiomsLessons } from './idioms'

// Toutes les leçons combinées
export const lessons: Lesson[] = [
  ...basicsLessons,
  ...conversationLessons,
  ...travelLessons,
  ...foodLessons,
  ...shoppingLessons,
  ...workLessons,
  ...techLessons,
  ...emailsLessons,
  ...grammarLessons,
  ...idiomsLessons,
]

// Fonction pour obtenir une leçon par ID
export function getLessonById(id: number): Lesson | undefined {
  return lessons.find(l => l.id === id)
}

// Fonction pour obtenir les leçons d'une catégorie
export function getLessonsByCategory(category: string): Lesson[] {
  return lessons.filter(l => l.category === category)
}

// Fonction pour obtenir le nombre total de leçons
export function getTotalLessons(): number {
  return lessons.length
}

// Exports individuels pour usage spécifique
export {
  basicsLessons,
  conversationLessons,
  travelLessons,
  foodLessons,
  shoppingLessons,
  workLessons,
  techLessons,
  emailsLessons,
  grammarLessons,
  idiomsLessons,
}
