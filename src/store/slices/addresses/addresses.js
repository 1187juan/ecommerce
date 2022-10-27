import { createSlice } from '@reduxjs/toolkit'
const initialState = {
	isLoading: true,
	items: [],
	error: null,
}
export const addressesSlice = createSlice({
	name: 'addresses',
	initialState,
	reducers: {
		startLoadingAddresses: state => {
			state.isLoading = true
			state.error = null
		},
		setAddressesItems: (state, action) => {
			state.isLoading = false
			state.items = action.payload
		},
		errorAddresses: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},
		resetAddresses: () => {
			return {
				...initialState,
				isLoading: false,
			}
		},
	},
})

export const {
	errorAddresses,
	resetAddresses,
	startLoadingAddresses,
	setAddressesItems,
} = addressesSlice.actions
