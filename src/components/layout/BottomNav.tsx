'use client'

import { Home, User } from 'lucide-react'
import { cn } from '@/lib/utils'

interface BottomNavProps {
  activeTab: 'home' | 'profile'
  onTabChange: (tab: 'home' | 'profile') => void
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-8 py-3 flex justify-around items-center z-30 shadow-lg max-w-md mx-auto">
      <button
        onClick={() => onTabChange('home')}
        className={cn(
          'flex flex-col items-center gap-1 transition-colors',
          activeTab === 'home' ? 'text-green-500' : 'text-gray-400'
        )}
      >
        <Home className="w-6 h-6" />
        <span className="text-xs font-medium">Accueil</span>
      </button>
      <button
        onClick={() => onTabChange('profile')}
        className={cn(
          'flex flex-col items-center gap-1 transition-colors',
          activeTab === 'profile' ? 'text-green-500' : 'text-gray-400'
        )}
      >
        <User className="w-6 h-6" />
        <span className="text-xs font-medium">Profil</span>
      </button>
    </nav>
  )
}
