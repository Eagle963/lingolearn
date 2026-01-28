'use client'

import React, { useState } from 'react'
import { Heart, Flame, Trophy, Zap, Target, Award, Home, User, RotateCcw, Lock, Check, X, ChevronRight, ChevronLeft, Gift, Sparkles, BookOpen, MessageCircle, Plane, Utensils, ShoppingBag, Briefcase, Code, Mail, PenTool, HelpCircle, Globe, Headphones, BarChart3, TrendingUp, Calendar } from 'lucide-react'

// Utility function
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

// Types
type QuestionType = 'translate' | 'fill' | 'audio' | 'write'

interface Question {
  type: QuestionType
  question: string
  options?: string[]
  correct?: number
  answer?: string
  hint?: string
}

interface Lesson {
  id: number
  title: string
  icon: string
  category: string
  difficulty: 1 | 2 | 3
  xpReward: number
  questions: Question[]
}

interface Category {
  id: string
  name: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  lessonIds: number[]
}

// Categories data
const categories: Category[] = [
  { id: 'basics', name: 'Bases', icon: BookOpen, color: 'from-green-400 to-green-600', lessonIds: [1, 2, 3, 4, 5] },
  { id: 'conversation', name: 'Conversation', icon: MessageCircle, color: 'from-blue-400 to-blue-600', lessonIds: [6, 7, 8, 9, 10] },
  { id: 'travel', name: 'Voyages', icon: Plane, color: 'from-purple-400 to-purple-600', lessonIds: [11, 12, 13, 14, 15] },
  { id: 'food', name: 'Restaurant', icon: Utensils, color: 'from-orange-400 to-orange-600', lessonIds: [16, 17, 18, 19, 20] },
  { id: 'shopping', name: 'Shopping', icon: ShoppingBag, color: 'from-pink-400 to-pink-600', lessonIds: [21, 22, 23, 24, 25] },
  { id: 'work', name: 'Travail', icon: Briefcase, color: 'from-indigo-400 to-indigo-600', lessonIds: [26, 27, 28, 29, 30] },
  { id: 'tech', name: 'Tech & Dev', icon: Code, color: 'from-cyan-400 to-cyan-600', lessonIds: [31, 32, 33, 34, 35] },
  { id: 'emails', name: 'Emails', icon: Mail, color: 'from-red-400 to-red-600', lessonIds: [36, 37, 38, 39, 40] },
  { id: 'grammar', name: 'Grammaire', icon: PenTool, color: 'from-yellow-400 to-yellow-600', lessonIds: [41, 42, 43, 44, 45] },
  { id: 'idioms', name: 'Expressions', icon: Sparkles, color: 'from-teal-400 to-teal-600', lessonIds: [46, 47, 48, 49, 50] },
]

