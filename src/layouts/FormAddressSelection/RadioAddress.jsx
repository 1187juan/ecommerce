import { Button, Flex, Grid, Text } from '@chakra-ui/react'
import { RadioCard } from '../../components'

export const RadioAddress = ({
	register,
	id,
	postalCode,
	street,
	outdoorNumber,
	nameAndSurname,
	phoneNumber,
	onEditAddress,
	onDeleteAddress,
}) => {
	return (
		<RadioCard
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
				<Flex sx={{ gap: '1rem' }}>
					<Button
						variant='link'
						sx={{ width: 'max-content' }}
						onClick={() => onEditAddress(id)}
					>
						Editar
					</Button>
					<Button
						variant='link'
						sx={{ width: 'max-content' }}
						onClick={() => onDeleteAddress(id)}
						colorScheme='red'
					>
						Eliminar
					</Button>
				</Flex>
			</Grid>
		</RadioCard>
	)
}
