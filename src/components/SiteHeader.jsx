import { Link, useLocation } from 'react-router-dom'
import { APP_STORE_URL } from '../data/appStore.js'
import './SiteHeader.css'

export default function SiteHeader() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="site-header__brand" aria-label="Dinapp, retour à l’accueil">
          <img src="/logo-dinapp.png" alt="" width="38" height="38" className="site-header__logo" />
          <span className="site-header__name editorial">Dinapp</span>
        </Link>

        <nav aria-label="Navigation principale" className="site-header__nav">
          {isHome ? (
            <>
              <a href="#fonctionnalites">Fonctionnalités</a>
              <a href="#confidentialite">Confidentialité</a>
              <a href="#faq">Questions</a>
            </>
          ) : (
            <Link to="/">Accueil</Link>
          )}
          <a
            className="btn-primary site-header__cta"
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener"
          >
            Télécharger
          </a>
        </nav>
      </div>
    </header>
  )
}
