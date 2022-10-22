import { createSlice } from '@reduxjs/toolkit'

export const addressesSlice = createSlice({
	name: 'addresses',
	initialState: [],
	reducers: {
		setAddresses: (_, action) => {
			return action.payload
		},
	},
})

export const { setAddresses } = addressesSlice.actions
