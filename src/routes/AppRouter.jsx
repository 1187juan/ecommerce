import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages'
import { GeneralRoutes } from './GeneralRoutes'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<GeneralRoutes />}>
					<Route path='/' element={<Home />} />
					<Route path='*' element={<div>error 404</div>} />
				</Route>
				<Route element={<PublicRoutes />}>
					<Route path='/login' element={<div>login</div>} />
				</Route>
				<Route element={<PrivateRoutes />}>
					<Route path='/account' element={<div>account</div>} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
