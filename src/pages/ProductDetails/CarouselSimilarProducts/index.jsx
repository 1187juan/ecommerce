import { Heading } from '@chakra-ui/react'
import { ScrollingCarousel } from '@trendyol-js/react-carousel'
import styled from '@emotion/styled'
import products from '../../../data/products.json'
import { Container, ProductCard } from '../../../components'
import { ButtonDirection } from './ButtonDirection'

const CarouselCustom = styled(ScrollingCarousel)({
	'& .styles-module_slider__o0fqa': {
		gap: '1rem',
		width: 'calc(100% + 2rem)',
		marginLeft: '-1rem',
		padding: '1rem',
	},
})

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
			<CarouselCustom
				leftIcon={<ButtonDirection direction='left' />}
				rightIcon={<ButtonDirection direction='right' />}
			>
				{similarProducts.map((similarProduct, index) => (
					<ProductCard
						key={index}
						{...similarProduct}
						sx={{
							width: '35vmin',
						}}
					/>
				))}
			</CarouselCustom>
		</Container>
	)
}
