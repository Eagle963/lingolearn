import type { Lesson } from '@/types'

export const grammarLessons: Lesson[] = [
  {
    id: 41,
    title: "Present Simple",
    icon: "📝",
    category: "grammar",
    difficulty: 2,
    xpReward: 20,
    questions: [
      {
        type: "translate",
        question: "'He works every day' signifie :",
        options: ["Il a travaillé", "Il travaille chaque jour", "Il travaillera", "Il travaillait"],
        correct: 1,
        audioText: "He works every day"
      },
      {
        type: "fill",
        question: "She ___ to school by bus.",
        options: ["go", "goes", "going", "gone"],
        correct: 1,
        audioText: "She goes to school by bus."
      },
      {
        type: "listen",
        question: "Quel temps est utilisé ?",
        audioText: "I always drink coffee in the morning",
        options: ["Passé", "Présent simple", "Futur", "Présent continu"],
        correct: 1
      },
      {
        type: "translate",
        question: "'They don't like fish' signifie :",
        options: ["Ils aiment le poisson", "Ils n'aiment pas le poisson", "Ils aimaient le poisson", "Ils aimeront le poisson"],
        correct: 1,
        audioText: "They don't like fish"
      },
      {
        type: "fill",
        question: "___ she speak French?",
        options: ["Do", "Does", "Is", "Has"],
        correct: 1,
        audioText: "Does she speak French?"
      },
      {
        type: "translate",
        question: "'Water boils at 100°C' est :",
        options: ["Une opinion", "Une vérité générale", "Un souhait", "Une hypothèse"],
        correct: 1,
        audioText: "Water boils at 100 degrees Celsius"
      },
      {
        type: "listen",
        question: "Quelle phrase est correcte ?",
        audioText: "The sun rises in the east",
        options: ["Le soleil se lève à l'est", "Le soleil se couchait", "Le soleil brillera", "Le soleil brille maintenant"],
        correct: 0
      },
      {
        type: "write",
        question: "Conjuguez 'play' à la 3e personne",
        answer: "plays",
        hint: "Ajoutez un S",
        audioText: "plays"
      }
    ]
  },
  {
    id: 42,
    title: "Present Continuous",
    icon: "🔄",
    category: "grammar",
    difficulty: 2,
    xpReward: 20,
    questions: [
      {
        type: "translate",
        question: "'I am working now' signifie :",
        options: ["Je travaille maintenant", "Je travaillais", "Je vais travailler", "J'ai travaillé"],
        correct: 0,
        audioText: "I am working now"
      },
      {
        type: "fill",
        question: "She ___ a book at the moment.",
        options: ["reads", "read", "is reading", "reading"],
        correct: 2,
        audioText: "She is reading a book at the moment."
      },
      {
        type: "listen",
        question: "Quelle action se passe maintenant ?",
        audioText: "The children are playing outside",
        options: ["Jouaient", "Joueront", "Jouent en ce moment", "Ont joué"],
        correct: 2
      },
      {
        type: "translate",
        question: "'Are you listening?' signifie :",
        options: ["Tu écoutes ?", "Tu as écouté ?", "Tu écouteras ?", "Tu écoutais ?"],
        correct: 0,
        audioText: "Are you listening?"
      },
      {
        type: "fill",
        question: "He ___ TV right now.",
        options: ["watch", "watches", "watching", "is watching"],
        correct: 3,
        audioText: "He is watching TV right now."
      },
      {
        type: "translate",
        question: "'They aren't coming' signifie :",
        options: ["Ils ne viennent pas", "Ils ne sont pas venus", "Ils ne viendront pas", "Ils ne venaient pas"],
        correct: 0,
        audioText: "They aren't coming"
      },
      {
        type: "listen",
        question: "Quelle situation ?",
        audioText: "I'm learning English these days",
        options: ["Passé", "Action temporaire actuelle", "Futur", "Habitude"],
        correct: 1
      },
      {
        type: "write",
        question: "Formez le -ing de 'run'",
        answer: "running",
        hint: "Doublez le N",
        audioText: "running"
      }
    ]
  },
  {
    id: 43,
    title: "Past Simple",
    icon: "⏮️",
    category: "grammar",
    difficulty: 2,
    xpReward: 20,
    questions: [
      {
        type: "translate",
        question: "'I went to Paris' signifie :",
        options: ["Je vais à Paris", "Je suis allé à Paris", "J'irai à Paris", "J'allais à Paris"],
        correct: 1,
        audioText: "I went to Paris"
      },
      {
        type: "fill",
        question: "She ___ the movie yesterday.",
        options: ["watch", "watches", "watched", "watching"],
        correct: 2,
        audioText: "She watched the movie yesterday."
      },
      {
        type: "listen",
        question: "Quand l'action s'est-elle passée ?",
        audioText: "We visited London last summer",
        options: ["Cet été", "L'été dernier", "L'été prochain", "Chaque été"],
        correct: 1
      },
      {
        type: "translate",
        question: "'Did you eat?' signifie :",
        options: ["Tu manges ?", "As-tu mangé ?", "Tu mangeras ?", "Tu mangeais ?"],
        correct: 1,
        audioText: "Did you eat?"
      },
      {
        type: "fill",
        question: "They ___ arrive on time.",
        options: ["doesn't", "don't", "didn't", "weren't"],
        correct: 2,
        audioText: "They didn't arrive on time."
      },
      {
        type: "translate",
        question: "'He bought a car' signifie :",
        options: ["Il achète une voiture", "Il a acheté une voiture", "Il achètera une voiture", "Il achetait une voiture"],
        correct: 1,
        audioText: "He bought a car"
      },
      {
        type: "listen",
        question: "Quel verbe irrégulier entendez-vous ?",
        audioText: "I saw her at the party",
        options: ["See", "Saw", "Seen", "Seeing"],
        correct: 1
      },
      {
        type: "write",
        question: "Passé simple de 'go'",
        answer: "went",
        hint: "Verbe irrégulier",
        audioText: "went"
      }
    ]
  },
  {
    id: 44,
    title: "Future (will/going to)",
    icon: "⏭️",
    category: "grammar",
    difficulty: 2,
    xpReward: 20,
    questions: [
      {
        type: "translate",
        question: "'I will help you' signifie :",
        options: ["Je t'aide", "Je t'ai aidé", "Je t'aiderai", "Je t'aidais"],
        correct: 2,
        audioText: "I will help you"
      },
      {
        type: "fill",
        question: "She ___ going to travel next month.",
        options: ["will", "is", "are", "was"],
        correct: 1,
        audioText: "She is going to travel next month."
      },
      {
        type: "listen",
        question: "Quelle prédiction ?",
        audioText: "It's going to rain",
        options: ["Il pleut", "Il a plu", "Il va pleuvoir", "Il pleuvait"],
        correct: 2
      },
      {
        type: "translate",
        question: "'Will' vs 'Going to' - décision spontanée :",
        options: ["Going to", "Will", "Les deux", "Aucun"],
        correct: 1,
        audioText: "Will for spontaneous decisions"
      },
      {
        type: "fill",
        question: "I think it ___ be difficult.",
        options: ["going to", "is going to", "will", "going"],
        correct: 2,
        audioText: "I think it will be difficult."
      },
      {
        type: "translate",
        question: "'They won't come' signifie :",
        options: ["Ils ne viendront pas", "Ils ne viennent pas", "Ils ne sont pas venus", "Ils ne venaient pas"],
        correct: 0,
        audioText: "They won't come"
      },
      {
        type: "listen",
        question: "Plan ou intention ?",
        audioText: "We're going to get married",
        options: ["Will", "Going to (plan)", "Present simple", "Past"],
        correct: 1
      },
      {
        type: "write",
        question: "Forme négative de 'will'",
        answer: "won't",
        hint: "Contraction",
        audioText: "won't"
      }
    ]
  },
  {
    id: 45,
    title: "Modaux",
    icon: "🔑",
    category: "grammar",
    difficulty: 3,
    xpReward: 25,
    questions: [
      {
        type: "translate",
        question: "'You must wear a seatbelt' signifie :",
        options: ["Vous pouvez", "Vous devez", "Vous devriez", "Vous pourriez"],
        correct: 1,
        audioText: "You must wear a seatbelt"
      },
      {
        type: "fill",
        question: "You ___ smoke here. (interdit)",
        options: ["mustn't", "don't have to", "shouldn't", "can't"],
        correct: 0,
        audioText: "You mustn't smoke here."
      },
      {
        type: "listen",
        question: "Quel conseil ?",
        audioText: "You should see a doctor",
        options: ["Vous devez", "Vous devriez", "Vous pouvez", "Vous pourriez"],
        correct: 1
      },
      {
        type: "translate",
        question: "'Can' vs 'Could' - plus poli :",
        options: ["Can", "Could", "Les deux pareil", "Aucun"],
        correct: 1,
        audioText: "Could is more polite"
      },
      {
        type: "fill",
        question: "You don't ___ to pay now.",
        options: ["must", "have", "need", "should"],
        correct: 1,
        audioText: "You don't have to pay now."
      },
      {
        type: "translate",
        question: "'May I...?' exprime :",
        options: ["Capacité", "Permission polie", "Obligation", "Conseil"],
        correct: 1,
        audioText: "May I?"
      },
      {
        type: "listen",
        question: "Quelle probabilité ?",
        audioText: "It might rain tomorrow",
        options: ["Certain", "Probable", "Possible", "Impossible"],
        correct: 2
      },
      {
        type: "write",
        question: "Modal de l'obligation forte",
        answer: "must",
        hint: "4 lettres",
        audioText: "must"
      }
    ]
  }
]
