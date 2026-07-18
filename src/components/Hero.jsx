import { screenshots } from '../data/features.js'
import AppStoreBadge from './AppStoreBadge.jsx'
import Reveal from './Reveal.jsx'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__blob hero__blob--peach" aria-hidden="true" />
      <div className="hero__blob hero__blob--sky" aria-hidden="true" />
      <div className="hero__blob hero__blob--butter" aria-hidden="true" />

      <div className="container hero__inner">
        <Reveal className="hero__copy">
          <p className="overline">Le journal des petites aventures</p>
          <h1 id="hero-title" className="editorial hero__title">
            Chaque escapade de bébé
            <br />
            <span className="accent">devient un souvenir</span>
          </h1>
          <p className="hero__subtitle">
            Sorties, week-ends, vacances&nbsp;: gardez une trace joyeuse des premières
            aventures de votre enfant, et revivez-les jour après jour.
          </p>
          <div className="hero__actions" id="telecharger">
            <AppStoreBadge />
            <a className="btn-ghost" href="#fonctionnalites">
              Découvrir l’app
            </a>
          </div>
          <p className="hero__note">
            Gratuit · Sans compte · Sans publicité · Conçu pour iPhone
          </p>
        </Reveal>

        <Reveal className="hero__phone" delay={180}>
          <img
            className="float"
            src={screenshots.accueil.src}
            alt={screenshots.accueil.alt}
            width="300"
            height="650"
            loading="eager"
            fetchPriority="high"
          />
        </Reveal>
      </div>
    </section>
  )
}
