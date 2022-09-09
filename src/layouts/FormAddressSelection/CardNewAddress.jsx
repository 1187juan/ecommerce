import { Button, Flex, Text } from '@chakra-ui/react'

export const CardNewAddress = ({ onOpen }) => {
	return (
		<Flex
			sx={{
				gap: '1rem',
				justifyContent: 'space-between',
				flexDirection: ['column', 'row'],
			}}
		>
			<Text fontSize='2xl' fontWeight='semibold'>
				Crea una dirección de envío
			</Text>
			<Button size='lg' onClick={onOpen}>
				Nueva dirección
			</Button>
		</Flex>
	)
}
