import { useParams } from 'react-router-dom'
import {
	CarouselSimilarProducts,
	Footer,
	HeaderLogo,
	ProductDetails,
} from '../layouts'

export const Product = () => {
	const { productId } = useParams()

	return (
		<>
			<HeaderLogo />
			<ProductDetails productId={productId} />
			<CarouselSimilarProducts productId={productId} />
			<Footer />
		</>
	)
}
