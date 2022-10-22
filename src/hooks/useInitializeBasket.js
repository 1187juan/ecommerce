import { useToast } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeBasket } from '../store/slices/basket'

export const useIinitializeBasket = () => {
	const uid = useSelector(({ auth }) => auth.uid)
	const error = useSelector(({ basket }) => basket.error)
	const dispatch = useDispatch()
	const toast = useToast()

	useEffect(() => {
		dispatch(initializeBasket(uid))
	}, [uid])

	useEffect(() => {
		if (!error) return

		toast({
			status: 'error',
			title: error,
			isClosable: true,
		})
	}, [error])
}
