import type { Lesson } from '@/types'

export const techLessons: Lesson[] = [
  {
    id: 31,
    title: "Vocabulaire Dev",
    icon: "💻",
    category: "tech",
    difficulty: 2,
    xpReward: 20,
    questions: [
      {
        type: "translate",
        question: "'Bug' signifie :",
        options: ["Insecte", "Erreur de code", "Fonctionnalité", "Mise à jour"],
        correct: 1,
        audioText: "bug"
      },
      {
        type: "fill",
        question: "I need to ___ this code.",
        options: ["fix", "repair", "correct", "change"],
        correct: 0,
        audioText: "I need to fix this code."
      },
      {
        type: "listen",
        question: "Quelle action ?",
        audioText: "Let's deploy to production",
        options: ["Tester", "Déployer en prod", "Annuler", "Sauvegarder"],
        correct: 1
      },
      {
        type: "translate",
        question: "'Repository' signifie :",
        options: ["Répertoire", "Dépôt de code", "Bibliothèque", "Archive"],
        correct: 1,
        audioText: "repository"
      },
      {
        type: "fill",
        question: "Can you ___ the branch?",
        options: ["make", "create", "do", "build"],
        correct: 1,
        audioText: "Can you create the branch?"
      },
      {
        type: "translate",
        question: "'Pull request' signifie :",
        options: ["Tirer une demande", "Demande de fusion", "Demande d'extraction", "Requête de tirage"],
        correct: 1,
        audioText: "pull request"
      },
      {
        type: "listen",
        question: "Quelle demande ?",
        audioText: "Can you review my code?",
        options: ["Écrire du code", "Revoir mon code", "Supprimer du code", "Copier du code"],
        correct: 1
      },
      {
        type: "write",
        question: "Écrivez 'fusionner' (git) en anglais",
        answer: "merge",
        hint: "5 lettres",
        audioText: "merge"
      }
    ]
  },
  {
    id: 32,
    title: "Problèmes techniques",
    icon: "🔧",
    category: "tech",
    difficulty: 2,
    xpReward: 20,
    questions: [
      {
        type: "translate",
        question: "'It's not working' signifie :",
        options: ["Ça fonctionne", "Ça ne marche pas", "Ça travaille", "Ça progresse"],
        correct: 1,
        audioText: "It's not working"
      },
      {
        type: "fill",
        question: "The server is ___.",
        options: ["broken", "crashed", "fallen", "stopped"],
        correct: 1,
        audioText: "The server crashed."
      },
      {
        type: "listen",
        question: "Quel problème ?",
        audioText: "I'm getting an error message",
        options: ["Message de succès", "Message d'erreur", "Message d'avertissement", "Pas de message"],
        correct: 1
      },
      {
        type: "translate",
        question: "'To debug' signifie :",
        options: ["Créer des bugs", "Corriger des bugs", "Ignorer des bugs", "Lister des bugs"],
        correct: 1,
        audioText: "to debug"
      },
      {
        type: "fill",
        question: "Have you tried ___ it off and on?",
        options: ["putting", "turning", "switching", "making"],
        correct: 1,
        audioText: "Have you tried turning it off and on?"
      },
      {
        type: "translate",
        question: "'Workaround' signifie :",
        options: ["Contournement", "Solution temporaire", "Alternative", "Toutes ces réponses"],
        correct: 3,
        audioText: "workaround"
      },
      {
        type: "listen",
        question: "Quelle situation ?",
        audioText: "The build failed",
        options: ["Build réussi", "Build échoué", "Build en cours", "Build annulé"],
        correct: 1
      },
      {
        type: "write",
        question: "Écrivez 'erreur' en anglais",
        answer: "error",
        hint: "5 lettres",
        audioText: "error"
      }
    ]
  },
  {
    id: 33,
    title: "Code Review",
    icon: "👀",
    category: "tech",
    difficulty: 2,
    xpReward: 20,
    questions: [
      {
        type: "translate",
        question: "'LGTM' (Looks Good To Me) signifie :",
        options: ["Pas bon", "Ça me semble bon", "À vérifier", "Refusé"],
        correct: 1,
        audioText: "L G T M, looks good to me"
      },
      {
        type: "fill",
        question: "Could you add some ___?",
        options: ["words", "comments", "notes", "texts"],
        correct: 1,
        audioText: "Could you add some comments?"
      },
      {
        type: "listen",
        question: "Quel feedback ?",
        audioText: "This could be refactored",
        options: ["À supprimer", "À refactoriser", "Parfait", "À tester"],
        correct: 1
      },
      {
        type: "translate",
        question: "'Edge case' signifie :",
        options: ["Cas limite", "Cas normal", "Cas principal", "Cas d'erreur"],
        correct: 0,
        audioText: "edge case"
      },
      {
        type: "fill",
        question: "This function is too ___.",
        options: ["big", "long", "large", "heavy"],
        correct: 1,
        audioText: "This function is too long."
      },
      {
        type: "translate",
        question: "'Nit' (nitpick) signifie :",
        options: ["Erreur grave", "Détail mineur", "Bug critique", "Suggestion"],
        correct: 1,
        audioText: "nit"
      },
      {
        type: "listen",
        question: "Quelle suggestion ?",
        audioText: "Consider using a constant here",
        options: ["Variable", "Constante", "Fonction", "Classe"],
        correct: 1
      },
      {
        type: "write",
        question: "Écrivez 'approuver' en anglais",
        answer: "approve",
        hint: "7 lettres",
        audioText: "approve"
      }
    ]
  },
  {
    id: 34,
    title: "Réunions Tech",
    icon: "📊",
    category: "tech",
    difficulty: 2,
    xpReward: 20,
    questions: [
      {
        type: "translate",
        question: "'Sprint' signifie :",
        options: ["Course", "Cycle de travail", "Réunion", "Objectif"],
        correct: 1,
        audioText: "sprint"
      },
      {
        type: "fill",
        question: "What's blocking your ___?",
        options: ["work", "progress", "task", "job"],
        correct: 1,
        audioText: "What's blocking your progress?"
      },
      {
        type: "listen",
        question: "Quelle question de standup ?",
        audioText: "What did you work on yesterday?",
        options: ["Aujourd'hui ?", "Hier ?", "Demain ?", "Cette semaine ?"],
        correct: 1
      },
      {
        type: "translate",
        question: "'Backlog' signifie :",
        options: ["Historique", "Liste des tâches à faire", "Archive", "Journal"],
        correct: 1,
        audioText: "backlog"
      },
      {
        type: "fill",
        question: "Let's ___ the story points.",
        options: ["calculate", "estimate", "count", "add"],
        correct: 1,
        audioText: "Let's estimate the story points."
      },
      {
        type: "translate",
        question: "'Blocker' signifie :",
        options: ["Bloqueur", "Problème empêchant d'avancer", "Bug", "A et B"],
        correct: 3,
        audioText: "blocker"
      },
      {
        type: "listen",
        question: "Quelle mise à jour ?",
        audioText: "The feature is ready for QA",
        options: ["En développement", "Prêt pour test", "En production", "Annulé"],
        correct: 1
      },
      {
        type: "write",
        question: "Écrivez 'retour' (retrospective) en anglais",
        answer: "retro",
        hint: "5 lettres (abréviation)",
        audioText: "retro"
      }
    ]
  },
  {
    id: 35,
    title: "Support Client Tech",
    icon: "🎧",
    category: "tech",
    difficulty: 2,
    xpReward: 25,
    questions: [
      {
        type: "translate",
        question: "'How can I help you?' signifie :",
        options: ["Qui êtes-vous ?", "Comment puis-je vous aider ?", "Que voulez-vous ?", "Quel est le problème ?"],
        correct: 1,
        audioText: "How can I help you?"
      },
      {
        type: "fill",
        question: "Can you ___ your screen?",
        options: ["show", "share", "give", "send"],
        correct: 1,
        audioText: "Can you share your screen?"
      },
      {
        type: "listen",
        question: "Quelle instruction ?",
        audioText: "Try clearing your cache",
        options: ["Vider le cache", "Redémarrer", "Mettre à jour", "Désinstaller"],
        correct: 0
      },
      {
        type: "translate",
        question: "'Ticket' (support) signifie :",
        options: ["Billet", "Demande de support", "Problème", "Question"],
        correct: 1,
        audioText: "ticket"
      },
      {
        type: "fill",
        question: "I'll ___ this issue.",
        options: ["raise", "escalate", "move", "push"],
        correct: 1,
        audioText: "I'll escalate this issue."
      },
      {
        type: "translate",
        question: "'ETA' (Estimated Time of Arrival) signifie :",
        options: ["Délai estimé", "Temps exact", "Date limite", "Heure d'arrivée"],
        correct: 0,
        audioText: "E T A, estimated time of arrival"
      },
      {
        type: "listen",
        question: "Quelle réponse du support ?",
        audioText: "We're working on a fix",
        options: ["Résolu", "En cours de correction", "Pas de solution", "Fermé"],
        correct: 1
      },
      {
        type: "write",
        question: "Écrivez 'mise à jour' en anglais",
        answer: "update",
        hint: "6 lettres",
        audioText: "update"
      }
    ]
  }
]
