import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useIinitializeBasket } from '../hooks'
import {
	LayoutAuth,
	LayoutCheckout,
	LayoutHome,
	LayoutProducts,
	LayoutToHome,
} from '../layouts'
import {
	Checkout,
	Error404,
	ForgotPassword,
	Home,
	Login,
	Product,
	Products,
	Singup,
	Tests,
} from '../pages'
import { GeneralRoutes } from './GeneralRoutes'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'

export const AppRouter = () => {
	useIinitializeBasket()

	return (
		<BrowserRouter>
			<Routes>
				<Route element={<GeneralRoutes />}>
					<Route element={<LayoutHome />}>
						<Route index path='/' element={<Home />} />
					</Route>
					<Route element={<LayoutProducts />}>
						<Route path='/:page' element={<Products />} />
						<Route path='/product/:productId' element={<Product />} />
					</Route>
				</Route>

				<Route element={<PublicRoutes />}>
					<Route element={<LayoutAuth />}>
						<Route path='/singup' element={<Singup />} />
						<Route path='/login' element={<Login />} />
						<Route path='/forgot-password' element={<ForgotPassword />} />
					</Route>
				</Route>

				<Route element={<PrivateRoutes />}>
					<Route element={<LayoutCheckout />}>
						<Route path='/account' element={<div>account</div>} />
						<Route path='/checkout' element={<Checkout />} />
					</Route>
				</Route>

				<Route path='/tests' element={<Tests />} />
				<Route element={<LayoutToHome />}>
					<Route path='*' element={<Error404 />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
