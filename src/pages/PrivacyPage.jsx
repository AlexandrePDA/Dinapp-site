import usePageMeta from '../components/usePageMeta.js'
import './LegalPage.css'

export default function PrivacyPage() {
  usePageMeta({
    title: 'Politique de confidentialité | Dinapp',
    description:
      'Comment Dinapp protège les souvenirs de votre famille : stockage dans votre iCloud privé, aucun compte, aucune publicité, aucun traqueur, aucune collecte de données par l’éditeur.',
  })

  return (
    <section className="legal">
      <div className="legal__inner">
        <p className="overline">Vos souvenirs restent à vous</p>
        <h1>Politique de confidentialité</h1>
        <p className="legal__updated">Dernière mise à jour : 12 juillet 2026</p>

        <div className="card card--sky">
          <p>
            <strong>L’essentiel :</strong> Dinapp ne collecte aucune donnée. Vos souvenirs
            (escapades, photos, anecdotes, profil de bébé) sont stockés sur votre iPhone et
            dans <strong>votre espace iCloud privé</strong>, géré par Apple. L’éditeur n’a
            aucun serveur, ne demande aucun compte et n’a accès à rien.
          </p>
        </div>

        <h2>1. Qui est responsable ?</h2>
        <p>
          L’application Dinapp (ci-après «&nbsp;l’Application&nbsp;») est éditée par
          Alexandre P. (ci-après «&nbsp;l’Éditeur&nbsp;»). Pour toute question relative à la
          présente politique&nbsp;: <a href="mailto:dev.dakaprod@gmail.com">dev.dakaprod@gmail.com</a>.
        </p>

        <h2>2. Quelles données sont traitées, et où ?</h2>
        <p>Dans l’Application, vous pouvez renseigner&nbsp;:</p>
        <ul>
          <li>le prénom et la date de naissance de votre enfant&nbsp;;</li>
          <li>
            vos escapades&nbsp;: lieu, dates, occasion, anecdotes et jusqu’à trois photos par
            escapade&nbsp;;
          </li>
          <li>des séjours regroupant plusieurs escapades.</li>
        </ul>
        <p>
          Ces données sont enregistrées <strong>uniquement sur votre appareil</strong> et
          synchronisées dans la <strong>base de données privée iCloud</strong> associée à
          votre identifiant Apple (service CloudKit). Elles ne transitent par aucun serveur
          de l’Éditeur : il n’en existe pas. L’Éditeur ne peut ni les consulter, ni les
          exploiter, ni les transmettre.
        </p>

        <h2>3. Partage avec le co-parent</h2>
        <p>
          Si vous invitez l’autre parent, le partage s’effectue par la fonction de partage
          iCloud d’Apple (CloudKit). Seules les personnes que <strong>vous</strong> invitez
          accèdent au journal, et vous pouvez retirer ce partage à tout moment depuis
          l’Application. Là encore, rien ne transite par l’Éditeur.
        </p>

        <h2>4. Position géographique</h2>
        <p>
          L’Application peut demander l’accès à votre position <strong>uniquement lorsque
          vous utilisez la carte</strong>, afin d’afficher votre position parmi vos
          escapades. Votre position n’est ni enregistrée, ni historisée, ni transmise. La
          recherche de lieux utilise le service Plans d’Apple (MapKit), soumis à la politique
          de confidentialité d’Apple.
        </p>

        <h2>5. Notifications</h2>
        <p>
          Les rappels de souvenirs («&nbsp;Il y a un an, vous étiez à…&nbsp;») et le message
          d’anniversaire de votre enfant sont des <strong>notifications locales</strong>,
          planifiées et déclenchées sur votre appareil. Aucune information ne quitte votre
          iPhone. Vous pouvez les désactiver dans les Réglages iOS.
        </p>

        <h2>6. Export PDF</h2>
        <p>
          Le journal exporté en PDF est généré sur votre appareil. Vous seul décidez de le
          partager, par les moyens de votre choix.
        </p>

        <h2>7. Ce que Dinapp ne fait pas</h2>
        <ul>
          <li>Aucune création de compte, aucune adresse e-mail demandée&nbsp;;</li>
          <li>aucune publicité&nbsp;;</li>
          <li>aucun traqueur, aucun outil d’analyse ou de mesure d’audience tiers&nbsp;;</li>
          <li>aucune vente, location ou partage de données&nbsp;;</li>
          <li>aucun profilage.</li>
        </ul>

        <h2>8. Vos droits et la suppression de vos données</h2>
        <p>
          Vos données vous appartiennent et restent sous votre contrôle direct. Vous pouvez à
          tout moment&nbsp;: supprimer une escapade, une photo ou un séjour dans
          l’Application&nbsp;; supprimer l’Application et ses données iCloud (Réglages iOS →
          votre identifiant Apple → iCloud → Gérer le stockage). Conformément au RGPD, vous
          disposez des droits d’accès, de rectification et d’effacement, que vous exercez
          directement, puisque vous êtes la seule personne à détenir vos données. Pour toute
          question&nbsp;: <a href="mailto:dev.dakaprod@gmail.com">dev.dakaprod@gmail.com</a>.
        </p>

        <h2>9. Données des enfants</h2>
        <p>
          Dinapp est une application destinée aux parents. Les informations concernant votre
          enfant (prénom, date de naissance, photos) ne sont renseignées que par vous,
          stockées dans votre iCloud privé, et jamais accessibles à l’Éditeur ni à des tiers.
        </p>

        <h2>10. Évolution de cette politique</h2>
        <p>
          Si une future version de l’Application venait à modifier ces principes, cette page
          serait mise à jour et la date en tête révisée. La philosophie de Dinapp restera la
          même&nbsp;: vos souvenirs restent à vous.
        </p>
      </div>
    </section>
  )
}
