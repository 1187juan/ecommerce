import { Button } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ButtonCounter } from '../../components/ButtonCounter'
import { useDebounceValue } from '../../hooks/useDebounceValue'
import { setBasketItem } from '../../store/slices/basket'

export const ButtonBasket = ({
	productId,
	quantity,
	limit,
	isLoading = false,
}) => {
	const dispatch = useDispatch()
	const [value, setValue] = useState(quantity)
	const debounceValue = useDebounceValue(value, 1000)

	useEffect(() => {
		if (quantity !== debounceValue) {
			dispatch(
				setBasketItem({
					id: productId,
					quantity: debounceValue,
				})
			)
		}
	}, [debounceValue])

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
