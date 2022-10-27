import { doc, Timestamp, updateDoc } from 'firebase/firestore'
import { db } from '../../../firebase'
import {
	getBasket,
	getProductsById,
	retry,
	searchItemById,
	updateBasket as updateBasketDB,
} from '../../../helpers'
import {
	errorBasket,
	resetBasket,
	startLoadingBasket,
	updateBasket,
} from './basketSlice'

export const initializeBasket = basketId => {
	return async dispatch => {
		try {
			dispatch(startLoadingBasket())

			if (!basketId) return dispatch(resetBasket())

			const basketBefore = await retry(() => getBasket(basketId))
			const basket = {
				...basketBefore,
				items: basketBefore.items.sort((a, b) => b.lastUpdate - a.lastUpdate),
			}
			const basketItemsIds = basket.items.map(({ id }) => id)
			const products = await getProductsById(basketItemsIds)
			const itemsDetails = products.map(productRes => {
				const item = searchItemById(productRes.data.id, basket.items)
				return { ...productRes, data: { ...productRes.data, ...item } }
			})

			dispatch(
				updateBasket({
					...basket,
					itemsDetails,
				})
			)
		} catch ({ message }) {
			dispatch(errorBasket(message))
		}
	}
}

export const setBasketItem = basketItem => {
	return async (dispatch, getState) => {
		try {
			dispatch(startLoadingBasket())

			const { basket, auth } = getState()
			const basketRef = doc(db, 'baskets', auth.uid)

			const itemsBefore = basket.items.filter(({ id }) => id !== basketItem.id)
			const items =
				basketItem.quantity > 0
					? itemsBefore.concat({
							...basketItem,
							lastUpdate: Timestamp.now(),
					  })
					: itemsBefore
			let itemsDetails = basket.itemsDetails.filter(
				({ data }) => data.id !== basketItem.id
			)
			if (basketItem.quantity > 0) {
				const [product] = await getProductsById([basketItem.id])
				const item = searchItemById(basketItem.id, items)

				const itemDetails = {
					...product,
					data: { ...product.data, ...item },
				}
				itemsDetails = [itemDetails, ...itemsDetails]
			}

			await updateDoc(basketRef, { items })
			dispatch(updateBasket({ items, itemsDetails }))
		} catch ({ message }) {
			dispatch(errorBasket())
		}
	}
}

export const setBasketAddressId = (uid, addressId) => {
	return async dispatch => {
		try {
			dispatch(startLoadingBasket())
			if (!uid) return dispatch(resetBasket())
			await updateBasketDB(uid, { addressId })
			dispatch(updateBasket({ addressId }))
		} catch ({ message }) {
			dispatch(errorBasket(message))
		}
	}
}
