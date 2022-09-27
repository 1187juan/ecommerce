import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { HeaderMenu } from './HeaderMenu'

export const LayoutProducts = () => {
	return (
		<>
			<HeaderMenu />
			<Outlet />
			<Footer />
		</>
	)
}
