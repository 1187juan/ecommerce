import { useToast } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBasket } from '../store/slices/basket'

export const BasketState = () => {
	const { basket, auth } = useSelector(state => state)
	const dispatch = useDispatch()
	const toast = useToast()

	useEffect(() => {
		dispatch(getBasket())
	}, [auth.isLogin])

	useEffect(() => {
		if (basket.error) {
			toast({
				status: 'error',
				title: basket.error,
				isClosable: true,
			})
		}
	}, [basket.error])

	return null
}
