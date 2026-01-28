import type { Lesson } from '@/types'

export const shoppingLessons: Lesson[] = [
  {
    id: 21,
    title: "Dans un magasin",
    icon: "🛒",
    category: "shopping",
    difficulty: 2,
    xpReward: 20,
    questions: [
      {
        type: "translate",
        question: "'How much is this?' signifie :",
        options: ["C'est quoi ?", "Combien ça coûte ?", "Où est-ce ?", "Qu'est-ce que c'est ?"],
        correct: 1,
        audioText: "How much is this?"
      },
      {
        type: "fill",
        question: "I'm just ___, thanks.",
        options: ["watching", "seeing", "looking", "viewing"],
        correct: 2,
        audioText: "I'm just looking, thanks."
      },
      {
        type: "listen",
        question: "Que dit le vendeur ?",
        audioText: "Can I help you?",
        options: ["Vous payez comment ?", "Puis-je vous aider ?", "C'est tout ?", "Bonne journée !"],
        correct: 1
      },
      {
        type: "translate",
        question: "'It's on sale' signifie :",
        options: ["C'est vendu", "C'est en solde", "C'est cher", "C'est gratuit"],
        correct: 1,
        audioText: "It's on sale"
      },
      {
        type: "fill",
        question: "Do you have this in a different ___?",
        options: ["color", "type", "kind", "style"],
        correct: 0,
        audioText: "Do you have this in a different color?"
      },
      {
        type: "translate",
        question: "'Cash or card?' signifie :",
        options: ["Carte de fidélité ?", "Espèces ou carte ?", "Crédit ou débit ?", "Besoin d'un sac ?"],
        correct: 1,
        audioText: "Cash or card?"
      },
      {
        type: "listen",
        question: "Que demande le client ?",
        audioText: "Where are the fitting rooms?",
        options: ["Les toilettes", "Les cabines d'essayage", "La caisse", "La sortie"],
        correct: 1
      },
      {
        type: "write",
        question: "Écrivez 'prix' en anglais",
        answer: "price",
        hint: "5 lettres",
        audioText: "price"
      }
    ]
  },
  {
    id: 22,
    title: "Vêtements",
    icon: "👕",
    category: "shopping",
    difficulty: 2,
    xpReward: 20,
    questions: [
      {
        type: "translate",
        question: "'What size do you wear?' signifie :",
        options: ["Quelle couleur ?", "Quelle taille faites-vous ?", "Quel style ?", "Quel prix ?"],
        correct: 1,
        audioText: "What size do you wear?"
      },
      {
        type: "fill",
        question: "This shirt is too ___.",
        options: ["small", "little", "short", "low"],
        correct: 0,
        audioText: "This shirt is too small."
      },
      {
        type: "listen",
        question: "Quel vêtement ?",
        audioText: "I'm looking for a pair of jeans",
        options: ["Un t-shirt", "Un jean", "Une veste", "Un manteau"],
        correct: 1
      },
      {
        type: "translate",
        question: "'It fits perfectly' signifie :",
        options: ["C'est trop grand", "Ça me va parfaitement", "C'est trop petit", "Ça ne va pas"],
        correct: 1,
        audioText: "It fits perfectly"
      },
      {
        type: "fill",
        question: "Can I ___ this on?",
        options: ["put", "try", "wear", "use"],
        correct: 1,
        audioText: "Can I try this on?"
      },
      {
        type: "translate",
        question: "'Long sleeve' signifie :",
        options: ["Manches courtes", "Manches longues", "Sans manches", "Demi-manches"],
        correct: 1,
        audioText: "long sleeve"
      },
      {
        type: "listen",
        question: "Quelle demande ?",
        audioText: "Do you have this in medium?",
        options: ["En petit", "En moyen", "En grand", "En XL"],
        correct: 1
      },
      {
        type: "write",
        question: "Écrivez 'taille' (vêtement) en anglais",
        answer: "size",
        hint: "4 lettres",
        audioText: "size"
      }
    ]
  },
  {
    id: 23,
    title: "Retours & Échanges",
    icon: "🔄",
    category: "shopping",
    difficulty: 2,
    xpReward: 20,
    questions: [
      {
        type: "translate",
        question: "'I'd like to return this' signifie :",
        options: ["Je voudrais acheter", "Je voudrais retourner ceci", "Je voudrais échanger", "Je voudrais essayer"],
        correct: 1,
        audioText: "I'd like to return this"
      },
      {
        type: "fill",
        question: "Do you have the ___?",
        options: ["bill", "receipt", "paper", "ticket"],
        correct: 1,
        audioText: "Do you have the receipt?"
      },
      {
        type: "listen",
        question: "Quelle demande ?",
        audioText: "Can I exchange this for a different size?",
        options: ["Remboursement", "Échange taille", "Nouvelle couleur", "Autre modèle"],
        correct: 1
      },
      {
        type: "translate",
        question: "'Refund' signifie :",
        options: ["Échange", "Remboursement", "Crédit", "Bon d'achat"],
        correct: 1,
        audioText: "refund"
      },
      {
        type: "fill",
        question: "This item is ___.",
        options: ["broken", "wrong", "defective", "bad"],
        correct: 2,
        audioText: "This item is defective."
      },
      {
        type: "translate",
        question: "'Store credit' signifie :",
        options: ["Carte de crédit", "Avoir magasin", "Prêt bancaire", "Paiement différé"],
        correct: 1,
        audioText: "store credit"
      },
      {
        type: "listen",
        question: "Quelle politique ?",
        audioText: "You have 30 days to return it",
        options: ["7 jours", "14 jours", "30 jours", "60 jours"],
        correct: 2
      },
      {
        type: "write",
        question: "Écrivez 'ticket de caisse' en anglais",
        answer: "receipt",
        hint: "7 lettres",
        audioText: "receipt"
      }
    ]
  },
  {
    id: 24,
    title: "Négocier",
    icon: "🤝",
    category: "shopping",
    difficulty: 2,
    xpReward: 20,
    questions: [
      {
        type: "translate",
        question: "'Is there a discount?' signifie :",
        options: ["C'est gratuit ?", "Y a-t-il une réduction ?", "C'est le bon prix ?", "Acceptez-vous les cartes ?"],
        correct: 1,
        audioText: "Is there a discount?"
      },
      {
        type: "fill",
        question: "That's too ___ for me.",
        options: ["much", "high", "expensive", "big"],
        correct: 2,
        audioText: "That's too expensive for me."
      },
      {
        type: "listen",
        question: "Que propose le client ?",
        audioText: "Can you do a better price?",
        options: ["Meilleure qualité", "Meilleur prix", "Livraison gratuite", "Plus de choix"],
        correct: 1
      },
      {
        type: "translate",
        question: "'Best offer' signifie :",
        options: ["Première offre", "Meilleure offre", "Dernière offre", "Offre spéciale"],
        correct: 1,
        audioText: "best offer"
      },
      {
        type: "fill",
        question: "I'll give you ___ for both.",
        options: ["fifty", "fifty dollars", "a fifty", "fifties"],
        correct: 1,
        audioText: "I'll give you fifty dollars for both."
      },
      {
        type: "translate",
        question: "'Deal!' signifie :",
        options: ["Non merci", "Marché conclu !", "Peut-être", "Trop cher"],
        correct: 1,
        audioText: "Deal!"
      },
      {
        type: "listen",
        question: "Quelle contre-offre ?",
        audioText: "I can do 20% off",
        options: ["-10%", "-15%", "-20%", "-25%"],
        correct: 2
      },
      {
        type: "write",
        question: "Écrivez 'réduction' en anglais",
        answer: "discount",
        hint: "8 lettres",
        audioText: "discount"
      }
    ]
  },
  {
    id: 25,
    title: "Services",
    icon: "💇",
    category: "shopping",
    difficulty: 2,
    xpReward: 25,
    questions: [
      {
        type: "translate",
        question: "'I have an appointment' signifie :",
        options: ["Je voudrais un RDV", "J'ai un rendez-vous", "J'attends un RDV", "J'annule mon RDV"],
        correct: 1,
        audioText: "I have an appointment"
      },
      {
        type: "fill",
        question: "Just a trim, ___.",
        options: ["thanks", "please", "okay", "yes"],
        correct: 1,
        audioText: "Just a trim, please."
      },
      {
        type: "listen",
        question: "Quel service ?",
        audioText: "I'd like a haircut",
        options: ["Coloration", "Coupe de cheveux", "Brushing", "Permanente"],
        correct: 1
      },
      {
        type: "translate",
        question: "'How long will it take?' signifie :",
        options: ["C'est long comment ?", "Combien de temps ?", "C'est loin ?", "Combien ça coûte ?"],
        correct: 1,
        audioText: "How long will it take?"
      },
      {
        type: "fill",
        question: "Can I ___ an appointment?",
        options: ["do", "make", "have", "get"],
        correct: 1,
        audioText: "Can I make an appointment?"
      },
      {
        type: "translate",
        question: "'The tip' signifie :",
        options: ["Le prix", "Le pourboire", "L'addition", "La taxe"],
        correct: 1,
        audioText: "the tip"
      },
      {
        type: "listen",
        question: "Quelle question ?",
        audioText: "Would you like anything else?",
        options: ["C'est tout ?", "Autre chose ?", "Ça va ?", "Satisfait ?"],
        correct: 1
      },
      {
        type: "write",
        question: "Écrivez 'rendez-vous' en anglais",
        answer: "appointment",
        hint: "11 lettres",
        audioText: "appointment"
      }
    ]
  }
]
