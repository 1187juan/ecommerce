import { useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { searchItemById } from '../../helpers'
import { ModalAddressForm } from '../../layouts'
import { CardNewAddress } from './CardNewAddress'
import { FormAddresses } from './FormAddresses'

export const FormAddressSelection = ({
	addresses = [],
	onSuccess,
	sx = {},
	...props
}) => {
	const { register, handleSubmit, formState } = useForm()

	const onSubmit = ({ addressId }) => {
		const address = searchItemById(addressId, addresses)
		onSuccess(address)
	}

	const { isOpen, onClose, onOpen } = useDisclosure()
	const [addressToEdit, setAddressToEdit] = useState(null)
	const resetAddressToEdit = () => setAddressToEdit(null)

	const onEditAddress = addressId => {
		setAddressToEdit(searchItemById(addressId, addresses))
		onOpen()
	}

	const hasAddresses = !!addresses.length

	return (
		<>
			{hasAddresses && (
				<FormAddresses
					addresses={addresses}
					handleSubmit={handleSubmit}
					onSubmit={onSubmit}
					onEditAddress={onEditAddress}
					register={register}
					formState={formState}
					onOpen={onOpen}
					sx={sx}
					props={props}
				/>
			)}

			{!hasAddresses && <CardNewAddress onOpen={onOpen} />}

			{(addressToEdit ?? isOpen) && (
				<ModalAddressForm
					onClose={onClose}
					isOpen={isOpen}
					onCloseComplete={resetAddressToEdit}
					defaultAddress={addressToEdit ?? {}}
				/>
			)}
		</>
	)
}
