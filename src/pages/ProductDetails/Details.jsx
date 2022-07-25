import { Grid, Heading, Text, Button, Badge } from '@chakra-ui/react'

export const Details = ({ name, description, price }) => {
	return (
		<Grid
			flex='1 0'
			minW='calc(300px - 1.5rem)'
			alignContent='start'
			gap='1rem'
			p={['1rem', '2rem 1rem']}
		>
			<Text fontSize='sm' color='onSurfaceMedium'>
				Código 1922
			</Text>
			<Heading>{name}</Heading>
			<Text>
				<Badge>Envio gratis</Badge> a partir de $200 pesos
			</Text>
			<Text fontSize='3xl'>{price}</Text>
			<Text>{description}</Text>
			<Button size='lg'>Agregar</Button>
		</Grid>
	)
}
