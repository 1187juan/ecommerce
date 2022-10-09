import { doc, getDoc, Timestamp, updateDoc } from 'firebase/firestore'
import { retry } from '../../../helpers'
import { db } from '../../../firebase'
import { setBasket, setErrorBasket, setLoadingBasket } from './basketSlice'

export const getBasket = () => {
	return async (dispatch, getState) => {
		try {
			dispatch(setLoadingBasket(true))
			dispatch(setErrorBasket(null))
			const data = await retry(async () => {
				const { auth } = getState()

				if (!auth.isLogin) return null
				const basketRef = doc(db, 'baskets', auth.uid)
				const basketRes = await getDoc(basketRef)

				if (!basketRes.exists())
					throw new Error('Aún no tienes un carrito de compras.')

				const basket = basketRes.data()
				let items = basket.items
				if (items) {
					const itemsPromises = []
					items.forEach(item =>
						itemsPromises.push(
							getDoc(doc(db, 'products/data/items', item.id)).then(res => {
								if (res.exists()) return { ...item, ...res.data() }
								return {
									...item,
									hasStock: false,
								}
							})
						)
					)
					items = await Promise.all(itemsPromises)
					items = items.sort((a, b) => b.lastUpdate - a.lastUpdate)
				}

				let address = null
				if (basket.addressId) {
					address = await getDoc(
						doc(db, `users/${auth.uid}/addresses`, basket.addressId)
					)
				}

				const data = { ...basket, items, address }

				return data
			})
			dispatch(setBasket(data))
		} catch ({ message }) {
			console.log(message)
			dispatch(setErrorBasket(message))
		}
		dispatch(setLoadingBasket(false))
	}
}

export const updateBasketItem = ({ basketItemId, basketItemQuantity }) => {
	return async (dispatch, getState) => {
		try {
			dispatch(setLoadingBasket(true))
			dispatch(setErrorBasket(null))
			const { auth, basket } = getState()
			const basketItemsBasic =
				basket.data?.items
					?.map(({ id, quantity, lastUpdate }) => ({
						id,
						quantity,
						lastUpdate,
					}))
					.filter(item => item.id !== basketItemId) ?? null

			const basketItems = basketItemsBasic?.length ? basketItemsBasic : null

			const basketItem =
				basketItemQuantity > 0
					? {
							id: basketItemId,
							quantity: basketItemQuantity,
							lastUpdate: Timestamp.now(new Date()),
					  }
					: null

			const newBasketItems =
				(basketItems || basketItem) &&
				[basketItems ?? [], basketItem ?? []].flat()

			const basketRef = doc(db, 'baskets', auth.uid)

			await updateDoc(basketRef, { items: newBasketItems })

			let newBasketItemsDetails = newBasketItems

			if (newBasketItemsDetails) {
				const itemsPromises = newBasketItemsDetails.map(item =>
					getDoc(
						doc(db, `products/data/items/${item.id}/details`, 'data')
					).then(res => {
						if (res.exists()) return { ...item, ...res.data() }

						return {
							...item,
							name: 'Producto no disponible',
							hasStock: false,
							imgs: [
								{
									imgUrl: import.meta.env.VITE_PLACEHOLDER_320,
									imgAlt: 'product',
								},
							],
						}
					})
				)

				newBasketItemsDetails = await Promise.all(itemsPromises)
				newBasketItemsDetails = newBasketItemsDetails.sort(
					(a, b) => b.lastUpdate - a.lastUpdate
				)
			}

			dispatch(setBasket({ ...basket.data, items: newBasketItemsDetails }))
		} catch ({ message }) {
			dispatch(setErrorBasket(message))
		}
		dispatch(setLoadingBasket(false))
	}
}
