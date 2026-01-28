import type { Lesson } from '@/types'

export const travelLessons: Lesson[] = [
  {
    id: 11,
    title: "À l'aéroport",
    icon: "✈️",
    category: "travel",
    difficulty: 2,
    xpReward: 20,
    questions: [
      {
        type: "translate",
        question: "'Where is the check-in desk?' signifie :",
        options: ["Où est la sortie ?", "Où est l'enregistrement ?", "Où est la porte ?", "Où sont les toilettes ?"],
        correct: 1,
        audioText: "Where is the check-in desk?"
      },
      {
        type: "fill",
        question: "My ___ is delayed.",
        options: ["plane", "flight", "travel", "trip"],
        correct: 1,
        audioText: "My flight is delayed."
      },
      {
        type: "listen",
        question: "Que demande cette personne ?",
        audioText: "Can I see your passport?",
        options: ["Votre billet", "Votre passeport", "Votre valise", "Votre carte"],
        correct: 1
      },
      {
        type: "translate",
        question: "'Boarding pass' signifie :",
        options: ["Passeport", "Carte d'embarquement", "Billet d'avion", "Visa"],
        correct: 1,
        audioText: "boarding pass"
      },
      {
        type: "fill",
        question: "The gate ___ at 10:30.",
        options: ["opens", "closes", "starts", "ends"],
        correct: 1,
        audioText: "The gate closes at 10:30."
      },
      {
        type: "translate",
        question: "'Luggage' signifie :",
        options: ["Valise", "Bagages", "Sac", "Chariot"],
        correct: 1,
        audioText: "luggage"
      },
      {
        type: "listen",
        question: "Quelle annonce ?",
        audioText: "Final call for flight to London",
        options: ["Vol annulé", "Dernier appel pour Londres", "Vol retardé", "Embarquement terminé"],
        correct: 1
      },
      {
        type: "write",
        question: "Écrivez 'vol' (avion) en anglais",
        answer: "flight",
        hint: "6 lettres",
        audioText: "flight"
      }
    ]
  },
  {
    id: 12,
    title: "À l'hôtel",
    icon: "🏨",
    category: "travel",
    difficulty: 2,
    xpReward: 20,
    questions: [
      {
        type: "translate",
        question: "'I have a reservation' signifie :",
        options: ["Je voudrais réserver", "J'ai une réservation", "Je cherche un hôtel", "J'ai besoin d'aide"],
        correct: 1,
        audioText: "I have a reservation"
      },
      {
        type: "fill",
        question: "I'd like to ___ in, please.",
        options: ["check", "come", "go", "get"],
        correct: 0,
        audioText: "I'd like to check in, please."
      },
      {
        type: "listen",
        question: "Que demande le client ?",
        audioText: "Do you have any rooms available?",
        options: ["Prix des chambres", "Chambres disponibles", "Heure du petit-déjeuner", "Wifi gratuit"],
        correct: 1
      },
      {
        type: "translate",
        question: "'Single room' signifie :",
        options: ["Suite", "Chambre double", "Chambre simple", "Chambre familiale"],
        correct: 2,
        audioText: "single room"
      },
      {
        type: "fill",
        question: "What time is ___? (petit-déjeuner)",
        options: ["lunch", "dinner", "breakfast", "snack"],
        correct: 2,
        audioText: "What time is breakfast?"
      },
      {
        type: "translate",
        question: "'Check-out time' signifie :",
        options: ["Heure d'arrivée", "Heure de départ", "Heure du dîner", "Heure limite"],
        correct: 1,
        audioText: "check-out time"
      },
      {
        type: "listen",
        question: "Quel problème ?",
        audioText: "The air conditioning doesn't work",
        options: ["TV cassée", "Pas d'eau chaude", "Clim en panne", "Wifi lent"],
        correct: 2
      },
      {
        type: "write",
        question: "Écrivez 'clé' (de chambre) en anglais",
        answer: "key",
        hint: "3 lettres",
        audioText: "key"
      }
    ]
  },
  {
    id: 13,
    title: "Directions",
    icon: "🗺️",
    category: "travel",
    difficulty: 2,
    xpReward: 20,
    questions: [
      {
        type: "translate",
        question: "'Turn left' signifie :",
        options: ["Tournez à droite", "Tournez à gauche", "Allez tout droit", "Faites demi-tour"],
        correct: 1,
        audioText: "Turn left"
      },
      {
        type: "fill",
        question: "Go ___ ahead.",
        options: ["right", "left", "straight", "back"],
        correct: 2,
        audioText: "Go straight ahead."
      },
      {
        type: "listen",
        question: "Quelle direction ?",
        audioText: "It's on your right",
        options: ["À gauche", "À droite", "Tout droit", "Derrière vous"],
        correct: 1
      },
      {
        type: "translate",
        question: "'How far is it?' signifie :",
        options: ["C'est où ?", "C'est à quelle distance ?", "C'est comment ?", "C'est quand ?"],
        correct: 1,
        audioText: "How far is it?"
      },
      {
        type: "fill",
        question: "It's ___ the corner.",
        options: ["in", "at", "on", "around"],
        correct: 3,
        audioText: "It's around the corner."
      },
      {
        type: "translate",
        question: "'Cross the street' signifie :",
        options: ["Longez la rue", "Traversez la rue", "Prenez la rue", "Descendez la rue"],
        correct: 1,
        audioText: "Cross the street"
      },
      {
        type: "listen",
        question: "Que dit cette personne ?",
        audioText: "Take the second exit",
        options: ["Première sortie", "Deuxième sortie", "Troisième sortie", "Dernière sortie"],
        correct: 1
      },
      {
        type: "write",
        question: "Écrivez 'droite' en anglais",
        answer: "right",
        hint: "5 lettres",
        audioText: "right"
      }
    ]
  },
  {
    id: 14,
    title: "Transports",
    icon: "🚌",
    category: "travel",
    difficulty: 2,
    xpReward: 20,
    questions: [
      {
        type: "translate",
        question: "'Where is the bus stop?' signifie :",
        options: ["Où est le bus ?", "Où est l'arrêt de bus ?", "Le bus s'arrête où ?", "Quand passe le bus ?"],
        correct: 1,
        audioText: "Where is the bus stop?"
      },
      {
        type: "fill",
        question: "I need a ___ ticket.",
        options: ["one", "simple", "single", "alone"],
        correct: 2,
        audioText: "I need a single ticket."
      },
      {
        type: "listen",
        question: "Que demande cette personne ?",
        audioText: "What time does the train leave?",
        options: ["Heure d'arrivée", "Heure de départ", "Prix du billet", "Quai du train"],
        correct: 1
      },
      {
        type: "translate",
        question: "'Round trip' signifie :",
        options: ["Aller simple", "Aller-retour", "Circuit", "Tour complet"],
        correct: 1,
        audioText: "round trip"
      },
      {
        type: "fill",
        question: "Which ___ for Paris?",
        options: ["way", "platform", "road", "line"],
        correct: 1,
        audioText: "Which platform for Paris?"
      },
      {
        type: "translate",
        question: "'Underground' signifie :",
        options: ["Sous-sol", "Métro", "Tunnel", "Cave"],
        correct: 1,
        audioText: "underground"
      },
      {
        type: "listen",
        question: "Quelle information ?",
        audioText: "The next train arrives in 5 minutes",
        options: ["Train annulé", "Train en retard", "Train dans 5 min", "Dernier train"],
        correct: 2
      },
      {
        type: "write",
        question: "Écrivez 'billet' en anglais",
        answer: "ticket",
        hint: "6 lettres",
        audioText: "ticket"
      }
    ]
  },
  {
    id: 15,
    title: "Urgences voyage",
    icon: "🆘",
    category: "travel",
    difficulty: 2,
    xpReward: 25,
    questions: [
      {
        type: "translate",
        question: "'I lost my passport' signifie :",
        options: ["J'ai oublié mon passeport", "J'ai perdu mon passeport", "On m'a volé mon passeport", "Je cherche mon passeport"],
        correct: 1,
        audioText: "I lost my passport"
      },
      {
        type: "fill",
        question: "I need to see a ___.",
        options: ["doctor", "police", "helper", "friend"],
        correct: 0,
        audioText: "I need to see a doctor."
      },
      {
        type: "listen",
        question: "Quel problème ?",
        audioText: "My wallet was stolen",
        options: ["Portefeuille perdu", "Portefeuille volé", "Portefeuille oublié", "Portefeuille trouvé"],
        correct: 1
      },
      {
        type: "translate",
        question: "'Call an ambulance!' signifie :",
        options: ["Appelez la police !", "Appelez une ambulance !", "Appelez à l'aide !", "Appelez un taxi !"],
        correct: 1,
        audioText: "Call an ambulance!"
      },
      {
        type: "fill",
        question: "Where is the nearest ___?",
        options: ["hospital", "hotel", "house", "home"],
        correct: 0,
        audioText: "Where is the nearest hospital?"
      },
      {
        type: "translate",
        question: "'It's an emergency' signifie :",
        options: ["C'est important", "C'est urgent", "C'est une urgence", "C'est grave"],
        correct: 2,
        audioText: "It's an emergency"
      },
      {
        type: "listen",
        question: "Que demande cette personne ?",
        audioText: "Can you help me, please?",
        options: ["Où êtes-vous ?", "Pouvez-vous m'aider ?", "Que faites-vous ?", "Comment allez-vous ?"],
        correct: 1
      },
      {
        type: "write",
        question: "Écrivez 'aide' en anglais",
        answer: "help",
        hint: "4 lettres",
        audioText: "help"
      }
    ]
  }
]
