# 🌐 Portfolio - Julie Tolve

**Portfolio professionnel de développeuse web freelance**

🔗 **Site en ligne :** [julietolve.com](https://julietolve.com)

---

## 📋 Table des matières

- [À propos](#à-propos)
- [Technologies utilisées](#technologies-utilisées)
- [Fonctionnalités](#fonctionnalités)
- [Performance](#performance)
- [Installation locale](#installation-locale)
- [Déploiement](#déploiement)
- [SEO](#seo)
- [Contact](#contact)

---

## 🎯 À propos

Portfolio moderne et responsive présentant mes compétences en développement web, mes projets et mes certifications.

**Objectifs du projet :**
- Présenter mon parcours et mes compétences techniques
- Offrir une expérience utilisateur optimale (Lighthouse 91/100)
- Démontrer mes capacités en Vue.js, JavaScript et intégration web
- Fournir un moyen de contact professionnel

---

## 🛠️ Technologies utilisées

### Frontend
- **Vue.js 3** - Framework JavaScript progressif
- **Vue Router** - Gestion du routing SPA
- **CSS3** - Styles personnalisés avec animations
- **HTML5** - Structure sémantique

### Backend & Services
- **Netlify Functions** - Formulaire de contact serverless
- **Nodemailer** - Envoi d'emails
- **Gmail SMTP** - Service d'envoi sécurisé

### Outils & Déploiement
- **Vite** - Build tool moderne et rapide
- **Netlify** - Hébergement et CI/CD automatique
- **Git/GitHub** - Contrôle de version
- **OVH** - Gestion du nom de domaine

---

## ✨ Fonctionnalités

### Pages principales
- **Accueil** - Présentation et compétences clés
- **CV** - Parcours professionnel avec téléchargement PDF/JPG
- **Contact** - Formulaire fonctionnel avec validation
- **Certifications** - Liste des formations et certifications

### Fonctionnalités techniques
- ✅ Single Page Application (SPA) avec Vue Router
- ✅ Lazy loading des routes pour performance optimale
- ✅ Formulaire de contact serverless (Netlify Functions)
- ✅ Animations CSS personnalisées
- ✅ Design responsive (mobile, tablette, desktop)
- ✅ CV téléchargeable en PDF (55 Ko optimisé) et JPG (340 Ko)
- ✅ Meta tags SEO optimisés
- ✅ SSL/HTTPS automatique
- ✅ robots.txt et sitemap.xml pour référencement

---

## 📊 Performance

### Lighthouse Audit (Desktop)
- 🟢 **Performance** : 91/100
- 🟢 **Accessibilité** : 90+/100
- 🟢 **Best Practices** : 90+/100
- 🟢 **SEO** : 90+/100

### Optimisations appliquées
- Lazy loading des composants Vue Router
- Compression des images (CV JPG optimisé)
- PDF optimisé (55 Ko au lieu de 200+ Ko)
- Minification automatique via Vite
- Cache HTTP configuré par Netlify

---

## 🚀 Installation locale

### Prérequis
- Node.js 16+ et npm

### Étapes

```bash
# Cloner le repository
git clone https://github.com/JulieRaph/Portfolio_Projects.git
cd Portfolio_Projects

# Installer les dépendances
npm install

# Créer un fichier .env pour les variables d'environnement
# (Nécessaire uniquement pour tester le formulaire de contact)
cp .env.example .env
# Remplir .env avec tes identifiants SMTP

# Lancer le serveur de développement
npm run dev

# Le site est accessible sur http://localhost:5173
```

### Build de production

```bash
# Créer le build optimisé
npm run build

# Prévisualiser le build
npm run preview
```

---

## 🌐 Déploiement

Le site est déployé automatiquement sur **Netlify** via intégration Git.

### Workflow CI/CD
1. Push sur la branche `main`
2. Netlify détecte le commit
3. Build automatique (`npm run build`)
4. Déploiement sur julietolve.com
5. Durée totale : ~2 minutes

### Configuration Netlify
- **Build command :** `npm run build`
- **Publish directory :** `dist`
- **Functions directory :** `netlify/functions`

---

## 🔍 SEO

### Optimisations SEO appliquées
- ✅ Meta tags Open Graph pour partage sur réseaux sociaux
- ✅ Meta description et keywords pertinents
- ✅ Balises sémantiques HTML5 (`<header>`, `<main>`, `<section>`, etc.)
- ✅ `robots.txt` configuré pour autoriser l'indexation
- ✅ `sitemap.xml` avec toutes les pages principales
- ✅ URLs propres et SEO-friendly
- ✅ SSL/HTTPS actif (requis par Google)
- ✅ Performance Lighthouse 91/100

### Référencement
- Sitemap soumis à Google Search Console (en cours)
- Indexation Google en cours de propagation

---

## 📧 Contact

**Julie Tolve** - Développeuse Web Freelance

- 🌐 Portfolio : [julietolve.com](https://julietolve.com)
- 💼 LinkedIn : [linkedin.com/in/julie-tolve](https://linkedin.com/in/julie-tolve)
- 📧 Email : Pas d'adresse mail dévoilée ici
- 🐙 GitHub : [github.com/[ton-username]](https://github.com/JulieRaph)

---

## 📄 Licence

Ce projet n'est pas sous licence **MIT** pour l'instant il sera bien évidemment ajouter dans un délai raisonnable (- voir le fichier [LICENSE](LICENSE) pour plus de détails.)

---

## 🙏 Remerciements

- Design inspiré par les tendances modernes du web design
- Icônes et assets sous licences libres
- Merci à la communauté Vue.js et Netlify

---

**⭐ Si ce projet vous plaît, n'hésitez pas à lui donner une étoile sur GitHub !**

---

*Dernière mise à jour : Février 2026*