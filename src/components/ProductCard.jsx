import { Flex, Grid, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const ProductCard = ({ name, images, price, id, ...props }) => {
	return (
		<Grid
			as='article'
			bgColor='surface'
			borderRadius='base'
			shadow='xl'
			{...props}
		>
			<Link to={'/product/' + id}>
				<Image src={images[0].url} alt={images[0].description} />
			</Link>
			<Flex columnGap='1rem' p='1rem' flexWrap='wrap'>
				<Text as='h1' flex='1 1 150px' fontSize='base' noOfLines={1}>
					{name}
				</Text>
				<Text fontWeight={700}>{price}</Text>
			</Flex>
		</Grid>
	)
}
