# CLAUDE.md - Rules for AI Development

> Ce fichier contient les règles et instructions pour les assistants IA travaillant sur ce projet.

---

## 🔴 RÈGLES CRITIQUES (TOUJOURS)

### Lecture Obligatoire Avant Tout Code

```
IMPORTANT - TOUJOURS FAIRE AVANT D'ÉCRIRE DU CODE:

1. Lire memory-bank/architecture.md pour comprendre la structure
2. Lire memory-bank/implementation-plan.md pour l'étape actuelle
3. Lire memory-bank/progress.md pour voir ce qui est fait
4. Vérifier memory-bank/product-requirements-document.md pour les specs
```

### Mise à Jour Obligatoire Après Chaque Feature

```
IMPORTANT - TOUJOURS FAIRE APRÈS UNE FEATURE:

1. Mettre à jour memory-bank/progress.md avec les fichiers modifiés
2. Mettre à jour memory-bank/architecture.md si nouvelle structure
3. Commiter avec un message clair
```

---

## 📁 Structure & Modularité

### Règles de Fichiers

- **MAX 200 lignes par fichier** - Si plus, split en modules
- **1 composant = 1 fichier** - Pas de composants multiples par fichier
- **Pas de fichiers monolithiques** - Toujours modulariser
- **Nommage explicite** - Le nom du fichier = ce qu'il fait

### Exemple de Split

```typescript
// ❌ MAUVAIS - Tout dans un fichier
// components/Lesson.tsx (500 lignes)

// ✅ BON - Modulaire
// components/lesson/LessonCard.tsx
// components/lesson/QuestionCard.tsx
// components/lesson/OptionButton.tsx
// components/lesson/FeedbackBanner.tsx
// components/lesson/index.ts (exports)
```

---

## 🛠️ Stack Technique

### Technologies Obligatoires

| Usage | Technologie | Notes |
|-------|-------------|-------|
| Framework | Next.js 14 (App Router) | Pas de Pages Router |
| Language | TypeScript | Strict mode |
| Styling | Tailwind CSS | Pas de CSS modules |
| State | Zustand | Pas de Redux |
| Database | Prisma + Supabase | PostgreSQL |
| Auth | Supabase Auth | Sessions JWT |
| API | tRPC | Type-safe |

### Interdictions

- ❌ Pas de `any` TypeScript (utiliser `unknown` si nécessaire)
- ❌ Pas de CSS-in-JS (styled-components, emotion)
- ❌ Pas de Redux ou MobX
- ❌ Pas de Firebase
- ❌ Pas de Pages Router Next.js

---

## 🎨 Conventions de Code

### TypeScript

```typescript
// ✅ Types explicites pour les props
interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

// ✅ Utiliser satisfies pour les objets
const config = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL,
} satisfies Config;

// ❌ Pas de any
const data: any = fetch(); // INTERDIT
```

### Composants React

```typescript
// ✅ Format standard d'un composant
'use client'; // Si nécessaire

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { ButtonProps } from './types';

export function Button({ variant, children, onClick }: ButtonProps) {
  return (
    <motion.button
      className={cn(
        'px-4 py-2 rounded-lg font-medium',
        variant === 'primary' && 'bg-primary text-white',
        variant === 'secondary' && 'bg-gray-100 text-gray-800'
      )}
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
```

### Imports

```typescript
// Ordre des imports (automatique avec ESLint)

// 1. React / Next.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// 2. Librairies externes
import { motion } from 'framer-motion';
import { Heart, Star } from 'lucide-react';

// 3. Composants internes (chemin absolu)
import { Button } from '@/components/ui/button';
import { useUserStore } from '@/stores/useUserStore';

// 4. Utils / Lib
import { cn } from '@/lib/utils';

// 5. Types
import type { Lesson, Question } from '@/types';
```

---

## 📱 PWA & Mobile First

### Règles Mobile

- **Touch targets minimum 44x44px**
- **Pas de hover-only interactions** (toujours fallback touch)
- **Bottom navigation** pour actions principales
- **Pas de scroll horizontal** non intentionnel

### PWA Checklist

- [ ] Manifest.json configuré
- [ ] Service Worker actif
- [ ] Icons toutes tailles (192, 512)
- [ ] Offline fallback page
- [ ] Add to Home Screen prompt

---

## 🎮 Gamification Logic

### Formules

```typescript
// Calcul du niveau basé sur XP
const calculateLevel = (xp: number): number => {
  return Math.floor(xp / 100) + 1;
};

// XP gagné par leçon
const calculateXpEarned = (baseXp: number, score: number, totalQuestions: number): number => {
  const accuracy = score / totalQuestions;
  return Math.round(baseXp * accuracy);
};

// Check streak
const shouldIncrementStreak = (lastActiveAt: Date): boolean => {
  const now = new Date();
  const lastActive = new Date(lastActiveAt);
  const diffHours = (now.getTime() - lastActive.getTime()) / (1000 * 60 * 60);
  const isDifferentDay = now.toDateString() !== lastActive.toDateString();
  
  return diffHours < 48 && isDifferentDay;
};
```

