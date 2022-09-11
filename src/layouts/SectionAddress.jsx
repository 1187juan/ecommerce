import { Box, Text } from '@chakra-ui/react'
import { useState } from 'react'
import addresses from '../data/addresses.json'
import { AddressCard } from './AddressCard'
import { FormAddressSelection } from './FormAddressSelection'

export const SectionAddress = () => {
	const [addressId, setAddressId] = useState(null)
	const address = addresses.find(({ id }) => id === addressId) ?? null
	const onSuccess = ({ id }) => setAddressId(id)

	return (
		<Box
			as='section'
			sx={{
				padding: '1rem',
				backgroundColor: 'surface',
				borderRadius: '.25rem',
			}}
		>
			<Text fontSize='2xl' fontWeight='semibold' sx={{ marginBottom: '1rem' }}>
				Dirección
			</Text>
			{addressId && (
				<AddressCard {...address} onChange={() => setAddressId(null)} />
			)}
			{!addressId && (
				<FormAddressSelection addresses={addresses} onSuccess={onSuccess} />
			)}
		</Box>
	)
}
