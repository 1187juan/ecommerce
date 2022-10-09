import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from './apis/products'
import { authSlice } from './slices/auth'
import { basketSlice } from './slices/basket'

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		basket: basketSlice.reducer,
		[productsApi.reducerPath]: productsApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(productsApi.middleware),
})
