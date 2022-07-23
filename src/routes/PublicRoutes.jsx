import { Navigate, Outlet } from 'react-router-dom'

export const PublicRoutes = () => {
	const isLogin = false
	const lastPath = localStorage.getItem('lastPath', '/')

	return isLogin ? <Navigate to={lastPath} /> : <Outlet />
}
