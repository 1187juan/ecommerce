import { Divider, Flex, Grid, Image, Link, Text } from '@chakra-ui/react'
import { asCurrency } from '../../helpers'
import { Link as LinkRRD } from 'react-router-dom'
import { ButtonBasketItem } from '../ButtonBasketItem'

export const BasketItem = ({ quantity, price, name, imgs, id }) => {
	const total = quantity * price.value
	const totalCurrency = asCurrency(total)

	return (
		<>
			<Flex
				as='li'
				sx={{
					gap: '1rem',
					padding: '1rem 0',
					backgroundColor: 'surface',
				}}
			>
				<Image
					src={imgs[0].imgUrl}
					alt={name}
					sx={{
						width: 'min(30%, 12rem)',
						margin: 'auto',
						borderRadius: '.25rem',
					}}
				/>
				<Flex
					sx={{
						flexWrap: 'wrap',
						flexGrow: 1,
						gap: '1rem',
					}}
				>
					<Grid
						sx={{
							flex: '1 0 10rem',
							alignContent: 'start',
						}}
					>
						<Text>{name} </Text>
						<Text sx={{ fontWeight: '700' }}>{totalCurrency}</Text>
						<Link as={LinkRRD} to={`/product/${id}`} sx={{ color: 'primary' }}>
							Ver producto
						</Link>
					</Grid>
					<Flex
						sx={{
							flex: '0 0',
							alignItems: 'center',
						}}
					>
						<ButtonBasketItem productId={id} quantity={quantity} />
					</Flex>
				</Flex>
			</Flex>
			<Divider />
		</>
	)
}
