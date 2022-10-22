import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'

export const getCreditCard = async (uid, creditCardId) => {
	const creditCardsRef = doc(db, `users/${uid}/creditCards`, creditCardId)
	const creditCardsRes = await getDoc(creditCardsRef)

	if (!creditCardsRes.exists()) throw new Error('El metodo de pago no existe.')

	return { ...creditCardsRes.data(), id: creditCardId }
}
