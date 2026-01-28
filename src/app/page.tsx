'use client'

import { useState } from 'react'
import { HomeScreen, LessonScreen, ResultScreen, ProfileScreen } from '@/components/screens'
import { BottomNav } from '@/components/layout'

type Screen = 'home' | 'lesson' | 'result' | 'profile'

interface LessonResult {
  lessonId: number
  score: number
  total: number
  xpEarned: number
}

export default function LingoLearnApp() {
  const [screen, setScreen] = useState<Screen>('home')
  const [currentLessonId, setCurrentLessonId] = useState<number | null>(null)
  const [lessonResult, setLessonResult] = useState<LessonResult | null>(null)

  const handleLessonStart = (lessonId: number) => {
    setCurrentLessonId(lessonId)
    setScreen('lesson')
  }

  const handleLessonClose = () => {
    setCurrentLessonId(null)
    setScreen('home')
  }

  const handleLessonComplete = (score: number, total: number, xpEarned: number) => {
    if (currentLessonId) {
      setLessonResult({ lessonId: currentLessonId, score, total, xpEarned })
      setScreen('result')
    }
  }

  const handleResultContinue = () => {
    setCurrentLessonId(null)
    setLessonResult(null)
    setScreen('home')
  }

  const handleTabChange = (tab: 'home' | 'profile') => {
    setScreen(tab)
  }

  return (
    <div className="relative">
      {/* Screens */}
      {screen === 'home' && (
        <HomeScreen onLessonStart={handleLessonStart} />
      )}

      {screen === 'lesson' && currentLessonId && (
        <LessonScreen
          lessonId={currentLessonId}
          onClose={handleLessonClose}
          onComplete={handleLessonComplete}
        />
      )}

      {screen === 'result' && lessonResult && (
        <ResultScreen
          lessonId={lessonResult.lessonId}
          score={lessonResult.score}
          total={lessonResult.total}
          xpEarned={lessonResult.xpEarned}
          onContinue={handleResultContinue}
        />
      )}

      {screen === 'profile' && (
        <ProfileScreen />
      )}

      {/* Bottom Navigation - visible on home and profile */}
      {(screen === 'home' || screen === 'profile') && (
        <BottomNav
          activeTab={screen as 'home' | 'profile'}
          onTabChange={handleTabChange}
        />
      )}
    </div>
  )
}
