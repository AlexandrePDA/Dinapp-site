import { faq } from '../data/features.js'
import './Faq.css'

export default function Faq() {
  return (
    <section className="faq section" id="faq" aria-labelledby="faq-title">
      <div className="container faq__inner">
        <div>
          <p className="overline">Questions de parents</p>
          <h2 id="faq-title" className="editorial faq__title">
            On vous répond, <span className="accent">tout simplement</span>
          </h2>
        </div>

        <div className="faq__list">
          {faq.map((item) => (
            <details key={item.question} className="faq__item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
