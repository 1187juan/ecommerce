import { useToast } from '@chakra-ui/react'
import { sendPasswordResetEmail } from 'firebase/auth'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import errorsAuth from '../../data/errorsAuth.json'
import { Form } from './Form'

export const FormForgotPassword = () => {
	const formMethods = useForm()
	const [isLoading, setIsLoading] = useState(false)
	const toast = useToast()
	const navigate = useNavigate()

	const onSubmit = async ({ email }) => {
		try {
			setIsLoading(true)
			await sendPasswordResetEmail(auth, email)
			toast({
				description: 'Enviamos un link para restablecer tu contraseña.',
				status: 'info',
				isClosable: true,
			})
			navigate('/login')
		} catch (e) {
			const message = errorsAuth[e.code] ?? e.message
			toast({
				title: 'Error al enviar el correo.',
				description: message,
				status: 'error',
				isClosable: true,
			})
			setIsLoading(false)
		}
	}
	return <Form {...formMethods} onSubmit={onSubmit} isLoading={isLoading} />
}
