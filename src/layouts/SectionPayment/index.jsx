import { Button, Flex, Text, useDisclosure } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { AlertCreditCard, Section } from '../../components'
import { validateCreditCard } from '../../helpers'
import { resetCreditCard } from '../../store/slices/creditCard/creditCardSlice'
import { ModalPaymentForm } from '../ModalPaymentForm'

export const SectionPayment = () => {
	const { isOpen, onClose, onOpen } = useDisclosure()
	const creditCard = useSelector(({ creditCard }) => creditCard)
	const dispatch = useDispatch()
	const onDelete = () => dispatch(resetCreditCard())
	const lastNumbers = String(creditCard.number).slice(-4)
	const hasCreditCard = validateCreditCard(creditCard)

	return (
		<>
			<Section sx={{ display: 'grid', gap: '1rem' }}>
				<Text fontSize='2xl' fontWeight='semibold'>
					Pago
				</Text>
				{!hasCreditCard && (
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
				{hasCreditCard && (
					<>
						<Text>
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

				{!hasCreditCard && <AlertCreditCard />}
			</Section>
			{isOpen && <ModalPaymentForm onClose={onClose} isOpen={isOpen} />}
		</>
	)
}
