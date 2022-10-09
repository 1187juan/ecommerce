import { Box, Grid, Text } from '@chakra-ui/react'
import { CartIcon } from '../../boxicons'

export const EmptyBasketPlaceholder = () => {
	return (
		<Grid
			sx={{
				justifyItems: 'center',
				alignContent: 'center',
				height: '100%',
				textAlign: 'center',
			}}
		>
			<Box fontSize='6xl' color='onSurfaceMedium'>
				<CartIcon />
			</Box>
			<Text fontSize='lg'>
				Aun no tienes productos
				<br />
				en tú carrito.
			</Text>
		</Grid>
	)
}
