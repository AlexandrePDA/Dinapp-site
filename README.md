# Site vitrine Dinapp

Landing page de **Dinapp, le journal des petites aventures de bébé**, construite avec React + Vite. Elle sert de site marketing et de pages « Politique de confidentialité » / « Conditions d'utilisation » exigées par Apple pour la publication sur l'App Store.

## Démarrer

```bash
npm install
npm run dev      # développement (http://localhost:5173)
npm run build    # build de production dans dist/
npm run preview  # prévisualiser le build
```

## À personnaliser avant la mise en ligne

- **Domaine** : le SEO pointe vers `https://dinapp.app` (canonical, Open Graph, sitemap, robots). Remplacez par votre domaine réel dans `index.html`, `public/sitemap.xml` et `public/robots.txt`.
- **Lien App Store** : les boutons « Bientôt sur l'App Store » (`Hero.jsx`, `FinalCta.jsx`, `SiteHeader.jsx`) pointent vers `#telecharger`. Une fois l'app publiée, remplacez par l'URL App Store et le badge officiel « Télécharger dans l'App Store » (https://developer.apple.com/app-store/marketing/guidelines/).
- **Mentions légales** : complétez l'identité de l'éditeur dans `src/pages/PrivacyPage.jsx` et `src/pages/TermsPage.jsx` si besoin (adresse, forme juridique…).
- **Routing SPA** : en hébergement statique (Netlify, Vercel, GitHub Pages…), configurez la réécriture de `/confidentialite` et `/conditions` vers `index.html`.

## Captures d'écran

Les visuels de `public/screenshots/` sont générés automatiquement depuis l'app iOS par le test UI `MarketingScreenshotTests` (dépôt de l'app) :

```bash
xcodebuild test -project Dina.xcodeproj -scheme Dina \
  -destination 'platform=iOS Simulator,name=iPhone 17' \
  -only-testing:DinaUITests/MarketingScreenshotTests \
  -resultBundlePath shots.xcresult
xcrun xcresulttool export attachments --path shots.xcresult --output-path exported/
```
