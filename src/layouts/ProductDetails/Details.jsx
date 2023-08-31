import { Grid, Heading, Text, Button, Badge } from '@chakra-ui/react'
import { asCurrency, searchItemById } from '../../helpers'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ButtonBasket } from './ButtonBasket'

export const Details = ({
	name,
	description,
	summary,
	price,
	id,
	addToCartMax,
}) => {
	const auth = useSelector(state => state.auth)
	const basket = useSelector(state => state.basket)
	const formatedPrice = asCurrency(price.value)
	const basketItem = searchItemById(id, basket.items) ?? null
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
				Código {id}
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
					key={productQuantity}
					productId={id}
					quantity={productQuantity}
					limit={addToCartMax}
					isLoading={basket.isLoading}
				/>
			)}
		</Grid>
	)
}
