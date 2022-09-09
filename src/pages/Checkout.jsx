import { Box, Center, Grid, Heading } from '@chakra-ui/react'
import { Container } from '../components'
import {
	BasketGrid,
	BasketTotal,
	Footer,
	HeaderBack,
	SectionAddress,
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

					<Center sx={{ height: '40vmin', bg: 'surface' }}>Pago</Center>
					<Box
						as='section'
						sx={{
							padding: '1rem',
							backgroundColor: 'surface',
							borderRadius: '.25rem',
						}}
					>
						<Heading sx={{ marginBottom: '1rem' }}>Productos</Heading>
						<BasketGrid />
					</Box>
				</Grid>
				<BasketTotal />
			</Container>
			<Footer />
		</>
	)
}
