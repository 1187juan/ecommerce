import {
	Button,
	FormControl,
	FormErrorMessage,
	Grid,
	Input,
} from '@chakra-ui/react'
import {
	formatCardExpiredDate,
	formatCardNumber,
	formatNumber,
	formatSpaceByWord,
} from '../../helpers/format'
import {
	validateCardCCV,
	validateCardExpirationDate,
	validateCardNumber,
} from '../../helpers/validate'
import { CreditCard } from '../CreditCard'

export const PaymentForm = ({
	onSubmit,
	handleSubmit,
	showFront,
	watch,
	formState: { errors },
	register,
	getValues,
	setShowFront,
}) => {
	const { number, nameAndSurname, expirationDate, ccv } = watch()

	return (
		<Grid
			as='form'
			onSubmit={handleSubmit(onSubmit)}
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
				<CreditCard
					number={number}
					name={nameAndSurname}
					showFront={showFront}
					expirationDate={expirationDate}
					ccv={ccv}
					sx={{
						fontSize: 'clamp(.75rem, 4vw ,1rem)',
					}}
				/>
			</Grid>

			<FormControl isInvalid={errors.number}>
				<Input
					size='lg'
					placeholder='Número de tarjeta'
					inputMode='numeric'
					autoComplete='off'
					{...register('number', {
						required: 'El campo es requerido.',
						validate: value =>
							validateCardNumber(value) || 'La tarjeta debe tener 16 dígitos.',
						setValueAs: value => formatNumber(value, { maxLength: 16 }),
						onChange: e =>
							(e.currentTarget.value = formatCardNumber(getValues('number'))),
					})}
				/>
				<FormErrorMessage>{errors.number?.message}</FormErrorMessage>
			</FormControl>

			<FormControl isInvalid={errors.nameAndSurname}>
				<Input
					size='lg'
					placeholder='Nombre y apellido'
					autoComplete='off'
					{...register('nameAndSurname', {
						required: 'El campo es requerido.',
						setValueAs: value =>
							value?.trim() ? formatSpaceByWord(value).toUpperCase() : null,
						onChange: e =>
							(e.currentTarget.value = getValues('nameAndSurname')),
					})}
				/>
				<FormErrorMessage>{errors.nameAndSurname?.message}</FormErrorMessage>
			</FormControl>

			<Grid
				sx={{
					gridTemplateColumns: 'repeat(auto-fit, minmax(12rem, 1fr) )',
					gap: '1rem',
				}}
			>
				<FormControl isInvalid={errors.expirationDate}>
					<Input
						size='lg'
						placeholder='MM/AA'
						inputMode='numeric'
						autoComplete='off'
						{...register('expirationDate', {
							required: 'El campo es requerido.',
							validate: value =>
								validateCardExpirationDate(value) ||
								'Solo fechas de 01/10 al 12/29.',
							setValueAs: value => formatCardExpiredDate(value),
							onChange: e =>
								(e.currentTarget.value = getValues('expirationDate')),
						})}
					/>
					<FormErrorMessage>{errors.expirationDate?.message}</FormErrorMessage>
				</FormControl>

				<FormControl isInvalid={errors.ccv}>
					<Input
						size='lg'
						placeholder='CCV'
						type='number'
						autoComplete='off'
						{...register('ccv', {
							required: 'El campo es requerido',
							validate: value =>
								validateCardCCV(value) || 'No es un número de 3 digitos.',
							setValueAs: value => formatNumber(value, { maxLength: 3 }),
							onChange: e => (e.currentTarget.value = getValues('ccv')),
							onBlur: () => setShowFront(true),
						})}
						onFocus={() => setShowFront(false)}
					/>
					<FormErrorMessage>{errors.ccv?.message}</FormErrorMessage>
				</FormControl>
			</Grid>
			<Button size='lg' type='submit'>
				Continuar
			</Button>
		</Grid>
	)
}
