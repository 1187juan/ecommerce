import { useParams } from 'react-router-dom'
import products from '../../data/products.json'
import { Details } from './Details'
import { CarouselImages } from './CarouselImages'
import { CarouselSimilarProducts } from './CarouselSimilarProducts'
import { Container, Footer, HeaderLogo } from '../../components'

export const ProductDetails = () => {
	const { productId } = useParams()
	const product = products.find(product => product.id === productId)

	return (
		<>
			<HeaderLogo />
			<Container
				fullWidth
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					gap: '1rem',
					marginTop: '1rem',
					marginBottom: '1rem',
					backgroundColor: 'surface',
				}}
			>
				<CarouselImages images={product.images} />
				<Details {...product} />
			</Container>
			<CarouselSimilarProducts productId={productId} />
			<Footer />
		</>
	)
}
