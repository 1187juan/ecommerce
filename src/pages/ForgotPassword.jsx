import { Grid, Text } from '@chakra-ui/react'
import { FormForgotPassword, HeaderBack } from '../layouts'

export const ForgotPassword = () => {
	return (
		<>
			<HeaderBack />
			<Grid
				sx={{
					alignContent: 'start',
					gap: '1rem',
					width: '100%',
					maxWidth: ['none', '24rem'],
					minHeight: ['calc(100vh - 4rem)', 'calc(100vh - 6rem)'],
					margin: ['0', '1rem auto 0'],
					padding: ['1rem', '2rem'],
					backgroundColor: 'surface',
					borderRadius: '.5rem',
				}}
			>
				<Text
					sx={{
						fontSize: '2xl',
						fontWeight: 'semibold',
						textAlign: 'center',
					}}
				>
					Recupera tu contraseña
				</Text>
				<Text sx={{ marginBottom: '1rem', textAlign: 'center' }}>
					Te enviaremos instrucciones para que puedas restablecer tu contraseña.
				</Text>
				<FormForgotPassword />
			</Grid>
		</>
	)
}
