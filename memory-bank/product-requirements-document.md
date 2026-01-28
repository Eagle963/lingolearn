# LingoLearn - Product Requirements Document (PRD)

## 1. Vision du Produit

### 1.1 Résumé
LingoLearn est une Progressive Web App (PWA) d'apprentissage de l'anglais gamifiée, inspirée de Duolingo, accessible sur mobile sans passer par l'App Store. L'application cible les francophones débutants à intermédiaires souhaitant améliorer leur anglais conversationnel et professionnel.

### 1.2 Objectifs Business
- Créer une alternative gratuite et accessible aux apps d'apprentissage payantes
- Permettre l'installation sur mobile via PWA (pas de frais App Store)
- Potentiel de monétisation future (freemium, premium features)
- Construire une base utilisateurs engagée via la gamification

### 1.3 Utilisateurs Cibles
- **Persona Principal**: Adultes francophones (25-45 ans) voulant améliorer leur anglais professionnel
- **Persona Secondaire**: Étudiants préparant des examens d'anglais
- **Persona Tertiaire**: Voyageurs souhaitant des bases conversationnelles

---

## 2. Fonctionnalités Core (MVP)

### 2.1 Système d'Authentification
| Feature | Description | Priorité |
|---------|-------------|----------|
| Inscription email | Création compte avec email/password | P0 |
| Connexion | Login avec persistance session | P0 |
| OAuth Google | Connexion rapide via Google | P1 |
| Récupération mot de passe | Email de reset | P1 |
| Profil utilisateur | Nom, avatar, préférences | P0 |

### 2.2 Système de Leçons
| Feature | Description | Priorité |
|---------|-------------|----------|
| Catégories | 10 catégories thématiques | P0 |
| Leçons | 50 leçons (5 par catégorie) | P0 |
| Types de questions | Traduction, QCM, Compléter, Écrire | P0 |
| Progression linéaire | Débloquer leçons progressivement | P0 |
| Indices | Système d'aide optionnel | P1 |
| Audio TTS | Prononciation des mots/phrases | P2 |

### 2.3 Gamification
| Feature | Description | Priorité |
|---------|-------------|----------|
| Points XP | Gagner XP par leçon complétée | P0 |
| Niveaux | Progression 1-100 basée sur XP | P0 |
| Vies (Hearts) | 5 vies, perdre 1 par erreur | P0 |
| Streak | Compteur jours consécutifs | P0 |
| Gems | Monnaie virtuelle (bonus) | P1 |
| Badges | Récompenses pour achievements | P1 |
| Classement | Leaderboard hebdomadaire | P2 |

### 2.4 Progression & Stats
| Feature | Description | Priorité |
|---------|-------------|----------|
| Dashboard | Vue d'ensemble progression | P0 |
| Objectif journalier | XP cible configurable | P0 |
| Historique | Leçons complétées avec scores | P1 |
| Mot du jour | Vocabulaire quotidien | P1 |
| Stats détaillées | Graphiques de progression | P2 |

### 2.5 PWA Features
| Feature | Description | Priorité |
|---------|-------------|----------|
| Installation | Add to Home Screen | P0 |
| Offline mode | Leçons accessibles hors ligne | P1 |
| Push notifications | Rappels quotidiens | P2 |
| Sync auto | Synchronisation données | P1 |

---

## 3. Contenu Pédagogique

### 3.1 Catégories de Leçons

```
1. Bases (5 leçons)
   - Salutations
   - Se présenter
   - Chiffres 1-20
   - Couleurs
   - Jours & Mois

2. Conversation (5 leçons)
   - Small Talk
   - Opinions
   - Émotions
   - Demander poliment
   - Au téléphone

3. Voyages (5 leçons)
   - À l'aéroport
   - À l'hôtel
   - Directions
   - Transports
   - Urgences voyage

4. Restaurant (5 leçons)
   - Commander
   - Préférences alimentaires
   - Boissons
   - Goûts & Textures
   - Problèmes au resto

5. Shopping (5 leçons)
   - Dans un magasin
   - Vêtements
   - Retours & Échanges
   - Négocier
   - Services

6. Travail (5 leçons)
   - Au bureau
   - Réunions
   - Entretien d'embauche
   - Networking
   - Problèmes au travail

7. Tech & Dev (5 leçons)
   - Vocabulaire Dev
   - Problèmes techniques
   - Code Review
   - Réunions Tech
   - Support Client Tech

8. Emails (5 leçons)
   - Débuter un email
   - Demandes par email
   - Répondre aux emails
   - Conclure un email
   - Emails délicats

9. Grammaire (5 leçons)
   - Present Simple
   - Present Continuous
   - Past Simple
   - Future (will/going to)
   - Modaux

10. Expressions (5 leçons)
    - Expressions courantes
    - Expressions business
    - Phrasal Verbs 1
    - Phrasal Verbs 2
    - Expressions familières
```

### 3.2 Types de Questions

| Type | Description | Exemple |
|------|-------------|---------|
| `translate` | Traduire FR→EN ou EN→FR | "Comment dit-on 'Bonjour' ?" |
| `fill` | Compléter une phrase | "She ___ to work" (goes) |
| `audio` | Écouter et identifier | 🔊 "Wednesday" = ? |
| `write` | Écrire la réponse | Écrivez 'hello' |
| `order` | Remettre mots dans l'ordre | [name, My, is, Salem] |

### 3.3 Structure d'une Leçon

```json
{
  "id": 1,
  "title": "Salutations",
  "icon": "👋",
  "category": "basics",
  "difficulty": 1,
  "xpReward": 15,
  "questions": [
    {
      "type": "translate",
      "question": "Comment dit-on 'Bonjour' ?",
      "options": ["Hello", "Goodbye", "Thanks", "Please"],
      "correct": 0,
      "hint": "C'est le mot le plus basique"
    }
  ]
}
```

