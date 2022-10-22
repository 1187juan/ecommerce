import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { filterAllSettled } from './filterAllSettled'

export const getProduct = async productId => {
	const productRef = doc(db, 'products/data/items', productId)
	const productRes = await getDoc(productRef)

	if (!productRes.exists()) throw new Error('El producto no existe.')
	return { ...productRes.data(), id: productId }
}

export const getProductDetails = async productId => {
	const productDetailsRef = doc(
		db,
		`products/data/items/${productId}/details`,
		'data'
	)
	const productDetailsRes = await getDoc(productDetailsRef)

	if (!productDetailsRes.exists()) throw new Error('El producto no existe.')
	return { ...productDetailsRes.data(), id: productId }
}

export const getProductsById = async (productsId, status = 'none') => {
	const productsPromises = []
	productsId.forEach(productsId =>
		productsPromises.push(getProduct(productsId))
	)
	const products = await Promise.allSettled(productsPromises).then(items =>
		filterAllSettled({
			ids: productsId,
			items,
			status,
		})
	)

	return products
}

export const getProductsData = async () => {
	const productsDataRef = doc(db, 'products', 'data')
	const productsDataRes = await getDoc(productsDataRef)

	if (!productsDataRes.exists()) throw new Error('El producto no existe.')

	return productsDataRes.data()
}
