import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'

export const getBasket = async basketId => {
	const basketRef = doc(db, 'baskets', basketId)
	const basketRes = await getDoc(basketRef)

	if (!basketRes.exists()) {
		throw new Error(
			'Error al cargar el carrito de compras, intentalo más tarde!'
		)
	}

	return basketRes.data()
}

export const updateBasket = async (basketId, data) => {
	const basketRef = doc(db, 'baskets', basketId)
	await updateDoc(basketRef, data)

	return { basketId, data }
}

export const resetBasket = async uid => {
	const basketRef = doc(db, 'baskets', uid)
	await updateDoc(basketRef, {
		items: [],
		addressId: null,
	})
}