---

## 4. Design & UX

### 4.1 Design System

**Couleurs principales:**
- Primary: Green (#22c55e → #10b981)
- Secondary: Yellow (#facc15 → #f59e0b)
- Accent: Purple (#a855f7)
- Error: Red (#ef4444)
- Background: Gray (#f9fafb)

**Typographie:**
- Font: Inter (Google Fonts)
- Headings: Bold, 20-32px
- Body: Regular, 14-16px

**Composants:**
- Buttons: Rounded-xl, shadows, gradients
- Cards: White, rounded-2xl, subtle shadow
- Progress bars: Rounded-full, gradient fills

### 4.2 Écrans Principaux

1. **Splash Screen** - Logo + loading
2. **Onboarding** - 3 slides d'introduction
3. **Auth** - Login / Register
4. **Home** - Catégories + Daily goal + Word of day
5. **Lesson** - Question + Options + Feedback
6. **Result** - Score + XP earned + Stats
7. **Profile** - Stats + Badges + Settings

### 4.3 Responsive Design

- Mobile-first (max-width: 448px centered)
- Touch-friendly (min tap target: 44px)
- Bottom navigation fixe
- Swipe gestures pour navigation

---

## 5. Spécifications Techniques

### 5.1 Architecture

```
┌─────────────────────────────────────────┐
│              Frontend (PWA)              │
│         Next.js + TypeScript            │
│         Tailwind CSS + Shadcn           │
└────────────────┬────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────┐
│              Backend API                 │
│         Next.js API Routes              │
│              + tRPC                      │
└────────────────┬────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────┐
│              Database                    │
│         PostgreSQL (Supabase)           │
│              + Prisma                    │
└─────────────────────────────────────────┘
```

### 5.2 Data Models

```prisma
model User {
  id            String   @id @default(cuid())
  email         String   @unique
  password      String?
  name          String?
  avatar        String?
  xp            Int      @default(0)
  level         Int      @default(1)
  hearts        Int      @default(5)
  gems          Int      @default(0)
  streak        Int      @default(0)
  lastActiveAt  DateTime @default(now())
  dailyGoal     Int      @default(50)
  createdAt     DateTime @default(now())
  progress      Progress[]
  badges        UserBadge[]
}

model Progress {
  id          String   @id @default(cuid())
  userId      String
  lessonId    Int
  score       Int
  completed   Boolean  @default(false)
  completedAt DateTime?
  user        User     @relation(fields: [userId], references: [id])
}

model Badge {
  id          String   @id @default(cuid())
  name        String
  description String
  icon        String
  condition   String
  users       UserBadge[]
}

model UserBadge {
  id        String   @id @default(cuid())
  userId    String
  badgeId   String
  earnedAt  DateTime @default(now())
  user      User     @relation(fields: [userId], references: [id])
  badge     Badge    @relation(fields: [badgeId], references: [id])
}
```

### 5.3 API Endpoints

```
Auth:
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout
POST   /api/auth/reset-password
GET    /api/auth/me

Users:
GET    /api/users/profile
PUT    /api/users/profile
GET    /api/users/stats
PUT    /api/users/settings

Lessons:
GET    /api/lessons
GET    /api/lessons/:id
GET    /api/lessons/categories

Progress:
GET    /api/progress
POST   /api/progress/complete
GET    /api/progress/streak
POST   /api/progress/hearts/refill

Gamification:
GET    /api/badges
GET    /api/leaderboard
POST   /api/daily-reward
```

---

## 6. Métriques de Succès

### 6.1 KPIs Techniques
- Lighthouse Score > 90 (Performance, PWA, Accessibility)
- First Contentful Paint < 1.5s
- Time to Interactive < 3s
- Offline functionality 100%

### 6.2 KPIs Business
- DAU (Daily Active Users)
- Retention D1/D7/D30
- Leçons complétées par user
- Streak moyen
- Taux de conversion (si premium)

---

## 7. Roadmap

### Phase 1 - MVP (4 semaines)
- [x] Setup projet Next.js + PWA
- [ ] Auth (email + Google)
- [ ] 10 premières leçons (Bases + Conversation)
- [ ] Système XP + Niveaux + Vies
- [ ] UI Home + Lesson + Profile
- [ ] Déploiement Vercel

### Phase 2 - Core Features (4 semaines)
- [ ] 40 leçons restantes
- [ ] Streak system
- [ ] Badges
- [ ] Objectif journalier
- [ ] Mot du jour
- [ ] Offline mode

### Phase 3 - Engagement (4 semaines)
- [ ] Push notifications
- [ ] Leaderboard
- [ ] Audio TTS
- [ ] Stats détaillées
- [ ] Social sharing

### Phase 4 - Monétisation (TBD)
- [ ] Premium features
- [ ] Ad-free option
- [ ] Extra content packs

---

## 8. Risques & Mitigations

| Risque | Impact | Probabilité | Mitigation |
|--------|--------|-------------|------------|
| Contenu insuffisant | High | Medium | Préparer 50+ leçons avant launch |
| Performance mobile | High | Low | Tests Lighthouse réguliers |
| Rétention faible | High | Medium | Gamification forte + notifications |
| Bugs auth | High | Low | Tests E2E complets |

---

## 9. Annexes

### 9.1 Références
- Duolingo (gamification, UX)
- Babbel (contenu structuré)
- Memrise (spaced repetition)

### 9.2 Ressources
- [Next.js PWA](https://github.com/shadowwalker/next-pwa)
- [Supabase Auth](https://supabase.com/docs/guides/auth)
- [Tailwind CSS](https://tailwindcss.com)

---

*Document créé le: $(date)*
*Version: 1.0*
*Auteur: Salem / Claude*
