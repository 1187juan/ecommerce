import { Outlet, useLocation } from 'react-router-dom'

export const GeneralRoutes = () => {
	const { pathname } = useLocation()
	localStorage.setItem('lastPath', pathname)

	return <Outlet />
}
