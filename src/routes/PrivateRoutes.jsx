import { Navigate, Outlet, useLocation } from 'react-router-dom'

export const PrivateRoutes = () => {
	const isLogin = true
	const { pathname } = useLocation()
	localStorage.setItem('lastPath', pathname)

	return isLogin ? <Outlet /> : <Navigate to='login' />
}
