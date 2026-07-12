import { Link } from 'react-router-dom'
import './SiteFooter.css'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <img src="/logo-dinapp.png" alt="" width="34" height="34" className="site-footer__logo" />
          <div>
            <p className="editorial site-footer__name">Dinapp</p>
            <p className="site-footer__tagline">Le journal des petites aventures</p>
          </div>
        </div>

        <nav aria-label="Liens légaux" className="site-footer__links">
          <Link to="/confidentialite">Politique de confidentialité</Link>
          <Link to="/conditions">Conditions d’utilisation</Link>
          <a href="mailto:dev.dakaprod@gmail.com">Contact &amp; support</a>
        </nav>

        <p className="site-footer__legal">
          © {new Date().getFullYear()} Dinapp. Apple, iPhone, iCloud et App&nbsp;Store sont
          des marques d’Apple&nbsp;Inc.
        </p>
      </div>
    </footer>
  )
}
