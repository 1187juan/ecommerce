import { useDisclosure } from '@chakra-ui/react'
import { ButtonNav } from '../../components'
import { Link, useNavigate } from 'react-router-dom'
import { CartIcon } from '../../boxicons'
import { useSelector } from 'react-redux'
import { DrawerBasket } from '../DrawerBasket'
import { useEffect } from 'react'

export const BasketNav = ({ colorScheme }) => {
	const auth = useSelector(state => state.auth)
	const basket = useSelector(state => state.basket)
	const { isOpen, onClose, onOpen } = useDisclosure()
	const navigate = useNavigate()
	const itemsNumber = basket.items.length

	useEffect(() => {
		if (!isOpen) return
		const popState = () => onClose()
		addEventListener('popstate', popState)

		return () => removeEventListener('popstate', popState)
	}, [isOpen])

	if (!auth.isLogin)
		return (
			<ButtonNav
				as={Link}
				to='/login'
				icon={<CartIcon />}
				colorScheme={colorScheme}
			/>
		)

	return (
		<>
			<ButtonNav
				colorScheme={colorScheme}
				onClick={onOpen}
				label='Carrito'
				badge={itemsNumber}
				icon={<CartIcon />}
				isLoading={basket.isLoading}
			/>

			<DrawerBasket isOpen={isOpen} onClose={onClose} navigate={navigate} />
		</>
	)
}
