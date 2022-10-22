import { useDisclosure, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ModalAddressForm } from '../../layouts'
import { deleteProperty, searchItemById, setItemById } from '../../helpers'
import { FormAddresses } from './FormAddresses'
import { CardNewAddress } from './CardNewAddress'
import { useDispatch, useSelector } from 'react-redux'
import { collection, setDoc, doc, Timestamp } from 'firebase/firestore'
import { db } from '../../firebase'
import { nanoid } from 'nanoid'
import { setAddresses } from '../../store/slices/addresses'

export const FormAddressSelection = ({ sx = {}, ...props }) => {
	const { addresses, auth } = useSelector(state => state)
	const dispatch = useDispatch()
	const toast = useToast()
	const [isLoading, setIsLoading] = useState(false)
	const hasAddresses = Boolean(addresses.length)
	const formMethods = useForm()
	const { isOpen, onClose, onOpen } = useDisclosure()
	const [addressToEdit, setAddressToEdit] = useState(null)

	const onEditAddress = addressId => {
		setAddressToEdit(searchItemById(addressId, addresses))
		onOpen()
	}

	const onSubmitAddresses = ({ addressId }) => {
		const address = searchItemById(addressId, addresses)
	}

	const onSubmitAddress = async data => {
		try {
			setIsLoading(true)
			const addressesRef = collection(db, `users/${auth.uid}/addresses`)
			const addressId = data.id ?? nanoid()
			data.latUpdate = Timestamp.now()
			const address = { ...data, id: addressId }
			const addressWithoutId = deleteProperty('id', data)

			await setDoc(doc(addressesRef, addressId), addressWithoutId)
			const newAddresses = setItemById(address, addresses).sort(
				(a, b) => b.lastUpdate - a.lastUpdate
			)

			dispatch(setAddresses(newAddresses))
			onClose()
		} catch ({ message }) {
			toast({ status: 'error', title: message, isClosable: true })
		}
		setIsLoading(false)
	}

	return (
		<>
			{hasAddresses && (
				<FormAddresses
					{...formMethods}
					addresses={addresses}
					onSubmit={onSubmitAddresses}
					onEditAddress={onEditAddress}
					onOpen={onOpen}
					sx={sx}
					props={props}
				/>
			)}

			{!hasAddresses && <CardNewAddress onOpen={onOpen} />}

			{isOpen && (
				<ModalAddressForm
					onClose={onClose}
					isOpen={isOpen}
					onCloseComplete={() => setAddressToEdit(null)}
					defaultAddress={addressToEdit}
					isLoading={isLoading}
					onSubmit={onSubmitAddress}
				/>
			)}
		</>
	)
}
