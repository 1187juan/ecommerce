import { Button, useToast } from '@chakra-ui/react'
import { FacebookIcon } from '../components'
import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth'
import { useState } from 'react'
import errorsAuth from '../data/errorsAuth.json'
import { auth } from '../firebase'

const accessWithFacebook = () => {
	const provider = new FacebookAuthProvider()
	return signInWithPopup(auth, provider)
}

export const ButtonAuthFacebook = () => {
	const toast = useToast()
	const [isLoading, setIsLoading] = useState(false)
	const handleClick = async () => {
		try {
			setIsLoading(true)
			await accessWithFacebook()
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
			leftIcon={<FacebookIcon />}
			isLoading={isLoading}
			onClick={handleClick}
			sx={{
				'span:last-of-type': { flexGrow: 1 },
			}}
		>
			<span>Continúa con Facebook</span>
		</Button>
	)
}
