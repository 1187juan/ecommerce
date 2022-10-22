import { doc, getDoc } from 'firebase/firestore'
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
