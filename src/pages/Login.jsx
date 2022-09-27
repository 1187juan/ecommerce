import { Grid, Text, useDisclosure, Link } from '@chakra-ui/react'
import { Link as LinkRRD } from 'react-router-dom'
import {
	ButtonAuthEmail,
	ButtonAuthFacebook,
	ButtonAuthGoogle,
} from '../layouts'
import { FormLogin } from '../layouts/FormLogin'

export const Login = () => {
	const { isOpen: showForm, onClose, onOpen } = useDisclosure()

	return (
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
					marginBottom: '1rem',
					fontSize: '2xl',
					fontWeight: 'semibold',
					textAlign: 'center',
				}}
			>
				Inicia sesión
				<br />
				para contunuar
			</Text>
			{!showForm && <ButtonAuthGoogle />}
			{!showForm && <ButtonAuthFacebook />}
			{!showForm && <ButtonAuthEmail onClick={onOpen} />}
			{showForm && <FormLogin onClose={onClose} />}

			{!showForm && (
				<Text sx={{ textAlign: 'center' }}>
					¿No tienes cuenta?{' '}
					<Link as={LinkRRD} to='/singup' sx={{ color: 'primary' }}>
						Registrate
					</Link>
				</Text>
			)}
		</Grid>
	)
}
