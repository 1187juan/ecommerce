import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from './apis/products'
import { addressesSlice } from './slices/addresses'
import { authSlice } from './slices/auth'
import { basketSlice } from './slices/basket'

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		basket: basketSlice.reducer,
		addresses: addressesSlice.reducer,
		[productsApi.reducerPath]: productsApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(productsApi.middleware),
})
