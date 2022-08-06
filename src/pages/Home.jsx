import { Banner, HeaderMenu, GridProducts } from '../layouts'

export const Home = () => {
	return (
		<>
			<HeaderMenu alpha sx={{ position: 'fixed' }} />
			<Banner />
			<GridProducts />
		</>
	)
}
