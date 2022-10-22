import { Navigate, useParams } from 'react-router-dom'
import { ErrorPage, GridProducts } from '../layouts'

export const Products = () => {
	const params = useParams()
	const page = Number(params.page)
	const isPage = page >= 1

	if (!isPage) return <ErrorPage />

	if (page === 1) return <Navigate to='/' replace />

	return <GridProducts page={page} />
}
