import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export const PublicRoutes = () => {
	const { isLogin } = useSelector(state => state.auth)

	const lastPath = localStorage.getItem('lastPath', '/')

	return isLogin ? <Navigate to={lastPath} /> : <Outlet />
}
