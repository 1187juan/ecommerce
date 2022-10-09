import { createSlice } from '@reduxjs/toolkit'

export const basketSlice = createSlice({
	name: 'basket',
	initialState: {
		isLoading: true,
		data: null,
		error: null,
	},
	reducers: {
		setLoadingBasket: (state, action) => {
			state.isLoading = action.payload
		},

		setBasket: (state, action) => {
			state.data = action.payload
		},
		setErrorBasket: (state, action) => {
			state.error = action.payload
		},
	},
})

export const { setBasket, setLoadingBasket, setErrorBasket } =
	basketSlice.actions
