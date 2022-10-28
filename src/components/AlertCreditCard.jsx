import {
	Alert,
	AlertDescription,
	AlertIcon,
	AlertTitle,
	Box,
} from '@chakra-ui/react'

export const AlertCreditCard = ({ sx }) => {
	return (
		<Alert
			status='info'
			variant='subtle'
			sx={{
				...sx,
			}}
		>
			<AlertIcon />
			<Box>
				<AlertTitle>La tarjeta de crédito no se guardará!</AlertTitle>
				<AlertDescription maxWidth='sm'>
					Solo validaremos el formato de los datos ingresados localmente.
				</AlertDescription>
			</Box>
		</Alert>
	)
}
