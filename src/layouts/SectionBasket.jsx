import { Box, Text } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { BasketGrid } from './BasketGrid'

export const SectionBasket = () => {
	const { items } = useSelector(({ basket }) => basket)
	const hasItems = Boolean(items.length)

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
				Productos
			</Text>
			{hasItems && <BasketGrid />}
		</Box>
	)
}
