import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ButtonCounter } from '../components/ButtonCounter'
import { useDebounceValue } from '../hooks/useDebounceValue'
import { updateBasketItem } from '../store/slices/basket/thunks'

export const ButtonBasketItem = ({ productId, quantity }) => {
	const dispatch = useDispatch()
	const { basket } = useSelector(state => state)
	const [value, setValue] = useState(quantity)
	const debounceValue = useDebounceValue(value, 400)

	useEffect(() => {
		if (debounceValue !== quantity) {
			dispatch(
				updateBasketItem({
					basketItemId: productId,
					basketItemQuantity: debounceValue,
				})
			)
		}
	}, [debounceValue])

	return (
		<ButtonCounter
			value={value}
			onChange={setValue}
			isDisabled={basket.isLoading}
			size='lg'
		/>
	)
}
