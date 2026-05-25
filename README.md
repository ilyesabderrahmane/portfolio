# Portfolio — Abderrahmane Elyes

Portfolio professionnel développé avec **Next.js 14**, **TypeScript** et **Tailwind CSS**.

## 🚀 Installation & Démarrage

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Étapes

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer en mode développement
npm run dev

# 3. Ouvrir dans le navigateur
# http://localhost:3000
```

### Build production
```bash
npm run build
npm start
```

## 📁 Structure du projet

```
portfolio/
├── app/
│   ├── layout.tsx          # Layout racine + métadonnées SEO
│   ├── page.tsx            # Page principale
│   └── globals.css         # Styles globaux + animations
├── components/
│   ├── Navbar.tsx           # Navigation fixe avec scroll
│   ├── Hero.tsx             # Section héro avec animation canvas
│   ├── About.tsx            # À propos + statistiques
│   ├── Skills.tsx           # Compétences avec barres animées
│   ├── Experience.tsx       # Expérience professionnelle (timeline)
│   ├── Projects.tsx         # Grille de projets
│   ├── Education.tsx        # Formation académique
│   └── ContactAndFooter.tsx # Contact + footer
└── public/
    ├── profile.jpg          # ← AJOUTER votre photo ici
    └── cv-abderrahmane-elyes.pdf  # ← AJOUTER votre CV ici
```

## 🖼️ Personnalisation

### Photo de profil
Placez votre photo dans `public/profile.jpg`
- Format recommandé : JPG ou PNG
- Taille recommandée : 400×400px minimum
- Format carré pour un meilleur rendu

### CV PDF
Placez votre CV dans `public/cv-abderrahmane-elyes.pdf`

### Liens sociaux
Dans `components/ContactAndFooter.tsx`, remplacer les URLs :
- GitHub : `href="https://github.com/VOTRE_USERNAME"`
- LinkedIn : `href="https://linkedin.com/in/VOTRE_PROFIL"`

## ✨ Fonctionnalités

- 🎨 Design moderne avec Tailwind CSS
- ✨ Animations fluides (canvas particules, typing effect, scroll reveal)
- 📱 Responsive mobile/tablet/desktop
- ⬇️ Bouton téléchargement CV
- 🔒 Section contact complète
- 🌙 Performance optimisée (Next.js 14)

## 🛠️ Technologies

- **Next.js 14** — Framework React
- **TypeScript** — Typage statique
- **Tailwind CSS** — Styles utilitaires
- **Lucide React** — Icônes modernes
- **Sora + DM Sans** — Typographies Google Fonts
