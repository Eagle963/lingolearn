# LingoLearn - Architecture Documentation

> Ce document décrit l'architecture technique du projet et le rôle de chaque fichier/dossier. À mettre à jour après chaque milestone.

---

## Vue d'ensemble

```
┌─────────────────────────────────────────────────────────┐
│                      Client (PWA)                        │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐  │
│  │   Pages     │  │  Components │  │    Stores       │  │
│  │  (App Router)│  │   (React)   │  │   (Zustand)     │  │
│  └──────┬──────┘  └──────┬──────┘  └────────┬────────┘  │
│         │                │                   │           │
│         └────────────────┼───────────────────┘           │
│                          │                               │
│                    ┌─────▼─────┐                         │
│                    │   Hooks   │                         │
│                    └─────┬─────┘                         │
└──────────────────────────┼───────────────────────────────┘
                           │
                    ┌──────▼──────┐
                    │  API Routes │
                    │   (tRPC)    │
                    └──────┬──────┘
                           │
              ┌────────────┼────────────┐
              │            │            │
        ┌─────▼─────┐ ┌────▼────┐ ┌─────▼─────┐
        │  Supabase │ │  Prisma │ │  Static   │
        │   Auth    │ │   ORM   │ │   Data    │
        └─────┬─────┘ └────┬────┘ └───────────┘
              │            │
              └─────┬──────┘
                    │
            ┌───────▼───────┐
            │  PostgreSQL   │
            │  (Supabase)   │
            └───────────────┘
```

---

## Structure des Dossiers

### `/src/app` - Next.js App Router

```
app/
├── (auth)/                 # Groupe routes non-authentifiées
│   ├── login/
│   │   └── page.tsx       # Page de connexion
│   ├── register/
│   │   └── page.tsx       # Page d'inscription
│   └── layout.tsx         # Layout auth (centered, no nav)
│
├── (main)/                 # Groupe routes authentifiées
│   ├── home/
│   │   └── page.tsx       # Dashboard principal
│   ├── lesson/
│   │   └── [id]/
│   │       └── page.tsx   # Page de leçon dynamique
│   ├── profile/
│   │   └── page.tsx       # Profil utilisateur
│   └── layout.tsx         # Layout main (avec BottomNav)
│
├── api/                    # API Routes
│   └── trpc/
│       └── [trpc]/
│           └── route.ts   # Handler tRPC
│
├── layout.tsx              # Root layout (fonts, providers)
├── page.tsx                # Landing/Splash page
├── manifest.ts             # PWA Web App Manifest
└── globals.css             # Styles globaux Tailwind
```

### `/src/components` - Composants React

```
components/
├── ui/                     # Composants Shadcn/ui (primitives)
│   ├── button.tsx
│   ├── input.tsx
│   ├── card.tsx
│   └── ...
│
├── layout/                 # Composants de mise en page
│   ├── Container.tsx      # Wrapper max-width mobile
│   ├── BottomNav.tsx      # Navigation bottom fixe
│   └── Header.tsx         # Header avec stats
│
├── auth/                   # Composants authentification
│   ├── LoginForm.tsx
│   ├── RegisterForm.tsx
│   └── LogoutButton.tsx
│
├── gamification/           # Composants gamification
│   ├── StatsBar.tsx       # Barre XP/Hearts/Streak/Gems
│   ├── XPProgress.tsx     # Barre progression niveau
│   ├── DailyGoal.tsx      # Objectif journalier
│   ├── HeartDisplay.tsx   # Affichage vies
│   ├── StreakBadge.tsx    # Badge streak
│   └── LevelBadge.tsx     # Badge niveau
│
├── lesson/                 # Composants leçons
│   ├── CategoryCard.tsx   # Card catégorie expandable
│   ├── LessonCard.tsx     # Card leçon individuelle
│   ├── ProgressBar.tsx    # Barre progression leçon
│   ├── QuestionHeader.tsx # Header question
│   ├── OptionButton.tsx   # Bouton réponse QCM
│   ├── WriteInput.tsx     # Input question écriture
│   ├── FeedbackBanner.tsx # Feedback correct/incorrect
│   └── HintButton.tsx     # Bouton indice
│
├── result/                 # Composants résultat
│   ├── ResultCard.tsx     # Card résumé
│   ├── ScoreCircle.tsx    # Cercle score animé
│   ├── XPEarned.tsx       # Animation XP
│   └── BadgeUnlock.tsx    # Modal badge débloqué
│
└── home/                   # Composants Home spécifiques
    ├── WordOfDay.tsx      # Mot du jour
    └── QuickStats.tsx     # Stats rapides
```

### `/src/lib` - Utilitaires et configurations

```
lib/
├── supabase/
│   ├── client.ts          # Supabase browser client
│   ├── server.ts          # Supabase server client
│   └── middleware.ts      # Auth middleware helpers
│
├── trpc/
│   ├── client.ts          # tRPC React client
│   ├── server.ts          # tRPC server setup
│   └── routers/
│       ├── index.ts       # Root router
│       ├── user.ts        # User procedures
│       ├── lesson.ts      # Lesson procedures
│       └── progress.ts    # Progress procedures
│
├── prisma.ts              # Prisma client singleton
├── utils.ts               # Helpers (cn, formatters)
└── constants.ts           # Constantes app
```

