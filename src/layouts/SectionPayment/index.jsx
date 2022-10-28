import { Button, Flex, Text, useDisclosure } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { Section } from '../../components'
import { resetCreditCard } from '../../store/slices/creditCard/creditCardSlice'
import { ModalPaymentForm } from '../ModalPaymentForm'

export const SectionPayment = () => {
	const { isOpen, onClose, onOpen } = useDisclosure()
	const creditCard = useSelector(({ creditCard }) => creditCard)
	const dispatch = useDispatch()
	const onDelete = () => dispatch(resetCreditCard())
	const lastNumbers = String(creditCard.number).slice(-4)

	return (
		<>
			<Section>
				<Text fontSize='2xl' fontWeight='semibold'>
					Pago
				</Text>
				{!creditCard.number && (
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
				)}
				{creditCard.number && (
					<>
						<Text sx={{ marginBottom: '1rem' }}>
							Pagar con mi tarjeta terminación **** **** **** {lastNumbers}
						</Text>
						<Flex sx={{ gap: '1rem' }}>
							<Button variant='link' size='lg' onClick={onOpen}>
								Editar
							</Button>
							<Button
								variant='link'
								size='lg'
								colorScheme='red'
								onClick={onDelete}
							>
								Eliminar
							</Button>
						</Flex>
					</>
				)}
			</Section>
			{isOpen && <ModalPaymentForm onClose={onClose} isOpen={isOpen} />}
		</>
	)
}
