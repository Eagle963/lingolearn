# LingoLearn - Tech Stack

## Philosophie

> **Simple mais robuste** : Chaque technologie choisie doit être mature, bien documentée, et éviter la sur-ingénierie. On privilégie la productivité développeur et la maintenabilité.

---

## Stack Principale

### Frontend

| Technologie | Version | Justification |
|-------------|---------|---------------|
| **Next.js** | 14.x (App Router) | Framework React full-stack, SSR/SSG, API routes intégrées, excellent pour PWA |
| **TypeScript** | 5.x | Type safety, meilleure DX, moins de bugs runtime |
| **Tailwind CSS** | 3.x | Utility-first, rapide à prototyper, excellent pour mobile |
| **Shadcn/ui** | Latest | Composants accessibles, customisables, pas de dépendance npm |
| **Lucide React** | Latest | Icônes consistantes, légères, tree-shakeable |
| **Framer Motion** | 11.x | Animations fluides, gestures mobile |

### PWA

| Technologie | Justification |
|-------------|---------------|
| **next-pwa** | Plugin officiel, service worker automatique |
| **Workbox** | Stratégies de cache avancées (offline-first) |

### Backend

| Technologie | Version | Justification |
|-------------|---------|---------------|
| **Next.js API Routes** | 14.x | Pas de serveur séparé, serverless ready |
| **tRPC** | 11.x | Type-safe API, excellent avec TypeScript |
| **Zod** | 3.x | Validation schemas, intégration tRPC |

### Base de Données

| Technologie | Justification |
|-------------|---------------|
| **Supabase** | PostgreSQL managé, Auth intégrée, Realtime, gratuit pour MVP |
| **Prisma** | ORM type-safe, migrations faciles, excellent DX |

### Authentification

| Technologie | Justification |
|-------------|---------------|
| **Supabase Auth** | Email/password + OAuth (Google), sessions JWT, gratuit |
| **next-auth** | Alternative si besoin de plus de providers |

### State Management

| Technologie | Justification |
|-------------|---------------|
| **Zustand** | Léger (1kb), simple, pas de boilerplate |
| **TanStack Query** | Cache serveur, sync auto, offline support |

### Déploiement

| Service | Justification |
|---------|---------------|
| **Vercel** | Déploiement Next.js natif, edge functions, preview URLs |
| **Supabase Cloud** | Database + Auth hébergés, backups automatiques |

---

## Structure du Projet

