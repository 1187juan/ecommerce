import {
	Alert,
	AlertDescription,
	AlertIcon,
	AlertTitle,
	Badge,
	Box,
	Button,
	Divider,
	Grid,
	Text,
} from '@chakra-ui/react'
import basketIds from '../data/basketIds'
import products from '../data/products.json'
import { useVerticalStickyPlus } from '../hooks'
import { asCurrency } from '../helpers'

export const BasketTotal = ({ position = 'sticky' } = {}) => {
	const [sectionRef] = useVerticalStickyPlus({ range: -64 })
	let subTotal = 0
	basketIds.forEach(
		({ id, quantity }) =>
			(subTotal += products.find(product => product.id === id).price * quantity)
	)
	const subTotalAscurrency = asCurrency(subTotal)
	const hasFreeShipping = subTotal >= 200

	return (
		<Grid
			ref={sectionRef}
			as='section'
			sx={{
				position,
				top: '5rem',
				flex: '1 0 min(100%, 18rem)',
				gap: '1rem',
				height: 'max-content',
				padding: '1rem',
				backgroundColor: 'surface',
				borderRadius: '.25rem',
			}}
		>
			<Text fontSize='2xl' fontWeight='semibold'>
				Total
			</Text>
			<Text>
				Subtotal
				<Box as='strong' sx={{ float: 'right' }}>
					{subTotalAscurrency}
				</Box>
			</Text>
			<Text>
				Envío
				<Badge as='strong' sx={{ float: 'right' }}>
					Gratis
				</Badge>
			</Text>
			<Divider />

			<Text>
				Total
				<Box as='strong' sx={{ float: 'right' }}>
					{subTotalAscurrency} MXN
				</Box>
			</Text>
			{!hasFreeShipping && (
				<Alert status='warning'>
					<AlertIcon />
					<Box>
						<AlertTitle>¡Compra minima de $200!</AlertTitle>
						<AlertDescription>
							Agrega más productos para procesar la compra.
						</AlertDescription>
					</Box>
				</Alert>
			)}
			<Button
				size='lg'
				disabled={!hasFreeShipping}
				sx={{ width: 'min(100%, 32rem)', margin: 'auto' }}
			>
				Comprar
			</Button>
		</Grid>
	)
}
