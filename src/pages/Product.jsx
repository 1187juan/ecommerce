import { useParams } from 'react-router-dom'
import { validateProductId } from '../helpers'
import { CarouselSimilarProducts, ErrorPage, ProductDetails } from '../layouts'
import { useEffect } from 'react'

export const Product = () => {
	const { productId } = useParams()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [productId])

	if (!validateProductId(productId)) return <ErrorPage to='/' replace />

	return (
		<>
			<ProductDetails productId={productId} />
			<CarouselSimilarProducts productId={productId} />
		</>
	)
}
