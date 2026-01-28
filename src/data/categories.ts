import { BookOpen, MessageCircle, Plane, Utensils, ShoppingBag, Briefcase, Code, Mail, PenTool, Sparkles } from 'lucide-react'
import type { Category } from '@/types'

export const categories: Category[] = [
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
