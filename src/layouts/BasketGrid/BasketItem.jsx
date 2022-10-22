import {
	Button,
	Divider,
	Flex,
	Grid,
	Image,
	Link,
	Text,
} from '@chakra-ui/react'
import { asCurrency, placeholderUrl } from '../../helpers'
import { Link as LinkRRD } from 'react-router-dom'
import { ButtonBasketItem } from '../ButtonBasketItem'
import { useDispatch, useSelector } from 'react-redux'
import { setBasketItem } from '../../store/slices/basket'

export const BasketItem = ({
	status,
	message,
	data: { quantity, price, name, imgUrl, id },
}) => {
	const dispatch = useDispatch()
	const onDelete = () => dispatch(setBasketItem({ id, quantity: 0 }))
	const isLoading = useSelector(({ basket }) => basket.isLoading)

	if (status === 'error')
		return (
			<>
				<Flex
					as='li'
					sx={{
						gap: '1rem',
						padding: '1rem 0',
						backgroundColor: 'surface',
					}}
				>
					<Image
						src={placeholderUrl(128)}
						alt={name}
						sx={{
							width: 'min(30%, 12rem)',
							margin: 'auto',
							borderRadius: '.25rem',
						}}
					/>
					<Flex
						sx={{
							flexWrap: 'wrap',
							flexGrow: 1,
							gap: '1rem',
						}}
					>
						<Grid
							sx={{
								flex: '1 0 10rem',
								alignContent: 'start',
							}}
						>
							<Text>Producto no disponible </Text>
							<Text sx={{ fontWeight: '700' }}>{quantity} producto(s)</Text>
							<Link
								as={LinkRRD}
								to={`/product/${id}`}
								sx={{ color: 'primary' }}
							>
								Ver producto
							</Link>
						</Grid>
						<Flex
							sx={{
								flex: '0 0',
								alignItems: 'center',
							}}
						>
							<Button
								colorScheme='red'
								onClick={onDelete}
								isLoading={isLoading}
							>
								Eliminar
							</Button>
						</Flex>
					</Flex>
				</Flex>
				<Divider />
			</>
		)
	const total = quantity * price.value
	const totalCurrency = asCurrency(total)

	return (
		<>
			<Flex
				as='li'
				sx={{
					gap: '1rem',
					padding: '1rem 0',
					backgroundColor: 'surface',
				}}
			>
				<Image
					src={imgUrl}
					alt={name}
					sx={{
						width: 'min(30%, 12rem)',
						margin: 'auto',
						borderRadius: '.25rem',
					}}
				/>
				<Flex
					sx={{
						flexWrap: 'wrap',
						flexGrow: 1,
						gap: '1rem',
					}}
				>
					<Grid
						sx={{
							flex: '1 0 10rem',
							alignContent: 'start',
						}}
					>
						<Text>{name} </Text>
						<Text sx={{ fontWeight: '700' }}>{totalCurrency}</Text>
						<Link as={LinkRRD} to={`/product/${id}`} sx={{ color: 'primary' }}>
							Ver producto
						</Link>
					</Grid>
					<Flex
						sx={{
							flex: '0 0',
							alignItems: 'center',
						}}
					>
						<ButtonBasketItem productId={id} quantity={quantity} />
					</Flex>
				</Flex>
			</Flex>
			<Divider />
		</>
	)
}
