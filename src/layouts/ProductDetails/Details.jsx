import { Grid, Heading, Text, Button, Badge } from '@chakra-ui/react'
import { asCurrency } from '../../helpers'

export const Details = ({
	product: { name, description = '', summary, price },
}) => {
	const formatedPrice = asCurrency(price.value)

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
				{formatedPrice}
			</Text>
			<Text>{description}</Text>
			{description.length < 120 && <Text>{summary}</Text>}
			<Button size='lg'>Agregar</Button>
		</Grid>
	)
}
