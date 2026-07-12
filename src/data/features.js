/**
 * Les fonctionnalités de Dinapp, avec le champ lexical de l'app.
 * Les captures correspondent aux écrans réels de l'application.
 */
export const screenshots = {
  accueil: {
    src: '/screenshots/dinapp-accueil-journal-bebe.png',
    alt: 'Écran d’accueil de Dinapp : souvenir « il y a un an » en Thaïlande, compteurs de sorties, kilomètres et lieux uniques',
  },
  journal: {
    src: '/screenshots/dinapp-journal-de-bord-sorties.png',
    alt: 'Le journal de bord de Dinapp : les escapades de bébé classées mois par mois, avec anecdotes et photos',
  },
  carte: {
    src: '/screenshots/dinapp-carte-lieux-decouverts.png',
    alt: 'La carte Dinapp avec les épingles colorées des lieux que bébé a découverts : Amsterdam, Marseille…',
  },
  badges: {
    src: '/screenshots/dinapp-badges-premieres-fois.png',
    alt: 'La collection de badges Dinapp : Premiers pas, Premières vacances, Petit curieux, Explorateur…',
  },
  retrospective: {
    src: '/screenshots/dinapp-retrospective-annuelle.png',
    alt: 'La rétrospective annuelle Dinapp : nombre d’escapades, lieux uniques, kilomètres parcourus et répartition par occasion',
  },
}

export const features = [
  {
    id: 'journal',
    overline: 'Le journal de bord',
    title: 'Chaque escapade devient un souvenir',
    tint: 'butter',
    screenshot: 'journal',
    description:
      'Une sortie au parc, un week-end chez les grands-parents, les premières vacances… Notez le lieu, l’occasion, une anecdote et jusqu’à trois photos. Le journal classe tout, mois par mois, jour après jour.',
    points: [
      'Six occasions : famille, week-end, vacances, rendez-vous, découverte…',
      'Une anecdote pour chaque moment fort : « Première fois qu’il voit la mer. »',
      'Regroupez les étapes d’un même séjour, comme un été en Bretagne.',
    ],
  },
  {
    id: 'carte',
    overline: 'La carte',
    title: 'Une carte qui grandit avec votre enfant',
    tint: 'sky',
    screenshot: 'carte',
    description:
      'Chaque lieu découvert dépose son épingle colorée sur la carte. D’un coup d’œil, revivez le chemin parcouru, et regardez la carte se remplir au fil des aventures.',
    points: [
      'Des épingles aux couleurs de chaque occasion',
      'Le compteur des lieux uniques découverts',
      'Touchez une épingle pour rouvrir le souvenir',
    ],
  },
  {
    id: 'badges',
    overline: 'La collection',
    title: 'Des badges pour célébrer les premières fois',
    tint: 'peach',
    screenshot: 'badges',
    description:
      'Premiers pas, Premier week-end, Premières vacances, Petit curieux, Grand aventurier… Quinze badges à débloquer, qui transforment chaque sortie en petite victoire.',
    points: [
      '15 badges, des premières fois aux grands caps',
      'Les 4 saisons, 100 kilomètres, Conteur d’histoires…',
      'Une célébration confettis à chaque badge débloqué',
    ],
  },
  {
    id: 'retrospective',
    overline: 'La rétrospective',
    title: 'L’année de bébé, en bref',
    tint: 'plum',
    screenshot: 'retrospective',
    description:
      'Combien d’escapades cette année ? Combien de kilomètres, de lieux uniques ? La rétrospective raconte l’année écoulée, et s’exporte en un joli PDF à imprimer ou à offrir.',
    points: [
      'Escapades, lieux uniques et kilomètres parcourus',
      'La répartition par occasion, en couleurs',
      'Le journal complet en PDF : couverture, badges et souvenirs',
    ],
  },
]

export const extras = [
  {
    id: 'coparent',
    emoji: '👨‍👩‍👧',
    title: 'À deux, tout simplement',
    description:
      'Invitez l’autre parent à contribuer au journal. Aucun compte à créer : tout passe par iCloud, en privé.',
  },
  {
    id: 'souvenirs',
    emoji: '✨',
    title: 'Les souvenirs qui reviennent',
    description:
      '« Il y a un an, vous étiez à… » : Dinapp vous replonge dans vos escapades aux bonnes dates, et souhaite même son anniversaire à bébé.',
  },
  {
    id: 'confidentialite',
    emoji: '🔒',
    title: 'Vos souvenirs restent à vous',
    description:
      'Pas de compte, pas de publicité, pas de traqueurs. Vos photos et anecdotes vivent dans votre iCloud privé, nulle part ailleurs.',
  },
]

export const faq = [
  {
    question: 'Dinapp est-elle gratuite ?',
    answer:
      'Oui. Dinapp se télécharge gratuitement sur l’App Store, sans publicité ni achat caché.',
  },
  {
    question: 'Où sont stockées les photos et les souvenirs de mon bébé ?',
    answer:
      'Sur votre appareil et dans votre espace iCloud privé, chiffré par Apple. L’éditeur de Dinapp n’a accès à aucune de vos données : pas de serveur tiers, pas de compte à créer.',
  },
  {
    question: 'Puis-je tenir le journal avec l’autre parent ?',
    answer:
      'Oui. Depuis les réglages, invitez le co-parent via iCloud : il voit le journal et peut y ajouter ses propres escapades, photos et anecdotes.',
  },
  {
    question: 'Combien de photos puis-je ajouter à une escapade ?',
    answer:
      'Jusqu’à trois photos par escapade : l’essentiel, sans surcharger votre iCloud. Les images sont automatiquement optimisées.',
  },
  {
    question: 'Puis-je imprimer le journal ?',
    answer:
      'Oui ! La rétrospective exporte l’année complète en PDF : couverture, badges débloqués et journal illustré, prêt à imprimer ou à envoyer aux grands-parents.',
  },
  {
    question: 'Sur quels appareils Dinapp fonctionne-t-elle ?',
    answer:
      'Dinapp est conçue pour iPhone (iOS 26 ou plus récent). La synchronisation entre vos appareils passe par iCloud.',
  },
]
