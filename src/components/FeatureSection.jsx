import { screenshots } from '../data/features.js'
import './FeatureSection.css'

export default function FeatureSection({ feature, reversed }) {
  const shot = screenshots[feature.screenshot]

  return (
    <article
      className={`feature ${reversed ? 'feature--reversed' : ''}`}
      aria-labelledby={`feature-${feature.id}`}
    >
      <div className={`feature__card card card--${feature.tint}`}>
        <img src={shot.src} alt={shot.alt} width="280" height="606" loading="lazy" />
      </div>

      <div className="feature__copy">
        <p className="overline">{feature.overline}</p>
        <h3 id={`feature-${feature.id}`} className="editorial feature__title">
          {feature.title}
        </h3>
        <p className="feature__description">{feature.description}</p>
        <ul className="feature__points">
          {feature.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}