// Lessons data (50 lessons)
const lessons: Lesson[] = [
  // BASICS (1-5)
  {
    id: 1, title: "Salutations", icon: "👋", category: "basics", xpReward: 15, difficulty: 1,
    questions: [
      { type: "translate", question: "Comment dit-on 'Bonjour' ?", options: ["Hello", "Goodbye", "Thanks", "Please"], correct: 0, hint: "C'est le mot le plus basique pour saluer" },
      { type: "translate", question: "Traduisez: 'Nice to meet you'", options: ["Au revoir", "Enchanté", "Merci", "De rien"], correct: 1 },
      { type: "fill", question: "How ___ you?", options: ["is", "are", "am", "be"], correct: 1 },
      { type: "translate", question: "'Good morning' signifie:", options: ["Bonne nuit", "Bon après-midi", "Bonjour (matin)", "Bonsoir"], correct: 2 },
      { type: "audio", question: "🔊 'See you later' =", options: ["À bientôt", "Bonjour", "Merci", "Pardon"], correct: 0 },
      { type: "write", question: "Écrivez 'Bonjour' en anglais", answer: "hello", hint: "5 lettres, commence par H" },
    ]
  },
  {
    id: 2, title: "Se présenter", icon: "🙋", category: "basics", xpReward: 15, difficulty: 1,
    questions: [
      { type: "translate", question: "'My name is...' =", options: ["Je m'appelle...", "J'habite à...", "J'ai...ans", "Je travaille"], correct: 0 },
      { type: "fill", question: "I ___ from France.", options: ["is", "am", "are", "be"], correct: 1 },
      { type: "translate", question: "Comment dit-on 'J'ai 30 ans' ?", options: ["I have 30", "I am 30 years old", "I 30 years", "My age 30"], correct: 1 },
      { type: "fill", question: "Where ___ you from?", options: ["is", "am", "are", "do"], correct: 2 },
      { type: "translate", question: "'I live in Paris' =", options: ["Je vis à Paris", "Je vais à Paris", "J'aime Paris", "Je suis Paris"], correct: 0 },
      { type: "write", question: "Écrivez 'name' en anglais", answer: "name", hint: "4 lettres" },
    ]
  },
  {
    id: 3, title: "Chiffres 1-20", icon: "🔢", category: "basics", xpReward: 15, difficulty: 1,
    questions: [
      { type: "translate", question: "Twelve =", options: ["10", "11", "12", "13"], correct: 2 },
      { type: "translate", question: "Comment dit-on '15' ?", options: ["Fifty", "Fifteen", "Five", "Fiveteen"], correct: 1 },
      { type: "audio", question: "🔊 'Eighteen' =", options: ["8", "18", "80", "17"], correct: 1 },
      { type: "write", question: "Écrivez '7' en anglais", answer: "seven", hint: "Commence par S" },
      { type: "translate", question: "Twenty =", options: ["12", "20", "22", "2"], correct: 1 },
      { type: "fill", question: "I have ___ euros. (13)", options: ["thirteen", "thirty", "tree", "threeteen"], correct: 0 },
    ]
  },
  {
    id: 4, title: "Couleurs", icon: "🎨", category: "basics", xpReward: 15, difficulty: 1,
    questions: [
      { type: "translate", question: "Blue =", options: ["Bleu", "Vert", "Rouge", "Jaune"], correct: 0 },
      { type: "translate", question: "Comment dit-on 'vert' ?", options: ["Grey", "Green", "Brown", "Gold"], correct: 1 },
      { type: "fill", question: "The sky is ___.", options: ["blue", "red", "green", "yellow"], correct: 0 },
      { type: "translate", question: "'Black and white' =", options: ["Bleu et blanc", "Noir et blanc", "Gris et blanc", "Rouge et noir"], correct: 1 },
      { type: "audio", question: "🔊 'Purple' =", options: ["Rose", "Violet", "Orange", "Marron"], correct: 1 },
      { type: "write", question: "Écrivez 'rouge' en anglais", answer: "red", hint: "3 lettres" },
    ]
  },
  {
    id: 5, title: "Jours & Mois", icon: "📅", category: "basics", xpReward: 20, difficulty: 1,
    questions: [
      { type: "translate", question: "Monday =", options: ["Mardi", "Lundi", "Mercredi", "Dimanche"], correct: 1 },
      { type: "translate", question: "Comment dit-on 'vendredi' ?", options: ["Thursday", "Friday", "Saturday", "Sunday"], correct: 1 },
      { type: "fill", question: "Today is ___. (samedi)", options: ["Sunday", "Saturday", "Friday", "Monday"], correct: 1 },
      { type: "translate", question: "'January' =", options: ["Juin", "Juillet", "Janvier", "Février"], correct: 2 },
      { type: "audio", question: "🔊 'Wednesday' =", options: ["Lundi", "Mardi", "Mercredi", "Jeudi"], correct: 2 },
      { type: "translate", question: "December =", options: ["Novembre", "Décembre", "Octobre", "Septembre"], correct: 1 },
    ]
  },
  // CONVERSATION (6-10)
  {
    id: 6, title: "Small Talk", icon: "💬", category: "conversation", xpReward: 20, difficulty: 2,
    questions: [
      { type: "translate", question: "'How are you doing?' =", options: ["Où vas-tu ?", "Comment vas-tu ?", "Que fais-tu ?", "Qui es-tu ?"], correct: 1 },
      { type: "fill", question: "I'm ___, thanks!", options: ["fine", "find", "five", "fire"], correct: 0 },
      { type: "translate", question: "'What's up?' signifie:", options: ["Qu'est-ce qui est en haut ?", "Quoi de neuf ?", "Que veux-tu ?", "Où est-ce ?"], correct: 1 },
      { type: "translate", question: "Comment dit-on 'Pas mal' ?", options: ["Not bad", "Not good", "Very bad", "So so"], correct: 0 },
      { type: "fill", question: "Nice ___ today, isn't it?", options: ["day", "weather", "time", "moment"], correct: 1 },
      { type: "translate", question: "'Long time no see!' =", options: ["Longtemps pas vu", "Ça fait longtemps !", "Long moment", "Tu m'as manqué"], correct: 1 },
    ]
  },
  {
    id: 7, title: "Opinions", icon: "🤔", category: "conversation", xpReward: 20, difficulty: 2,
    questions: [
      { type: "translate", question: "'I think that...' =", options: ["Je sais que...", "Je pense que...", "Je crois que...", "B et C"], correct: 3 },
      { type: "fill", question: "In my ___, this is wrong.", options: ["head", "opinion", "idea", "view"], correct: 1 },
      { type: "translate", question: "'I agree' =", options: ["Je refuse", "J'accepte", "Je suis d'accord", "Je comprends"], correct: 2 },
      { type: "translate", question: "Comment dit-on 'Je ne suis pas d'accord' ?", options: ["I don't agree", "I disagree", "I'm not agree", "A et B"], correct: 3 },
      { type: "fill", question: "That's a good ___!", options: ["point", "dot", "mark", "spot"], correct: 0 },
      { type: "translate", question: "'It depends' =", options: ["C'est sûr", "Ça dépend", "C'est faux", "C'est vrai"], correct: 1 },
    ]
  },
  {
    id: 8, title: "Émotions", icon: "😊", category: "conversation", xpReward: 20, difficulty: 2,
    questions: [
      { type: "translate", question: "'I'm happy' =", options: ["Je suis triste", "Je suis content", "Je suis fatigué", "Je suis fâché"], correct: 1 },
      { type: "translate", question: "Comment dit-on 'fatigué' ?", options: ["Tired", "Tried", "Fired", "Wired"], correct: 0 },
      { type: "fill", question: "I'm so ___ about the trip!", options: ["excited", "boring", "bored", "tiring"], correct: 0 },
      { type: "translate", question: "'I'm worried' =", options: ["Je suis pressé", "Je suis inquiet", "Je suis surpris", "Je suis content"], correct: 1 },
      { type: "audio", question: "🔊 'Disappointed' =", options: ["Ravi", "Déçu", "Énervé", "Confus"], correct: 1 },
      { type: "fill", question: "Don't be ___! (triste)", options: ["happy", "angry", "sad", "glad"], correct: 2 },
    ]
  },
  {
    id: 9, title: "Demander poliment", icon: "🙏", category: "conversation", xpReward: 20, difficulty: 2,
    questions: [
      { type: "translate", question: "'Could you please...' =", options: ["Tu dois...", "Pourriez-vous...", "Tu peux...", "Il faut..."], correct: 1 },
      { type: "fill", question: "Would you ___ helping me?", options: ["like", "want", "mind", "need"], correct: 2 },
      { type: "translate", question: "'Excuse me' =", options: ["Pardon", "Merci", "De rien", "S'il vous plaît"], correct: 0 },
      { type: "translate", question: "Comment dit-on 'Je vous en prie' ?", options: ["Please", "Thanks", "You're welcome", "Sorry"], correct: 2 },
      { type: "fill", question: "I'm sorry to ___ you.", options: ["bother", "brother", "butter", "better"], correct: 0 },
      { type: "translate", question: "'May I ask you something?' =", options: ["Je dois te demander", "Puis-je vous demander ?", "Je veux demander", "Tu dois répondre"], correct: 1 },
    ]
  },
  {
    id: 10, title: "Au téléphone", icon: "📱", category: "conversation", xpReward: 25, difficulty: 2,
    questions: [
      { type: "translate", question: "'Hello, who's speaking?' =", options: ["Allô, qui parle ?", "Allô, c'est qui ?", "Allô, tu es où ?", "Allô, ça va ?"], correct: 0 },
      { type: "fill", question: "Can I ___ a message?", options: ["give", "take", "leave", "make"], correct: 2 },
      { type: "translate", question: "'Hold on, please' =", options: ["Raccrochez", "Patientez svp", "Rappelez", "Parlez plus fort"], correct: 1 },
      { type: "translate", question: "Comment dit-on 'Je vous rappelle' ?", options: ["I call you", "I'll call you back", "I calling you", "I called you"], correct: 1 },
      { type: "fill", question: "Sorry, I can't ___ you well.", options: ["listen", "hear", "see", "understand"], correct: 1 },
      { type: "translate", question: "'The line is busy' =", options: ["La ligne est libre", "La ligne est occupée", "La ligne est coupée", "Pas de réseau"], correct: 1 },
    ]
  },
  // More lessons... (simplified for the remaining ones)
  ...Array.from({ length: 40 }, (_, i) => ({
    id: i + 11,
    title: `Leçon ${i + 11}`,
    icon: ["✈️", "🏨", "🗺️", "🚌", "🆘", "🍽️", "🥗", "🥤", "😋", "😕", "🛒", "👕", "🔄", "🤝", "💇", "🏢", "👥", "🤵", "🤝", "😓", "💻", "🔧", "👀", "📊", "🎧", "📧", "🙋", "↩️", "✍️", "😬", "📝", "🔄", "⏮️", "⏭️", "🔑", "💬", "💼", "🔀", "🔄", "😎"][i % 40],
    category: categories[Math.floor((i + 10) / 5) % 10].id,
    xpReward: 20 + Math.floor(i / 10) * 5,
    difficulty: (Math.floor(i / 15) + 1) as 1 | 2 | 3,
    questions: [
      { type: "translate" as const, question: "Question exemple 1", options: ["Option A", "Option B", "Option C", "Option D"], correct: 0 },
      { type: "fill" as const, question: "Complete the ___.", options: ["word", "text", "blank", "space"], correct: 2 },
      { type: "translate" as const, question: "Question exemple 3", options: ["Option A", "Option B", "Option C", "Option D"], correct: 1 },
      { type: "translate" as const, question: "Question exemple 4", options: ["Option A", "Option B", "Option C", "Option D"], correct: 2 },
      { type: "audio" as const, question: "🔊 Listen and choose", options: ["Option A", "Option B", "Option C", "Option D"], correct: 0 },
      { type: "write" as const, question: "Write the word", answer: "word", hint: "4 letters" },
    ]
  }))
]

