import { Grid, Heading, Text, Button, Badge } from '@chakra-ui/react'
import { asCurrency } from '../../helpers'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ButtonBasket } from './ButtonBasket'

export const Details = ({ product }) => {
	const { name, description = '', summary, price, id } = product
	const { auth, basket } = useSelector(state => state)
	const formatedPrice = asCurrency(price.value)
	const basketItem = basket.data?.items?.find(item => item.id === id) ?? null
	const productQuantity = basketItem?.quantity ?? 0

	return (
		<Grid
			sx={{
				flex: '1 0',
				alignContent: 'start',
				gap: '1rem',
				minWidth: 'calc(300px - 1.5rem)',
				padding: ['1rem', '2rem 1rem'],
			}}
		>
			<Text
				sx={{
					fontSize: 'sm',
					color: 'onSurfaceMedium',
				}}
			>
				Código 1922
			</Text>
			<Heading>{name}</Heading>
			<Text>
				<Badge>Envio gratis</Badge> a partir de $200 pesos
			</Text>
			<Text
				sx={{
					fontSize: '3xl',
				}}
			>
				{formatedPrice}
			</Text>
			<Text>{description}</Text>
			{description.length < 120 && <Text>{summary}</Text>}

			{!auth.isLogin && (
				<Button as={Link} to='/login' size='lg'>
					Agregar
				</Button>
			)}
			{auth.isLogin && (
				<ButtonBasket
					productId={id}
					quantity={productQuantity}
					limit={Number(basketItem?.addToCartMax ?? 10)}
				/>
			)}
		</Grid>
	)
}
