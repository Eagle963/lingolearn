import type { Lesson } from '@/types'

export const conversationLessons: Lesson[] = [
  {
    id: 6,
    title: "Small Talk",
    icon: "💬",
    category: "conversation",
    difficulty: 2,
    xpReward: 20,
    questions: [
      {
        type: "translate",
        question: "'How are you doing?' signifie :",
        options: ["Où vas-tu ?", "Comment vas-tu ?", "Que fais-tu ?", "Qui es-tu ?"],
        correct: 1,
        audioText: "How are you doing?"
      },
      {
        type: "fill",
        question: "I'm ___, thanks!",
        options: ["fine", "find", "five", "fire"],
        correct: 0,
        audioText: "I'm fine, thanks!"
      },
      {
        type: "listen",
        question: "Que signifie cette expression ?",
        audioText: "What's up?",
        options: ["Qu'est-ce qui est en haut ?", "Quoi de neuf ?", "Que veux-tu ?", "Où est-ce ?"],
        correct: 1
      },
      {
        type: "translate",
        question: "Comment dit-on 'Pas mal' ?",
        options: ["Not bad", "Not good", "Very bad", "So so"],
        correct: 0,
        audioText: "Not bad"
      },
      {
        type: "fill",
        question: "Nice ___ today, isn't it?",
        options: ["day", "weather", "time", "moment"],
        correct: 1,
        audioText: "Nice weather today, isn't it?"
      },
      {
        type: "listen",
        question: "Que dit cette personne ?",
        audioText: "Long time no see!",
        options: ["J'ai besoin de lunettes", "Ça fait longtemps !", "Tu me manques", "Je ne vois pas bien"],
        correct: 1
      },
      {
        type: "translate",
        question: "'Pretty good' signifie :",
        options: ["Très bon", "Plutôt bien", "Joli et bon", "Vraiment génial"],
        correct: 1,
        audioText: "Pretty good"
      },
      {
        type: "write",
        question: "Écrivez 'merci' en anglais",
        answer: "thanks",
        hint: "6 lettres, commence par T",
        audioText: "thanks"
      }
    ]
  },
  {
    id: 7,
    title: "Opinions",
    icon: "🤔",
    category: "conversation",
    difficulty: 2,
    xpReward: 20,
    questions: [
      {
        type: "translate",
        question: "'I think that...' signifie :",
        options: ["Je sais que...", "Je pense que...", "Je vois que...", "Je sens que..."],
        correct: 1,
        audioText: "I think that"
      },
      {
        type: "fill",
        question: "In my ___, this is wrong.",
        options: ["head", "opinion", "idea", "view"],
        correct: 1,
        audioText: "In my opinion, this is wrong."
      },
      {
        type: "listen",
        question: "Quelle est cette expression ?",
        audioText: "I agree with you",
        options: ["Je suis en colère", "Je suis d'accord", "Je suis désolé", "J'ai compris"],
        correct: 1
      },
      {
        type: "translate",
        question: "'I disagree' signifie :",
        options: ["Je refuse", "Je n'aime pas", "Je ne suis pas d'accord", "Je ne comprends pas"],
        correct: 2,
        audioText: "I disagree"
      },
      {
        type: "fill",
        question: "That's a good ___!",
        options: ["point", "dot", "mark", "spot"],
        correct: 0,
        audioText: "That's a good point!"
      },
      {
        type: "translate",
        question: "'It depends' signifie :",
        options: ["C'est sûr", "Ça dépend", "C'est faux", "C'est vrai"],
        correct: 1,
        audioText: "It depends"
      },
      {
        type: "listen",
        question: "Que signifie ?",
        audioText: "I'm not sure about that",
        options: ["J'en suis sûr", "Je n'en suis pas sûr", "Je suis certain", "C'est évident"],
        correct: 1
      },
      {
        type: "write",
        question: "Écrivez 'd'accord' (agree) en anglais",
        answer: "agree",
        hint: "5 lettres",
        audioText: "agree"
      }
    ]
  },
  {
    id: 8,
    title: "Émotions",
    icon: "😊",
    category: "conversation",
    difficulty: 2,
    xpReward: 20,
    questions: [
      {
        type: "translate",
        question: "'I'm happy' signifie :",
        options: ["Je suis triste", "Je suis content", "Je suis fatigué", "Je suis fâché"],
        correct: 1,
        audioText: "I'm happy"
      },
      {
        type: "translate",
        question: "Comment dit-on 'fatigué' ?",
        options: ["Tired", "Tried", "Fired", "Wired"],
        correct: 0,
        audioText: "tired"
      },
      {
        type: "fill",
        question: "I'm so ___ about the trip!",
        options: ["excited", "boring", "bored", "tiring"],
        correct: 0,
        audioText: "I'm so excited about the trip!"
      },
      {
        type: "listen",
        question: "Quelle émotion ?",
        audioText: "I'm worried",
        options: ["Content", "Inquiet", "Surpris", "Énervé"],
        correct: 1
      },
      {
        type: "translate",
        question: "'Disappointed' signifie :",
        options: ["Ravi", "Déçu", "Énervé", "Confus"],
        correct: 1,
        audioText: "disappointed"
      },
      {
        type: "fill",
        question: "Don't be ___! (triste)",
        options: ["happy", "angry", "sad", "glad"],
        correct: 2,
        audioText: "Don't be sad!"
      },
      {
        type: "listen",
        question: "Que ressent cette personne ?",
        audioText: "I'm feeling nervous",
        options: ["Calme", "Nerveux", "Heureux", "Fatigué"],
        correct: 1
      },
      {
        type: "write",
        question: "Écrivez 'en colère' en anglais",
        answer: "angry",
        hint: "5 lettres",
        audioText: "angry"
      }
    ]
  },
  {
    id: 9,
    title: "Demander poliment",
    icon: "🙏",
    category: "conversation",
    difficulty: 2,
    xpReward: 20,
    questions: [
      {
        type: "translate",
        question: "'Could you please...' signifie :",
        options: ["Tu dois...", "Pourriez-vous...", "Tu peux...", "Il faut..."],
        correct: 1,
        audioText: "Could you please"
      },
      {
        type: "fill",
        question: "Would you ___ helping me?",
        options: ["like", "want", "mind", "need"],
        correct: 2,
        audioText: "Would you mind helping me?"
      },
      {
        type: "listen",
        question: "Que dit cette personne ?",
        audioText: "Excuse me",
        options: ["Pardon", "Merci", "De rien", "S'il vous plaît"],
        correct: 0
      },
      {
        type: "translate",
        question: "'You're welcome' signifie :",
        options: ["Bienvenue", "Merci", "De rien", "S'il vous plaît"],
        correct: 2,
        audioText: "You're welcome"
      },
      {
        type: "fill",
        question: "I'm sorry to ___ you.",
        options: ["bother", "brother", "butter", "better"],
        correct: 0,
        audioText: "I'm sorry to bother you."
      },
      {
        type: "translate",
        question: "'May I ask you something?' signifie :",
        options: ["Je dois te demander", "Puis-je vous demander ?", "Je veux demander", "Tu dois répondre"],
        correct: 1,
        audioText: "May I ask you something?"
      },
      {
        type: "listen",
        question: "Quelle est la demande ?",
        audioText: "Could you repeat that, please?",
        options: ["Répète ça", "Pourriez-vous répéter ?", "Ne répète pas", "J'ai compris"],
        correct: 1
      },
      {
        type: "write",
        question: "Écrivez 's'il vous plaît' en anglais",
        answer: "please",
        hint: "6 lettres",
        audioText: "please"
      }
    ]
  },
  {
    id: 10,
    title: "Au téléphone",
    icon: "📱",
    category: "conversation",
    difficulty: 2,
    xpReward: 25,
    questions: [
      {
        type: "translate",
        question: "'Hello, who's speaking?' signifie :",
        options: ["Allô, qui parle ?", "Allô, c'est qui ?", "Allô, tu es où ?", "Allô, ça va ?"],
        correct: 0,
        audioText: "Hello, who's speaking?"
      },
      {
        type: "fill",
        question: "Can I ___ a message?",
        options: ["give", "take", "leave", "make"],
        correct: 2,
        audioText: "Can I leave a message?"
      },
      {
        type: "listen",
        question: "Que demande cette personne ?",
        audioText: "Hold on, please",
        options: ["Raccrochez", "Patientez s'il vous plaît", "Rappelez", "Parlez plus fort"],
        correct: 1
      },
      {
        type: "translate",
        question: "'I'll call you back' signifie :",
        options: ["Je t'appelle", "Je te rappelle", "Tu m'appelles", "Appelle-moi"],
        correct: 1,
        audioText: "I'll call you back"
      },
      {
        type: "fill",
        question: "Sorry, I can't ___ you well.",
        options: ["listen", "hear", "see", "understand"],
        correct: 1,
        audioText: "Sorry, I can't hear you well."
      },
      {
        type: "translate",
        question: "'The line is busy' signifie :",
        options: ["La ligne est libre", "La ligne est occupée", "La ligne est coupée", "Pas de réseau"],
        correct: 1,
        audioText: "The line is busy"
      },
      {
        type: "listen",
        question: "Que dit cette personne ?",
        audioText: "Speaking",
        options: ["Qui parle ?", "C'est moi-même", "Je parle", "Parlez !"],
        correct: 1
      },
      {
        type: "write",
        question: "Écrivez 'appeler' en anglais",
        answer: "call",
        hint: "4 lettres",
        audioText: "call"
      }
    ]
  }
]
