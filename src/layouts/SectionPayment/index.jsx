import { Box, Button, Flex, Text, useDisclosure } from '@chakra-ui/react'
import { ModalPaymentForm } from '../ModalPaymentForm'

export const SectionPayment = () => {
	const { isOpen, onClose, onOpen } = useDisclosure({ defaultIsOpen: true })
	return (
		<>
			<Box
				as='section'
				sx={{
					padding: '1rem',
					backgroundColor: 'surface',
					borderRadius: '.25rem',
				}}
			>
				<Text fontSize='2xl' fontWeight='semibold'>
					Pago
				</Text>
				<Flex
					sx={{
						gap: '1rem',
						flexDirection: ['column', 'row'],
						justifyContent: 'space-between',
						alignItems: ['stretch', 'center'],
					}}
				>
					<Text>Agrega una tarjeta de crédito/débito</Text>
					<Button size='lg' onClick={onOpen}>
						Agregar
					</Button>
				</Flex>
			</Box>
			<ModalPaymentForm
				onClose={onClose}
				isOpen={isOpen}
				onCloseComplete={() => console.log('closed form')}
			/>
		</>
	)
}
