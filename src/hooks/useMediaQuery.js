import { useState, useEffect } from 'react'

export const useMediaQuery = query => {
	const [matches, setMatches] = useState(() => matchMedia(query).matches)

	useEffect(() => {
		const mql = matchMedia(query)
		const resize = () => matches !== mql.matches && setMatches(mql.matches)

		addEventListener('resize', resize)

		return () => removeEventListener('resize', resize)
	}, [matches, query])

	return matches
}
