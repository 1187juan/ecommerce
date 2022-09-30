import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from './apis/products'
import { authSlice } from './slices/auth'

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		[productsApi.reducerPath]: productsApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(productsApi.middleware),
})
