import { useEffect, useState } from 'react'

export const useDebounceValue = (value, timer = 300) => {
	const [debounceValue, setDebounceValue] = useState(value)

	useEffect(() => {
		const debounceTimeout = setTimeout(() => setDebounceValue(value), timer)

		return () => clearTimeout(debounceTimeout)
	}, [value, timer])

	return debounceValue
}
