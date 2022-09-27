import { useParams } from 'react-router-dom'
import { CarouselSimilarProducts, ProductDetails } from '../layouts'

export const Product = () => {
	const { productId } = useParams()

	return (
		<>
			<ProductDetails productId={productId} />
			<CarouselSimilarProducts productId={productId} />
		</>
	)
}
