import { Spinner, Text } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Section } from '../components'
import { searchItemById } from '../helpers'
import { getAddressesThunk } from '../store/slices/addresses'
import { AlertErrorWithReload } from './AlertErrorWithReload'
import { AddressCard } from './AddressCard'
import { FormAddressSelection } from './FormAddressSelection'
import { setBasketAddressId } from '../store/slices/basket'
import { Navigate } from 'react-router-dom'

export const SectionAddress = () => {
	const dispatch = useDispatch()
	const uid = useSelector(({ auth }) => auth.uid)
	const addresses = useSelector(({ addresses }) => addresses)
	const basket = useSelector(({ basket }) => basket)
	const address = searchItemById(basket.addressId, addresses.items)
	const onChangeAddress = () => dispatch(setBasketAddressId(uid, null))

	useEffect(() => {
		dispatch(getAddressesThunk(uid))
	}, [uid])

	if (basket.isLoading || addresses.isLoading)
		return (
			<Section>
				<Text
					fontSize='2xl'
					fontWeight='semibold'
					sx={{ marginBottom: '1rem' }}
				>
					Dirección
				</Text>
				<Spinner size='xl' sx={{ marginLeft: 'calc(50% - 1.5rem)' }} />
			</Section>
		)

	if (basket.error || basket.error)
		return (
			<Section>
				<Text
					fontSize='2xl'
					fontWeight='semibold'
					sx={{ marginBottom: '1rem' }}
				>
					Dirección
				</Text>
				<AlertErrorWithReload error={basket.error || basket.error} />
			</Section>
		)

	if (!basket.isLoading && !basket.items.length)
		return <Navigate to='/' replace />

	return (
		<Section>
			<Text fontSize='2xl' fontWeight='semibold' sx={{ marginBottom: '1rem' }}>
				Dirección
			</Text>

			{basket.addressId && (
				<AddressCard {...address} onChange={onChangeAddress} />
			)}

			{!basket.addressId && <FormAddressSelection />}
		</Section>
	)
}
