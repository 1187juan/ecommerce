import { Flex, Grid, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import imageDelete from '../assets/banner/product-01.webp'

export const ProductCard = ({ name, images, price, id, sx, ...props }) => {
	const description = images[0].description
	const imageUrl = imageDelete ?? images[0].url

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
				<Image src={imageUrl} alt={description} boxSize='100%' />
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
					{price}
				</Text>
			</Flex>
		</Grid>
	)
}
