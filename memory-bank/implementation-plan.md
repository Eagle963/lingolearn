# LingoLearn - Plan d'Implémentation

> Ce document contient les instructions étape par étape pour implémenter LingoLearn. Chaque étape est petite, précise, et inclut un test de validation.

---

## Phase 1 : Setup du Projet

### Étape 1.1 : Initialisation Next.js + TypeScript

**Instructions:**
1. Créer un nouveau projet Next.js avec TypeScript
2. Utiliser App Router
3. Configurer le path alias `@/` pour `./src/`
4. Créer la structure de dossiers de base

**Commandes:**
```bash
npx create-next-app@latest lingolearn --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd lingolearn
```

**Test de validation:**
- [ ] `npm run dev` démarre sans erreur
- [ ] Page http://localhost:3000 affiche le template Next.js
- [ ] `npm run build` compile sans erreur
- [ ] Fichier `tsconfig.json` contient `"@/*": ["./src/*"]`

---

### Étape 1.2 : Configuration Tailwind + Fonts

**Instructions:**
1. Ajouter la font Inter via `next/font/google`
2. Configurer les couleurs custom dans `tailwind.config.ts`
3. Ajouter `tailwindcss-animate` pour les animations
4. Créer le fichier `src/lib/utils.ts` avec la fonction `cn()`

**Fichiers à créer/modifier:**
- `src/app/layout.tsx` - Ajouter font Inter
- `tailwind.config.ts` - Couleurs primary/secondary
- `src/lib/utils.ts` - Helper cn()

**Test de validation:**
- [ ] La font Inter s'applique sur toute l'app
- [ ] Les classes `bg-primary` et `bg-secondary` fonctionnent
- [ ] La fonction `cn()` merge correctement les classes

---

### Étape 1.3 : Installation des dépendances core

**Instructions:**
1. Installer les dépendances listées dans tech-stack.md
2. Vérifier les versions compatibles
3. Ne pas encore configurer (juste installer)

**Commandes:**
```bash
npm install @supabase/supabase-js @supabase/ssr zustand zod framer-motion lucide-react clsx tailwind-merge class-variance-authority
npm install -D next-pwa
```

**Test de validation:**
- [ ] `npm ls` ne montre pas d'erreurs de peer dependencies
- [ ] `npm run build` compile toujours sans erreur

---

### Étape 1.4 : Configuration PWA de base

**Instructions:**
1. Configurer `next-pwa` dans `next.config.js`
2. Créer le fichier `src/app/manifest.ts` pour le Web App Manifest
3. Ajouter les meta tags PWA dans `layout.tsx`
4. Créer les icônes PWA (192x192, 512x512)

**Fichiers à créer:**
- `next.config.js` - Config next-pwa
- `src/app/manifest.ts` - PWA manifest
- `public/icons/icon-192x192.png`
- `public/icons/icon-512x512.png`

**Test de validation:**
- [ ] `npm run build && npm run start` 
- [ ] Lighthouse PWA score > 80
- [ ] Le manifest est accessible à `/manifest.webmanifest`
- [ ] "Add to Home Screen" disponible sur mobile

---

## Phase 2 : Setup Base de Données

### Étape 2.1 : Configuration Supabase

**Instructions:**
1. Créer un projet sur supabase.com
2. Récupérer les clés API
3. Créer le fichier `.env.local` avec les variables
4. Créer `.env.example` (sans les vraies valeurs)

**Fichiers à créer:**
- `.env.local` - Variables réelles
- `.env.example` - Template

**Test de validation:**
- [ ] Les variables sont accessibles via `process.env`
- [ ] `.env.local` est dans `.gitignore`

---

### Étape 2.2 : Setup Prisma

**Instructions:**
1. Initialiser Prisma avec PostgreSQL
2. Configurer la connexion Supabase dans `schema.prisma`
3. Créer le script de génération dans `package.json`

**Commandes:**
```bash
npx prisma init --datasource-provider postgresql
```

**Fichiers à modifier:**
- `prisma/schema.prisma` - Connection string
- `package.json` - Script "db:generate"

**Test de validation:**
- [ ] `npx prisma db pull` se connecte à Supabase (même si vide)
- [ ] Pas d'erreur de connexion

---

### Étape 2.3 : Schéma Prisma - User Model

**Instructions:**
1. Créer le model User avec tous les champs gamification
2. Générer le client Prisma
3. Créer `src/lib/prisma.ts` pour le singleton

