import { Outlet } from 'react-router-dom'
import { HeaderLogo } from './HeaderLogo'

export const LayoutToHome = () => {
	return (
		<>
			<HeaderLogo />
			<Outlet />
		</>
	)
}
