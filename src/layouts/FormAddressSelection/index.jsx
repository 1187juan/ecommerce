import {
	Button,
	Flex,
	FormControl,
	FormErrorMessage,
	Grid,
	Text,
	useDisclosure,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { RadioCard } from '../../components'
import { ModalAddressForm } from '../../layouts'

export const FormAddressSelection = ({
	addresses = [],
	onSuccess,
	sx = {},
	...props
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const onSubmit = ({ addressId }) => {
		const address = addresses.find(({ id }) => id === addressId)
		onSuccess(address)
	}

	const { isOpen, onClose, onOpen } = useDisclosure()
	const [addressToEdit, setAddressToEdit] = useState(null)
	const resetAddressToEdit = () => setAddressToEdit(null)

	const onEdit = addressId =>
		setAddressToEdit(addresses?.find(({ id }) => id === addressId) ?? null)

	useEffect(() => {
		addressToEdit && onOpen()
	}, [addressToEdit])

	console.log('ok')

	return (
		<>
			<Grid
				as='form'
				sx={{ gap: '1rem', ...sx }}
				onSubmit={handleSubmit(onSubmit)}
				{...props}
			>
				<Text fontSize='xl' fontWeight='semibold'>
					Elige una dirección de envío
				</Text>
				<FormControl
					sx={{ display: 'grid', gap: '1rem' }}
					isInvalid={errors.addressId}
				>
					{addresses.map(
						({
							postalCode,
							id,
							street,
							nameAndSurname,
							phoneNumber,
							outdoorNumber,
						}) => (
							<RadioCard
								key={id}
								{...register('addressId', {
									required: 'El campo es requerido',
								})}
								value={id}
							>
								<Grid sx={{ gap: '.5rem' }}>
									<Text>C.P. {postalCode}</Text>
									<Text
										sx={{ color: 'onSurfaceMedium' }}
										fontWeight='medium'
										fontSize='.875rem'
									>
										{street} {outdoorNumber ?? 'SN'}
										<br />
										{nameAndSurname} - {phoneNumber}
									</Text>
									<Button
										variant='link'
										sx={{ width: 'max-content' }}
										onClick={() => onEdit(id)}
									>
										Editar
									</Button>
								</Grid>
							</RadioCard>
						)
					)}

					<FormErrorMessage>{errors.addressId?.message}</FormErrorMessage>
				</FormControl>
				<Flex sx={{ gap: '1rem', flexDirection: ['column', 'row'] }}>
					<Button size='lg' colorScheme='gray' type='button' onClick={onOpen}>
						Nueva dirección
					</Button>
					<Button size='lg' type='submit'>
						Continuar
					</Button>
				</Flex>
			</Grid>
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
