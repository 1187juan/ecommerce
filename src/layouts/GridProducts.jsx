import { Container, ProductCard } from '../components'
import { useGetProductsQuery } from '../store/apis/products'
import { Alert, AlertIcon, Button, Spinner } from '@chakra-ui/react'
import { Pagination } from '../layouts'
import { useNavigate } from 'react-router-dom'

export const GridProducts = ({ page = 1 }) => {
	const { data, isLoading, error, refetch, isFetching } =
		useGetProductsQuery(page)
	const navigate = useNavigate()
	const setPage = page => navigate('/' + page)

	if (isLoading)
		return <Spinner size='xl' sx={{ marginLeft: 'calc(50% - 2rem)' }} />

	if (error) {
		return (
			<Alert status='error'>
				<AlertIcon />
				{error}
				<Button
					variant='ghost'
					colorScheme='iherit'
					onClick={refetch}
					isLoading={isFetching}
				>
					Reintentar
				</Button>
			</Alert>
		)
	}

	const { results: products, totalPages } = data

	return (
		<Container
			sx={{
				display: 'grid',
				gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 250px), 1fr))',
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
				sx={{ gridColumn: '3 span', padding: '1rem' }}
			/>
		</Container>
	)
}
