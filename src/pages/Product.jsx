import { useParams } from 'react-router-dom'
import { validateProductId } from '../helpers'
import { CarouselSimilarProducts, ErrorPage, ProductDetails } from '../layouts'

export const Product = () => {
	const { productId } = useParams()

	if (!validateProductId(productId)) return <ErrorPage to='/' replace />

	return (
		<>
			<ProductDetails productId={productId} />
			<CarouselSimilarProducts productId={productId} />
		</>
	)
}
