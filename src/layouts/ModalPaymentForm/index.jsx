import {
	Button,
	FormControl,
	Grid,
	Input,
	Modal,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
} from '@chakra-ui/react'
import { CreditCard } from '../CreditCard'

export const ModalPaymentForm = ({ isOpen, onClose, onCloseComplete }) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose} onCloseComplete={onCloseComplete}>
			<ModalOverlay />
			<ModalContent sx={{ backgroundColor: 'surface' }}>
				<ModalHeader>Tarjeta</ModalHeader>
				<ModalCloseButton />
				<Grid
					sx={{
						display: 'grid',
						gap: '1rem',
						padding: '1rem 1.5rem',
					}}
				>
					<Grid
						sx={{
							width: 'calc(100% + 3rem)',
							marginLeft: '-1.5rem',
							padding: '1rem',
							placeItems: 'center',
							bg: 'blackAlpha.100',
						}}
					>
						<CreditCard />
					</Grid>
					<FormControl>
						<Input size='lg' placeholder='Número de tarjeta' />
					</FormControl>
					<FormControl>
						<Input size='lg' placeholder='Nombre y apellido' />
					</FormControl>
					<Grid
						sx={{
							gridTemplateColumns: 'repeat(auto-fit, minmax(12rem, 1fr) )',
							gap: '1rem',
						}}
					>
						<FormControl>
							<Input size='lg' placeholder='MM/AA' />
						</FormControl>
						<FormControl>
							<Input size='lg' placeholder='CCV' />
						</FormControl>
					</Grid>
					<Button size='lg'>Continuar</Button>
				</Grid>
			</ModalContent>
		</Modal>
	)
}
