import {
	collection,
	doc,
	getDoc,
	getDocs,
	setDoc,
	Timestamp,
} from 'firebase/firestore'
import { nanoid } from 'nanoid'
import { db } from '../firebase'
import { deleteProp } from './deleteProp'
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
export const setAddress = async (uid, address) => {
	const newAddress = { ...address }
	newAddress.id ??= nanoid()
	newAddress.lastUpdate = Timestamp.now()
	const addressRef = doc(db, `users/${uid}/addresses`, newAddress.id)
	const addressWithoutId = deleteProp('id', newAddress)

	await setDoc(addressRef, addressWithoutId)

	return { uid, address: newAddress }
}