**Schéma à ajouter:**
```prisma
model User {
  id            String    @id @default(cuid())
  email         String    @unique
  passwordHash  String?
  name          String?
  avatar        String?
  xp            Int       @default(0)
  level         Int       @default(1)
  hearts        Int       @default(5)
  gems          Int       @default(0)
  streak        Int       @default(0)
  dailyGoal     Int       @default(50)
  dailyXp       Int       @default(0)
  lastActiveAt  DateTime  @default(now())
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}
```

**Test de validation:**
- [ ] `npx prisma generate` sans erreur
- [ ] `npx prisma db push` crée la table dans Supabase
- [ ] La table User est visible dans Supabase Dashboard

---

### Étape 2.4 : Schéma Prisma - Progress & Badges

**Instructions:**
1. Ajouter les models Progress, Badge, UserBadge
2. Configurer les relations
3. Push vers la base

**Schéma à ajouter:**
```prisma
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
}

model Badge {
  id          String      @id @default(cuid())
  name        String      @unique
  description String
  icon        String
  condition   String
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
}
```

**Test de validation:**
- [ ] `npx prisma db push` sans erreur
- [ ] Les 3 nouvelles tables visibles dans Supabase
- [ ] `npx prisma studio` affiche les relations

---

## Phase 3 : Authentification

### Étape 3.1 : Setup Supabase Auth Client

**Instructions:**
1. Créer `src/lib/supabase/client.ts` - Client browser
2. Créer `src/lib/supabase/server.ts` - Client server
3. Créer `src/lib/supabase/middleware.ts` - Middleware auth

**Test de validation:**
- [ ] Import `createBrowserClient` fonctionne côté client
- [ ] Import `createServerClient` fonctionne dans Server Components

---

### Étape 3.2 : Middleware d'authentification

**Instructions:**
1. Créer `src/middleware.ts`
2. Configurer les routes protégées (`/home`, `/lesson`, `/profile`)
3. Configurer les routes publiques (`/`, `/login`, `/register`)
4. Refresh automatique du token

**Test de validation:**
- [ ] Accès à `/home` sans auth → redirect `/login`
- [ ] Accès à `/login` avec auth → redirect `/home`

---

### Étape 3.3 : Page Register

**Instructions:**
1. Créer `src/app/(auth)/register/page.tsx`
2. Formulaire: email, password, confirm password
3. Validation avec Zod
4. Appel Supabase Auth `signUp`
5. Créer l'utilisateur dans la table User via Prisma

**Composants à créer:**
- `src/components/auth/RegisterForm.tsx`

**Test de validation:**
- [ ] Formulaire s'affiche correctement
- [ ] Validation erreurs (email invalide, passwords mismatch)
- [ ] Inscription crée un user dans Supabase Auth
- [ ] Inscription crée un user dans table User
- [ ] Redirect vers `/home` après succès

---

### Étape 3.4 : Page Login

**Instructions:**
1. Créer `src/app/(auth)/login/page.tsx`
2. Formulaire: email, password
3. Appel Supabase Auth `signInWithPassword`
4. Gestion erreurs (wrong credentials)
5. Link vers register

**Test de validation:**
- [ ] Login avec bon credentials → redirect `/home`
- [ ] Login avec mauvais credentials → message erreur
- [ ] Session persistée (refresh page = toujours connecté)

---

### Étape 3.5 : Logout

**Instructions:**
1. Créer fonction `signOut` dans un hook `useAuth`
2. Ajouter bouton logout dans le profil
3. Clear session + redirect `/login`

**Test de validation:**
- [ ] Click logout → redirect `/login`
- [ ] Après logout, accès `/home` → redirect `/login`

---

## Phase 4 : Data Layer - Leçons

### Étape 4.1 : Types TypeScript

**Instructions:**
1. Créer `src/types/lesson.ts` avec tous les types
2. Créer `src/types/user.ts`
3. Créer `src/types/index.ts` pour export centralisé

**Types à définir:**
```typescript
type QuestionType = 'translate' | 'fill' | 'audio' | 'write' | 'order';

interface Question {
  type: QuestionType;
  question: string;
  options?: string[];
  correct?: number;
  answer?: string;
  hint?: string;
  words?: string[];
}

interface Lesson {
  id: number;
  title: string;
  icon: string;
  category: string;
  difficulty: 1 | 2 | 3;
  xpReward: number;
  questions: Question[];
}

interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  lessonIds: number[];
}
```

**Test de validation:**
- [ ] Import des types fonctionne partout
- [ ] TypeScript ne montre pas d'erreurs

---

### Étape 4.2 : Données statiques - Catégories

**Instructions:**
1. Créer `src/data/categories.ts`
2. Définir les 10 catégories avec leurs métadonnées
3. Export `categories` array

