'use client'

import { useState } from 'react'
import { HomeScreen, LessonScreen, ResultScreen, ProfileScreen, ProgressScreen, SettingsScreen, PhoneticsScreen } from '@/components/screens'
import { BottomNav } from '@/components/layout'

type Screen = 'home' | 'lesson' | 'result' | 'profile' | 'progress' | 'settings' | 'phonetics'

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

  const handleTabChange = (tab: 'home' | 'phonetics' | 'progress' | 'profile') => {
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
        <ProfileScreen onSettingsClick={() => setScreen('settings')} />
      )}

      {screen === 'progress' && (
        <ProgressScreen />
      )}

      {screen === 'settings' && (
        <SettingsScreen onBack={() => setScreen('profile')} />
      )}

      {screen === 'phonetics' && (
        <PhoneticsScreen
          onBack={() => setScreen('home')}
          onStart={() => {
            // TODO: Start phonetics practice
          }}
        />
      )}

      {/* Bottom Navigation */}
      {(screen === 'home' || screen === 'profile' || screen === 'progress' || screen === 'phonetics') && (
        <BottomNav
          activeTab={screen as 'home' | 'phonetics' | 'progress' | 'profile'}
          onTabChange={handleTabChange}
        />
      )}
    </div>
  )
}
