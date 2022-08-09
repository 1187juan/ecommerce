import { Grid } from '@chakra-ui/react'
import basketIds from '../../data/basketIds'
import { BasketItem } from './BasketItem'

export const BasketGrid = () => {
	return (
		<Grid as='ul' sx={{ listStyle: 'none' }}>
			{basketIds.map(({ id, quantity }) => (
				<BasketItem key={id} id={id} quantity={quantity} />
			))}
		</Grid>
	)
}
