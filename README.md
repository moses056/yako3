# Upwork Clone - Documentation

## 🚀 Project Overview

Ce projet est un clone de la plateforme Upwork, mis à jour avec les technologies les plus récentes de 2025. L'application permet aux freelancers de trouver des missions et aux clients de recruter des talents.

## 🛠️ Technologies Mises à Jour

### Frontend
- **React 19.1.1** - Dernière version de React avec les meilleures performances
- **Vite 6.2.0** - Remplace Create React App pour des builds plus rapides
- **Redux Toolkit 2.5.0** - Gestion d'état moderne avec Redux Toolkit
- **React Router 7.7.1** - Dernière version pour le routing
- **Firebase 12.0.0** - Version modulaire (v9+) avec meilleure sécurité
- **Sass 1.85.0** - Remplace node-sass par dart-sass
- **i18next 25.3.2** - Internationalisation moderne
- **ESLint 9.17.0** & **Prettier 3.4.2** - Qualité de code

### Outils de Développement
- **Vitest 3.0.7** - Framework de test moderne
- **TypeScript Support** - Configuration pour TypeScript si nécessaire
- **PWA Support** - Application web progressive

## 📦 Installation

### Prérequis
- Node.js 18+ 
- npm 8+

### Étapes d'installation

1. **Cloner le dépôt**
```bash
git clone https://github.com/moses056/yako3.git
cd yako3/upwork-clone
```

2. **Installer les dépendances**
```bash
npm install --legacy-peer-deps
```

3. **Configurer les variables d'environnement**
```bash
cp .env.example .env
# Éditer le fichier .env avec vos configurations Firebase
```

## 🚀 Lancement de l'Application

### Mode Développement
```bash
npm run dev
```
L'application sera disponible à l'adresse : http://localhost:3000

### Mode Production
```bash
npm run build
npm run preview
```

### Build pour Déploiement
```bash
npm run build
```
Les fichiers de production seront générés dans le dossier `dist/`

## 🔧 Configuration

### Variables d'Environnement

Créez un fichier `.env` à la racine du projet :

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id

# Application Configuration
VITE_APP_NAME=Upwork Clone
VITE_APP_VERSION=1.0.0
VITE_APP_ENV=development
```

### Configuration Firebase

1. Créez un projet sur la [Console Firebase](https://console.firebase.google.com/)
2. Activez l'authentification avec les méthodes souhaitées (Email/Mot de passe, Google, Apple)
3. Configurez Firestore Database pour la base de données
4. Configurez Firebase Storage pour le stockage des fichiers
5. Copiez les identifiants dans votre fichier `.env`

## 📁 Structure du Projet

```
upwork-clone/
├── public/                 # Assets statiques
│   ├── manifest.json      # Manifeste PWA
│   └── ...               # Images, fonts, etc.
├── src/
│   ├── Components/        # Composants React
│   │   ├── BeforeLoginComponents/
│   │   ├── ClientComponents/
│   │   ├── SharedComponents/
│   │   └── TalentComponents/
│   ├── Contexts/          # Contextes React
│   ├── Localization/      # Fichiers de traduction
│   ├── Network/           # Configuration réseau
│   ├── pages/             # Pages de l'application
│   ├── Routes/            # Configuration des routes
│   ├── Store/             # Configuration Redux
│   ├── assets/            # Assets locaux
│   ├── App.css           # Styles globaux
│   ├── App.js            # Composant principal
│   ├── firebase.js       # Configuration Firebase
│   ├── i18n.js           # Configuration i18n
│   └── index.js          # Point d'entrée
├── dist/                 # Fichiers de production
├── .env                  # Variables d'environnement
├── .prettierrc          # Configuration Prettier
├── eslint.config.js      # Configuration ESLint
├── index.html            # Template HTML
├── package.json          # Dépendances et scripts
├── vite.config.js        # Configuration Vite
└── README.md            # Documentation
```

## 🎯 Fonctionnalités Principales

### Pour les Freelancers (Talent)
- **Création de profil complet** avec photo, compétences, expérience
- **Recherche de missions** par catégorie, compétences, budget
- **Soumission de propositions** pour les missions
- **Gestion des contrats** actifs et terminés
- **Système de paiement** et facturation
- **Messagerie intégrée** avec les clients
- **Tableau de bord** avec statistiques

### Pour les Clients
- **Publication de missions** avec description détaillée
- **Recherche de talents** par compétences, expérience
- **Gestion des propositions** reçues
- **Création de contrats** avec les freelancers
- **Système de paiement** sécurisé
- **Messagerie intégrée** avec les freelancers
- **Tableau de bord** de gestion

### Fonctionnalités Communes
- **Système d'authentification** sécurisé
- **Internationalisation** (Anglais/Arabe)
- **Design responsive** pour tous les appareils
- **Notifications en temps réel**
- **Recherche avancée** avec filtres
- **Évaluation et avis** système

## 🛠️ Scripts Disponibles

```bash
# Développement
npm run dev          # Lance le serveur de développement
npm run build        # Construit l'application pour la production
npm run preview     # Prévisualise le build de production