**Test de validation:**
- [ ] `categories.length === 10`
- [ ] Chaque catégorie a un id, name, icon, color

---

### Étape 4.3 : Données statiques - Leçons Basics

**Instructions:**
1. Créer `src/data/lessons/basics.ts`
2. Implémenter les 5 leçons de la catégorie Basics
3. Chaque leçon a 6 questions minimum

**Leçons à créer:**
1. Salutations (id: 1)
2. Se présenter (id: 2)
3. Chiffres 1-20 (id: 3)
4. Couleurs (id: 4)
5. Jours & Mois (id: 5)

**Test de validation:**
- [ ] 5 leçons dans le fichier
- [ ] Chaque leçon a minimum 6 questions
- [ ] Tous les types de questions utilisés (translate, fill, audio, write)

---

### Étape 4.4 : Données statiques - Toutes les leçons

**Instructions:**
1. Créer un fichier par catégorie dans `src/data/lessons/`
2. Créer `src/data/lessons/index.ts` qui agrège tout
3. Export `lessons` array complet (50 leçons)

**Fichiers à créer:**
- `conversation.ts` (leçons 6-10)
- `travel.ts` (leçons 11-15)
- `food.ts` (leçons 16-20)
- `shopping.ts` (leçons 21-25)
- `work.ts` (leçons 26-30)
- `tech.ts` (leçons 31-35)
- `emails.ts` (leçons 36-40)
- `grammar.ts` (leçons 41-45)
- `idioms.ts` (leçons 46-50)

**Test de validation:**
- [ ] `lessons.length === 50`
- [ ] Chaque catégorie a exactement 5 leçons
- [ ] Les IDs sont uniques et séquentiels (1-50)

---

## Phase 5 : State Management

### Étape 5.1 : User Store (Zustand)

**Instructions:**
1. Créer `src/stores/useUserStore.ts`
2. State: user data, xp, level, hearts, gems, streak
3. Actions: setUser, addXp, loseHeart, refillHearts, updateStreak

**Test de validation:**
- [ ] `useUserStore.getState()` retourne le state initial
- [ ] `addXp(20)` met à jour xp et calcule le level
- [ ] `loseHeart()` décrémente hearts (min 0)

---

### Étape 5.2 : Lesson Store (Zustand)

**Instructions:**
1. Créer `src/stores/useLessonStore.ts`
2. State: currentLesson, currentQuestion, selectedAnswer, score, mistakes
3. Actions: startLesson, answerQuestion, nextQuestion, endLesson

**Test de validation:**
- [ ] `startLesson(lesson)` initialise correctement
- [ ] `answerQuestion(index)` calcule isCorrect
- [ ] `nextQuestion()` incrémente currentQuestion
- [ ] `endLesson()` retourne le résumé

---

### Étape 5.3 : Progress Store (Zustand)

**Instructions:**
1. Créer `src/stores/useProgressStore.ts`
2. State: completedLessons, dailyXp, dailyGoal
3. Actions: completeLesson, resetDailyXp

**Test de validation:**
- [ ] `completeLesson(lessonId)` ajoute à completedLessons
- [ ] `dailyXp` s'incrémente correctement

---

## Phase 6 : UI Components

### Étape 6.1 : Layout Components

**Instructions:**
1. Créer `src/components/layout/Container.tsx` - Max-width wrapper mobile
2. Créer `src/components/layout/BottomNav.tsx` - Navigation bottom
3. Modifier `src/app/(main)/layout.tsx` pour utiliser ces components

**Test de validation:**
- [ ] Container centre le contenu avec max-w-md
- [ ] BottomNav affiche Home et Profile icons
- [ ] Navigation entre pages fonctionne

---

### Étape 6.2 : Gamification Components

**Instructions:**
1. `src/components/gamification/StatsBar.tsx` - Streak, XP, Hearts, Gems
2. `src/components/gamification/XPProgress.tsx` - Barre de progression niveau
3. `src/components/gamification/DailyGoal.tsx` - Objectif journalier
4. `src/components/gamification/HeartDisplay.tsx` - Affichage vies

**Test de validation:**
- [ ] StatsBar affiche les 4 stats avec icônes
- [ ] XPProgress montre la barre animée
- [ ] Composants responsive sur mobile

---

### Étape 6.3 : Lesson Components - Base

**Instructions:**
1. `src/components/lesson/LessonCard.tsx` - Card catégorie sur Home
2. `src/components/lesson/ProgressBar.tsx` - Progression dans leçon
3. `src/components/lesson/QuestionHeader.tsx` - Type de question + texte

**Test de validation:**
- [ ] LessonCard affiche icon, title, xp, difficulty stars
- [ ] LessonCard désactivée si locked
- [ ] ProgressBar animée smooth

