import type { Lesson } from '@/types'

export const idiomsLessons: Lesson[] = [
  {
    id: 46,
    title: "Expressions courantes",
    icon: "💬",
    category: "idioms",
    difficulty: 2,
    xpReward: 20,
    questions: [
      {
        type: "translate",
        question: "'Break a leg!' signifie :",
        options: ["Casse-toi la jambe", "Bonne chance !", "Fais attention", "Dépêche-toi"],
        correct: 1,
        audioText: "Break a leg!"
      },
      {
        type: "fill",
        question: "It's raining cats and ___.",
        options: ["birds", "dogs", "mice", "fish"],
        correct: 1,
        audioText: "It's raining cats and dogs."
      },
      {
        type: "listen",
        question: "Que signifie cette expression ?",
        audioText: "Piece of cake",
        options: ["Part de gâteau", "Très facile", "Très bon", "Petit morceau"],
        correct: 1
      },
      {
        type: "translate",
        question: "'Once in a blue moon' signifie :",
        options: ["Tous les soirs", "Très rarement", "Quand la lune est bleue", "Jamais"],
        correct: 1,
        audioText: "Once in a blue moon"
      },
      {
        type: "fill",
        question: "I'm feeling under the ___.",
        options: ["sky", "weather", "water", "cloud"],
        correct: 1,
        audioText: "I'm feeling under the weather."
      },
      {
        type: "translate",
        question: "'Hit the nail on the head' signifie :",
        options: ["Se faire mal", "Viser juste", "Travailler dur", "Échouer"],
        correct: 1,
        audioText: "Hit the nail on the head"
      },
      {
        type: "listen",
        question: "Que veut dire ?",
        audioText: "The ball is in your court",
        options: ["Jouer au tennis", "C'est à toi de décider", "Tu as gagné", "C'est ton tour de jouer"],
        correct: 1
      },
      {
        type: "write",
        question: "Expression pour 'facile' (3 mots)",
        answer: "piece of cake",
        hint: "Part de gâteau",
        audioText: "piece of cake"
      }
    ]
  },
  {
    id: 47,
    title: "Expressions business",
    icon: "💼",
    category: "idioms",
    difficulty: 3,
    xpReward: 25,
    questions: [
      {
        type: "translate",
        question: "'Think outside the box' signifie :",
        options: ["Penser à l'extérieur", "Penser différemment", "Sortir de la boîte", "Ne pas penser"],
        correct: 1,
        audioText: "Think outside the box"
      },
      {
        type: "fill",
        question: "Let's get the ball ___.",
        options: ["going", "rolling", "moving", "starting"],
        correct: 1,
        audioText: "Let's get the ball rolling."
      },
      {
        type: "listen",
        question: "Que signifie ?",
        audioText: "We're on the same page",
        options: ["Même livre", "D'accord/alignés", "Même bureau", "Même équipe"],
        correct: 1
      },
      {
        type: "translate",
        question: "'Touch base' signifie :",
        options: ["Toucher la base", "Se mettre en contact", "Atteindre l'objectif", "Revenir au début"],
        correct: 1,
        audioText: "Touch base"
      },
      {
        type: "fill",
        question: "It's a win-___ situation.",
        options: ["lose", "win", "all", "more"],
        correct: 1,
        audioText: "It's a win-win situation."
      },
      {
        type: "translate",
        question: "'The bottom line' signifie :",
        options: ["La dernière ligne", "L'essentiel/le résultat", "Le minimum", "La fin"],
        correct: 1,
        audioText: "The bottom line"
      },
      {
        type: "listen",
        question: "Quelle expression ?",
        audioText: "Let's put this on the back burner",
        options: ["Urgence", "Reporter à plus tard", "Commencer maintenant", "Annuler"],
        correct: 1
      },
      {
        type: "write",
        question: "Expression pour 'dès le début'",
        answer: "from scratch",
        hint: "À partir de zéro",
        audioText: "from scratch"
      }
    ]
  },
  {
    id: 48,
    title: "Phrasal Verbs 1",
    icon: "🔀",
    category: "idioms",
    difficulty: 2,
    xpReward: 20,
    questions: [
      {
        type: "translate",
        question: "'Give up' signifie :",
        options: ["Donner plus", "Abandonner", "Offrir", "Lever"],
        correct: 1,
        audioText: "Give up"
      },
      {
        type: "fill",
        question: "Can you ___ up the music?",
        options: ["put", "turn", "give", "set"],
        correct: 1,
        audioText: "Can you turn up the music?"
      },
      {
        type: "listen",
        question: "Que signifie ?",
        audioText: "Look after the children",
        options: ["Chercher", "Regarder", "S'occuper de", "Suivre"],
        correct: 2
      },
      {
        type: "translate",
        question: "'Find out' signifie :",
        options: ["Trouver dehors", "Découvrir", "Sortir", "Chercher"],
        correct: 1,
        audioText: "Find out"
      },
      {
        type: "fill",
        question: "I need to ___ out the trash.",
        options: ["put", "take", "bring", "get"],
        correct: 1,
        audioText: "I need to take out the trash."
      },
      {
        type: "translate",
        question: "'Pick up' peut signifier :",
        options: ["Ramasser", "Aller chercher", "Apprendre", "Toutes ces réponses"],
        correct: 3,
        audioText: "Pick up"
      },
      {
        type: "listen",
        question: "Quelle action ?",
        audioText: "Put off the meeting",
        options: ["Annuler", "Reporter", "Confirmer", "Organiser"],
        correct: 1
      },
      {
        type: "write",
        question: "Phrasal verb pour 'continuer'",
        answer: "carry on",
        hint: "2 mots, avec 'carry'",
        audioText: "carry on"
      }
    ]
  },
  {
    id: 49,
    title: "Phrasal Verbs 2",
    icon: "🔄",
    category: "idioms",
    difficulty: 2,
    xpReward: 20,
    questions: [
      {
        type: "translate",
        question: "'Come across' signifie :",
        options: ["Traverser", "Tomber sur", "Venir de", "Comprendre"],
        correct: 1,
        audioText: "Come across"
      },
      {
        type: "fill",
        question: "I'm looking ___ to the weekend.",
        options: ["up", "out", "forward", "after"],
        correct: 2,
        audioText: "I'm looking forward to the weekend."
      },
      {
        type: "listen",
        question: "Que signifie ?",
        audioText: "Run out of milk",
        options: ["Courir avec du lait", "Ne plus avoir de lait", "Acheter du lait", "Renverser du lait"],
        correct: 1
      },
      {
        type: "translate",
        question: "'Break down' signifie :",
        options: ["Casser en dessous", "Tomber en panne / Analyser", "Descendre", "Interrompre"],
        correct: 1,
        audioText: "Break down"
      },
      {
        type: "fill",
        question: "Let's ___ up early tomorrow.",
        options: ["go", "get", "wake", "stand"],
        correct: 2,
        audioText: "Let's wake up early tomorrow."
      },
      {
        type: "translate",
        question: "'Work out' peut signifier :",
        options: ["Faire du sport", "Résoudre", "Calculer", "Toutes ces réponses"],
        correct: 3,
        audioText: "Work out"
      },
      {
        type: "listen",
        question: "Quelle action ?",
        audioText: "Calm down",
        options: ["S'énerver", "Se calmer", "Descendre", "Se coucher"],
        correct: 1
      },
      {
        type: "write",
        question: "Phrasal verb pour 'refuser'",
        answer: "turn down",
        hint: "Avec 'turn'",
        audioText: "turn down"
      }
    ]
  },
  {
    id: 50,
    title: "Expressions familières",
    icon: "😎",
    category: "idioms",
    difficulty: 3,
    xpReward: 30,
    questions: [
      {
        type: "translate",
        question: "'Hang out' signifie :",
        options: ["Pendre dehors", "Traîner ensemble", "Sortir", "Attendre"],
        correct: 1,
        audioText: "Hang out"
      },
      {
        type: "fill",
        question: "That's so ___! (génial, familier)",
        options: ["good", "cool", "nice", "great"],
        correct: 1,
        audioText: "That's so cool!"
      },
      {
        type: "listen",
        question: "Que signifie ?",
        audioText: "I'm gonna chill tonight",
        options: ["Avoir froid", "Me relaxer", "Sortir", "Travailler"],
        correct: 1
      },
      {
        type: "translate",
        question: "'No worries' signifie :",
        options: ["Pas de problème", "Pas d'inquiétude", "De rien", "Toutes ces réponses"],
        correct: 3,
        audioText: "No worries"
      },
      {
        type: "fill",
        question: "What's ___? (Quoi de neuf ?)",
        options: ["new", "up", "on", "going"],
        correct: 1,
        audioText: "What's up?"
      },
      {
        type: "translate",
        question: "'My bad' signifie :",
        options: ["Mon mal", "Ma faute", "C'est mauvais", "Mauvais jour"],
        correct: 1,
        audioText: "My bad"
      },
      {
        type: "listen",
        question: "Quelle réaction ?",
        audioText: "That's awesome!",
        options: ["Horrible", "Génial", "Étrange", "Normal"],
        correct: 1
      },
      {
        type: "write",
        question: "Expression familière pour 'salut'",
        answer: "hey",
        hint: "3 lettres",
        audioText: "hey"
      }
    ]
  }
]