### `/src/stores` - State Management Zustand

```
stores/
├── useUserStore.ts        # State utilisateur (xp, level, hearts...)
├── useLessonStore.ts      # State leçon en cours
├── useProgressStore.ts    # State progression globale
└── useSettingsStore.ts    # State paramètres (sound, theme...)
```

### `/src/hooks` - Custom Hooks

```
hooks/
├── useAuth.ts             # Hook authentification
├── useLesson.ts           # Hook logique leçon
├── useProgress.ts         # Hook progression
├── useStreak.ts           # Hook streak
└── useDailyGoal.ts        # Hook objectif journalier
```

### `/src/data` - Données statiques

```
data/
├── categories.ts          # Définition des 10 catégories
├── badges.ts              # Définition des badges
├── words.ts               # Mots du jour
└── lessons/
    ├── index.ts           # Export agrégé de toutes les leçons
    ├── basics.ts          # Leçons 1-5
    ├── conversation.ts    # Leçons 6-10
    ├── travel.ts          # Leçons 11-15
    ├── food.ts            # Leçons 16-20
    ├── shopping.ts        # Leçons 21-25
    ├── work.ts            # Leçons 26-30
    ├── tech.ts            # Leçons 31-35
    ├── emails.ts          # Leçons 36-40
    ├── grammar.ts         # Leçons 41-45
    └── idioms.ts          # Leçons 46-50
```

### `/src/types` - TypeScript Types

```
types/
├── index.ts               # Export centralisé
├── lesson.ts              # Types Lesson, Question, Category
├── user.ts                # Types User, Progress, Badge
└── api.ts                 # Types API responses
```

### `/prisma` - Database

```
prisma/
├── schema.prisma          # Schéma base de données
└── seed.ts                # Script de seed (badges, etc.)
```

---

## Database Schema

```prisma
// Schéma complet Prisma

model User {
  id            String      @id @default(cuid())
  email         String      @unique
  passwordHash  String?
  name          String?
  avatar        String?
  xp            Int         @default(0)
  level         Int         @default(1)
  hearts        Int         @default(5)
  gems          Int         @default(0)
  streak        Int         @default(0)
  dailyGoal     Int         @default(50)
  dailyXp       Int         @default(0)
  lastActiveAt  DateTime    @default(now())
  createdAt     DateTime    @default(now())
  updatedAt     DateTime    @updatedAt
  progress      Progress[]
  badges        UserBadge[]
}

model Progress {
  id          String    @id @default(cuid())
  lessonId    Int
  score       Int
  mistakes    Int       @default(0)
  xpEarned    Int       @default(0)
  completedAt DateTime  @default(now())
  userId      String
  user        User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  @@unique([userId, lessonId])
  @@index([userId])
}

model Badge {
  id          String      @id @default(cuid())
  name        String      @unique
  description String
  icon        String
  condition   String      // JSON condition
  users       UserBadge[]
}

model UserBadge {
  id       String   @id @default(cuid())
  earnedAt DateTime @default(now())
  userId   String
  badgeId  String
  user     User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  badge    Badge    @relation(fields: [badgeId], references: [id], onDelete: Cascade)
  
  @@unique([userId, badgeId])
  @@index([userId])
}
```

---

## Data Flow

### 1. Authentification

```
User → LoginForm → Supabase Auth → Session Cookie → Middleware Check → Protected Routes
```

### 2. Chargement Home

```
Page Load → Server Component → Prisma (User + Progress) → Client Components → Zustand Hydrate
```

### 3. Complétion Leçon

```
User Answer → Lesson Store Update → Local State → 
On Complete → tRPC Mutation → Prisma Update → 
Revalidate → User Store Update → Redirect Home
```

### 4. Streak Check

```
Login/Lesson Complete → Check lastActiveAt → 
If < 24h && different day → streak++ → 
If > 24h → streak = 0 → 
Update DB
```

---

## Conventions de Code

### Naming
- Components: `PascalCase` (ex: `LessonCard.tsx`)
- Hooks: `camelCase` avec prefix `use` (ex: `useLesson.ts`)
- Stores: `camelCase` avec prefix `use` (ex: `useUserStore.ts`)
- Utils: `camelCase` (ex: `formatXp.ts`)
- Types: `PascalCase` (ex: `Lesson`, `User`)

### Imports
```typescript
// 1. React/Next
import { useState } from 'react';
import { useRouter } from 'next/navigation';

// 2. External libs
import { motion } from 'framer-motion';

// 3. Internal - absolute paths
import { Button } from '@/components/ui/button';
import { useUserStore } from '@/stores/useUserStore';

// 4. Types
import type { Lesson } from '@/types';
```

### Component Structure
```typescript
// 1. Imports
// 2. Types/Interfaces
// 3. Component
// 4. Subcomponents (if small)
// 5. Export
```

---

## Fichiers Modifiés par Étape

*À remplir au fur et à mesure de l'implémentation*

### Phase 1
- [ ] Étape 1.1: `package.json`, `tsconfig.json`
- [ ] Étape 1.2: `tailwind.config.ts`, `src/app/layout.tsx`, `src/lib/utils.ts`
- ...

---

*Dernière mise à jour: À remplir*
*Version: 1.0*