# Qualité de code
npm run lint         # Exécute ESLint
npm run lint:fix     # Corrige automatiquement les problèmes ESLint
npm run format       # Formate le code avec Prettier
npm run format:check # Vérifie le formatage du code

# Tests
npm run test         # Exécute les tests avec Vitest

# Déploiement
npm run predeploy    # Build avant déploiement
npm run deploy       # Déploie sur GitHub Pages
```

## 🔍 Dépannage

### Problèmes Courants

1. **Erreur de build Vite**
```bash
# Vérifiez que index.html est à la racine du projet
ls -la index.html

# Si absent, déplacez-le depuis public/
mv public/index.html ./
```

2. **Problèmes de dépendances**
```bash
# Nettoyez le cache npm
npm cache clean --force

# Supprimez node_modules et réinstallez
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

3. **Erreurs Firebase**
```bash
# Vérifiez vos variables d'environnement
cat .env

# Assurez-vous que toutes les clés Firebase sont correctes
```

4. **Problèmes de routing**
```bash
# Vérifiez que React Router est correctement configuré
npm list react-router-dom
```

### Débogage

```bash
# Lancez en mode verbose pour plus d'informations
npm run dev -- --verbose

# Vérifiez les erreurs ESLint
npm run lint

# Formatez le code
npm run format
```

## 🚀 Déploiement

### GitHub Pages
```bash
# Configurez le déploiement sur GitHub Pages
npm run deploy
```

### Autres plateformes
Le dossier `dist/` contient tous les fichiers nécessaires pour le déploiement sur n'importe quelle plateforme d'hébergement statique.

## 📝 Notes de Mise à Jour

### Changements Majeurs
- **Migration de Create React App à Vite** : Builds plus rapides, meilleure expérience développeur
- **Firebase v9+** : Architecture modulaire, meilleure sécurité, tree-shaking amélioré
- **Redux Toolkit** : Remplace l'ancienne configuration Redux, code plus simple et maintenable
- **Sass** : Remplacement de node-sass par dart-sass pour de meilleures performances
- **ESLint & Prettier** : Configuration moderne pour la qualité du code

### Compatibilité
- **Navigateurs supportés** : Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Node.js minimum** : 18.0.0
- **npm minimum** : 8.0.0

## 🤝 Contribuer

1. Fork le projet
2. Créez une branche feature (`git checkout -b feature/amazing-feature`)
3. Commitez vos changements (`git commit -m 'Add amazing feature'`)
4. Pushez vers la branche (`git push origin feature/amazing-feature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour les détails.

## 🆘 Support

Pour toute question ou problème :
- Créez une issue sur GitHub
- Consultez la documentation Firebase
- Vérifiez les erreurs dans la console du navigateur

---

**Note** : Ce projet est à des fins éducatives et de démonstration. Certaines fonctionnalités peuvent nécessiter des configurations supplémentaires pour un environnement de production.# job2.0
# job2.0
