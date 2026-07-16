import { Link } from 'react-router-dom'
import { faq } from '../data/features.js'
import usePageMeta from '../components/usePageMeta.js'
import './LegalPage.css'

export default function SupportPage() {
  usePageMeta({
    title: 'Support | Dinapp',
    description:
      'Besoin d’aide avec Dinapp ? Écrivez-nous à dev.dakaprod@gmail.com, réponse sous 48 heures. Retrouvez aussi les réponses aux questions les plus fréquentes.',
  })

  return (
    <section className="legal">
      <div className="legal__inner">
        <p className="overline">On est là pour vous</p>
        <h1>Support</h1>

        <div className="card card--sky">
          <p>
            <strong>Une question, un souci, une idée ?</strong> Écrivez-nous à{' '}
            <a href="mailto:dev.dakaprod@gmail.com">dev.dakaprod@gmail.com</a>. Nous répondons
            à chaque message, en général sous 48&nbsp;heures.
          </p>
        </div>

        <h2>Nous contacter</h2>
        <p>
          Le plus simple est l’e-mail&nbsp;:{' '}
          <a href="mailto:dev.dakaprod@gmail.com">dev.dakaprod@gmail.com</a>. Pour que nous
          puissions vous aider vite, précisez si possible&nbsp;:
        </p>
        <ul>
          <li>le modèle de votre iPhone et la version d’iOS&nbsp;;</li>
          <li>la version de Dinapp (Réglages de l’app, tout en bas)&nbsp;;</li>
          <li>ce que vous faisiez au moment du problème, et ce qui s’est passé.</li>
        </ul>
        <p>
          Dinapp est éditée par Alexandre P. Le support est assuré en français et en anglais.
        </p>

        <h2>Questions fréquentes</h2>
        {faq.map((item) => (
          <div key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}

        <h2>Signaler un problème ou suggérer une amélioration</h2>
        <p>
          Dinapp est développée par une seule personne, et les retours des parents orientent
          vraiment la suite. Bug, lenteur, idée de fonctionnalité&nbsp;: tout est lu, à la même
          adresse — <a href="mailto:dev.dakaprod@gmail.com">dev.dakaprod@gmail.com</a>.
        </p>

        <h2>Vos données</h2>
        <p>
          Vos souvenirs sont stockés sur votre appareil et dans votre espace iCloud privé.
          L’éditeur n’y a pas accès et ne peut donc pas récupérer un contenu supprimé&nbsp;:
          la restauration passe par iCloud, côté Apple. Le détail se trouve dans notre{' '}
          <Link to="/confidentialite">politique de confidentialité</Link>, et les règles
          d’usage dans les <Link to="/conditions">conditions d’utilisation</Link>.
        </p>
      </div>
    </section>
  )
}
