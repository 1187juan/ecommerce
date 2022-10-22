import { Box, Spinner, Text, useToast } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAddresses, searchItemById } from '../helpers'
import { setAddresses } from '../store/slices/addresses'
import { AddressCard } from './AddressCard'
import { FormAddressSelection } from './FormAddressSelection'

export const SectionAddress = () => {
	const {
		basket,
		addresses,
		auth: { uid },
	} = useSelector(state => state)

	const dispatch = useDispatch()
	const toast = useToast()
	const [isLoading, setIsLoading] = useState(true)
	const addressId = basket.data?.addressId ?? null
	const address = searchItemById(addressId, addresses)

	useEffect(() => {
		getAddresses(uid)
			.then(data => dispatch(setAddresses(data)))
			.catch(({ message }) =>
				toast({ status: 'error', title: message, isClosable: true })
			)
			.finally(() => setIsLoading(false))
	}, [uid])

	if (isLoading)
		return (
			<Box
				as='section'
				sx={{
					padding: '1rem',
					backgroundColor: 'surface',
					borderRadius: '.25rem',
				}}
			>
				<Text
					fontSize='2xl'
					fontWeight='semibold'
					sx={{ marginBottom: '1rem' }}
				>
					Dirección
				</Text>
				{isLoading && (
					<Spinner size='xl' sx={{ marginLeft: 'calc(50% - 1.5rem)' }} />
				)}
			</Box>
		)

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
				<AddressCard
					{...address}
					onChange={() => console.log('change address')}
				/>
			)}
			{!addressId && <FormAddressSelection />}
		</Box>
	)
}
