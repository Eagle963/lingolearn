import type { Lesson } from '@/types'

export const workLessons: Lesson[] = [
  {
    id: 26,
    title: "Au bureau",
    icon: "🏢",
    category: "work",
    difficulty: 2,
    xpReward: 20,
    questions: [
      {
        type: "translate",
        question: "'I work in marketing' signifie :",
        options: ["Je travaille au marketing", "J'étudie le marketing", "J'aime le marketing", "Je gère le marketing"],
        correct: 0,
        audioText: "I work in marketing"
      },
      {
        type: "fill",
        question: "My ___ is on the 3rd floor.",
        options: ["office", "work", "job", "place"],
        correct: 0,
        audioText: "My office is on the 3rd floor."
      },
      {
        type: "listen",
        question: "Où se trouve quelque chose ?",
        audioText: "The meeting room is down the hall",
        options: ["À l'étage", "Au bout du couloir", "À gauche", "Près de l'entrée"],
        correct: 1
      },
      {
        type: "translate",
        question: "'Deadline' signifie :",
        options: ["Ligne de mort", "Date limite", "Fin de projet", "Objectif"],
        correct: 1,
        audioText: "deadline"
      },
      {
        type: "fill",
        question: "I need to ___ this report.",
        options: ["end", "finish", "complete", "do"],
        correct: 2,
        audioText: "I need to complete this report."
      },
      {
        type: "translate",
        question: "'Coworker' signifie :",
        options: ["Patron", "Collègue", "Client", "Employé"],
        correct: 1,
        audioText: "coworker"
      },
      {
        type: "listen",
        question: "Quelle demande ?",
        audioText: "Could you send me the file?",
        options: ["Imprimer le fichier", "Envoyer le fichier", "Supprimer le fichier", "Ouvrir le fichier"],
        correct: 1
      },
      {
        type: "write",
        question: "Écrivez 'réunion' en anglais",
        answer: "meeting",
        hint: "7 lettres",
        audioText: "meeting"
      }
    ]
  },
  {
    id: 27,
    title: "Réunions",
    icon: "👥",
    category: "work",
    difficulty: 2,
    xpReward: 20,
    questions: [
      {
        type: "translate",
        question: "'Let's get started' signifie :",
        options: ["Finissons", "Commençons", "Pausons", "Reprenons"],
        correct: 1,
        audioText: "Let's get started"
      },
      {
        type: "fill",
        question: "What's on the ___ today?",
        options: ["list", "agenda", "plan", "schedule"],
        correct: 1,
        audioText: "What's on the agenda today?"
      },
      {
        type: "listen",
        question: "Que dit le présentateur ?",
        audioText: "Any questions so far?",
        options: ["Des commentaires ?", "Des questions jusque-là ?", "Tout est clair ?", "On continue ?"],
        correct: 1
      },
      {
        type: "translate",
        question: "'To summarize' signifie :",
        options: ["Pour conclure", "Pour résumer", "Pour commencer", "Pour expliquer"],
        correct: 1,
        audioText: "To summarize"
      },
      {
        type: "fill",
        question: "Let's ___ up the main points.",
        options: ["add", "sum", "put", "bring"],
        correct: 1,
        audioText: "Let's sum up the main points."
      },
      {
        type: "translate",
        question: "'Action items' signifie :",
        options: ["Points d'action", "Articles actifs", "Éléments importants", "Tâches à faire"],
        correct: 3,
        audioText: "action items"
      },
      {
        type: "listen",
        question: "Quelle proposition ?",
        audioText: "I'd like to add something",
        options: ["Poser une question", "Ajouter quelque chose", "Terminer la réunion", "Changer de sujet"],
        correct: 1
      },
      {
        type: "write",
        question: "Écrivez 'ordre du jour' en anglais",
        answer: "agenda",
        hint: "6 lettres",
        audioText: "agenda"
      }
    ]
  },
  {
    id: 28,
    title: "Entretien d'embauche",
    icon: "🤵",
    category: "work",
    difficulty: 3,
    xpReward: 25,
    questions: [
      {
        type: "translate",
        question: "'Tell me about yourself' signifie :",
        options: ["Décrivez-vous", "Parlez-moi de vous", "Présentez-vous", "Qui êtes-vous ?"],
        correct: 1,
        audioText: "Tell me about yourself"
      },
      {
        type: "fill",
        question: "I have 5 years of ___ in sales.",
        options: ["work", "experience", "practice", "time"],
        correct: 1,
        audioText: "I have 5 years of experience in sales."
      },
      {
        type: "listen",
        question: "Quelle question ?",
        audioText: "What are your strengths?",
        options: ["Vos faiblesses ?", "Vos forces ?", "Vos objectifs ?", "Votre expérience ?"],
        correct: 1
      },
      {
        type: "translate",
        question: "'Salary expectations' signifie :",
        options: ["Augmentation", "Prétentions salariales", "Bonus", "Avantages"],
        correct: 1,
        audioText: "salary expectations"
      },
      {
        type: "fill",
        question: "Why do you want to ___ our company?",
        options: ["enter", "join", "go", "come"],
        correct: 1,
        audioText: "Why do you want to join our company?"
      },
      {
        type: "translate",
        question: "'I'm a team player' signifie :",
        options: ["Je joue en équipe", "J'aime le travail d'équipe", "Je suis un joueur d'équipe", "Je travaille bien en équipe"],
        correct: 3,
        audioText: "I'm a team player"
      },
      {
        type: "listen",
        question: "Quelle question d'entretien ?",
        audioText: "Where do you see yourself in 5 years?",
        options: ["Votre parcours ?", "Vos projets à 5 ans ?", "Votre ancien poste ?", "Votre formation ?"],
        correct: 1
      },
      {
        type: "write",
        question: "Écrivez 'CV' en anglais",
        answer: "resume",
        hint: "6 lettres (américain)",
        audioText: "resume"
      }
    ]
  },
  {
    id: 29,
    title: "Networking",
    icon: "🤝",
    category: "work",
    difficulty: 2,
    xpReward: 20,
    questions: [
      {
        type: "translate",
        question: "'Nice to meet you' signifie :",
        options: ["Heureux de vous revoir", "Enchanté de vous rencontrer", "À bientôt", "Au plaisir"],
        correct: 1,
        audioText: "Nice to meet you"
      },
      {
        type: "fill",
        question: "Here's my business ___.",
        options: ["paper", "card", "note", "letter"],
        correct: 1,
        audioText: "Here's my business card."
      },
      {
        type: "listen",
        question: "Quelle question ?",
        audioText: "What company are you with?",
        options: ["Votre poste ?", "Votre entreprise ?", "Votre secteur ?", "Votre équipe ?"],
        correct: 1
      },
      {
        type: "translate",
        question: "'Let's keep in touch' signifie :",
        options: ["Restons en contact", "Gardons le secret", "Tenons-nous informés", "Soyons prudents"],
        correct: 0,
        audioText: "Let's keep in touch"
      },
      {
        type: "fill",
        question: "I'll ___ you on LinkedIn.",
        options: ["find", "search", "add", "contact"],
        correct: 2,
        audioText: "I'll add you on LinkedIn."
      },
      {
        type: "translate",
        question: "'Follow up' signifie :",
        options: ["Suivre", "Faire un suivi", "Poursuivre", "Accompagner"],
        correct: 1,
        audioText: "follow up"
      },
      {
        type: "listen",
        question: "Quelle proposition ?",
        audioText: "Let's grab coffee sometime",
        options: ["Déjeuner ensemble", "Prendre un café", "Se revoir", "Travailler ensemble"],
        correct: 1
      },
      {
        type: "write",
        question: "Écrivez 'carte de visite' en anglais",
        answer: "business card",
        hint: "2 mots",
        audioText: "business card"
      }
    ]
  },
  {
    id: 30,
    title: "Problèmes au travail",
    icon: "😓",
    category: "work",
    difficulty: 2,
    xpReward: 25,
    questions: [
      {
        type: "translate",
        question: "'I'm running late' signifie :",
        options: ["Je suis en avance", "Je suis en retard", "Je cours vite", "Je suis pressé"],
        correct: 1,
        audioText: "I'm running late"
      },
      {
        type: "fill",
        question: "I missed the ___.",
        options: ["line", "limit", "deadline", "end"],
        correct: 2,
        audioText: "I missed the deadline."
      },
      {
        type: "listen",
        question: "Quel problème ?",
        audioText: "I'm overwhelmed with work",
        options: ["Pas de travail", "Trop de travail", "Travail ennuyeux", "Nouveau travail"],
        correct: 1
      },
      {
        type: "translate",
        question: "'Technical issue' signifie :",
        options: ["Problème technique", "Question technique", "Solution technique", "Support technique"],
        correct: 0,
        audioText: "technical issue"
      },
      {
        type: "fill",
        question: "The system is ___.",
        options: ["broken", "down", "off", "stopped"],
        correct: 1,
        audioText: "The system is down."
      },
      {
        type: "translate",
        question: "'I need an extension' signifie :",
        options: ["J'ai besoin d'aide", "J'ai besoin d'un délai", "J'ai besoin d'espace", "J'ai besoin de vacances"],
        correct: 1,
        audioText: "I need an extension"
      },
      {
        type: "listen",
        question: "Quelle excuse ?",
        audioText: "Sorry, something came up",
        options: ["J'ai oublié", "Un imprévu est survenu", "Je suis malade", "J'ai un RDV"],
        correct: 1
      },
      {
        type: "write",
        question: "Écrivez 'en retard' en anglais",
        answer: "late",
        hint: "4 lettres",
        audioText: "late"
      }
    ]
  }
]
