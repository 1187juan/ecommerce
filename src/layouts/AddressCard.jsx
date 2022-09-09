import { Button, Grid, Heading, Text } from '@chakra-ui/react'
import { MapIcon } from '../boxicons'

export const AddressCard = ({
	onChange,
	nameAndSurname,
	postalCode,
	state,
	municipalityOrTownHall,
	cologne,
	street,
	outdoorNumber,
	interiorNumber,
	phoneNumber,
}) => {
	return (
		<Grid
			as='section'
			sx={{
				gridTemplateColumns: 'max-content 1fr ',
				gap: '1rem',
				padding: [0, '1rem'],
			}}
		>
			<MapIcon />
			<Grid sx={{ gap: '1rem' }}>
				<Heading size='md'>{street}</Heading>
				<Text>
					{municipalityOrTownHall} - {street} {outdoorNumber} / {interiorNumber}{' '}
					<br />
					Código postal {postalCode} - {state} - {cologne} <br />
					{nameAndSurname} - {phoneNumber} <br />
				</Text>
				<Button
					onClick={onChange}
					variant='link'
					size='lg'
					sx={{ width: 'max-content' }}
				>
					Editar o elegir otro
				</Button>
			</Grid>
		</Grid>
	)
}
