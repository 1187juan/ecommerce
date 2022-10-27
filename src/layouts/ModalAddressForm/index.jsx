import {
	Modal,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { usePostalCodeData } from '../../hooks/usePostalCodeData'
import { AddressForm } from './AddressForm'
import addressTemplate from '../../data/addressTemplate.json'

export const ModalAddressForm = ({
	isOpen = false,
	onClose,
	onCloseComplete,
	defaultAddress,
	isLoading = false,
	onSubmit,
}) => {
	const formMethods = useForm({
		mode: 'onBlur',
		defaultValues: {
			...addressTemplate,
			...(defaultAddress ?? {}),
		},
	})

	const { setValue, getValues, clearErrors, reset } = formMethods
	const title = defaultAddress ? 'Actualizar dirección' : 'Nueva dirección'

	const statePostalCode = usePostalCodeData(getValues('postalCode'), {
		onSuccess: data => {
			setValue('state', data[0].state)
			setValue('municipalityOrTownHall', data[0].municipalityOrTownHall)
			setValue('cologne', data[0].cologne)
		},
		onError: () => {
			setValue('state', null)
			setValue('municipalityOrTownHall', null)
			setValue('cologne', null)
		},
	})

	const [hasOutdoorNumber, setHasOutdoorNumber] = useState(
		defaultAddress?.outdoorNumber !== null
	)

	const handleChangeCheckboxOutdoorNumber = () => {
		setValue('outdoorNumber', null)
		clearErrors('outdoorNumber')
		setHasOutdoorNumber(prev => !prev)
	}

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			onCloseComplete={() => {
				reset()
				onCloseComplete()
			}}
		>
			<ModalOverlay />
			<ModalContent sx={{ backgroundColor: 'surface' }}>
				<ModalHeader>{title}</ModalHeader>
				<ModalCloseButton />
				<AddressForm
					{...formMethods}
					{...{
						onSubmit,
						statePostalCode,
						hasOutdoorNumber,
						handleChangeCheckboxOutdoorNumber,
						isLoading,
					}}
				/>
			</ModalContent>
		</Modal>
	)
}
