import { Button, useToast } from '@chakra-ui/react'
import { GoogleIcon } from '../components'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../firebase'
import { useState } from 'react'
import errorsAuth from '../data/errorsAuth.json'

const accessWithGoogle = () => {
	const provider = new GoogleAuthProvider()
	return signInWithPopup(auth, provider)
}
export const ButtonAuthGoogle = () => {
	const toast = useToast()
	const [isLoading, setIsLoading] = useState(false)
	const handleClick = async () => {
		try {
			setIsLoading(true)
			await accessWithGoogle()
			setIsLoading(false)
		} catch (e) {
			const message = errorsAuth[e.code] ?? e.message
			toast({
				title: 'Error al acceder.',
				description: message,
				status: 'error',
				duration: 9000,
				isClosable: true,
			})
			setIsLoading(false)
		}
	}

	return (
		<Button
			size='lg'
			colorScheme='gray'
			leftIcon={<GoogleIcon />}
			isLoading={isLoading}
			onClick={handleClick}
			sx={{
				'span:last-of-type': { flexGrow: 1 },
			}}
		>
			<span>Continúa con Google</span>
		</Button>
	)
}
