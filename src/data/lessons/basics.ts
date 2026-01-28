import type { Lesson } from '@/types'

export const basicsLessons: Lesson[] = [
  {
    id: 1,
    title: "Salutations",
    icon: "👋",
    category: "basics",
    difficulty: 1,
    xpReward: 15,
    questions: [
      {
        type: "translate",
        question: "Comment dit-on 'Bonjour' en anglais ?",
        options: ["Hello", "Goodbye", "Thanks", "Please"],
        correct: 0,
        hint: "C'est le mot le plus basique pour saluer",
        audioText: "Hello"
      },
      {
        type: "listen",
        question: "Écoutez et choisissez la bonne traduction",
        audioText: "Good morning",
        options: ["Bonne nuit", "Bon après-midi", "Bonjour (matin)", "Bonsoir"],
        correct: 2
      },
      {
        type: "translate",
        question: "Traduisez: 'Nice to meet you'",
        options: ["Au revoir", "Enchanté(e)", "Merci beaucoup", "De rien"],
        correct: 1,
        audioText: "Nice to meet you"
      },
      {
        type: "fill",
        question: "How ___ you doing?",
        options: ["is", "are", "am", "be"],
        correct: 1,
        audioText: "How are you doing?"
      },
      {
        type: "listen",
        question: "Que signifie ce que vous entendez ?",
        audioText: "See you later",
        options: ["À bientôt", "Bonjour", "Merci", "Pardon"],
        correct: 0
      },
      {
        type: "translate",
        question: "'Good evening' signifie :",
        options: ["Bonjour", "Bon après-midi", "Bonsoir", "Bonne nuit"],
        correct: 2,
        audioText: "Good evening"
      },
      {
        type: "write",
        question: "Écrivez 'Bonjour' en anglais",
        answer: "hello",
        hint: "5 lettres, commence par H",
        audioText: "Hello"
      },
      {
        type: "translate",
        question: "Comment dit-on 'Au revoir' ?",
        options: ["Hello", "Goodbye", "Good morning", "Good night"],
        correct: 1,
        audioText: "Goodbye"
      }
    ]
  },
  {
    id: 2,
    title: "Se présenter",
    icon: "🙋",
    category: "basics",
    difficulty: 1,
    xpReward: 15,
    questions: [
      {
        type: "translate",
        question: "'My name is...' signifie :",
        options: ["Je m'appelle...", "J'habite à...", "J'ai...ans", "Je travaille comme..."],
        correct: 0,
        audioText: "My name is"
      },
      {
        type: "fill",
        question: "I ___ from France.",
        options: ["is", "am", "are", "be"],
        correct: 1,
        audioText: "I am from France"
      },
      {
        type: "listen",
        question: "Écoutez et traduisez",
        audioText: "I am 25 years old",
        options: ["J'ai 25 euros", "J'ai 25 ans", "Il a 25 ans", "25 années"],
        correct: 1
      },
      {
        type: "translate",
        question: "Comment dit-on 'J'habite à Paris' ?",
        options: ["I am Paris", "I go to Paris", "I live in Paris", "I from Paris"],
        correct: 2,
        audioText: "I live in Paris"
      },
      {
        type: "fill",
        question: "Where ___ you from?",
        options: ["is", "am", "are", "do"],
        correct: 2,
        audioText: "Where are you from?"
      },
      {
        type: "translate",
        question: "'What do you do?' signifie :",
        options: ["Où vas-tu ?", "Que fais-tu dans la vie ?", "Comment ça va ?", "Quoi de neuf ?"],
        correct: 1,
        audioText: "What do you do?"
      },
      {
        type: "listen",
        question: "Que dit cette personne ?",
        audioText: "I am a student",
        options: ["Je suis professeur", "Je suis étudiant", "J'étudie", "Je travaille"],
        correct: 1
      },
      {
        type: "write",
        question: "Écrivez 'nom' en anglais",
        answer: "name",
        hint: "4 lettres",
        audioText: "name"
      }
    ]
  },
  {
    id: 3,
    title: "Chiffres 1-20",
    icon: "🔢",
    category: "basics",
    difficulty: 1,
    xpReward: 15,
    questions: [
      {
        type: "listen",
        question: "Quel nombre entendez-vous ?",
        audioText: "twelve",
        options: ["10", "11", "12", "13"],
        correct: 2
      },
      {
        type: "translate",
        question: "Comment dit-on '15' en anglais ?",
        options: ["Fifty", "Fifteen", "Five", "Fiveteen"],
        correct: 1,
        audioText: "fifteen"
      },
      {
        type: "listen",
        question: "Écoutez et sélectionnez",
        audioText: "eighteen",
        options: ["8", "18", "80", "17"],
        correct: 1
      },
      {
        type: "write",
        question: "Écrivez '7' en anglais",
        answer: "seven",
        hint: "Commence par S",
        audioText: "seven"
      },
      {
        type: "translate",
        question: "'Twenty' signifie :",
        options: ["12", "20", "22", "2"],
        correct: 1,
        audioText: "twenty"
      },
      {
        type: "fill",
        question: "I have ___ euros. (treize)",
        options: ["thirteen", "thirty", "tree", "threeteen"],
        correct: 0,
        audioText: "I have thirteen euros"
      },
      {
        type: "listen",
        question: "Quel nombre ?",
        audioText: "nineteen",
        options: ["9", "19", "90", "99"],
        correct: 1
      },
      {
        type: "translate",
        question: "Comment dit-on '11' ?",
        options: ["Ten", "Eleven", "Twelve", "One one"],
        correct: 1,
        audioText: "eleven"
      }
    ]
  },
  {
    id: 4,
    title: "Couleurs",
    icon: "🎨",
    category: "basics",
    difficulty: 1,
    xpReward: 15,
    questions: [
      {
        type: "translate",
        question: "'Blue' signifie :",
        options: ["Bleu", "Vert", "Rouge", "Jaune"],
        correct: 0,
        audioText: "blue"
      },
      {
        type: "translate",
        question: "Comment dit-on 'vert' en anglais ?",
        options: ["Grey", "Green", "Brown", "Gold"],
        correct: 1,
        audioText: "green"
      },
      {
        type: "fill",
        question: "The sky is ___.",
        options: ["blue", "red", "green", "yellow"],
        correct: 0,
        audioText: "The sky is blue"
      },
      {
        type: "listen",
        question: "Quelle couleur entendez-vous ?",
        audioText: "purple",
        options: ["Rose", "Violet", "Orange", "Marron"],
        correct: 1
      },
      {
        type: "translate",
        question: "'Black and white' =",
        options: ["Bleu et blanc", "Noir et blanc", "Gris et blanc", "Rouge et noir"],
        correct: 1,
        audioText: "black and white"
      },
      {
        type: "write",
        question: "Écrivez 'rouge' en anglais",
        answer: "red",
        hint: "3 lettres",
        audioText: "red"
      },
      {
        type: "listen",
        question: "Quelle couleur ?",
        audioText: "orange",
        options: ["Orange", "Jaune", "Rouge", "Marron"],
        correct: 0
      },
      {
        type: "translate",
        question: "'Pink' signifie :",
        options: ["Violet", "Rose", "Rouge", "Blanc"],
        correct: 1,
        audioText: "pink"
      }
    ]
  },
  {
    id: 5,
    title: "Jours & Mois",
    icon: "📅",
    category: "basics",
    difficulty: 1,
    xpReward: 20,
    questions: [
      {
        type: "translate",
        question: "'Monday' signifie :",
        options: ["Mardi", "Lundi", "Mercredi", "Dimanche"],
        correct: 1,
        audioText: "Monday"
      },
      {
        type: "translate",
        question: "Comment dit-on 'vendredi' ?",
        options: ["Thursday", "Friday", "Saturday", "Sunday"],
        correct: 1,
        audioText: "Friday"
      },
      {
        type: "listen",
        question: "Quel jour entendez-vous ?",
        audioText: "Wednesday",
        options: ["Lundi", "Mardi", "Mercredi", "Jeudi"],
        correct: 2
      },
      {
        type: "fill",
        question: "Today is ___. (samedi)",
        options: ["Sunday", "Saturday", "Friday", "Monday"],
        correct: 1,
        audioText: "Today is Saturday"
      },
      {
        type: "translate",
        question: "'January' signifie :",
        options: ["Juin", "Juillet", "Janvier", "Février"],
        correct: 2,
        audioText: "January"
      },
      {
        type: "listen",
        question: "Quel mois ?",
        audioText: "September",
        options: ["Novembre", "Octobre", "Septembre", "Décembre"],
        correct: 2
      },
      {
        type: "translate",
        question: "'December' signifie :",
        options: ["Novembre", "Décembre", "Octobre", "Septembre"],
        correct: 1,
        audioText: "December"
      },
      {
        type: "write",
        question: "Écrivez 'dimanche' en anglais",
        answer: "sunday",
        hint: "Jour du soleil",
        audioText: "Sunday"
      }
    ]
  }
]
