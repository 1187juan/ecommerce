import { useParams } from 'react-router-dom'
import products from '../../data/products.json'
import { Details } from './Details'
import { Flex } from '@chakra-ui/react'
import { CarouselImages } from './CarouselImages'
import { CarouselSimilarProducts } from './CarouselSimilarProducts'
import { Footer, HeaderLogo } from '../../components'

export const ProductDetails = () => {
	const { productId } = useParams()
	const product = products.find(product => product.id === productId)

	return (
		<>
			<HeaderLogo />
			<Flex
				width='min(100%, 992px)'
				mx='auto'
				my='1rem'
				gap='1rem'
				flexWrap='wrap'
				bgColor='surface'
			>
				<CarouselImages images={product.images} />
				<Details {...product} />
			</Flex>
			<CarouselSimilarProducts productId={productId} />
			<Footer />
		</>
	)
}
