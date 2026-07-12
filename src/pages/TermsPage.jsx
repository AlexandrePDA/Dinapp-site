import usePageMeta from '../components/usePageMeta.js'
import './LegalPage.css'

export default function TermsPage() {
  usePageMeta({
    title: 'Conditions générales d’utilisation | Dinapp',
    description:
      'Conditions générales d’utilisation et de vente de l’application Dinapp : licence, obligations, disponibilité, propriété intellectuelle et droit applicable.',
  })

  return (
    <section className="legal">
      <div className="legal__inner">
        <p className="overline">Le cadre, en toute clarté</p>
        <h1>Conditions générales d’utilisation</h1>
        <p className="legal__updated">Dernière mise à jour : 12 juillet 2026</p>

        <h2>1. Objet</h2>
        <p>
          Les présentes conditions générales d’utilisation et de vente (les
          «&nbsp;Conditions&nbsp;») encadrent l’utilisation de l’application mobile Dinapp
          (l’«&nbsp;Application&nbsp;»), éditée par Alexandre P.
          (l’«&nbsp;Éditeur&nbsp;»), disponible sur l’App&nbsp;Store d’Apple pour iPhone. En
          téléchargeant ou en utilisant l’Application, vous acceptez les présentes
          Conditions.
        </p>

        <h2>2. Description du service</h2>
        <p>
          Dinapp est un journal de bord familial permettant de consigner les sorties,
          week-ends, vacances et autres escapades de votre enfant&nbsp;: lieux visités,
          dates, occasions, anecdotes et photos&nbsp;; carte des lieux découverts&nbsp;;
          badges&nbsp;; rétrospective annuelle et export PDF&nbsp;; partage du journal avec
          un co-parent via iCloud.
        </p>

        <h2>3. Prix</h2>
        <p>
          L’Application est proposée gratuitement, sans publicité ni achat intégré. Si des
          fonctionnalités payantes étaient introduites à l’avenir, elles seraient soumises
          aux conditions de vente de l’App&nbsp;Store et présentées clairement avant tout
          achat.
        </p>

        <h2>4. Prérequis</h2>
        <ul>
          <li>Un iPhone sous iOS&nbsp;26 ou version ultérieure&nbsp;;</li>
          <li>
            un compte iCloud actif pour la synchronisation et le partage co-parent
            (fonctionnalités optionnelles)&nbsp;;
          </li>
          <li>l’Application est destinée à des utilisateurs majeurs (parents et tuteurs).</li>
        </ul>

        <h2>5. Licence d’utilisation</h2>
        <p>
          L’Éditeur vous concède une licence personnelle, non exclusive, non cessible et non
          commerciale d’utilisation de l’Application, conformément au contrat de licence
          d’application sous licence standard d’Apple (EULA). Toute décompilation,
          rétro-ingénierie ou redistribution est interdite, dans les limites autorisées par
          la loi.
        </p>

        <h2>6. Vos contenus</h2>
        <p>
          Les photos, textes et informations que vous ajoutez dans l’Application restent
          intégralement votre propriété. Ils sont stockés sur votre appareil et dans votre
          iCloud privé&nbsp;; l’Éditeur n’y a pas accès (voir la{' '}
          <a href="/confidentialite">politique de confidentialité</a>). Vous êtes responsable
          des contenus que vous ajoutez et, le cas échéant, partagez avec le co-parent.
        </p>

        <h2>7. Disponibilité et sauvegarde</h2>
        <p>
          L’Éditeur s’efforce de fournir une application fiable, mais ne garantit pas une
          disponibilité ininterrompue. La synchronisation et le partage reposent sur le
          service iCloud d’Apple&nbsp;; leur disponibilité dépend d’Apple et de votre
          connexion. Il vous appartient de maintenir une sauvegarde de votre appareil
          (sauvegarde iCloud ou locale).
        </p>

        <h2>8. Responsabilité</h2>
        <p>
          L’Application est fournie «&nbsp;en l’état&nbsp;». Dans les limites permises par la
          loi, l’Éditeur ne saurait être tenu responsable des dommages indirects liés à
          l’utilisation de l’Application, notamment en cas de perte de données imputable à un
          défaut de sauvegarde, à un dysfonctionnement d’iCloud ou de l’appareil. Rien dans
          les présentes ne limite les droits impératifs dont vous bénéficiez en tant que
          consommateur.
        </p>

        <h2>9. Propriété intellectuelle</h2>
        <p>
          L’Application, sa marque, son design et ses contenus (hors vos contenus) sont la
          propriété exclusive de l’Éditeur. Apple, iPhone, iCloud et App&nbsp;Store sont des
          marques d’Apple&nbsp;Inc. Apple n’est pas partie aux présentes Conditions et n’est
          pas responsable de l’Application.
        </p>

        <h2>10. Résiliation</h2>
        <p>
          Vous pouvez cesser d’utiliser l’Application à tout moment en la supprimant de votre
          appareil. L’Éditeur peut mettre fin à la distribution de l’Application&nbsp;; vos
          données, stockées dans votre iCloud, restent alors sous votre contrôle.
        </p>

        <h2>11. Droit applicable</h2>
        <p>
          Les présentes Conditions sont soumises au droit français. En cas de litige, une
          solution amiable sera recherchée en priorité&nbsp;; à défaut, les tribunaux
          français seront compétents. Conformément au code de la consommation, vous pouvez
          recourir gratuitement à un médiateur de la consommation.
        </p>

        <h2>12. Contact</h2>
        <p>
          Pour toute question relative aux présentes Conditions&nbsp;:{' '}
          <a href="mailto:dev.dakaprod@gmail.com">dev.dakaprod@gmail.com</a>.
        </p>
      </div>
    </section>
  )
}
