import { Box, Grid, Text } from '@chakra-ui/react'
import { Container } from '../components'
import {
	BasketGrid,
	BasketTotal,
	Footer,
	HeaderBack,
	SectionAddress,
	SectionPayment,
} from '../layouts'

export const Checkout = () => {
	return (
		<>
			<HeaderBack />
			<Container
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					gap: '1rem',
				}}
			>
				<Grid sx={{ flex: '3 0 min(100%, 30rem)', gap: '1rem' }}>
					<SectionAddress />
					<SectionPayment />
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
							Productos
						</Text>
						<BasketGrid />
					</Box>
				</Grid>
				<BasketTotal />
			</Container>
			<Footer />
		</>
	)
}
