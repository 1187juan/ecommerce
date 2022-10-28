import { createSlice } from '@reduxjs/toolkit'
const initialState = {
	nameAndSurname: null,
	number: null,
	expirationDate: null,
	ccv: null,
}

export const creditCardSlice = createSlice({
	name: 'creditCard',
	initialState,
	reducers: {
		resetCreditCard: () => {
			return { ...initialState }
		},
		updateCreditCard: (state, action) => {
			return { ...state, ...action.payload }
		},
	},
})

export const { resetCreditCard, updateCreditCard } = creditCardSlice.actions
