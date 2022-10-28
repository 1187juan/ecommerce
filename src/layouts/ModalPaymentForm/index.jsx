import {
	Modal,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { updateCreditCard } from '../../store/slices/creditCard/creditCardSlice'
import { PaymentForm } from './PaymentForm'

export const ModalPaymentForm = ({ isOpen, onClose }) => {
	const creditCard = useSelector(({ creditCard }) => creditCard)
	const methosForm = useForm({
		defaultValues: { ...creditCard },
	})
	const [showFront, setShowFront] = useState(true)
	const dispatch = useDispatch()

	const onSubmit = creditCard => {
		dispatch(updateCreditCard(creditCard))
		onClose()
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose} onCloseComplete={methosForm.reset}>
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
