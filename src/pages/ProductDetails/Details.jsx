import { Grid, Heading, Text, Button, Badge } from '@chakra-ui/react'

export const Details = ({ name, description, price }) => {
	return (
		<Grid
			sx={{
				flex: '1 0',
				alignContent: 'start',
				gap: '1rem',
				minWidth: 'calc(300px - 1.5rem)',
				padding: ['1rem', '2rem 1rem'],
			}}
		>
			<Text
				sx={{
					fontSize: 'sm',
					color: 'onSurfaceMedium',
				}}
			>
				Código 1922
			</Text>
			<Heading>{name}</Heading>
			<Text>
				<Badge>Envio gratis</Badge> a partir de $200 pesos
			</Text>
			<Text
				sx={{
					fontSize: '3xl',
				}}
			>
				{price}
			</Text>
			<Text>{description}</Text>
			<Button size='lg'>Agregar</Button>
		</Grid>
	)
}
