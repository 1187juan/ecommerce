import products from '../../data/products.json'
import imageDelete from '../../assets/banner/product-01.webp'
import { Divider, Flex, Grid, Image, Link, Text } from '@chakra-ui/react'
import { asCurrency } from '../helpers'
import { Link as LinkRRD } from 'react-router-dom'
import { ButtonCounter } from '../../components'

export const BasketItem = ({ id, quantity }) => {
	const { name, price } = products.find(product => product.id === id)

	const total = price * quantity
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
					src={imageDelete}
					alt={name}
					sx={{ width: 'min(35%, 12rem)', margin: 'auto' }}
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
						<ButtonCounter
							size='lg'
							value={quantity}
							onAdd={() => console.log('onAdd')}
							onSubtract={() => console.log('onSubtract')}
							limit={10}
						/>
					</Flex>
				</Flex>
			</Flex>
			<Divider />
		</>
	)
}
