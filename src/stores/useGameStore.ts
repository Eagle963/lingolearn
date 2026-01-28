import { create } from 'zustand'
import type { Lesson, ScreenType } from '@/types'

interface GameState {
  // Navigation
  screen: ScreenType
  setScreen: (screen: ScreenType) => void

  // User stats
  xp: number
  streak: number
  hearts: number
  gems: number
  level: number
  dailyXp: number
  dailyGoal: number
  completedLessons: number[]

  // Current lesson state
  currentLesson: Lesson | null
  currentQuestion: number
  selectedAnswer: number | null
  isCorrect: boolean | null
  showHint: boolean
  userInput: string
  lessonScore: number
  currentCategory: string | null

  // Actions
  setCurrentCategory: (category: string | null) => void
  startLesson: (lesson: Lesson) => void
  handleAnswer: (index: number, correct: number) => void
  handleWriteAnswer: (answer: string) => void
  nextQuestion: () => void
  setShowHint: (show: boolean) => void
  setUserInput: (input: string) => void
  refillHearts: () => void
  resetLessonState: () => void
}

export const useGameStore = create<GameState>((set, get) => ({
  // Navigation
  screen: 'home',
  setScreen: (screen) => set({ screen }),

  // User stats - initial values
  xp: 150,
  streak: 3,
  hearts: 5,
  gems: 50,
  level: 2,
  dailyXp: 30,
  dailyGoal: 50,
  completedLessons: [1, 2],

  // Current lesson state
  currentLesson: null,
  currentQuestion: 0,
  selectedAnswer: null,
  isCorrect: null,
  showHint: false,
  userInput: '',
  lessonScore: 0,
  currentCategory: null,

  // Actions
  setCurrentCategory: (category) => set({ currentCategory: category }),

  startLesson: (lesson) => {
    const { hearts } = get()
    if (hearts <= 0) return
    set({
      currentLesson: lesson,
      currentQuestion: 0,
      selectedAnswer: null,
      isCorrect: null,
      showHint: false,
      userInput: '',
      lessonScore: 0,
      screen: 'lesson',
    })
  },

  handleAnswer: (index, correct) => {
    const { selectedAnswer, lessonScore, hearts } = get()
    if (selectedAnswer !== null) return

    const isCorrect = index === correct
    set({
      selectedAnswer: index,
      isCorrect,
      lessonScore: isCorrect ? lessonScore + 1 : lessonScore,
      hearts: isCorrect ? hearts : Math.max(0, hearts - 1),
    })
  },

  handleWriteAnswer: (correctAnswer) => {
    const { userInput, lessonScore, hearts } = get()
    const isCorrect = userInput.toLowerCase().trim() === correctAnswer.toLowerCase()
    set({
      selectedAnswer: isCorrect ? 0 : -1,
      isCorrect,
      lessonScore: isCorrect ? lessonScore + 1 : lessonScore,
      hearts: isCorrect ? hearts : Math.max(0, hearts - 1),
    })
  },

  nextQuestion: () => {
    const { currentLesson, currentQuestion, lessonScore, xp, dailyXp, completedLessons, level, gems } = get()
    if (!currentLesson) return

    if (currentQuestion < currentLesson.questions.length - 1) {
      set({
        currentQuestion: currentQuestion + 1,
        selectedAnswer: null,
        isCorrect: null,
        showHint: false,
        userInput: '',
      })
    } else {
      // Lesson complete
      const earnedXp = Math.round(currentLesson.xpReward * (lessonScore / currentLesson.questions.length))
      const newXp = xp + earnedXp
      const newCompletedLessons = completedLessons.includes(currentLesson.id)
        ? completedLessons
        : [...completedLessons, currentLesson.id]

      const shouldLevelUp = newXp >= level * 100

      set({
        xp: newXp,
        dailyXp: dailyXp + earnedXp,
        completedLessons: newCompletedLessons,
        level: shouldLevelUp ? level + 1 : level,
        gems: shouldLevelUp ? gems + 10 : gems,
        screen: 'result',
      })
    }
  },

  setShowHint: (show) => set({ showHint: show }),
  setUserInput: (input) => set({ userInput: input }),
  refillHearts: () => set({ hearts: 5 }),

  resetLessonState: () => set({
    currentLesson: null,
    currentQuestion: 0,
    selectedAnswer: null,
    isCorrect: null,
    showHint: false,
    userInput: '',
    lessonScore: 0,
  }),
}))
