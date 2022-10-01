import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

export const PrivateRoutes = () => {
	const { isLogin } = useSelector(state => state.auth)
	const { pathname } = useLocation()
	localStorage.setItem('lastPath', pathname)

	return isLogin ? <Outlet /> : <Navigate to='/login' replace />
}
