import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isLoading: true,
	items: [],
	itemsDetails: [],
	addressId: null,
	error: null,
}
export const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		startLoadingBasket: state => {
			state.isLoading = true
			state.error = null
		},

		updateBasket: (state, action) => {
			return { ...state, isLoading: false, ...action.payload }
		},

		errorBasket: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},
		resetBasket: () => {
			return { ...initialState, isLoading: false }
		},
	},
})

export const { startLoadingBasket, errorBasket, updateBasket, resetBasket } =
	basketSlice.actions
