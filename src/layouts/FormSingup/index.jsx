import { useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import errorsAuth from '../../data/errorsAuth.json'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import { Form } from './Form'
export { createUserWithEmailAndPassword } from 'firebase/auth'

export const FormSingup = ({ onClose }) => {
	const formMethods = useForm()
	const [showPasswords, setShowPasswords] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const toast = useToast()

	const onSubmit = async ({ email, password }) => {
		try {
			setIsLoading(true)
			await createUserWithEmailAndPassword(auth, email, password)
		} catch (e) {
			const message = errorsAuth[e.code] ?? e.message
			toast({
				title: 'Error al crear la cuenta.',
				description: message,
				status: 'error',
				isClosable: true,
			})
			setIsLoading(false)
		}
	}

	return (
		<Form
			{...formMethods}
			onSubmit={onSubmit}
			showPasswords={showPasswords}
			setShowPasswords={setShowPasswords}
			onClose={onClose}
			isLoading={isLoading}
		/>
	)
}
