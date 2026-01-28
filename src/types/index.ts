export type QuestionType = 'translate' | 'fill' | 'audio' | 'write'

export interface Question {
  type: QuestionType
  question: string
  options?: string[]
  correct?: number
  answer?: string
  hint?: string
}

export interface Lesson {
  id: number
  title: string
  icon: string
  category: string
  difficulty: 1 | 2 | 3
  xpReward: number
  questions: Question[]
}

export interface Category {
  id: string
  name: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  lessonIds: number[]
}

export interface WordOfDay {
  word: string
  phonetic: string
  meaning: string
  example: string
}

export type ScreenType = 'home' | 'lesson' | 'result' | 'profile' | 'progress'
