import { Outlet } from 'react-router-dom'
import { HeaderBack } from './HeaderBack'

export const LayoutAuth = () => {
	return (
		<>
			<HeaderBack />
			<Outlet />
		</>
	)
}
