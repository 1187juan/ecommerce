import { Grid, Text, Link, useDisclosure } from '@chakra-ui/react'
import { Link as LinkRRD } from 'react-router-dom'

import {
	ButtonAuthEmail,
	ButtonAuthFacebook,
	ButtonAuthGoogle,
	FormSingup,
} from '../layouts'

export const Singup = () => {
	const { isOpen: showForm, onClose, onOpen } = useDisclosure()

	return (
		<Grid
			sx={{
				alignContent: 'start',
				gap: '1rem',
				width: '100%',
				maxWidth: ['none', '24rem'],
				minHeight: ['calc(100vh - 4rem)', '30rem'],
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
				Crea tu cuenta
				<br />
				para contunuar
			</Text>
			{!showForm && <ButtonAuthGoogle />}
			{!showForm && <ButtonAuthFacebook />}
			{!showForm && <ButtonAuthEmail onClick={onOpen} />}
			{showForm && <FormSingup onClose={onClose} />}

			{!showForm && (
				<Text sx={{ textAlign: 'center' }}>
					¿Ya tienes cuenta?{' '}
					<Link as={LinkRRD} to='/login' sx={{ color: 'primary' }}>
						Inicia sesión
					</Link>
				</Text>
			)}
		</Grid>
	)
}
