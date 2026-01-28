import type { Category } from '@/types'

export const categories: Category[] = [
  {
    id: 'basics',
    name: 'Bases',
    icon: '📚',
    color: 'from-green-400 to-green-600',
    lessonIds: [1, 2, 3, 4, 5],
    description: 'Les fondamentaux de l\'anglais'
  },
  {
    id: 'conversation',
    name: 'Conversation',
    icon: '💬',
    color: 'from-blue-400 to-blue-600',
    lessonIds: [6, 7, 8, 9, 10],
    description: 'Parler au quotidien'
  },
  {
    id: 'travel',
    name: 'Voyages',
    icon: '✈️',
    color: 'from-purple-400 to-purple-600',
    lessonIds: [11, 12, 13, 14, 15],
    description: 'Vocabulaire de voyage'
  },
  {
    id: 'food',
    name: 'Restaurant',
    icon: '🍽️',
    color: 'from-orange-400 to-orange-600',
    lessonIds: [16, 17, 18, 19, 20],
    description: 'Commander et manger'
  },
  {
    id: 'shopping',
    name: 'Shopping',
    icon: '🛍️',
    color: 'from-pink-400 to-pink-600',
    lessonIds: [21, 22, 23, 24, 25],
    description: 'Faire du shopping'
  },
  {
    id: 'work',
    name: 'Travail',
    icon: '💼',
    color: 'from-indigo-400 to-indigo-600',
    lessonIds: [26, 27, 28, 29, 30],
    description: 'Anglais professionnel'
  },
  {
    id: 'tech',
    name: 'Tech & Dev',
    icon: '💻',
    color: 'from-cyan-400 to-cyan-600',
    lessonIds: [31, 32, 33, 34, 35],
    description: 'Vocabulaire tech'
  },
  {
    id: 'emails',
    name: 'Emails',
    icon: '📧',
    color: 'from-red-400 to-red-600',
    lessonIds: [36, 37, 38, 39, 40],
    description: 'Écrire des emails pro'
  },
  {
    id: 'grammar',
    name: 'Grammaire',
    icon: '📝',
    color: 'from-yellow-400 to-yellow-600',
    lessonIds: [41, 42, 43, 44, 45],
    description: 'Règles grammaticales'
  },
  {
    id: 'idioms',
    name: 'Expressions',
    icon: '🗣️',
    color: 'from-teal-400 to-teal-600',
    lessonIds: [46, 47, 48, 49, 50],
    description: 'Expressions idiomatiques'
  }
]

export function getCategoryById(id: string): Category | undefined {
  return categories.find(c => c.id === id)
}

export function getCategoryByLessonId(lessonId: number): Category | undefined {
  return categories.find(c => c.lessonIds.includes(lessonId))
}
