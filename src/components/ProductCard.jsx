import { Flex, Grid, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { asCurrency } from '../helpers'

export const ProductCard = ({
	product: { name, imgs, price, id },
	sx,
	...props
}) => {
	const imgUrl = imgs?.[0].imgUrl ?? import.meta.env.VITE_PLACEHOLDER_320
	const imgAlt = imgs?.[0].imgAlt ?? 'product'
	const formatedPrice = asCurrency(price.value)

	return (
		<Grid
			as='article'
			sx={{
				backgroundColor: 'surface',
				borderRadius: 'base',
				shadow: 'xl',
				...sx,
			}}
			{...props}
		>
			<Link to={'/product/' + id}>
				<Image src={imgUrl} alt={imgAlt} boxSize='100%' />
			</Link>
			<Flex
				sx={{
					columnGap: '1rem',
					padding: '1rem',
					flexWrap: 'wrap',
				}}
			>
				<Text
					as='h1'
					sx={{
						flex: '1 1 150px',
						fontSize: 'base',
						noOfLines: 1,
					}}
				>
					{name}
				</Text>
				<Text
					sx={{
						fontWeight: 700,
					}}
				>
					{formatedPrice}
				</Text>
			</Flex>
		</Grid>
	)
}
