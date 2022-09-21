import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
	Checkout,
	Error404,
	ForgotPassword,
	Home,
	Login,
	Product,
	Singup,
	Tests,
} from '../pages'
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
				</Route>
				<Route element={<PublicRoutes />}>
					<Route path='/singup' element={<Singup />} />
					<Route path='/login' element={<Login />} />
					<Route path='/forgot-password' element={<ForgotPassword />} />
				</Route>
				<Route element={<PrivateRoutes />}>
					<Route path='/account' element={<div>account</div>} />
					<Route path='/checkout' element={<Checkout />} />
				</Route>
				<Route path='*' element={<Error404 />} />
			</Routes>
		</BrowserRouter>
	)
}
