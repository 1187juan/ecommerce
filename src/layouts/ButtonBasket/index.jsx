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
	useDisclosure,
} from '@chakra-ui/react'
import { ButtonNav } from '../../components'
import { useMediaQuery } from '../../hooks'
import { BasketGrid } from '../BasketGrid'
import basketIds from '../../data/basketIds'
import { EmptyBasketPlaceholder } from './EmptyBasketPlaceholder'
import { Link } from 'react-router-dom'
import products from '../../data/products.json'
import { asCurrency } from '../helpers'

export const ButtonBasket = ({ colorScheme }) => {
	const { isOpen, onClose, onOpen } = useDisclosure()
	const isMobile = useMediaQuery('(max-width:599px)')
	const totalProductsBasket = basketIds.length
	const isProductsBasket = totalProductsBasket > 1
	let subTotal = 0
	basketIds.forEach(
		({ id, quantity }) =>
			(subTotal += quantity * products.find(product => product.id === id).price)
	)

	const subTotalAsCurrency = asCurrency(subTotal)

	return (
		<>
			<ButtonNav
				colorScheme={colorScheme}
				onClick={onOpen}
				label='Carrito'
				badge={totalProductsBasket}
				icon={<div style={{ fontSize: '1.5rem', lineHeight: 1 }}>🛒</div>}
			/>
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
						{!isProductsBasket && <EmptyBasketPlaceholder />}
						{isProductsBasket && <BasketGrid />}
					</DrawerBody>
					<DrawerFooter sx={{ flexDirection: 'column', gap: '0.5rem' }}>
						<Text>
							Subtotal{' '}
							<Box as='span' sx={{ fontWeight: 'bold' }}>
								{subTotalAsCurrency}
							</Box>
						</Text>
						<Button
							as={Link}
							to={isProductsBasket && '/checkout'}
							disabled={!isProductsBasket}
							size='lg'
							sx={{ width: 'min(100%, 20rem)', margin: '0 auto' }}
						>
							Continuar
						</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	)
}
