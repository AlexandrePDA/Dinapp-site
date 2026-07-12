import Hero from '../components/Hero.jsx'
import FeatureSection from '../components/FeatureSection.jsx'
import ExtrasBand from '../components/ExtrasBand.jsx'
import Faq from '../components/Faq.jsx'
import FinalCta from '../components/FinalCta.jsx'
import Reveal from '../components/Reveal.jsx'
import usePageMeta from '../components/usePageMeta.js'
import { features } from '../data/features.js'

export default function HomePage() {
  usePageMeta({
    title: 'Dinapp : le journal des petites aventures de bébé | App iPhone',
    description:
      'Dinapp est le journal de bord des sorties, week-ends et vacances de votre bébé. Carte des lieux découverts, photos, badges, rétrospective annuelle en PDF et partage avec le co-parent via iCloud. Sans compte, sans publicité.',
  })

  return (
    <>
      <Hero />

      <section className="section" id="fonctionnalites" aria-labelledby="features-title">
        <div className="container">
          <Reveal>
            <p className="overline">Les fonctionnalités</p>
            <h2 id="features-title" className="editorial" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', margin: '0.7rem 0 1rem' }}>
              Tout pour raconter <span className="accent">ses petites aventures</span>
            </h2>
          </Reveal>

          {features.map((feature, index) => (
            <Reveal key={feature.id}>
              <FeatureSection feature={feature} reversed={index % 2 === 1} />
            </Reveal>
          ))}
        </div>
      </section>

      <ExtrasBand />
      <Faq />
      <FinalCta />
    </>
  )
}
