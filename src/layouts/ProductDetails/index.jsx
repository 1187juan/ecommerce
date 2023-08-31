import { Container } from '../../components'
import { CarouselImages, AlertErrorWithReload } from '../../layouts'
import { Details } from './Details'
import { useGetProductQuery } from '../../store/apis/products'
import { Navigate } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { CustomSkeleton } from './CustomSkeleton'

export const ProductDetails = ({ productId }) => {
	const { data: product, isLoading, error } = useGetProductQuery(productId)

	if (isLoading) return <CustomSkeleton />

	if (!product) return <Navigate to='error-404' replace />

	if (error) return <AlertErrorWithReload error={error} />

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
			<CarouselImages key={nanoid()} imgs={product.imgs} />
			<Details key={nanoid()} {...product} />
		</Container>
	)
}
