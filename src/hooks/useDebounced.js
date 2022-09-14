import { useEffect, useState } from 'react'

export const useDebounced = (value, delay = 300) => {
	const [debouncedValue, setDebouncedValue] = useState(value)

	useEffect(() => {
		const timeout = setTimeout(() => setDebouncedValue(value), delay)
		return () => clearTimeout(timeout)
	}, [value, delay])

	return debouncedValue
}
