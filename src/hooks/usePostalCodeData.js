import { useEffect, useState } from 'react'
import { getPostalCodeData, validatePostalCode } from '../helpers'

export const usePostalCodeData = (code, { onSuccess, onError } = {}) => {
	const [postalCode, setPostalCode] = useState(code)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)
	const [data, setData] = useState(null)

	const setValue = value => {
		setPostalCode(value)
		setIsLoading(true)
		setData(null)
	}

	const reset = () => {
		setIsLoading(false)
		setError(null)
		setData(null)
		setPostalCode(null)
	}

	const state = { data, isLoading, error, setValue, reset, value: postalCode }

	useEffect(() => {
		if (validatePostalCode(postalCode)) {
			setIsLoading(true)
			setData(null)
			setError(null)

			getPostalCodeData(postalCode)
				.then(res => {
					setData(res)
					setIsLoading(false)
					onSuccess && onSuccess(res)
				})
				.catch(e => {
					setError(e.message)
					setIsLoading(false)
					onError && onError(e)
				})
		}
	}, [postalCode])

	return state
}
