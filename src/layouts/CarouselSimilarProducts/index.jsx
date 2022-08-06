import { Heading } from '@chakra-ui/react'
import products from '../../data/products.json'
import { Container, ProductCard } from '../../components'
import { Carousel } from './Carousel'

export const CarouselSimilarProducts = ({ productId }) => {
	const similarProducts = products
		.filter(product => product.id !== productId)
		.slice(0, 10)

	return (
		<Container
			fullWidth
			sx={{
				marginTop: 0,
				marginBottom: '1rem',
				padding: '1rem 1rem 0',
				backgroundColor: 'surface',
			}}
		>
			<Heading>Más productos</Heading>
			<Carousel>
				{similarProducts.map((similarProduct, index) => (
					<ProductCard
						key={index}
						{...similarProduct}
						sx={{
							width: '35vmin',
						}}
					/>
				))}
			</Carousel>
		</Container>
	)
}
