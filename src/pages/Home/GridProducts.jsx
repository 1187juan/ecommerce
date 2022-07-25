import { Grid } from '@chakra-ui/react'
import products from '../../data/products.json'
import { ProductCard } from '../../components'

export const GridProducts = () => {
	return (
		<Grid
			w='min(100% - 2rem, 992px)'
			mx='auto'
			templateColumns='repeat(auto-fill, minmax(min(100%, 250px), 1fr))'
			gap='1rem'
		>
			{products.map(product => (
				<ProductCard key={product.id} {...product} />
			))}
		</Grid>
	)
}
