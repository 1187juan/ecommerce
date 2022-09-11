import {
	Box,
	Button,
	Flex,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	useDisclosure,
} from '@chakra-ui/react'

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
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Tarjeta</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
						libero, saepe in dolores, dolorum inventore, repudiandae magni vel
						reprehenderit a beatae. Dolores quia commodi corrupti neque ad
						voluptas excepturi eum.
					</ModalBody>
					<ModalFooter>
						<Button>Continuar</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	)
}
