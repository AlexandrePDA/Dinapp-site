import { useEffect } from 'react'

/**
 * Met à jour le titre et la meta description de la page —
 * indispensable pour le SEO des pages internes d'une SPA.
 */
export default function usePageMeta({ title, description }) {
  useEffect(() => {
    if (title) document.title = title
    if (description) {
      const meta = document.querySelector('meta[name="description"]')
      if (meta) meta.setAttribute('content', description)
    }
  }, [title, description])
}
