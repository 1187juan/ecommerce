import {
	Button,
	Flex,
	FormControl,
	FormErrorMessage,
	Grid,
	Text,
} from '@chakra-ui/react'
import { RadioAddress } from './RadioAddress'

export const FormAddresses = ({
	handleSubmit,
	onSubmit,
	addresses,
	onEditAddress,
	register,
	sx,
	props,
	formState: { errors },
	onOpen,
}) => {
	return (
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
				{addresses.map(address => (
					<RadioAddress
						key={address.id}
						{...address}
						onEditAddress={onEditAddress}
						register={register}
					/>
				))}

				<FormErrorMessage>{errors.addressId?.message}</FormErrorMessage>
			</FormControl>
			<Flex sx={{ gap: '1rem', flexDirection: ['column', 'row'] }}>
				<Button size='lg' colorScheme='gray' type='button' onClick={onOpen}>
					Nueva dirección
				</Button>
				<Button size='lg' type='submit'>
					Confirmar dirección
				</Button>
			</Flex>
		</Grid>
	)
}
