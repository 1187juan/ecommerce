import { useParams } from 'react-router-dom'
import {
	CarouselSimilarProducts,
	Footer,
	HeaderMenu,
	ProductDetails,
} from '../layouts'

export const Product = () => {
	const { productId } = useParams()

	return (
		<>
			<HeaderMenu />
			<ProductDetails productId={productId} />
			<CarouselSimilarProducts productId={productId} />
			<Footer />
		</>
	)
}
