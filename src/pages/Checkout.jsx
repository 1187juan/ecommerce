import { Grid } from '@chakra-ui/react'
import { Container } from '../components'
import {
	BasketTotal,
	SectionAddress,
	SectionBasket,
	SectionPayment,
} from '../layouts'
import { useEffect } from 'react'

export const Checkout = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<>
			<Container
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					gap: '1rem',
				}}
			>
				<Grid
					sx={{ flex: '3 0 min(100%, 30rem)', gap: '1rem', marginTop: '1rem' }}
				>
					<SectionAddress />
					<SectionPayment />
					<SectionBasket />
				</Grid>
				<BasketTotal />
			</Container>
		</>
	)
}
