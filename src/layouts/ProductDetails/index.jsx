import { Container } from '../../components'
import { CarouselImages } from '../../layouts'
import { Details } from './Details'
import products from '../../data/products.json'

export const ProductDetails = ({ productId }) => {
	const product = products.find(product => product.id === productId)

	return (
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
	)
}
