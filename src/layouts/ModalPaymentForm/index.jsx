import {
	Modal,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { PaymentForm } from './PaymentForm'

export const ModalPaymentForm = ({ isOpen, onClose, onCloseComplete }) => {
	const methosForm = useForm()
	const [showFront, setShowFront] = useState(true)

	const onSubmit = data => console.log(data)

	return (
		<Modal isOpen={isOpen} onClose={onClose} onCloseComplete={onCloseComplete}>
			<ModalOverlay />
			<ModalContent sx={{ backgroundColor: 'surface' }}>
				<ModalHeader>Tarjeta</ModalHeader>
				<ModalCloseButton />
				<PaymentForm
					{...methosForm}
					onSubmit={onSubmit}
					showFront={showFront}
					setShowFront={setShowFront}
				/>
			</ModalContent>
		</Modal>
	)
}
