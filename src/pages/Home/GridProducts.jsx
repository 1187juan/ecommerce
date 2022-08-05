import products from '../../data/products.json'
import { Container, ProductCard } from '../../components'

export const GridProducts = () => {
	return (
		<Container
			sx={{
				display: 'grid',
				gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 250px), 1fr))',
				gap: '1rem',
			}}
		>
			{products.map(product => (
				<ProductCard key={product.id} {...product} />
			))}
		</Container>
	)
}
