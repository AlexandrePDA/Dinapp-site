import { extras } from '../data/features.js'
import Reveal from './Reveal.jsx'
import './ExtrasBand.css'

export default function ExtrasBand() {
  return (
    <section className="extras section" id="confidentialite" aria-labelledby="extras-title">
      <div className="container">
        <Reveal>
          <p className="overline">Et aussi</p>
          <h2 id="extras-title" className="editorial extras__title">
            Pensé pour les parents, <span className="accent">respectueux de bébé</span>
          </h2>
        </Reveal>

        <div className="extras__grid">
          {extras.map((extra, index) => (
            <Reveal key={extra.id} delay={index * 140}>
              <article className="extras__card card card--peach">
                <span className="extras__emoji" aria-hidden="true">
                  {extra.emoji}
                </span>
                <h3>{extra.title}</h3>
                <p>{extra.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
