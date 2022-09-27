import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { HeaderMenu } from './HeaderMenu'

export const LayoutHome = () => {
	return (
		<>
			<HeaderMenu alpha sx={{ position: 'fixed' }} />
			<Outlet />
			<Footer />
		</>
	)
}