### Règles Business

- **5 vies max** - Regain 1 vie / 30 min ou gems
- **Streak reset** si > 24h sans activité
- **Level up** tous les 100 XP
- **Leçon unlocked** si précédente complétée (dans la catégorie)

---

## 🗄️ Database

### Conventions Prisma

```prisma
// Naming
model User { }           // PascalCase singulier
model UserBadge { }      // Relations = combinaison des deux

// Champs
id            String   @id @default(cuid())  // Toujours cuid()
createdAt     DateTime @default(now())       // Toujours
updatedAt     DateTime @updatedAt            // Toujours

// Relations
@@index([userId])        // Index sur FK
@@unique([userId, lessonId])  // Contraintes uniques
```

### Requêtes Optimisées

```typescript
// ✅ Select only needed fields
const user = await prisma.user.findUnique({
  where: { id: userId },
  select: {
    xp: true,
    level: true,
    hearts: true,
  },
});

// ✅ Include relations when needed
const userWithProgress = await prisma.user.findUnique({
  where: { id: userId },
  include: {
    progress: {
      orderBy: { completedAt: 'desc' },
      take: 10,
    },
  },
});
```

---

## 🧪 Tests

### Validation Manuelle par Étape

Chaque étape de `implementation-plan.md` a des tests à valider:

```markdown
**Test de validation:**
- [ ] Test 1
- [ ] Test 2
- [ ] Test 3
```

**Ne pas passer à l'étape suivante tant que tous les tests ne passent pas.**

### Tests à Effectuer

1. **Build test**: `npm run build` sans erreur
2. **Type check**: `npm run type-check` sans erreur
3. **Lint**: `npm run lint` sans erreur
4. **Fonctionnel**: Tester manuellement la feature

---

## 📝 Git & Commits

### Format des Commits

```
<type>(<scope>): <description>

Types:
- feat: Nouvelle fonctionnalité
- fix: Correction de bug
- refactor: Refactoring sans changement fonctionnel
- style: Changements de style (formatting)
- docs: Documentation
- chore: Maintenance (deps, config)

Exemples:
feat(auth): add login page with email/password
fix(lesson): correct XP calculation on completion
refactor(stores): split userStore into smaller modules
docs(readme): add setup instructions
```

### Workflow

1. **Avant de coder**: Lire les docs dans memory-bank/
2. **Pendant**: Commits fréquents et petits
3. **Après**: Update progress.md et architecture.md
4. **Push**: Vérifier que build passe

---

## 🚫 Anti-Patterns à Éviter

### Code

```typescript
// ❌ Props drilling excessif
<GrandParent>
  <Parent data={data}>
    <Child data={data}>
      <GrandChild data={data} />  // Utiliser Zustand

// ❌ useEffect pour tout
useEffect(() => {
  fetchData();
}, []);  // Utiliser Server Components ou React Query

// ❌ État local pour données globales
const [user, setUser] = useState(null);  // Utiliser Zustand store
```

### Architecture

- ❌ Pas de logique métier dans les composants UI
- ❌ Pas de fetch direct dans les composants (utiliser hooks/tRPC)
- ❌ Pas de styles inline (sauf Framer Motion)
- ❌ Pas de magic numbers (utiliser constantes)

---

## 🆘 Troubleshooting

### Erreurs Communes

| Erreur | Cause | Solution |
|--------|-------|----------|
| "Module not found" | Import path incorrect | Vérifier alias `@/` |
| "Hydration mismatch" | Server/Client différents | Ajouter `'use client'` |
| Prisma "P2002" | Contrainte unique violée | Vérifier les doublons |
| "localStorage not defined" | SSR | Wrapper dans useEffect |

### Commandes Utiles

```bash
# Reset complet
rm -rf node_modules .next
npm install
npm run dev

# Reset DB
npx prisma db push --force-reset
npx prisma db seed

# Debug Prisma
npx prisma studio
```

---

## ✅ Checklist Avant PR/Merge

- [ ] Code buildable (`npm run build`)
- [ ] Types OK (`npm run type-check`)
- [ ] Lint OK (`npm run lint`)
- [ ] Tests manuels passés
- [ ] progress.md mis à jour
- [ ] architecture.md mis à jour si nécessaire
- [ ] Pas de `console.log` oubliés
- [ ] Pas de code commenté inutile
- [ ] Commits propres et descriptifs

---

*Ce fichier est la source de vérité pour le développement IA sur ce projet.*
