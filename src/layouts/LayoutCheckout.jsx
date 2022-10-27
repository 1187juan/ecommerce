import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { HeaderBack } from './HeaderBack'

export const LayoutCheckout = () => {
	return (
		<>
			<HeaderBack />
			<Outlet />
			<Footer />
		</>
	)
}
