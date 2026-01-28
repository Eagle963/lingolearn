'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { GameState, LessonState, Lesson } from '@/types'
import { calculateLevel, calculateXpEarned } from '@/lib/utils'

interface GameStore extends GameState {
  // Actions XP et Level
  addXp: (amount: number) => void

  // Actions Hearts
  loseHeart: () => void
  refillHearts: () => void
  addHeart: () => void

  // Actions Gems
  addGems: (amount: number) => void
  spendGems: (amount: number) => boolean

  // Actions Streak
  incrementStreak: () => void
  resetStreak: () => void

  // Actions Daily
  addDailyXp: (amount: number) => void
  resetDailyXp: () => void
  setDailyGoal: (goal: number) => void

  // Actions Progress
  completeLesson: (lessonId: number) => void
  isLessonCompleted: (lessonId: number) => boolean

  // Reset
  resetGame: () => void
}

const initialState: GameState = {
  xp: 0,
  level: 1,
  hearts: 5,
  gems: 50,
  streak: 0,
  dailyXp: 0,
  dailyGoal: 50,
  completedLessons: [],
}

export const useGameStore = create<GameStore>()(
  persist(
    (set, get) => ({
      ...initialState,

      addXp: (amount) => set((state) => {
        const newXp = state.xp + amount
        const newLevel = calculateLevel(newXp)
        const leveledUp = newLevel > state.level

        return {
          xp: newXp,
          level: newLevel,
          gems: leveledUp ? state.gems + 10 : state.gems, // Bonus gems on level up
        }
      }),

      loseHeart: () => set((state) => ({
        hearts: Math.max(0, state.hearts - 1)
      })),

      refillHearts: () => set({ hearts: 5 }),

      addHeart: () => set((state) => ({
        hearts: Math.min(5, state.hearts + 1)
      })),

      addGems: (amount) => set((state) => ({
        gems: state.gems + amount
      })),

      spendGems: (amount) => {
        const state = get()
        if (state.gems >= amount) {
          set({ gems: state.gems - amount })
          return true
        }
        return false
      },

      incrementStreak: () => set((state) => ({
        streak: state.streak + 1
      })),

      resetStreak: () => set({ streak: 0 }),

      addDailyXp: (amount) => set((state) => ({
        dailyXp: state.dailyXp + amount
      })),

      resetDailyXp: () => set({ dailyXp: 0 }),

      setDailyGoal: (goal) => set({ dailyGoal: goal }),

      completeLesson: (lessonId) => set((state) => ({
        completedLessons: state.completedLessons.includes(lessonId)
          ? state.completedLessons
          : [...state.completedLessons, lessonId]
      })),

      isLessonCompleted: (lessonId) => {
        return get().completedLessons.includes(lessonId)
      },

      resetGame: () => set(initialState),
    }),
    {
      name: 'lingolearn-game',
    }
  )
)

// Store pour la leçon en cours (non persisté)
interface LessonStore extends LessonState {
  startLesson: (lesson: Lesson) => void
  answerQuestion: (answer: number | string) => boolean
  nextQuestion: () => boolean
  toggleHint: () => void
  setUserInput: (input: string) => void
  endLesson: () => { score: number; total: number; xpEarned: number }
  resetLesson: () => void
}

const initialLessonState: LessonState = {
  currentLesson: null,
  currentQuestion: 0,
  selectedAnswer: null,
  isCorrect: null,
  score: 0,
  mistakes: 0,
  showHint: false,
  userInput: '',
}

export const useLessonStore = create<LessonStore>((set, get) => ({
  ...initialLessonState,

  startLesson: (lesson) => set({
    ...initialLessonState,
    currentLesson: lesson,
  }),

  answerQuestion: (answer) => {
    const state = get()
    if (!state.currentLesson || state.selectedAnswer !== null) return false

    const question = state.currentLesson.questions[state.currentQuestion]
    let isCorrect = false

    if (question.type === 'write') {
      const userAnswer = typeof answer === 'string' ? answer.toLowerCase().trim() : ''
      isCorrect = userAnswer === question.answer?.toLowerCase()
    } else {
      isCorrect = answer === question.correct
    }

    set({
      selectedAnswer: typeof answer === 'number' ? answer : (isCorrect ? 0 : -1),
      isCorrect,
      score: isCorrect ? state.score + 1 : state.score,
      mistakes: isCorrect ? state.mistakes : state.mistakes + 1,
    })

    return isCorrect
  },

  nextQuestion: () => {
    const state = get()
    if (!state.currentLesson) return false

    const isLastQuestion = state.currentQuestion >= state.currentLesson.questions.length - 1

    if (!isLastQuestion) {
      set({
        currentQuestion: state.currentQuestion + 1,
        selectedAnswer: null,
        isCorrect: null,
        showHint: false,
        userInput: '',
      })
      return true
    }

    return false
  },

  toggleHint: () => set((state) => ({
    showHint: !state.showHint
  })),

  setUserInput: (input) => set({ userInput: input }),

  endLesson: () => {
    const state = get()
    if (!state.currentLesson) {
      return { score: 0, total: 0, xpEarned: 0 }
    }

    const total = state.currentLesson.questions.length
    const xpEarned = calculateXpEarned(state.currentLesson.xpReward, state.score, total)

    return {
      score: state.score,
      total,
      xpEarned,
    }
  },

  resetLesson: () => set(initialLessonState),
}))
