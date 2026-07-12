import { screenshots } from '../data/features.js'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__blob hero__blob--peach" aria-hidden="true" />
      <div className="hero__blob hero__blob--sky" aria-hidden="true" />
      <div className="hero__blob hero__blob--butter" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="overline">Le journal des petites aventures</p>
          <h1 id="hero-title" className="editorial hero__title">
            Chaque escapade de bébé
            <br />
            <span className="accent">devient un souvenir</span>
          </h1>
          <p className="hero__subtitle">
            Sorties, week-ends, vacances&nbsp;: gardez une trace joyeuse des premières
            aventures de votre enfant — et revivez-les, jour après jour.
          </p>
          <div className="hero__actions" id="telecharger">
            <a className="btn-primary" href="#fonctionnalites">
              <span aria-hidden="true">✦</span> Bientôt sur l’App&nbsp;Store
            </a>
            <a className="btn-ghost" href="#fonctionnalites">
              Découvrir l’app
            </a>
          </div>
          <p className="hero__note">
            Gratuit · Sans compte · Sans publicité · Conçu pour iPhone
          </p>
        </div>

        <div className="hero__phone">
          <img
            src={screenshots.accueil.src}
            alt={screenshots.accueil.alt}
            width="300"
            height="650"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}
