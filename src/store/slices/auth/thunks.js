import { setCurrentUser } from './authSlice'

export const setAuth = user => {
	return dispatch => {
		if (!user) {
			dispatch(setCurrentUser(null))
			return
		}

		const data = {
			uid: user.uid,
			displayName: user.displayName,
			email: user.email,
			emailVerified: user.emailVerified,
			phoneNumber: user.phoneNumber,
			photoURL: user.photoURL,
		}
		dispatch(setCurrentUser(data))
	}
}
