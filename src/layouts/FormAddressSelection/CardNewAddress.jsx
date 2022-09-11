import { Button, Flex, Text } from '@chakra-ui/react'

export const CardNewAddress = ({ onOpen }) => {
	return (
		<Flex
			sx={{
				gap: '1rem',
				justifyContent: 'space-between',
				flexDirection: ['column', 'row'],
				alignItems: ['stretch', 'center'],
			}}
		>
			<Text>Crea una dirección de envío</Text>
			<Button size='lg' onClick={onOpen}>
				Nueva dirección
			</Button>
		</Flex>
	)
}
