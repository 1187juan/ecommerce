import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Checkout, Error404, Home, Product, Tests } from '../pages'
import { GeneralRoutes } from './GeneralRoutes'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<GeneralRoutes />}>
					<Route path='/' element={<Home />} />
					<Route path='/product/:productId' element={<Product />} />
					<Route path='/tests' element={<Tests />} />
					<Route path='*' element={<Error404 />} />
				</Route>
				<Route element={<PublicRoutes />}>
					<Route path='/login' element={<div>login</div>} />
				</Route>
				<Route element={<PrivateRoutes />}>
					<Route path='/account' element={<div>account</div>} />
					<Route path='/checkout' element={<Checkout />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
