import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
	name: 'slice',
	initialState: {
		isLoading: true,
		isLogin: false,
		currentUser: null,
		uid: null,
	},
	reducers: {
		setCurrentUser: (state, action) => {
			state.isLoading = false
			state.isLogin = !!action.payload
			state.currentUser = action.payload
			state.uid = action.payload?.uid ?? null
		},
	},
})

export const { setCurrentUser } = authSlice.actions