---

### Étape 6.4 : Lesson Components - Questions

**Instructions:**
1. `src/components/lesson/OptionButton.tsx` - Bouton réponse QCM
2. `src/components/lesson/WriteInput.tsx` - Input pour questions write
3. `src/components/lesson/FeedbackBanner.tsx` - Correct/Incorrect feedback

**Test de validation:**
- [ ] OptionButton change de couleur selon état (default, selected, correct, wrong)
- [ ] WriteInput valide sur Enter
- [ ] FeedbackBanner s'affiche en bas avec animation

---

### Étape 6.5 : Result Screen Components

**Instructions:**
1. `src/components/result/ResultCard.tsx` - Card résumé fin de leçon
2. `src/components/result/ScoreCircle.tsx` - Cercle animé avec %
3. `src/components/result/XPEarned.tsx` - Animation XP gagné

**Test de validation:**
- [ ] ResultCard affiche score, XP, accuracy
- [ ] Animations Framer Motion fluides
- [ ] Bouton Continue redirige vers Home

---

## Phase 7 : Pages Principales

### Étape 7.1 : Home Page

**Instructions:**
1. Créer `src/app/(main)/home/page.tsx`
2. Afficher: StatsBar, DailyGoal, WordOfDay, Categories avec leçons
3. Fetch user data depuis Prisma
4. Afficher leçons locked/unlocked selon progress

**Test de validation:**
- [ ] Page charge les données user
- [ ] Catégories cliquables pour expand/collapse
- [ ] Leçons complétées ont un check vert
- [ ] Leçons locked ont un cadenas

---

### Étape 7.2 : Lesson Page - Setup

**Instructions:**
1. Créer `src/app/(main)/lesson/[id]/page.tsx`
2. Récupérer la leçon par ID
3. Initialiser le lesson store
4. Afficher ProgressBar + première question

**Test de validation:**
- [ ] URL `/lesson/1` charge la leçon 1
- [ ] ID invalide → redirect Home ou 404
- [ ] State initialisé correctement

---

### Étape 7.3 : Lesson Page - Question Flow

**Instructions:**
1. Implémenter le flow de réponse aux questions
2. Afficher feedback après réponse
3. Bouton Continue pour next question
4. Gérer perte de vie sur erreur
5. Redirect si plus de vies

**Test de validation:**
- [ ] Sélection réponse → feedback immédiat
- [ ] Bonne réponse → vert + "Excellent!"
- [ ] Mauvaise réponse → rouge + affiche bonne réponse + perd 1 vie
- [ ] Plus de vies → modal + redirect Home

---

### Étape 7.4 : Lesson Page - Completion

**Instructions:**
1. Après dernière question → écran résultat
2. Calculer XP gagné (basé sur score)
3. Sauvegarder progress dans DB
4. Mettre à jour user XP + level si nécessaire
5. Check badges à débloquer

**Test de validation:**
- [ ] Écran résultat affiche stats correctes
- [ ] Progress sauvé en DB (vérifier Prisma Studio)
- [ ] XP user mis à jour
- [ ] Level up si seuil atteint

---

### Étape 7.5 : Profile Page

**Instructions:**
1. Créer `src/app/(main)/profile/page.tsx`
2. Afficher: Avatar, Name, Level, Stats grid
3. Section Badges (earned + locked)
4. Section Progression vers next level
5. Bouton Logout

**Test de validation:**
- [ ] Toutes les stats affichées correctement
- [ ] Badges earned vs locked différenciés
- [ ] Logout fonctionne

---

## Phase 8 : Features Avancées

### Étape 8.1 : Streak System

**Instructions:**
1. Logique: streak++ si activité dans les 24h
2. Reset streak si > 24h sans activité
3. Vérification au login + après leçon
4. Afficher streak dans StatsBar

**Test de validation:**
- [ ] Compléter leçon → streak +1 (si premier du jour)
- [ ] Deuxième leçon même jour → streak inchangé
- [ ] Skip 1 jour → streak reset à 0

---

### Étape 8.2 : Daily Goal

**Instructions:**
1. Objectif XP journalier (default 50)
2. Reset dailyXp à minuit
3. Barre de progression sur Home
4. Reward quand goal atteint (gems bonus)

**Test de validation:**
- [ ] dailyXp s'incrémente avec chaque leçon
- [ ] Barre se remplit proportionnellement
- [ ] À 100% → message "Objectif atteint!"

---

### Étape 8.3 : Heart Refill

**Instructions:**
1. Timer pour regagner 1 vie toutes les 30 min
2. Ou option "Watch ad" (simulée) pour +1 vie
3. Ou dépenser gems pour refill complet
4. Max 5 vies

