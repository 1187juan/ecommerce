import {
	Modal,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { usePostalCodeInfo } from '../../hooks/usePostalCodeInfo'
import { AddressForm } from './AddressForm'
import addressTemplate from '../../data/addressTemplate.json'

export const ModalAddressForm = ({
	isOpen = false,
	onClose,
	onCloseComplete,
	defaultAddress = {},
}) => {
	const formMethods = useForm({
		defaultValues: {
			...addressTemplate,
			...defaultAddress,
		},
	})

	const { getValues, setValue } = formMethods
	const onSubmit = data => console.log(data)
	const title = defaultAddress.id ? 'Actualizar dirección' : 'Nueva dirección'

	const statePostalCode = usePostalCodeInfo(getValues('postalCode'), {
		onSuccess: data => {
			setValue('state', data[0].d_estado)
			setValue('municipalityOrTownHall', data[0].D_mnpio)
		},
	})
	const colognesName = statePostalCode.data?.map(code => code.d_asenta) ?? []

	const [hasOutdoorNumber, setHasOutdoorNumber] = useState(
		defaultAddress.outdoorNumber !== null
	)

	const handleChangeCheckboxOutdoorNumber = () => {
		setValue('outdoorNumber', null)
		setHasOutdoorNumber(prev => !prev)
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose} onCloseComplete={onCloseComplete}>
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
						colognesName,
					}}
				/>
			</ModalContent>
		</Modal>
	)
}
