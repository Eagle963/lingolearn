import type { Lesson } from '@/types'

export const emailsLessons: Lesson[] = [
  {
    id: 36,
    title: "Débuter un email",
    icon: "📧",
    category: "emails",
    difficulty: 2,
    xpReward: 20,
    questions: [
      {
        type: "translate",
        question: "'Dear Mr. Smith' signifie :",
        options: ["Salut Smith", "Cher M. Smith", "Bonjour Smith", "M. Smith chéri"],
        correct: 1,
        audioText: "Dear Mr. Smith"
      },
      {
        type: "fill",
        question: "I hope this email ___ you well.",
        options: ["gets", "finds", "reaches", "meets"],
        correct: 1,
        audioText: "I hope this email finds you well."
      },
      {
        type: "listen",
        question: "Quelle formule d'ouverture ?",
        audioText: "I'm writing to inquire about",
        options: ["Se plaindre", "Demander des infos", "Remercier", "Confirmer"],
        correct: 1
      },
      {
        type: "translate",
        question: "'To whom it may concern' signifie :",
        options: ["À qui de droit", "Concernant qui", "Pour qui ça intéresse", "À l'attention de"],
        correct: 0,
        audioText: "To whom it may concern"
      },
      {
        type: "fill",
        question: "Following up on our ___ conversation...",
        options: ["last", "previous", "past", "old"],
        correct: 1,
        audioText: "Following up on our previous conversation..."
      },
      {
        type: "translate",
        question: "'Kind regards' signifie :",
        options: ["Regards gentils", "Cordialement", "Avec gentillesse", "Bons vœux"],
        correct: 1,
        audioText: "Kind regards"
      },
      {
        type: "listen",
        question: "Quelle introduction ?",
        audioText: "Thank you for your prompt reply",
        options: ["Merci de votre patience", "Merci de votre réponse rapide", "Merci de votre aide", "Merci de votre temps"],
        correct: 1
      },
      {
        type: "write",
        question: "Écrivez 'cordialement' en anglais",
        answer: "regards",
        hint: "7 lettres",
        audioText: "regards"
      }
    ]
  },
  {
    id: 37,
    title: "Demandes par email",
    icon: "🙋",
    category: "emails",
    difficulty: 2,
    xpReward: 20,
    questions: [
      {
        type: "translate",
        question: "'Could you please...' signifie :",
        options: ["Vous devez...", "Pourriez-vous...", "Vous pouvez...", "Il faut que vous..."],
        correct: 1,
        audioText: "Could you please"
      },
      {
        type: "fill",
        question: "I would ___ if you could...",
        options: ["like", "love", "appreciate", "want"],
        correct: 2,
        audioText: "I would appreciate if you could..."
      },
      {
        type: "listen",
        question: "Quelle demande ?",
        audioText: "Would it be possible to reschedule?",
        options: ["Annuler ?", "Reporter ?", "Confirmer ?", "Avancer ?"],
        correct: 1
      },
      {
        type: "translate",
        question: "'At your earliest convenience' signifie :",
        options: ["Quand vous voulez", "Dès que possible", "À votre convenance", "Le plus tôt sera le mieux"],
        correct: 1,
        audioText: "At your earliest convenience"
      },
      {
        type: "fill",
        question: "Please ___ me know your availability.",
        options: ["tell", "let", "make", "get"],
        correct: 1,
        audioText: "Please let me know your availability."
      },
      {
        type: "translate",
        question: "'I was wondering if...' signifie :",
        options: ["Je me demandais si...", "Je voulais savoir si...", "J'étais curieux si...", "Toutes ces réponses"],
        correct: 3,
        audioText: "I was wondering if"
      },
      {
        type: "listen",
        question: "Quelle formulation polie ?",
        audioText: "I would be grateful if you could send me",
        options: ["Je veux", "Je serais reconnaissant", "J'exige", "Je demande"],
        correct: 1
      },
      {
        type: "write",
        question: "Écrivez 'joindre' (fichier) en anglais",
        answer: "attach",
        hint: "6 lettres",
        audioText: "attach"
      }
    ]
  },
  {
    id: 38,
    title: "Répondre aux emails",
    icon: "↩️",
    category: "emails",
    difficulty: 2,
    xpReward: 20,
    questions: [
      {
        type: "translate",
        question: "'Thank you for reaching out' signifie :",
        options: ["Merci de votre aide", "Merci de m'avoir contacté", "Merci de votre réponse", "Merci de votre patience"],
        correct: 1,
        audioText: "Thank you for reaching out"
      },
      {
        type: "fill",
        question: "In ___ to your email...",
        options: ["answer", "reply", "response", "return"],
        correct: 2,
        audioText: "In response to your email..."
      },
      {
        type: "listen",
        question: "Quelle confirmation ?",
        audioText: "I confirm receipt of your message",
        options: ["J'ai reçu votre message", "Je n'ai pas reçu", "Message envoyé", "Message supprimé"],
        correct: 0
      },
      {
        type: "translate",
        question: "'Please find attached' signifie :",
        options: ["Trouvez s'il vous plaît", "Veuillez trouver ci-joint", "Ci-joint vous trouverez", "Attachez s'il vous plaît"],
        correct: 1,
        audioText: "Please find attached"
      },
      {
        type: "fill",
        question: "As ___ in my previous email...",
        options: ["told", "said", "mentioned", "written"],
        correct: 2,
        audioText: "As mentioned in my previous email..."
      },
      {
        type: "translate",
        question: "'I'll get back to you' signifie :",
        options: ["Je reviens vers vous", "Je vous rappelle", "Je vous contacte", "Toutes ces réponses"],
        correct: 3,
        audioText: "I'll get back to you"
      },
      {
        type: "listen",
        question: "Quelle réponse ?",
        audioText: "I apologize for the delayed response",
        options: ["Réponse rapide", "Excuses pour le retard", "Pas de réponse", "Nouvelle réponse"],
        correct: 1
      },
      {
        type: "write",
        question: "Écrivez 'répondre' en anglais",
        answer: "reply",
        hint: "5 lettres",
        audioText: "reply"
      }
    ]
  },
  {
    id: 39,
    title: "Conclure un email",
    icon: "✍️",
    category: "emails",
    difficulty: 2,
    xpReward: 20,
    questions: [
      {
        type: "translate",
        question: "'Best regards' signifie :",
        options: ["Meilleurs vœux", "Bien cordialement", "Meilleures salutations", "Sincèrement"],
        correct: 1,
        audioText: "Best regards"
      },
      {
        type: "fill",
        question: "I look forward to ___ from you.",
        options: ["listen", "hear", "hearing", "listening"],
        correct: 2,
        audioText: "I look forward to hearing from you."
      },
      {
        type: "listen",
        question: "Quelle conclusion ?",
        audioText: "Please don't hesitate to contact me",
        options: ["Ne me contactez pas", "N'hésitez pas à me contacter", "Contactez-moi plus tard", "Arrêtez de me contacter"],
        correct: 1
      },
      {
        type: "translate",
        question: "'Yours sincerely' signifie :",
        options: ["Vôtre sincèrement", "Sincèrement vôtre", "Bien à vous", "Cordialement"],
        correct: 1,
        audioText: "Yours sincerely"
      },
      {
        type: "fill",
        question: "Thank you for your ___ and understanding.",
        options: ["time", "patience", "help", "support"],
        correct: 1,
        audioText: "Thank you for your patience and understanding."
      },
      {
        type: "translate",
        question: "'Should you have any questions' signifie :",
        options: ["Vous devriez avoir des questions", "Si vous avez des questions", "Quand vous aurez des questions", "Avez-vous des questions"],
        correct: 1,
        audioText: "Should you have any questions"
      },
      {
        type: "listen",
        question: "Quelle formule de fin ?",
        audioText: "Warm regards",
        options: ["Salutations froides", "Cordialement", "Chaleureuses salutations", "Amicalement"],
        correct: 2
      },
      {
        type: "write",
        question: "Écrivez 'sincèrement' en anglais",
        answer: "sincerely",
        hint: "9 lettres",
        audioText: "sincerely"
      }
    ]
  },
  {
    id: 40,
    title: "Emails délicats",
    icon: "😬",
    category: "emails",
    difficulty: 3,
    xpReward: 25,
    questions: [
      {
        type: "translate",
        question: "'I regret to inform you' signifie :",
        options: ["Je suis heureux de vous informer", "J'ai le regret de vous informer", "Je dois vous dire", "Je veux vous prévenir"],
        correct: 1,
        audioText: "I regret to inform you"
      },
      {
        type: "fill",
        question: "I understand your ___.",
        options: ["anger", "frustration", "problem", "situation"],
        correct: 1,
        audioText: "I understand your frustration."
      },
      {
        type: "listen",
        question: "Quelle formule d'excuse ?",
        audioText: "I sincerely apologize for any inconvenience",
        options: ["Pas d'excuse", "Excuses sincères", "C'est de votre faute", "Nous n'y pouvons rien"],
        correct: 1
      },
      {
        type: "translate",
        question: "'Unfortunately' signifie :",
        options: ["Heureusement", "Malheureusement", "Naturellement", "Certainement"],
        correct: 1,
        audioText: "Unfortunately"
      },
      {
        type: "fill",
        question: "We are unable to ___ your request.",
        options: ["do", "make", "accommodate", "accept"],
        correct: 2,
        audioText: "We are unable to accommodate your request."
      },
      {
        type: "translate",
        question: "'Please accept my apologies' signifie :",
        options: ["Acceptez mes excuses", "Veuillez accepter mes excuses", "Je m'excuse", "Pardonnez-moi"],
        correct: 1,
        audioText: "Please accept my apologies"
      },
      {
        type: "listen",
        question: "Comment adoucir un refus ?",
        audioText: "While I appreciate your interest",
        options: ["Je refuse", "J'apprécie votre intérêt", "Je n'aime pas", "C'est impossible"],
        correct: 1
      },
      {
        type: "write",
        question: "Écrivez 'malheureusement' en anglais",
        answer: "unfortunately",
        hint: "13 lettres",
        audioText: "unfortunately"
      }
    ]
  }
]
