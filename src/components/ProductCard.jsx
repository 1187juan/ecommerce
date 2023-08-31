import { Flex, Grid, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { asCurrency } from '../helpers'

export const ProductCard = ({
	product: { name, imgUrl, price, id },
	isVertival = false,
	sx,
	...props
}) => {
	const formatedPrice = asCurrency(price.value)

	return (
		<Grid
			as='article'
			sx={{
				gridTemplateColumns: isVertival ? '1fr' : ['2fr 3fr', '1fr'],
				gridAutoFlow: isVertival ? 'row' : ['column', 'row'],
				backgroundColor: 'surface',
				borderRadius: 'base',
				overflow: 'hidden',
				shadow: 'xl',
				...sx,
			}}
			{...props}
		>
			<Link to={'/product/' + id}>
				<Image
					src={imgUrl}
					alt={name}
					boxSize='100%'
					sx={{ aspectRatio: '1 / 1', bgColor: 'outline' }}
				/>
			</Link>
			<Flex
				as={Link}
				to={'/product/' + id}
				sx={{
					flexDirection: isVertival ? 'column' : ['column', 'row'],
					justifyContent: isVertival ? 'start' : ['center', 'start'],
					columnGap: '1rem',
					padding: '1rem',
				}}
			>
				<Text
					as='h1'
					sx={{
						flexGrow: [0, 1],
						fontSize: 'base',
						noOfLines: isVertival ? 1 : [2, 1],
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
