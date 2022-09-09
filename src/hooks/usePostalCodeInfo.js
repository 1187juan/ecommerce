import { useEffect, useState } from 'react'
import { getInfoPostalCode } from '../helpers'

export const usePostalCodeInfo = (postalCode, { onSuccess, onError } = {}) => {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)
	const [data, setData] = useState(null)
	const [hasRefetch, setHasRefetch] = useState(false)
	const refetch = () => setHasRefetch(prev => !prev)
	const reset = () => {
		setData(null)
		setIsLoading(false)
		setError(null)
	}

	const state = { data, isLoading, error, refetch, reset }

	useEffect(() => {
		setIsLoading(true)
		getInfoPostalCode(postalCode)
			.then(res => {
				setData(res)
				setError(null)
				onSuccess && onSuccess(res)
			})
			.catch(e => {
				setData(null)
				setError(e.message)
				onError && onError(e)
			})
			.finally(() => setIsLoading(false))
	}, [postalCode, hasRefetch])

	return state
}
