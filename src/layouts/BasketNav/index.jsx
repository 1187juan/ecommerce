import { useDisclosure, useToast } from '@chakra-ui/react'
import { ButtonNav } from '../../components'
import { Link, useNavigate } from 'react-router-dom'
import { CartIcon } from '../../boxicons'
import { useSelector } from 'react-redux'
import { DrawerBasket } from '../DrawerBasket'
import { useEffect } from 'react'

export const BasketNav = ({ colorScheme }) => {
	const { isLogin } = useSelector(({ auth }) => auth)
	const { isOpen, onClose, onOpen } = useDisclosure()
	const navigate = useNavigate()
	const { isLoading, error, data: basket } = useSelector(({ basket }) => basket)
	const toast = useToast()

	useEffect(() => {
		if (error) {
			toast({
				status: 'error',
				title: error,
				isClosable: true,
			})
		}
	}, [error])

	if (!isLogin)
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
				badge={basket?.items?.length ?? 0}
				icon={<CartIcon />}
				isLoading={isLoading}
			/>
			<DrawerBasket isOpen={isOpen} onClose={onClose} navigate={navigate} />
		</>
	)
}
