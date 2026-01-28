'use client'

import { useState, useEffect } from 'react'
import { X, Heart, HelpCircle, Volume2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { ProgressBar, OptionButton, WriteInput, FeedbackBanner, AudioButton } from '@/components/lesson'
import { useGameStore, useLessonStore } from '@/stores/useGameStore'
import { getLessonById } from '@/data/lessons'
import { cn } from '@/lib/utils'

interface LessonScreenProps {
  lessonId: number
  onClose: () => void
  onComplete: (score: number, total: number, xpEarned: number) => void
}

export function LessonScreen({ lessonId, onClose, onComplete }: LessonScreenProps) {
  const lesson = getLessonById(lessonId)
  const { hearts, loseHeart } = useGameStore()
  const {
    currentQuestion,
    selectedAnswer,
    isCorrect,
    score,
    showHint,
    userInput,
    startLesson,
    answerQuestion,
    nextQuestion,
    toggleHint,
    setUserInput,
    endLesson,
  } = useLessonStore()

  const [localInput, setLocalInput] = useState('')

  useEffect(() => {
    if (lesson) {
      startLesson(lesson)
    }
  }, [lessonId])

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Leçon non trouvée</p>
      </div>
    )
  }

  const question = lesson.questions[currentQuestion]
  const progress = ((currentQuestion + 1) / lesson.questions.length) * 100
  const isAnswered = selectedAnswer !== null

  const handleAnswer = (index: number) => {
    if (isAnswered) return
    const correct = answerQuestion(index)
    if (!correct) {
      loseHeart()
    }
  }

  const handleWriteSubmit = (answer: string) => {
    if (isAnswered) return
    const correct = answerQuestion(answer)
    if (!correct) {
      loseHeart()
    }
  }

  const handleContinue = () => {
    const hasNext = nextQuestion()
    if (!hasNext) {
      const result = endLesson()
      onComplete(result.score, result.total, result.xpEarned)
    }
  }

  const getCorrectAnswer = () => {
    if (question.type === 'write') {
      return question.answer
    }
    if (question.options && question.correct !== undefined) {
      return question.options[question.correct]
    }
    return ''
  }

  // Check if no hearts left
  if (hearts === 0 && !isAnswered) {
    onClose()
    return null
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="p-4 flex items-center gap-3 border-b">
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          <X className="w-6 h-6" />
        </button>
        <ProgressBar current={currentQuestion + 1} total={lesson.questions.length} className="flex-1" />
        <div className="flex items-center gap-1">
          <Heart className="w-5 h-5 text-red-500" fill="#ef4444" />
          <span className="font-bold text-red-500">{hearts}</span>
        </div>
      </div>

      {/* Question */}
      <div className="flex-1 px-5 py-6 overflow-y-auto">
        {/* Question type indicator */}
        <div className="mb-1 flex items-center gap-2">
          <span className="text-sm text-gray-500 font-medium">
            {question.type === 'translate' && '🌍 Traduisez'}
            {question.type === 'fill' && '✏️ Complétez'}
            {question.type === 'listen' && '🎧 Écoutez'}
            {question.type === 'audio' && '🔊 Écoutez'}
            {question.type === 'write' && '⌨️ Écrivez'}
          </span>
        </div>

        {/* Question text with audio */}
        <div className="flex items-start gap-3 mb-6">
          <h2 className="text-xl font-bold text-gray-800 flex-1">{question.question}</h2>
          {question.audioText && (
            <AudioButton text={question.audioText} size="md" autoPlay={question.type === 'listen' || question.type === 'audio'} />
          )}
        </div>

        {/* Hint button */}
        {question.hint && !showHint && !isAnswered && (
          <button
            onClick={toggleHint}
            className="mb-4 text-sm text-blue-500 flex items-center gap-1 hover:text-blue-600"
          >
            <HelpCircle className="w-4 h-4" /> Indice
          </button>
        )}
        {showHint && question.hint && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-sm text-blue-600 bg-blue-50 p-3 rounded-lg"
          >
            💡 {question.hint}
          </motion.p>
        )}

        {/* Answer options or write input */}
        {question.type === 'write' ? (
          <WriteInput
            disabled={isAnswered}
            onSubmit={handleWriteSubmit}
          />
        ) : (
          <div className="space-y-3">
            {question.options?.map((option, index) => (
              <OptionButton
                key={index}
                option={option}
                index={index}
                isSelected={selectedAnswer === index}
                isCorrect={isCorrect}
                correctIndex={question.correct || 0}
                disabled={isAnswered}
                onClick={() => handleAnswer(index)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Feedback Banner */}
      {isAnswered && isCorrect !== null && (
        <FeedbackBanner
          isCorrect={isCorrect}
          correctAnswer={!isCorrect ? getCorrectAnswer() : undefined}
          onContinue={handleContinue}
        />
      )}
    </div>
  )
}
