import { APP_STORE_URL } from '../data/appStore.js'
import './AppStoreBadge.css'

export default function AppStoreBadge({ className = '' }) {
  return (
    <a
      className={`app-store-badge ${className}`.trim()}
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener"
      aria-label="Télécharger Dinapp dans l’App Store"
    >
      <img
        src="/app-store-badge-fr.svg"
        alt="Télécharger dans l’App Store"
        width="180"
        height="57"
      />
    </a>
  )
}
