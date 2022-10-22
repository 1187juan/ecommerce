import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import { returnDocs } from './returnDocs'

export const getAddresses = async uid => {
	const addressesRef = collection(db, `users/${uid}/addresses`)
	const addressesRes = await getDocs(addressesRef)
	const addresses = returnDocs(addressesRes).sort(
		(a, b) => b.lastUpdate - a.lastUpdate
	)
	return addresses
}

export const getAddress = async (uid, addressId) => {
	const addressRef = doc(db, `users/${uid}/addresses`, addressId)
	const addressRes = await getDoc(addressRef)

	if (!addressRes.exists()) throw new Error('La dirección no existe.')
	return { id: addressId, ...addressRes.data() }
}
