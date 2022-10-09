import { useParams } from 'react-router-dom'
import { CarouselSimilarProducts, ErrorPage, ProductDetails } from '../layouts'

export const Product = () => {
	const { productId } = useParams()

	if (!(productId > 9999 && productId <= 99999))
		return <ErrorPage to='/' replace />

	return (
		<>
			<ProductDetails productId={productId} />
			<CarouselSimilarProducts productId={productId} />
		</>
	)
}
