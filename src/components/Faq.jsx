import { faq } from '../data/features.js'
import Reveal from './Reveal.jsx'
import './Faq.css'

export default function Faq() {
  return (
    <section className="faq section" id="faq" aria-labelledby="faq-title">
      <div className="container faq__inner">
        <Reveal>
          <p className="overline">Questions de parents</p>
          <h2 id="faq-title" className="editorial faq__title">
            On vous répond, <span className="accent">tout simplement</span>
          </h2>
        </Reveal>

        <div className="faq__list">
          {faq.map((item, index) => (
            <Reveal key={item.question} delay={index * 80}>
              <details className="faq__item">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
