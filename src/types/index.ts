// LingoLearn - Types centralisés

export type QuestionType = 'translate' | 'fill' | 'audio' | 'write' | 'order' | 'listen'

export interface Question {
  type: QuestionType
  question: string
  options?: string[]
  correct?: number
  answer?: string
  hint?: string
  words?: string[]
  audioUrl?: string // URL pour l'audio TTS
  audioText?: string // Texte à prononcer
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
  icon: string
  color: string
  lessonIds: number[]
  description?: string
}

export interface User {
  id: string
  email: string
  name: string
  avatar: string
  xp: number
  level: number
  hearts: number
  gems: number
  streak: number
  dailyGoal: number
  dailyXp: number
  lastActiveAt: Date
  createdAt: Date
}

export interface Progress {
  lessonId: number
  score: number
  mistakes: number
  xpEarned: number
  completedAt: Date
}

export interface Badge {
  id: string
  name: string
  description: string
  icon: string
  condition: string
  earned: boolean
  earnedAt?: Date
}

export interface WordOfDay {
  word: string
  phonetic: string
  meaning: string
  example: string
  audioUrl?: string
}

export interface GameState {
  xp: number
  level: number
  hearts: number
  gems: number
  streak: number
  dailyXp: number
  dailyGoal: number
  completedLessons: number[]
}

export interface LessonState {
  currentLesson: Lesson | null
  currentQuestion: number
  selectedAnswer: number | null
  isCorrect: boolean | null
  score: number
  mistakes: number
  showHint: boolean
  userInput: string
}
