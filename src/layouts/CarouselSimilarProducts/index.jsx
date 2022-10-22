import { Text, Spinner } from '@chakra-ui/react'
import { Container, ProductCard } from '../../components'
import { Carousel } from './Carousel'
import { useGetProductsRandomQuery } from '../../store/apis/products'
import { AlertErrorWithReload } from '../AlertErrorWithReload'

export const CarouselSimilarProducts = ({ productId }) => {
	const {
		data: products,
		isLoading,
		error,
	} = useGetProductsRandomQuery(productId)

	if (isLoading)
		return <Spinner size='xl' sx={{ marginLeft: 'calc(50% - 2rem)' }} />

	if (error) return <AlertErrorWithReload error={error} />

	return (
		<Container
			fullWidth
			sx={{
				marginTop: 0,
				marginBottom: '1rem',
				padding: '1rem 1rem 0',
				backgroundColor: 'surface',
			}}
		>
			<Text fontSize='2xl' fontWeight='semibold'>
				Más productos
			</Text>
			<Carousel>
				{products.map((products, index) => (
					<ProductCard
						key={index}
						product={products}
						sx={{
							width: '35vmin',
						}}
					/>
				))}
			</Carousel>
		</Container>
	)
}
