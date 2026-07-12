import Reveal from './Reveal.jsx'
import './FinalCta.css'

export default function FinalCta() {
  return (
    <section className="final-cta section" aria-labelledby="cta-title">
      <div className="container">
        <Reveal className="final-cta__card">
          <p className="overline">Prêts pour l’aventure ?</p>
          <h2 id="cta-title" className="editorial final-cta__title">
            Commencez le journal <span className="accent">dès la prochaine sortie</span>
          </h2>
          <p className="final-cta__subtitle">
            Les premières années passent vite. Dinapp les garde précieusement.
          </p>
          <a className="btn-primary" href="#telecharger">
            <span aria-hidden="true">✦</span> Bientôt sur l’App&nbsp;Store
          </a>
        </Reveal>
      </div>
    </section>
  )
}
