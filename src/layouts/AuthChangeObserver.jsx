import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'
import { Progress } from '@chakra-ui/react'
import { setAuth } from '../store/slices/auth'

export const AuthChangeObserver = ({ children }) => {
	const { isLoading } = useSelector(state => state.auth)
	const dispatch = useDispatch()

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, user =>
			dispatch(setAuth(user))
		)
		return unsubscribe
	}, [])

	if (isLoading) return <Progress size='xs' isIndeterminate />

	return children
}
