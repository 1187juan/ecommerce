import { Text } from '@chakra-ui/react'
import { Carousel } from './Carousel'
import { ProductCardSkeleton } from '../../components/ProductCardSkeleton'
import { Container } from '../../components/Container'

export const CustomSkeleton = () => {
	return (
		<Container
			fullWidth
			sx={{
				marginTop: 0,
				marginBottom: '1rem',
				padding: '1rem 1rem 0',
				backgroundColor: 'surface',
			}}
		>
			<Text fontSize='2xl' fontWeight='semibold'>
				Más productos
			</Text>
			<Carousel>
				{Array(6)
					.fill('')
					.map((_, i) => (
						<ProductCardSkeleton
							key={i}
							sx={{
								width: '35vmin',
							}}
						/>
					))}
			</Carousel>
		</Container>
	)
}
