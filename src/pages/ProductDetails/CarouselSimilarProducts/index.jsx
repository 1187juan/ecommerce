import { Box, Heading } from '@chakra-ui/react'
import { ScrollingCarousel } from '@trendyol-js/react-carousel'
import styled from '@emotion/styled'
import products from '../../../data/products.json'
import { ProductCard } from '../../../components'
import { ButtonDirection } from './ButtonDirection'

const CarouselCustom = styled(ScrollingCarousel)({
	'& .styles-module_slider__o0fqa': {
		width: 'calc(100% + 2rem)',
		marginLeft: '-1rem',
		padding: '1rem',
		gap: '1rem',
	},
})

export const CarouselSimilarProducts = ({ productId }) => {
	const similarProducts = products
		.filter(product => product.id !== productId)
		.slice(0, 10)

	return (
		<Box w='min(100%, 992px)' m='0 auto 1rem' p='1rem 1rem 0' bgColor='surface'>
			<Heading>Más productos</Heading>
			<CarouselCustom
				leftIcon={<ButtonDirection direction='left' />}
				rightIcon={<ButtonDirection direction='right' />}
			>
				{similarProducts.map((similarProduct, index) => (
					<ProductCard key={index} {...similarProduct} w='35vmin' />
				))}
			</CarouselCustom>
		</Box>
	)
}
