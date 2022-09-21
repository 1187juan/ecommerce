import { Button } from '@chakra-ui/react'
import { EnvelopeIcon } from '../boxicons'

export const ButtonAuthEmail = ({ onClick }) => {
	return (
		<Button
			onClick={onClick}
			size='lg'
			leftIcon={<EnvelopeIcon />}
			sx={{
				'span:last-of-type': { flexGrow: 1 },
			}}
		>
			<span>Continúa con tu correo</span>
		</Button>
	)
}
