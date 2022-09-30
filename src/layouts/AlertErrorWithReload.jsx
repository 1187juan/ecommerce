import { Alert, AlertIcon, Button } from '@chakra-ui/react'

export const AlertErrorWithReload = ({ error }) => {
	return (
		<Alert status='error'>
			<AlertIcon />
			{error}
			<Button
				variant='ghost'
				colorScheme='iherit'
				onClick={() => window.location.reload()}
			>
				Reintentar
			</Button>
		</Alert>
	)
}
