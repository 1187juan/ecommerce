import { Button } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ButtonCounter } from '../../components/ButtonCounter'
import { useDebounceValue } from '../../hooks/useDebounceValue'
import { updateBasketItem } from '../../store/slices/basket/thunks'

export const ButtonBasket = ({ productId, quantity, limit }) => {
	const { isLoading } = useSelector(({ basket }) => basket)
	const dispatch = useDispatch()
	const [value, setValue] = useState(quantity)
	const debounceValue = useDebounceValue(value, 1000)

	useEffect(() => {
		if (quantity !== debounceValue) {
			dispatch(
				updateBasketItem({
					basketItemId: productId,
					basketItemQuantity: debounceValue,
				})
			)
		}
	}, [debounceValue])

	useEffect(() => {
		setValue(quantity)
	}, [quantity])

	if (value < 1)
		return (
			<Button isLoading={isLoading} onClick={() => setValue(1)} size='lg'>
				Agregar
			</Button>
		)

	return (
		<ButtonCounter
			value={value}
			onChange={setValue}
			limit={limit}
			isLoading={isLoading}
			size='lg'
		/>
	)
}
