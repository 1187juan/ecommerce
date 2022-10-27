import {
	getAddresses,
	setItemById,
	deleteAddress as deleteAddressDb,
} from '../../../helpers'
import {
	errorAddresses,
	resetAddresses,
	setAddressesItems,
	startLoadingAddresses,
} from './addresses'

export const getAddressesThunk = uid => {
	return async dispatch => {
		try {
			dispatch(startLoadingAddresses())
			if (!uid) return dispatch(resetAddresses())
			const addressesBefore = await getAddresses(uid)
			const addresses = addressesBefore.sort(
				(a, b) => b.lastUpdate - a.lastUpdate
			)

			dispatch(setAddressesItems(addresses))
		} catch ({ message }) {
			dispatch(errorAddresses())
		}
	}
}

export const setAddress = (uid, addressWithId) => {
	return async (dispatch, getState) => {
		try {
			dispatch(startLoadingAddresses())
			if (!uid) return dispatch(resetAddresses())

			const { addresses: beforeAddresses } = getState()
			const address = { ...addressWithId }
			delete address.id

			const addresses = setItemById(addressWithId, beforeAddresses.items).sort(
				(a, b) => b.lastUpdate - a.lastUpdate
			)

			await setAddress(uid, address)

			dispatch(setAddressesItems(addresses))
		} catch ({ message }) {
			dispatch(errorAddresses(message))
		}
	}
}

export const deleteAddress = (uid, addressId) => {
	return async (dispatch, getState) => {
		try {
			const { addresses } = getState()
			dispatch(startLoadingAddresses())
			await deleteAddressDb(uid, addressId)
			const items = addresses.items.filter(({ id }) => id !== addressId)

			dispatch(setAddressesItems(items))
		} catch ({ message }) {
			dispatch(errorAddresses(message))
		}
	}
}