// Word of the day
const wordOfDay = {
  word: "Nevertheless",
  phonetic: "/ˌnevərðəˈles/",
  meaning: "Néanmoins, malgré tout",
  example: "It was raining; nevertheless, we went for a walk.",
}

// Main App Component
export default function LingoLearnApp() {
  // Navigation & UI State
  const [screen, setScreen] = useState<'home' | 'lesson' | 'result' | 'profile' | 'progress'>('home')
  const [currentCategory, setCurrentCategory] = useState<string | null>(null)
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [showHint, setShowHint] = useState(false)
  const [userInput, setUserInput] = useState('')
  
  // Game State
  const [xp, setXp] = useState(150)
  const [streak, setStreak] = useState(3)
  const [hearts, setHearts] = useState(5)
  const [gems, setGems] = useState(50)
  const [level, setLevel] = useState(2)
  const [completedLessons, setCompletedLessons] = useState<number[]>([1, 2])
  const [lessonScore, setLessonScore] = useState(0)
  const [dailyGoal] = useState(50)
  const [dailyXp, setDailyXp] = useState(30)

  // Start a lesson
  const startLesson = (lesson: Lesson) => {
    if (hearts <= 0) return
    setCurrentLesson(lesson)
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setIsCorrect(null)
    setShowHint(false)
    setUserInput('')
    setLessonScore(0)
    setScreen('lesson')
  }

  // Handle answer selection
  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null || !currentLesson) return
    setSelectedAnswer(index)
    const q = currentLesson.questions[currentQuestion]
    const correct = index === q.correct
    setIsCorrect(correct)
    
    if (correct) {
      setLessonScore(prev => prev + 1)
    } else {
      setHearts(prev => Math.max(0, prev - 1))
    }
  }

  // Handle write answer
  const handleWriteAnswer = () => {
    if (!currentLesson) return
    const q = currentLesson.questions[currentQuestion]
    const correct = userInput.toLowerCase().trim() === q.answer?.toLowerCase()
    setIsCorrect(correct)
    setSelectedAnswer(correct ? 0 : -1)
    
    if (correct) {
      setLessonScore(prev => prev + 1)
    } else {
      setHearts(prev => Math.max(0, prev - 1))
    }
  }

  // Go to next question
  const nextQuestion = () => {
    if (!currentLesson) return
    
    if (currentQuestion < currentLesson.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
      setSelectedAnswer(null)
      setIsCorrect(null)
      setShowHint(false)
      setUserInput('')
    } else {
      // Lesson complete
      const earnedXp = Math.round(currentLesson.xpReward * (lessonScore / currentLesson.questions.length))
      setXp(prev => prev + earnedXp)
      setDailyXp(prev => prev + earnedXp)
      
      if (!completedLessons.includes(currentLesson.id)) {
        setCompletedLessons(prev => [...prev, currentLesson.id])
      }
      
      if ((xp + earnedXp) >= level * 100) {
        setLevel(prev => prev + 1)
        setGems(prev => prev + 10)
      }
      
      setScreen('result')
    }
  }

  const progress = currentLesson ? ((currentQuestion + 1) / currentLesson.questions.length) * 100 : 0
  const dailyProgress = Math.min((dailyXp / dailyGoal) * 100, 100)

  // HOME SCREEN
  const HomeScreen = () => (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-4 sticky top-0 z-20 shadow-lg">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1.5 bg-white/20 px-2.5 py-1 rounded-full">
            <Flame className="w-4 h-4 text-orange-300" />
            <span className="font-bold text-white text-sm">{streak}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/20 px-2.5 py-1 rounded-full">
            <Zap className="w-4 h-4 text-yellow-300" />
            <span className="font-bold text-white text-sm">{xp}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/20 px-2.5 py-1 rounded-full">
            <Heart className="w-4 h-4 text-red-400" fill="#f87171" />
            <span className="font-bold text-white text-sm">{hearts}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/20 px-2.5 py-1 rounded-full">
            <Gift className="w-4 h-4 text-purple-300" />
            <span className="font-bold text-white text-sm">{gems}</span>
          </div>
        </div>
      </div>

      {/* Daily Goal */}
      <div className="px-4 py-4">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-green-500" />
              <span className="font-semibold text-gray-800">Objectif du jour</span>
            </div>
            <span className="text-sm text-gray-500">{dailyXp}/{dailyGoal} XP</span>
          </div>
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-500 rounded-full"
              style={{ width: `${dailyProgress}%` }}
            />
          </div>
          {dailyProgress >= 100 && (
            <div className="flex items-center gap-2 mt-2 text-green-600">
              <Check className="w-4 h-4" />
              <span className="text-sm font-medium">Objectif atteint ! 🎉</span>
            </div>
          )}
        </div>
      </div>

      {/* Word of the Day */}
      <div className="px-4 pb-4">
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-4 text-white shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold text-sm opacity-90">Mot du jour</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-2xl font-bold">{wordOfDay.word}</div>
            <span className="text-white/70 text-sm">{wordOfDay.phonetic}</span>
          </div>
          <div className="text-white/90 mt-1">{wordOfDay.meaning}</div>
          <div className="text-white/70 text-sm mt-2 italic">&quot;{wordOfDay.example}&quot;</div>
        </div>
      </div>

      {/* Hearts Warning */}
      {hearts === 0 && (
        <div className="mx-4 mb-4 bg-red-50 border border-red-200 rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-red-500" />
            <span className="text-red-700 font-medium">Plus de vies !</span>
          </div>
          <button 
            onClick={() => setHearts(5)}
            className="bg-red-500 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 active:scale-95 transition"
          >
            <RotateCcw className="w-4 h-4" />
            Recharger
          </button>
        </div>
      )}

      {/* Categories */}
      <div className="px-4 space-y-4">
        {categories.map(category => {
          const categoryLessons = lessons.filter(l => category.lessonIds.includes(l.id))
          const Icon = category.icon
          const completedInCategory = categoryLessons.filter(l => completedLessons.includes(l.id)).length
          
          return (
            <div key={category.id}>
              <button
                onClick={() => setCurrentCategory(currentCategory === category.id ? null : category.id)}
                className="w-full flex items-center justify-between mb-3"
              >
                <div className="flex items-center gap-3">
                  <div className={cn('w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center shadow-md', category.color)}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <h2 className="font-bold text-gray-800">{category.name}</h2>
                    <p className="text-xs text-gray-500">{completedInCategory}/{categoryLessons.length} leçons</p>
                  </div>
                </div>
                <ChevronRight className={cn('w-5 h-5 text-gray-400 transition-transform', currentCategory === category.id && 'rotate-90')} />
              </button>
              
              {currentCategory === category.id && (
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {categoryLessons.map(lesson => {
                    const isCompleted = completedLessons.includes(lesson.id)
                    const isLocked = hearts === 0
                    
                    return (
                      <button
                        key={lesson.id}
                        onClick={() => !isLocked && startLesson(lesson)}
                        disabled={isLocked}
                        className={cn(
                          'relative bg-white rounded-xl p-4 shadow-sm border border-gray-100 transition-all active:scale-95',
                          isLocked && 'opacity-50'
                        )}
                      >
                        {isCompleted && (
                          <div className="absolute -top-1.5 -right-1.5 bg-green-500 rounded-full p-1 shadow">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                        )}
                        {isLocked && (
                          <div className="absolute inset-0 bg-gray-900/10 rounded-xl flex items-center justify-center">
                            <Lock className="w-6 h-6 text-gray-500" />
                          </div>
                        )}
                        <div className="text-3xl mb-2">{lesson.icon}</div>
                        <h3 className="font-semibold text-gray-800 text-sm">{lesson.title}</h3>
                        <div className="flex items-center gap-1 mt-1">
                          <Zap className="w-3 h-3 text-yellow-500" />
                          <span className="text-xs text-gray-500">+{lesson.xpReward} XP</span>
                          <span className="ml-auto text-xs">{'⭐'.repeat(lesson.difficulty)}</span>
                        </div>
                      </button>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )

  // LESSON SCREEN
  const LessonScreen = () => {
    if (!currentLesson) return null
    const q = currentLesson.questions[currentQuestion]
    
    return (
      <div className="min-h-screen bg-white flex flex-col">
        {/* Header */}
        <div className="p-4 flex items-center gap-3 border-b">
          <button onClick={() => setScreen('home')} className="text-gray-400">
            <X className="w-6 h-6" />
          </button>
          <div className="flex-1 bg-gray-100 rounded-full h-2.5 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-green-400 to-green-500 h-full transition-all" 
              style={{ width: `${progress}%` }} 
            />
          </div>
          <div className="flex items-center gap-1">
            <Heart className="w-5 h-5 text-red-500" fill="#ef4444" />
            <span className="font-bold text-red-500">{hearts}</span>
          </div>
        </div>

        {/* Question */}
        <div className="flex-1 px-5 py-6 overflow-y-auto">
          <div className="mb-1 flex items-center gap-2">
            {q.type === 'translate' && <Globe className="w-4 h-4 text-blue-500" />}
            {q.type === 'fill' && <PenTool className="w-4 h-4 text-purple-500" />}
            {q.type === 'audio' && <Headphones className="w-4 h-4 text-orange-500" />}
            {q.type === 'write' && <PenTool className="w-4 h-4 text-green-500" />}
            <span className="text-sm text-gray-500 font-medium">
              {q.type === 'translate' && 'Traduisez'}
              {q.type === 'fill' && 'Complétez'}
              {q.type === 'audio' && 'Écoutez'}
              {q.type === 'write' && 'Écrivez'}
            </span>
          </div>
          
          <h2 className="text-xl font-bold text-gray-800 mb-6">{q.question}</h2>

          {q.hint && !showHint && selectedAnswer === null && (
            <button 
              onClick={() => setShowHint(true)}
              className="mb-4 text-sm text-blue-500 flex items-center gap-1"
            >
              <HelpCircle className="w-4 h-4" /> Indice
            </button>
          )}
          {showHint && <p className="mb-4 text-sm text-blue-600 bg-blue-50 p-3 rounded-lg">💡 {q.hint}</p>}

          {q.type === 'write' ? (
            <div className="space-y-4">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                disabled={selectedAnswer !== null}
                placeholder="Tapez votre réponse..."
                className="w-full p-4 text-lg border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none"
                onKeyPress={(e) => e.key === 'Enter' && userInput && handleWriteAnswer()}
              />
              {selectedAnswer === null && (
                <button
                  onClick={handleWriteAnswer}
                  disabled={!userInput}
                  className="w-full py-4 bg-green-500 text-white rounded-xl font-bold disabled:opacity-50 active:scale-98 transition"
                >
                  Vérifier
                </button>
              )}
            </div>
          ) : (
            <div className="space-y-3">
              {q.options?.map((option, index) => {
                let style = 'bg-white border-2 border-gray-200'
                if (selectedAnswer !== null) {
                  if (index === q.correct) style = 'bg-green-100 border-2 border-green-500'
                  else if (index === selectedAnswer) style = 'bg-red-100 border-2 border-red-500'
                  else style = 'bg-gray-50 border-2 border-gray-200 opacity-50'
                }
                
                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                    className={cn('w-full p-4 rounded-xl text-left font-medium transition-all active:scale-98', style)}
                  >
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        'w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold',
                        selectedAnswer !== null && index === q.correct ? 'bg-green-500 text-white' :
                        selectedAnswer === index && !isCorrect ? 'bg-red-500 text-white' :
                        'bg-gray-100 text-gray-600'
                      )}>
                        {selectedAnswer !== null && index === q.correct ? <Check className="w-5 h-5" /> :
                         selectedAnswer === index && !isCorrect ? <X className="w-5 h-5" /> :
                         String.fromCharCode(65 + index)}
                      </div>
                      <span className="text-gray-800">{option}</span>
                    </div>
                  </button>
                )
              })}
            </div>
          )}
        </div>

        {/* Feedback */}
        {selectedAnswer !== null && (
          <div className={cn('p-5 border-t-2', isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200')}>
            <div className="flex items-center gap-3 mb-3">
              <div className={cn('w-10 h-10 rounded-full flex items-center justify-center', isCorrect ? 'bg-green-500' : 'bg-red-500')}>
                {isCorrect ? <Check className="w-6 h-6 text-white" /> : <X className="w-6 h-6 text-white" />}
              </div>
              <div>
                <span className={cn('font-bold text-lg', isCorrect ? 'text-green-700' : 'text-red-700')}>
                  {isCorrect ? 'Excellent !' : 'Pas tout à fait...'}
                </span>
                {!isCorrect && q.type !== 'write' && q.options && (
                  <p className="text-sm text-red-600">Réponse : {q.options[q.correct || 0]}</p>
                )}
                {!isCorrect && q.type === 'write' && (
                  <p className="text-sm text-red-600">Réponse : {q.answer}</p>
                )}
              </div>
            </div>
            <button
              onClick={nextQuestion}
              className={cn('w-full py-4 rounded-xl font-bold text-white active:scale-98 transition', isCorrect ? 'bg-green-500' : 'bg-red-500')}
            >
              CONTINUER
            </button>
          </div>
        )}
      </div>
    )
  }

  // RESULT SCREEN
  const ResultScreen = () => {
    if (!currentLesson) return null
    const accuracy = Math.round((lessonScore / currentLesson.questions.length) * 100)
    const earnedXp = Math.round(currentLesson.xpReward * (lessonScore / currentLesson.questions.length))
    
    return (
      <div className="min-h-screen bg-gradient-to-b from-yellow-400 via-orange-400 to-orange-500 flex flex-col items-center justify-center p-6">
        <div className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-2xl font-bold text-gray-800 mb-1">Leçon terminée !</h1>
          <p className="text-gray-500 mb-6">{currentLesson.icon} {currentLesson.title}</p>
          
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-green-50 rounded-xl p-3">
              <div className="text-xl font-bold text-green-600">{accuracy}%</div>
              <div className="text-xs text-gray-500">Précision</div>
            </div>
            <div className="bg-yellow-50 rounded-xl p-3">
              <div className="text-xl font-bold text-yellow-600">+{earnedXp}</div>
              <div className="text-xs text-gray-500">XP</div>
            </div>
            <div className="bg-orange-50 rounded-xl p-3">
              <div className="text-xl font-bold text-orange-600">{streak}🔥</div>
              <div className="text-xs text-gray-500">Série</div>
            </div>
          </div>
          
          {accuracy === 100 && (
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl p-3 mb-6 flex items-center gap-3">
              <Award className="w-8 h-8 text-yellow-600" />
              <div className="text-left">
                <p className="font-bold text-yellow-800">Sans faute !</p>
                <p className="text-sm text-yellow-600">+5 gems bonus</p>
              </div>
            </div>
          )}
          
          <button
            onClick={() => setScreen('home')}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg active:scale-98 transition"
          >
            CONTINUER
          </button>
        </div>
      </div>
    )
  }

  // PROFILE SCREEN
  const ProfileScreen = () => (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-8">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
            <span className="text-4xl">🧑‍💻</span>
          </div>
          <div className="text-white">
            <h1 className="text-2xl font-bold">Utilisateur</h1>
            <p className="text-green-100">Niveau {level} • {xp} XP total</p>
          </div>
        </div>
      </div>
      
      <div className="p-4 space-y-4">
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h2 className="font-bold text-gray-800 mb-4">📊 Statistiques</h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-4 text-center">
              <Zap className="w-8 h-8 text-yellow-500 mx-auto mb-1" />
              <div className="text-2xl font-bold text-gray-800">{xp}</div>
              <div className="text-xs text-gray-500">XP Total</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4 text-center">
              <Flame className="w-8 h-8 text-orange-500 mx-auto mb-1" />
              <div className="text-2xl font-bold text-gray-800">{streak}</div>
              <div className="text-xs text-gray-500">Jours de suite</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 text-center">
              <Trophy className="w-8 h-8 text-green-500 mx-auto mb-1" />
              <div className="text-2xl font-bold text-gray-800">{completedLessons.length}</div>
              <div className="text-xs text-gray-500">Leçons</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 text-center">
              <Gift className="w-8 h-8 text-purple-500 mx-auto mb-1" />
              <div className="text-2xl font-bold text-gray-800">{gems}</div>
              <div className="text-xs text-gray-500">Gems</div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h2 className="font-bold text-gray-800 mb-3">🏅 Badges</h2>
          <div className="flex gap-3 flex-wrap">
            <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow">
              <span className="text-2xl">🌱</span>
            </div>
            {completedLessons.length >= 5 && (
              <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow">
                <span className="text-2xl">⭐</span>
              </div>
            )}
            {xp >= 100 && (
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow">
                <span className="text-2xl">🏆</span>
              </div>
            )}
            <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center opacity-50">
              <Lock className="w-6 h-6 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h2 className="font-bold text-gray-800 mb-3">📈 Niveau {level}</h2>
          <div className="h-4 bg-gray-100 rounded-full overflow-hidden mb-2">
            <div 
              className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all"
              style={{ width: `${(xp % 100)}%` }}
            />
          </div>
          <p className="text-sm text-gray-500 text-right">{xp % 100} / 100 XP pour niveau {level + 1}</p>
        </div>
      </div>
    </div>
  )

  // PROGRESS SCREEN
  const ProgressScreen = () => {
    const totalLessons = lessons.length
    const completedCount = completedLessons.length
    const overallProgress = Math.round((completedCount / totalLessons) * 100)

    // Calculate category stats
    const categoryStats = categories.map(category => {
      const categoryLessonsList = lessons.filter(l => category.lessonIds.includes(l.id))
      const completedInCategory = categoryLessonsList.filter(l => completedLessons.includes(l.id)).length
      const percentage = Math.round((completedInCategory / categoryLessonsList.length) * 100)
      return {
        ...category,
        completed: completedInCategory,
        total: categoryLessonsList.length,
        percentage,
      }
    })

    // Simulated weekly activity (for demo)
    const weekDays = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']
    const weekActivity = [3, 2, 4, 1, 0, 2, dailyXp > 0 ? 1 : 0] // lessons per day

    return (
      <div className="min-h-screen bg-gray-50 pb-24">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-6 sticky top-0 z-20 shadow-lg">
          <div className="flex items-center gap-3">
            <BarChart3 className="w-7 h-7 text-white" />
            <h1 className="text-xl font-bold text-white">Ma Progression</h1>
          </div>
        </div>

        {/* Overall Progress Card */}
        <div className="px-4 py-4">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-gray-800">Progression globale</h2>
              <span className="text-2xl font-bold text-blue-600">{overallProgress}%</span>
            </div>

            {/* Progress Ring */}
            <div className="flex items-center gap-6">
              <div className="relative w-24 h-24">
                <svg className="w-24 h-24 transform -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="url(#progressGradient)"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${overallProgress * 2.51} 251`}
                  />
                  <defs>
                    <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-yellow-500" />
                </div>
              </div>

              <div className="flex-1 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Leçons terminées</span>
                  <span className="font-semibold text-gray-800">{completedCount}/{totalLessons}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">XP Total</span>
                  <span className="font-semibold text-yellow-600">{xp} XP</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Niveau actuel</span>
                  <span className="font-semibold text-green-600">Niveau {level}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Activity */}
        <div className="px-4 pb-4">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-green-500" />
              <h2 className="font-bold text-gray-800">Activité de la semaine</h2>
            </div>
            <div className="flex justify-between items-end gap-2">
              {weekDays.map((day, index) => (
                <div key={day} className="flex flex-col items-center gap-1">
                  <div
                    className={cn(
                      'w-8 rounded-t-lg transition-all',
                      weekActivity[index] > 0
                        ? 'bg-gradient-to-t from-green-400 to-green-500'
                        : 'bg-gray-200'
                    )}
                    style={{ height: `${Math.max(weekActivity[index] * 15, 8)}px` }}
                  />
                  <span className="text-xs text-gray-500">{day}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
              <span className="text-sm text-gray-500">Total cette semaine</span>
              <span className="font-bold text-green-600">{weekActivity.reduce((a, b) => a + b, 0)} leçons</span>
            </div>
          </div>
        </div>

        {/* Categories Progress */}
        <div className="px-4 pb-4">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-purple-500" />
              <h2 className="font-bold text-gray-800">Progression par catégorie</h2>
            </div>
            <div className="space-y-4">
              {categoryStats.map(cat => {
                const Icon = cat.icon
                return (
                  <div key={cat.id}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <div className={cn('w-8 h-8 rounded-lg bg-gradient-to-br flex items-center justify-center', cat.color)}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-medium text-gray-700 text-sm">{cat.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{cat.completed}/{cat.total}</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={cn('h-full rounded-full transition-all duration-500 bg-gradient-to-r', cat.color)}
                        style={{ width: `${cat.percentage}%` }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Achievements Summary */}
        <div className="px-4 pb-4">
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-4 border border-yellow-100">
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-5 h-5 text-yellow-600" />
              <h2 className="font-bold text-gray-800">Accomplissements</h2>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                <div className="text-2xl mb-1">🔥</div>
                <div className="font-bold text-orange-600">{streak}</div>
                <div className="text-xs text-gray-500">Jours de suite</div>
              </div>
              <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                <div className="text-2xl mb-1">🏆</div>
                <div className="font-bold text-yellow-600">{Math.floor(xp / 100)}</div>
                <div className="text-xs text-gray-500">Paliers XP</div>
              </div>
              <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                <div className="text-2xl mb-1">⭐</div>
                <div className="font-bold text-purple-600">{categoryStats.filter(c => c.percentage === 100).length}</div>
                <div className="text-xs text-gray-500">Catégories 100%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Milestone */}
        <div className="px-4 pb-4">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Prochain objectif</p>
                <p className="font-bold text-lg">Terminer {5 - (completedCount % 5)} leçons de plus</p>
              </div>
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                <Target className="w-7 h-7 text-white" />
              </div>
            </div>
            <div className="mt-3 h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-white rounded-full transition-all"
                style={{ width: `${((completedCount % 5) / 5) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

  // NAVIGATION BAR
  const NavBar = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 flex justify-around items-center z-30 shadow-lg max-w-md mx-auto">
      <button
        onClick={() => setScreen('home')}
        className={cn('flex flex-col items-center gap-1', screen === 'home' ? 'text-green-500' : 'text-gray-400')}
      >
        <Home className="w-6 h-6" />
        <span className="text-xs font-medium">Accueil</span>
      </button>
      <button
        onClick={() => setScreen('progress')}
        className={cn('flex flex-col items-center gap-1', screen === 'progress' ? 'text-blue-500' : 'text-gray-400')}
      >
        <BarChart3 className="w-6 h-6" />
        <span className="text-xs font-medium">Progression</span>
      </button>
      <button
        onClick={() => setScreen('profile')}
        className={cn('flex flex-col items-center gap-1', screen === 'profile' ? 'text-green-500' : 'text-gray-400')}
      >
        <User className="w-6 h-6" />
        <span className="text-xs font-medium">Profil</span>
      </button>
    </div>
  )

  return (
    <div className="relative">
      {screen === 'home' && <HomeScreen />}
      {screen === 'lesson' && <LessonScreen />}
      {screen === 'result' && <ResultScreen />}
      {screen === 'profile' && <ProfileScreen />}
      {screen === 'progress' && <ProgressScreen />}
      {(screen === 'home' || screen === 'profile' || screen === 'progress') && <NavBar />}
    </div>
  )
}
