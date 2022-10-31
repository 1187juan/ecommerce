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
	useToast,
} from '@chakra-ui/react'
import { useVerticalStickyPlus } from '../hooks'
import {
	asCurrency,
	resetBasket as resetBasketDb,
	validateCreditCard,
} from '../helpers'
import { useDispatch, useSelector } from 'react-redux'
import { resetBasket } from '../store/slices/basket'
import { useState } from 'react'

export const BasketTotal = ({ position = 'sticky' } = {}) => {
	const dispatch = useDispatch()
	const [sectionRef] = useVerticalStickyPlus({ range: -64 })
	const uid = useSelector(({ auth }) => auth.uid)
	const basket = useSelector(({ basket }) => basket)
	const creditCard = useSelector(({ creditCard }) => creditCard)
	const [isLoading, setIsLoading] = useState(false)
	const toast = useToast()
	let subTotal = 0

	basket.itemsDetails
		.filter(({ status }) => status === 'success')
		.forEach(
			({ data: { quantity, price } }) => (subTotal += quantity * price.value)
		)

	const subTotalAscurrency = asCurrency(subTotal)
	const hasAddress = Boolean(basket.addressId)
	const hasCreditCard = validateCreditCard(creditCard)
	const hasFreeShipping = subTotal >= 200

	const onBuy = async () => {
		try {
			setIsLoading(true)
			await resetBasketDb(uid)
			dispatch(resetBasket())
			setIsLoading(false)

			toast({
				status: 'info',
				title: 'Gracias por completar la compra!',
				description:
					'Vaciamos el carrito de compra para que puedas seguir probando la aplicación web.',
				isClosable: true,
				duration: null,
			})
		} catch ({ message }) {
			setIsLoading(false)
			toast({
				status: 'error',
				title: message,
				isClosable: true,
			})
		}
	}

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
				disabled={!(hasFreeShipping && hasCreditCard && hasAddress)}
				sx={{ width: 'min(100%, 32rem)', margin: 'auto' }}
				isLoading={basket.isLoading || isLoading}
				onClick={onBuy}
			>
				Comprar
			</Button>
		</Grid>
	)
}
