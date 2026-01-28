import type { Lesson } from '@/types'
import { categories } from './categories'

// Detailed lessons (1-10)
const detailedLessons: Lesson[] = [
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
]

// Generate remaining lessons (11-50)
const icons = ["✈️", "🏨", "🗺️", "🚌", "🆘", "🍽️", "🥗", "🥤", "😋", "😕", "🛒", "👕", "🔄", "🤝", "💇", "🏢", "👥", "🤵", "🤝", "😓", "💻", "🔧", "👀", "📊", "🎧", "📧", "🙋", "↩️", "✍️", "😬", "📝", "🔄", "⏮️", "⏭️", "🔑", "💬", "💼", "🔀", "🔄", "😎"]

const generatedLessons: Lesson[] = Array.from({ length: 40 }, (_, i) => ({
  id: i + 11,
  title: `Leçon ${i + 11}`,
  icon: icons[i % 40],
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

export const lessons: Lesson[] = [...detailedLessons, ...generatedLessons]

export const wordOfDay = {
  word: "Nevertheless",
  phonetic: "/ˌnevərðəˈles/",
  meaning: "Néanmoins, malgré tout",
  example: "It was raining; nevertheless, we went for a walk.",
}
