import { Grid } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { BasketItem } from './BasketItem'

export const BasketGrid = () => {
	const basket = useSelector(({ basket }) => basket)

	return (
		<Grid as='ul' sx={{ listStyle: 'none' }}>
			{basket.itemsDetails.map(itemDetails => (
				<BasketItem key={itemDetails.data.id} {...itemDetails} />
			))}
		</Grid>
	)
}
