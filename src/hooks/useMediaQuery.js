import { useEffect, useState } from 'react'

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia(query)
    if (mql.matches !== matches) {
      setMatches(mql.matches)
    }

    mql.addEventListener('change', () => setMatches(mql.matches))
    return () =>
      mql.removeEventListener('change', () => setMatches(mql.matches))
  }, [matches, query])

  return matches
}
