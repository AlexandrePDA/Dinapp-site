import { useEffect, useRef } from 'react'

/**
 * Révèle son contenu en douceur (fondu + translation) quand il entre
 * dans le viewport. Sans effet pour les utilisateurs qui préfèrent
 * réduire les animations (géré en CSS).
 */
export default function Reveal({ delay = 0, className = '', children }) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { '--reveal-delay': `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
