import { Grid } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { BasketItem } from './BasketItem'

export const BasketGrid = () => {
	const { data: basket } = useSelector(({ basket }) => basket)

	return (
		<Grid as='ul' sx={{ listStyle: 'none' }}>
			{basket.items.map(item => (
				<BasketItem key={item.id} {...item} />
			))}
		</Grid>
	)
}
