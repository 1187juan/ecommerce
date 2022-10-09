import {
	Box,
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Text,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { asCurrency } from '../helpers'
import { useMediaQuery } from '../hooks'
import { BasketGrid } from './BasketGrid'
import { EmptyBasketPlaceholder } from './BasketNav/EmptyBasketPlaceholder'

export const DrawerBasket = ({ isOpen, onClose, navigate }) => {
	const isMobile = useMediaQuery('(max-width:599px)')
	const { data: basket, isLoading } = useSelector(({ basket }) => basket)
	const hasItems = !!basket?.items

	let subTotal = 0
	basket?.items?.forEach(
		({ price, quantity }) => (subTotal += price.value * quantity)
	)
	const subTotalAsCurrency = asCurrency(subTotal)

	return (
		<Drawer
			isOpen={isOpen}
			onClose={onClose}
			size='sm'
			placement={isMobile ? 'bottom' : 'right'}
		>
			<DrawerOverlay />
			<DrawerContent sx={{ backgroundColor: 'surface' }}>
				<DrawerCloseButton />
				<DrawerHeader>Carrito de compras</DrawerHeader>
				<DrawerBody>
					{!hasItems && <EmptyBasketPlaceholder />}
					{hasItems && <BasketGrid />}
				</DrawerBody>
				<DrawerFooter sx={{ flexDirection: 'column', gap: '0.5rem' }}>
					<Text>
						Subtotal{' '}
						<Box as='span' sx={{ fontWeight: 'bold' }}>
							{subTotalAsCurrency}
						</Box>
					</Text>
					<Button
						onClick={() => navigate('/checkout')}
						isDisabled={!hasItems}
						isLoading={isLoading}
						size='lg'
						sx={{ width: 'min(100%, 20rem)', margin: '0 auto' }}
					>
						Continuar
					</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}
