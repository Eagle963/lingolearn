import type { Lesson } from '@/types'

export const foodLessons: Lesson[] = [
  {
    id: 16,
    title: "Commander",
    icon: "🍽️",
    category: "food",
    difficulty: 2,
    xpReward: 20,
    questions: [
      {
        type: "translate",
        question: "'I'd like to order, please' signifie :",
        options: ["Je voudrais payer", "Je voudrais commander", "Je voudrais partir", "Je voudrais l'addition"],
        correct: 1,
        audioText: "I'd like to order, please"
      },
      {
        type: "fill",
        question: "Can I have the ___, please?",
        options: ["card", "menu", "list", "book"],
        correct: 1,
        audioText: "Can I have the menu, please?"
      },
      {
        type: "listen",
        question: "Que demande le serveur ?",
        audioText: "Are you ready to order?",
        options: ["L'addition ?", "Prêt à commander ?", "Autre chose ?", "Ça va ?"],
        correct: 1
      },
      {
        type: "translate",
        question: "'What do you recommend?' signifie :",
        options: ["Qu'est-ce que c'est ?", "Que recommandez-vous ?", "Qu'avez-vous ?", "Que préférez-vous ?"],
        correct: 1,
        audioText: "What do you recommend?"
      },
      {
        type: "fill",
        question: "I'll ___ the steak, please.",
        options: ["take", "get", "have", "want"],
        correct: 2,
        audioText: "I'll have the steak, please."
      },
      {
        type: "translate",
        question: "'As a starter' signifie :",
        options: ["En dessert", "En entrée", "En plat principal", "En accompagnement"],
        correct: 1,
        audioText: "As a starter"
      },
      {
        type: "listen",
        question: "Que demande le client ?",
        audioText: "What's the soup of the day?",
        options: ["Plat du jour", "Soupe du jour", "Menu du jour", "Spécialité"],
        correct: 1
      },
      {
        type: "write",
        question: "Écrivez 'menu' en anglais",
        answer: "menu",
        hint: "4 lettres, comme en français",
        audioText: "menu"
      }
    ]
  },
  {
    id: 17,
    title: "Préférences alimentaires",
    icon: "🥗",
    category: "food",
    difficulty: 2,
    xpReward: 20,
    questions: [
      {
        type: "translate",
        question: "'I'm vegetarian' signifie :",
        options: ["Je suis vegan", "Je suis végétarien", "Je mange de tout", "Je suis au régime"],
        correct: 1,
        audioText: "I'm vegetarian"
      },
      {
        type: "fill",
        question: "I'm ___ to nuts.",
        options: ["sick", "allergic", "bad", "afraid"],
        correct: 1,
        audioText: "I'm allergic to nuts."
      },
      {
        type: "listen",
        question: "Quelle restriction ?",
        audioText: "I don't eat meat",
        options: ["Pas de poisson", "Pas de viande", "Pas de légumes", "Pas de gluten"],
        correct: 1
      },
      {
        type: "translate",
        question: "'Gluten-free' signifie :",
        options: ["Avec gluten", "Sans gluten", "Peu de gluten", "Gluten naturel"],
        correct: 1,
        audioText: "gluten-free"
      },
      {
        type: "fill",
        question: "Is this dish ___? (épicé)",
        options: ["hot", "spicy", "warm", "cold"],
        correct: 1,
        audioText: "Is this dish spicy?"
      },
      {
        type: "translate",
        question: "'I can't eat dairy' signifie :",
        options: ["J'adore les produits laitiers", "Je ne mange pas de produits laitiers", "Je préfère les produits laitiers", "J'évite le sucre"],
        correct: 1,
        audioText: "I can't eat dairy"
      },
      {
        type: "listen",
        question: "Que demande cette personne ?",
        audioText: "Does this contain shellfish?",
        options: ["Contient du poisson ?", "Contient des crustacés ?", "Contient des œufs ?", "Contient du soja ?"],
        correct: 1
      },
      {
        type: "write",
        question: "Écrivez 'végétarien' en anglais",
        answer: "vegetarian",
        hint: "10 lettres",
        audioText: "vegetarian"
      }
    ]
  },
  {
    id: 18,
    title: "Boissons",
    icon: "🥤",
    category: "food",
    difficulty: 2,
    xpReward: 20,
    questions: [
      {
        type: "translate",
        question: "'Still or sparkling water?' signifie :",
        options: ["Chaud ou froid ?", "Plate ou gazeuse ?", "Grande ou petite ?", "Avec ou sans glaçons ?"],
        correct: 1,
        audioText: "Still or sparkling water?"
      },
      {
        type: "fill",
        question: "I'd like a ___ of wine.",
        options: ["cup", "mug", "glass", "bottle"],
        correct: 2,
        audioText: "I'd like a glass of wine."
      },
      {
        type: "listen",
        question: "Quelle boisson ?",
        audioText: "Can I have a coffee, please?",
        options: ["Thé", "Café", "Jus", "Eau"],
        correct: 1
      },
      {
        type: "translate",
        question: "'On the rocks' signifie :",
        options: ["Sans glace", "Avec glaçons", "À température", "Très frais"],
        correct: 1,
        audioText: "on the rocks"
      },
      {
        type: "fill",
        question: "Do you have ___ beer?",
        options: ["cold", "fresh", "draft", "new"],
        correct: 2,
        audioText: "Do you have draft beer?"
      },
      {
        type: "translate",
        question: "'Refill' signifie :",
        options: ["Ajouter", "Remplir à nouveau", "Vider", "Changer"],
        correct: 1,
        audioText: "refill"
      },
      {
        type: "listen",
        question: "Que demande le client ?",
        audioText: "With milk, please",
        options: ["Avec sucre", "Avec lait", "Sans sucre", "Sans lait"],
        correct: 1
      },
      {
        type: "write",
        question: "Écrivez 'eau' en anglais",
        answer: "water",
        hint: "5 lettres",
        audioText: "water"
      }
    ]
  },
  {
    id: 19,
    title: "Goûts & Textures",
    icon: "😋",
    category: "food",
    difficulty: 2,
    xpReward: 20,
    questions: [
      {
        type: "translate",
        question: "'Delicious' signifie :",
        options: ["Délicat", "Délicieux", "Différent", "Décevant"],
        correct: 1,
        audioText: "delicious"
      },
      {
        type: "fill",
        question: "This steak is too ___.",
        options: ["raw", "rare", "medium", "done"],
        correct: 0,
        audioText: "This steak is too raw."
      },
      {
        type: "listen",
        question: "Quel goût ?",
        audioText: "It's a bit too salty",
        options: ["Trop sucré", "Trop salé", "Trop acide", "Trop amer"],
        correct: 1
      },
      {
        type: "translate",
        question: "'Crispy' signifie :",
        options: ["Mou", "Croustillant", "Tendre", "Dur"],
        correct: 1,
        audioText: "crispy"
      },
      {
        type: "fill",
        question: "The sauce is very ___.",
        options: ["creamy", "dreamy", "steamy", "beamy"],
        correct: 0,
        audioText: "The sauce is very creamy."
      },
      {
        type: "translate",
        question: "'Bland' signifie :",
        options: ["Épicé", "Fade", "Fort", "Relevé"],
        correct: 1,
        audioText: "bland"
      },
      {
        type: "listen",
        question: "Que dit le client ?",
        audioText: "It's perfectly cooked",
        options: ["Trop cuit", "Pas assez cuit", "Parfaitement cuit", "Mal cuit"],
        correct: 2
      },
      {
        type: "write",
        question: "Écrivez 'sucré' en anglais",
        answer: "sweet",
        hint: "5 lettres",
        audioText: "sweet"
      }
    ]
  },
  {
    id: 20,
    title: "Problèmes au resto",
    icon: "😕",
    category: "food",
    difficulty: 2,
    xpReward: 25,
    questions: [
      {
        type: "translate",
        question: "'This is not what I ordered' signifie :",
        options: ["C'est délicieux", "Ce n'est pas ce que j'ai commandé", "Je voudrais autre chose", "L'addition svp"],
        correct: 1,
        audioText: "This is not what I ordered"
      },
      {
        type: "fill",
        question: "Excuse me, this is ___.",
        options: ["hot", "warm", "cold", "cool"],
        correct: 2,
        audioText: "Excuse me, this is cold."
      },
      {
        type: "listen",
        question: "Quel problème ?",
        audioText: "I've been waiting for an hour",
        options: ["Trop cher", "Trop long", "Mauvais plat", "Mauvais service"],
        correct: 1
      },
      {
        type: "translate",
        question: "'The bill is wrong' signifie :",
        options: ["L'addition est correcte", "L'addition est fausse", "L'addition svp", "Où est l'addition ?"],
        correct: 1,
        audioText: "The bill is wrong"
      },
      {
        type: "fill",
        question: "There's a ___ in my soup!",
        options: ["fly", "bee", "bug", "ant"],
        correct: 0,
        audioText: "There's a fly in my soup!"
      },
      {
        type: "translate",
        question: "'I'd like to speak to the manager' signifie :",
        options: ["Je voudrais le menu", "Je voudrais parler au responsable", "Je voudrais partir", "Je voudrais payer"],
        correct: 1,
        audioText: "I'd like to speak to the manager"
      },
      {
        type: "listen",
        question: "Que demande le client ?",
        audioText: "Could you take this back, please?",
        options: ["L'addition", "Renvoyer le plat", "Un dessert", "Un café"],
        correct: 1
      },
      {
        type: "write",
        question: "Écrivez 'addition' (restaurant) en anglais",
        answer: "bill",
        hint: "4 lettres",
        audioText: "bill"
      }
    ]
  }
]
