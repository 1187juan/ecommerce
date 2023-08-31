import { Container, ProductCard } from '../components'
import { useGetProductsQuery } from '../store/apis/products'
import { Pagination, AlertErrorWithReload } from '../layouts'
import { useNavigate } from 'react-router-dom'

import { ProductCardSkeleton } from '../components/ProductCardSkeleton'

export const GridProducts = ({ page = 1 }) => {
	const { data, isLoading, error } = useGetProductsQuery(page)
	const navigate = useNavigate()
	const setPage = page => navigate('/' + page)

	if (isLoading)
		return (
			<Container
				sx={{
					display: 'grid',
					gridTemplateColumns: [
						'column',
						'repeat(auto-fill, minmax(min(100%, 250px), 1fr))',
					],
					gap: '1rem',
					marginTop: '1rem',
				}}
			>
				{Array(21)
					.fill('')
					.map((_, i) => (
						<ProductCardSkeleton key={i} />
					))}
			</Container>
		)

	if (error) return <AlertErrorWithReload error={error} />

	const { results: products, totalPages } = data

	return (
		<Container
			sx={{
				display: 'grid',
				gridTemplateColumns: [
					'column',
					'repeat(auto-fill, minmax(min(100%, 250px), 1fr))',
				],
				gap: '1rem',
				marginTop: '1rem',
			}}
		>
			{products.map(product => (
				<ProductCard key={product.id} product={product} />
			))}
			<Pagination
				totalPages={totalPages}
				setPage={setPage}
				page={page}
				sx={{ gridColumn: '-1 / 1', padding: '1rem' }}
			/>
		</Container>
	)
}
