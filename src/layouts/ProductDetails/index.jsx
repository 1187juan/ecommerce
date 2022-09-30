import { Container } from '../../components'
import { CarouselImages, AlertErrorWithReload } from '../../layouts'
import { Details } from './Details'
import { useGetProductQuery } from '../../store/apis/products'
import { Spinner } from '@chakra-ui/react'

export const ProductDetails = ({ productId }) => {
	const { data: product, isLoading, error } = useGetProductQuery(productId)

	if (isLoading)
		return <Spinner size='xl' sx={{ marginLeft: 'calc(50% - 2rem)' }} />

	if (error) return <AlertErrorWithReload />

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
			<CarouselImages imgs={product.imgs} />
			<Details product={product} />
		</Container>
	)
}
