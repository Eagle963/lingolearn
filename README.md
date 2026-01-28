# 🇬🇧 LingoLearn

Application PWA d'apprentissage de l'anglais gamifiée, style Duolingo.

## 🚀 Déploiement sur Vercel

1. Push ce dossier sur GitHub
2. Connecte le repo à Vercel
3. Vercel détecte automatiquement Next.js
4. Déploie !

## 📱 Features

- ✅ 50 leçons dans 10 catégories
- ✅ Gamification (XP, niveaux, vies, streak)
- ✅ PWA installable sur mobile
- ✅ Design mobile-first
- ✅ Mot du jour
- ✅ Objectif journalier

## 🛠️ Développement local

```bash
npm install
npm run dev
```

## 📁 Structure

```
lingolearn-app/
├── src/
│   └── app/
│       ├── layout.tsx    # Layout principal
│       ├── page.tsx      # App complète
│       └── globals.css   # Styles
├── public/
│   ├── manifest.json     # PWA manifest
│   └── icons/            # Icônes PWA
├── memory-bank/          # Documentation pour dev IA
│   ├── product-requirements-document.md
│   ├── tech-stack.md
│   ├── implementation-plan.md
│   ├── architecture.md
│   └── progress.md
├── CLAUDE.md             # Règles pour Claude Code
├── package.json
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## 🤖 Développement avec Claude Code

Ce projet est configuré pour être développé avec Claude Code CLI.

```bash
# Ouvrir Claude Code
claude

# Première commande
> Lis tous les documents dans /memory-bank et passe à l'étape suivante 
> du plan d'implémentation selon progress.md
```

### Documentation disponible :
- `CLAUDE.md` - Règles et conventions pour l'IA
- `memory-bank/product-requirements-document.md` - PRD complet
- `memory-bank/tech-stack.md` - Stack technique détaillée
- `memory-bank/implementation-plan.md` - 42 étapes de dev
- `memory-bank/architecture.md` - Documentation technique
- `memory-bank/progress.md` - Suivi d'avancement

## 🎨 Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Zustand (state)
- Framer Motion (animations)
- Lucide React (icônes)

---

Made with ❤️