**Test de validation:**
- [ ] Timer affiché quand < 5 vies
- [ ] Refill avec gems fonctionne
- [ ] Pas de refill si déjà 5 vies

---

### Étape 8.4 : Badges System

**Instructions:**
1. Seed les badges dans DB
2. Check conditions après chaque leçon
3. Unlock badge + notification
4. Afficher badges sur Profile

**Badges à implémenter:**
- 🌱 First Lesson (compléter 1 leçon)
- ⭐ Five Stars (5 leçons)
- 🏆 Century (100 XP)
- 🔥 Week Streak (7 jours)
- 💎 Collector (10 leçons)
- 👑 Master (toutes les leçons d'une catégorie)

**Test de validation:**
- [ ] Badge débloqué quand condition remplie
- [ ] Badge visible sur Profile
- [ ] Pas de doublon si déjà earned

---

### Étape 8.5 : Word of the Day

**Instructions:**
1. Créer `src/data/words.ts` avec 30+ mots
2. Sélection basée sur la date (deterministic)
3. Afficher sur Home: word, phonetic, meaning, example
4. Nouveau mot chaque jour

**Test de validation:**
- [ ] Même mot affiché toute la journée
- [ ] Mot différent le lendemain
- [ ] Affichage correct sur Home

---

## Phase 9 : Polish & Optimization

### Étape 9.1 : Animations

**Instructions:**
1. Page transitions avec Framer Motion
2. Micro-interactions sur boutons
3. Confetti/celebration sur lesson complete
4. Smooth progress bar animations

**Test de validation:**
- [ ] Transitions fluides entre pages
- [ ] Pas de layout shift
- [ ] Animations ne lag pas sur mobile

---

### Étape 9.2 : Sound Effects (optionnel)

**Instructions:**
1. Ajouter sons: correct, wrong, levelup, complete
2. Utiliser `use-sound` hook
3. Option mute dans settings
4. Fichiers .mp3 dans public/sounds

**Test de validation:**
- [ ] Sons jouent aux bons moments
- [ ] Mute fonctionne
- [ ] Pas de lag audio

---

### Étape 9.3 : Offline Support

**Instructions:**
1. Configurer Workbox strategies
2. Cache: pages, assets, lessons data
3. Indicator online/offline
4. Sync progress quand reconnecté

**Test de validation:**
- [ ] App fonctionne sans internet
- [ ] Leçons jouables offline
- [ ] Progress sync au retour online

---

### Étape 9.4 : Performance Audit

**Instructions:**
1. Run Lighthouse audit
2. Fix tout score < 90
3. Optimize images (WebP, lazy load)
4. Code splitting si needed

**Test de validation:**
- [ ] Lighthouse Performance > 90
- [ ] Lighthouse PWA = 100
- [ ] Lighthouse Accessibility > 90
- [ ] First Load < 100kb JS

---

### Étape 9.5 : Testing Final

**Instructions:**
1. Test complet du flow user: register → lessons → profile
2. Test sur mobile réel (iOS + Android)
3. Test PWA install
4. Fix tous les bugs trouvés

**Test de validation:**
- [ ] Flow complet sans erreur
- [ ] Responsive parfait sur mobile
- [ ] PWA installable et fonctionnelle
- [ ] Aucun bug bloquant

---

## Phase 10 : Déploiement

### Étape 10.1 : Setup Vercel

**Instructions:**
1. Connecter repo GitHub à Vercel
2. Configurer variables d'environnement
3. Configurer domaine custom (optionnel)

**Test de validation:**
- [ ] Build réussi sur Vercel
- [ ] Preview URL fonctionne
- [ ] Variables env correctement configurées

---

### Étape 10.2 : Production Deploy

**Instructions:**
1. Merge vers main
2. Auto-deploy Vercel
3. Vérifier toutes les fonctionnalités en prod
4. Monitor erreurs (Vercel Analytics)

**Test de validation:**
- [ ] Site live accessible
- [ ] Auth fonctionne en prod
- [ ] DB connectée
- [ ] PWA installable en prod

---

## Checklist Finale

- [ ] Toutes les 50 leçons fonctionnelles
- [ ] Auth (register, login, logout)
- [ ] Gamification (XP, levels, hearts, streak)
- [ ] Progress sauvegardé
- [ ] PWA installable
- [ ] Offline mode
- [ ] Performance > 90
- [ ] Mobile responsive
- [ ] Aucun bug critique

---

*Plan créé le: $(date)*
*Version: 1.0*
*Estimé: 4-6 semaines*
