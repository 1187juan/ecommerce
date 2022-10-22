import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ButtonCounter } from '../components/ButtonCounter'
import { useDebounceValue } from '../hooks/useDebounceValue'
import { setBasketItem } from '../store/slices/basket'

export const ButtonBasketItem = ({ productId, quantity }) => {
	const dispatch = useDispatch()
	const isLoading = useSelector(({ basket }) => basket.isLoading)
	const [value, setValue] = useState(quantity)
	const debounceValue = useDebounceValue(value, 400)

	useEffect(() => {
		if (debounceValue !== quantity) {
			dispatch(
				setBasketItem({
					id: productId,
					quantity: debounceValue,
				})
			)
		}
	}, [debounceValue])

	return (
		<ButtonCounter
			value={value}
			onChange={setValue}
			isDisabled={isLoading}
			isLoading={isLoading && quantity !== value}
			size='lg'
		/>
	)
}
