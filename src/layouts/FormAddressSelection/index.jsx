import { useDisclosure, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ModalAddressForm } from '../../layouts'
import {
	searchItemById,
	setAddress,
	setItemById,
	updateBasket as updateBasketDb,
} from '../../helpers'
import { FormAddresses } from './FormAddresses'
import { CardNewAddress } from './CardNewAddress'
import { useDispatch, useSelector } from 'react-redux'
import { updateBasket } from '../../store/slices/basket'
import { deleteAddress, setAddressesItems } from '../../store/slices/addresses'

export const FormAddressSelection = ({ sx = {}, ...props }) => {
	const dispatch = useDispatch()
	const uid = useSelector(state => state.auth.uid)
	const addresses = useSelector(state => state.addresses)
	const hasAddresses = Boolean(addresses.items.length)
	const toast = useToast()
	const [isLoading, setIsLoading] = useState(false)
	const formMethods = useForm()
	const { isOpen, onClose, onOpen } = useDisclosure()
	const [addressToEdit, setAddressToEdit] = useState(null)

	const onEditAddress = addressId => {
		setAddressToEdit(searchItemById(addressId, addresses.items))
		onOpen()
	}
	const onDeleteAddress = addressId => {
		dispatch(deleteAddress(uid, addressId))
	}

	const onSubmitAddresses = async ({ addressId }) => {
		try {
			setIsLoading(true)
			await updateBasketDb(uid, { addressId })
			dispatch(updateBasket({ addressId }))
		} catch ({ message }) {
			toast({
				status: 'error',
				title: message,
				isClosable: true,
			})
			setIsLoading(false)
		}
	}

	const onSubmitAddress = async addressBefore => {
		try {
			setIsLoading(true)
			const { address } = await setAddress(uid, addressBefore)
			const newAddresses = setItemById(address, addresses.items).sort(
				(a, b) => b.lastUpdate - a.lastUpdate
			)
			onClose()
			dispatch(setAddressesItems(newAddresses))
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
					addresses={addresses.items}
					onSubmit={onSubmitAddresses}
					onEditAddress={onEditAddress}
					onDeleteAddress={onDeleteAddress}
					onOpen={onOpen}
					isLoading={isLoading}
					sx={sx}
					props={props}
				/>
			)}

			{!hasAddresses && <CardNewAddress onOpen={onOpen} />}

			<ModalAddressForm
				key={addressToEdit?.id}
				onClose={onClose}
				isOpen={isOpen}
				onCloseComplete={() => setAddressToEdit(null)}
				defaultAddress={addressToEdit}
				isLoading={isLoading}
				onSubmit={onSubmitAddress}
			/>
		</>
	)
}
