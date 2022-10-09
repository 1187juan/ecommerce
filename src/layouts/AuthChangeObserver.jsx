import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'
import { setCurrentUser } from '../store/slices/auth'
import { Progress } from '@chakra-ui/react'

export const AuthChangeObserver = ({ children }) => {
	const { isLoading } = useSelector(state => state.auth)
	const dispatch = useDispatch()

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, user => {
			if (!user) {
				return dispatch(setCurrentUser(null))
			}

			const data = {
				uid: user.uid,
				displayName: user.displayName,
				email: user.email,
				emailVerified: user.emailVerified,
				phoneNumber: user.phoneNumber,
				photoURL: user.photoURL,
			}
			return dispatch(setCurrentUser(data))
		})

		return unsubscribe
	}, [])

	if (isLoading) return <Progress size='xs' isIndeterminate />

	return children
}
