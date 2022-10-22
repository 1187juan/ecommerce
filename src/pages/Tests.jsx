import {
	collection,
	doc,
	serverTimestamp,
	Timestamp,
	writeBatch,
} from 'firebase/firestore'
import { db } from '../firebase'
import products from '../data/products.json'
import productsDetails from '../data/productsDetails.json'
import { searchItemById } from '../helpers'

export const Tests = () => {
	const productsIds = products.map(({ id }) => id)

	const handleClick = async () => {
		try {
			const batch = writeBatch(db)
			const productsDataRef = doc(db, 'products', 'data')
			const productsRef = collection(db, 'products/data/items')
			batch.set(productsDataRef, {
				created: serverTimestamp(),
				lastUpdate: serverTimestamp(),
				ids: productsIds,
			})

			productsIds.forEach(id => {
				const product = searchItemById(id, products)
				const productDetails = searchItemById(id, productsDetails)

				delete productDetails.id
				batch.set(doc(productsRef, id), {
					...product,
					lastUpdate: Timestamp.now(),
				})
				batch.set(
					doc(db, `products/data/items/${id}/details`, 'data'),
					productDetails
				)
			})

			await batch.commit()
			console.log('ok')
		} catch ({ message }) {
			console.log(message)
		}
	}
	return <button onClick={handleClick}>Tests</button>
}