```
lingolearn/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/            # Routes authentification
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   └── layout.tsx
│   │   ├── (main)/            # Routes principales (protected)
│   │   │   ├── home/
│   │   │   ├── lesson/[id]/
│   │   │   ├── profile/
│   │   │   └── layout.tsx
│   │   ├── api/               # API Routes (tRPC)
│   │   │   └── trpc/[trpc]/
│   │   ├── layout.tsx
│   │   ├── page.tsx           # Landing/Splash
│   │   └── manifest.ts        # PWA manifest
│   │
│   ├── components/
│   │   ├── ui/                # Shadcn components
│   │   ├── lesson/            # Composants leçons
│   │   │   ├── QuestionCard.tsx
│   │   │   ├── OptionButton.tsx
│   │   │   ├── ProgressBar.tsx
│   │   │   └── FeedbackModal.tsx
│   │   ├── gamification/      # Composants gamification
│   │   │   ├── XPCounter.tsx
│   │   │   ├── HeartDisplay.tsx
│   │   │   ├── StreakBadge.tsx
│   │   │   └── LevelProgress.tsx
│   │   └── layout/            # Layout components
│   │       ├── Navbar.tsx
│   │       ├── BottomNav.tsx
│   │       └── Container.tsx
│   │
│   ├── lib/
│   │   ├── supabase/          # Supabase client
│   │   │   ├── client.ts
│   │   │   ├── server.ts
│   │   │   └── middleware.ts
│   │   ├── trpc/              # tRPC setup
│   │   │   ├── client.ts
│   │   │   ├── server.ts
│   │   │   └── routers/
│   │   ├── utils.ts           # Helpers
│   │   └── constants.ts       # App constants
│   │
│   ├── stores/                # Zustand stores
│   │   ├── useUserStore.ts
│   │   ├── useLessonStore.ts
│   │   └── useGameStore.ts
│   │
│   ├── hooks/                 # Custom hooks
│   │   ├── useAuth.ts
│   │   ├── useLesson.ts
│   │   └── useProgress.ts
│   │
│   ├── data/                  # Static data
│   │   ├── lessons/
│   │   │   ├── basics.ts
│   │   │   ├── conversation.ts
│   │   │   └── index.ts
│   │   └── badges.ts
│   │
│   └── types/                 # TypeScript types
│       ├── lesson.ts
│       ├── user.ts
│       └── index.ts
│
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
│
├── public/
│   ├── icons/                 # PWA icons
│   ├── sounds/                # Sound effects
│   └── images/
│
├── memory-bank/               # Documentation
│   ├── product-requirements-document.md
│   ├── tech-stack.md
│   ├── implementation-plan.md
│   ├── architecture.md
│   └── progress.md
│
├── .env.local
├── .env.example
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Dépendances NPM

### Dependencies

```json
{
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "@supabase/supabase-js": "^2.43.0",
    "@supabase/ssr": "^0.3.0",
    "@prisma/client": "^5.14.0",
    "@trpc/client": "^11.0.0",
    "@trpc/server": "^11.0.0",
    "@trpc/react-query": "^11.0.0",
    "@tanstack/react-query": "^5.40.0",
    "zustand": "^4.5.0",
    "zod": "^3.23.0",
    "framer-motion": "^11.2.0",
    "lucide-react": "^0.378.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.3.0",
    "class-variance-authority": "^0.7.0"
  }
}
```

### DevDependencies

```json
{
  "devDependencies": {
    "typescript": "^5.4.0",
    "@types/node": "^20.12.0",
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "prisma": "^5.14.0",
    "next-pwa": "^5.6.0",
    "eslint": "^8.57.0",
    "eslint-config-next": "^14.2.0",
    "@typescript-eslint/eslint-plugin": "^7.8.0",
    "prettier": "^3.2.0",
    "prettier-plugin-tailwindcss": "^0.5.0"
  }
}
```

---

## Configuration Clés

### next.config.js

```javascript
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
};

module.exports = withPWA(nextConfig);
```

### tailwind.config.ts

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#22c55e',
          dark: '#16a34a',
        },
        secondary: {
          DEFAULT: '#facc15',
          dark: '#eab308',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
```

---

## Variables d'Environnement

```env
# .env.local

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxx
SUPABASE_SERVICE_ROLE_KEY=xxx

# Database (Supabase PostgreSQL)
DATABASE_URL=postgresql://postgres:xxx@db.xxx.supabase.co:5432/postgres

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
```

---

## Alternatives Considérées

| Choix Actuel | Alternative | Raison du choix |
|--------------|-------------|-----------------|
| Supabase | Firebase | Open source, PostgreSQL, meilleure DX |
| Prisma | Drizzle | Plus mature, meilleure documentation |
| Zustand | Redux | Plus simple, moins de boilerplate |
| tRPC | REST | Type-safety end-to-end automatique |
| Tailwind | Styled Components | Meilleure performance, plus rapide |
| Vercel | Netlify | Intégration Next.js native |

---

## Performance Targets

| Métrique | Cible | Outil de mesure |
|----------|-------|-----------------|
| Lighthouse Performance | > 90 | Chrome DevTools |
| Lighthouse PWA | 100 | Chrome DevTools |
| First Contentful Paint | < 1.5s | Web Vitals |
| Largest Contentful Paint | < 2.5s | Web Vitals |
| Cumulative Layout Shift | < 0.1 | Web Vitals |
| Bundle Size (JS) | < 150kb gzipped | next-bundle-analyzer |

---

## Commandes Utiles

```bash
# Développement
npm run dev           # Start dev server
npm run build         # Build production
npm run start         # Start production server
npm run lint          # ESLint
npm run type-check    # TypeScript check

# Database
npx prisma generate   # Generate Prisma client
npx prisma db push    # Push schema to DB
npx prisma studio     # Open Prisma Studio
npx prisma db seed    # Seed database

# PWA
# Build puis check le dossier public/ pour sw.js
```

---

*Document créé le: $(date)*
*Version: 1.0*
