import { doc, getDoc } from 'firebase/firestore'
import { useSelector } from 'react-redux'
import { db } from '../firebase'

export const Tests = () => {
	const { uid } = useSelector(state => state.auth)

	const handleClick = async () => {
		try {
			try {
				const userRef = doc(db, 'users', uid)
				const userSnap = await getDoc(userRef)
				console.log(userSnap.doc())
			} catch ({ message }) {
				console.log(message)
			}
		} catch ({ message }) {
			console.log(message)
		}
	}

	return <button onClick={handleClick}>get data</button>
}
