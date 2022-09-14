import {
	Button,
	Checkbox,
	CircularProgress,
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Grid,
	Input,
	InputGroup,
	InputLeftAddon,
	InputRightElement,
	Link,
	ModalBody,
	Select,
	Text,
	Textarea,
} from '@chakra-ui/react'

import {
	formatNumber,
	formatPhoneNumber,
	formatPostalCode,
	formatSpaceByWord,
	validatePhoneNumber,
	validatePostalCode,
} from '../../helpers'

export const AddressForm = ({
	onSubmit,
	handleSubmit,
	register,
	formState: { errors },
	statePostalCode,
	hasOutdoorNumber,
	handleChangeCheckboxOutdoorNumber,
	getValues,
	clearErrors,
	watch,
	setValue,
}) => {
	return (
		<ModalBody
			as='form'
			onSubmit={handleSubmit(onSubmit)}
			sx={{
				display: 'grid',
				marginBottom: '1rem',
				gridTemplateRows: 'repeat(11, minmax(8rem, max-content ))',
			}}
		>
			<FormControl isInvalid={errors.nameAndSurname}>
				<FormLabel>Nombre y apellido</FormLabel>
				<Input
					size='lg'
					autoComplete='off'
					{...register('nameAndSurname', {
						required: 'El campo es requerido.',
						setValueAs: value => value?.trim() && formatSpaceByWord(value),
						onChange: e =>
							(e.currentTarget.value = getValues('nameAndSurname')),
					})}
				/>
				{!errors.nameAndSurname && (
					<FormHelperText>Tal cual figura en el INE o IFE.</FormHelperText>
				)}
				<FormErrorMessage>{errors.nameAndSurname?.message}</FormErrorMessage>
			</FormControl>

			<FormControl isInvalid={errors.postalCode || statePostalCode.error}>
				<FormLabel>Código postal</FormLabel>
				<InputGroup>
					<Input
						size='lg'
						autoComplete='off'
						type='number'
						{...register('postalCode', {
							required: 'El campo es requerido.',
							validate: value =>
								validatePostalCode(value) || 'No es un código postal válido.',

							setValueAs: value => value?.trim() && formatPostalCode(value),
							onChange: e => {
								const value = getValues('postalCode')
								if (
									validatePostalCode(value) &&
									statePostalCode.value !== value
								) {
									statePostalCode.setValue(value)
									clearErrors(['postalCode', 'cologne'])
								}

								if (
									value.length < 5 &&
									(statePostalCode.data || statePostalCode.error)
								) {
									statePostalCode.reset()
									setValue('state', null)
									setValue('municipalityOrTownHall', null)
									setValue('cologne', null)
								}

								e.currentTarget.value = value
							},
						})}
					/>
					<InputRightElement
						sx={{
							width: 'max-content',
							height: '100%',
							marginRight: '1rem',
						}}
					>
						{!statePostalCode.isLoading && (
							<Link
								href='https://codigo-postal.co/mexico/'
								target='_blank'
								color='primary'
								fontSize='sm'
							>
								No sé semi codigo
							</Link>
						)}

						{statePostalCode.isLoading && (
							<CircularProgress isIndeterminate size='2rem' color='primary' />
						)}
					</InputRightElement>
				</InputGroup>
				<FormErrorMessage>
					{errors.postalCode?.message ?? statePostalCode.error}
				</FormErrorMessage>
			</FormControl>

			<FormControl>
				<FormLabel>Estado</FormLabel>
				<Input size='lg' disabled {...register('state')} />
			</FormControl>

			<FormControl>
				<FormLabel>Municipio/Alcaldía</FormLabel>
				<Input size='lg' disabled {...register('municipalityOrTownHall')} />
			</FormControl>

			<FormControl isInvalid={errors.cologne}>
				<FormLabel>Colonía</FormLabel>
				<Select
					size='lg'
					isDisabled={!statePostalCode.data}
					{...register('cologne', {
						required: 'El campo es requerido.',
					})}
				>
					{!errors.postalCode &&
						statePostalCode.data?.map(({ cologne }) => (
							<option key={cologne} value={cologne}>
								{cologne}
							</option>
						))}
				</Select>
				<FormErrorMessage>{errors.cologne?.message}</FormErrorMessage>
			</FormControl>

			<FormControl isInvalid={errors.street}>
				<FormLabel>Calle</FormLabel>
				<Input
					size='lg'
					autoComplete='off'
					{...register('street', {
						required: 'El campo es requerido.',
						setValueAs: value => value?.trim() && formatSpaceByWord(value),
						onChange: e => (e.currentTarget.value = getValues('street')),
					})}
				/>
				<FormErrorMessage>{errors.street?.message}</FormErrorMessage>
			</FormControl>

			<FormControl isInvalid={errors.outdoorNumber}>
				<FormLabel>Número exterior</FormLabel>
				<InputGroup>
					<Input
						size='lg'
						type='number'
						placeholder={hasOutdoorNumber ? '' : 'SN'}
						disabled={!hasOutdoorNumber}
						autoComplete='off'
						min={1}
						{...register('outdoorNumber', {
							required: {
								value: hasOutdoorNumber,
								message: 'El campo es requerido.',
							},
							setValueAs: value => {
								return formatNumber(value, { maxLength: 7 }) || null
							},
							onChange: e =>
								(e.currentTarget.value = getValues('outdoorNumber')),
						})}
						sx={{ paddingRight: '9rem' }}
					/>
					<InputRightElement
						sx={{
							width: 'max-content',
							height: '100%',
							paddingRight: '1rem',
						}}
					>
						<Checkbox
							isInvalid={false}
							isChecked={!hasOutdoorNumber}
							onChange={handleChangeCheckboxOutdoorNumber}
						>
							Sin número
						</Checkbox>
					</InputRightElement>
				</InputGroup>
				<FormErrorMessage>{errors.outdoorNumber?.message}</FormErrorMessage>
			</FormControl>

			<FormControl isInvalid={errors.interiorNumber}>
				<FormLabel>Número interior/Depto (opcional)</FormLabel>
				<Input
					size='lg'
					type='number'
					autoComplete='off'
					{...register('interiorNumber', {
						setValueAs: value => formatNumber(value, { maxLength: 5 }) || null,
						onChange: e =>
							(e.currentTarget.value = getValues('interiorNumber')),
					})}
				/>
				<FormErrorMessage>{errors.interiorNumber?.message}</FormErrorMessage>
			</FormControl>

			<Grid sx={{ gridTemplateRows: '2rem 8.5rem 8.5rem' }}>
				<Text>Entre qué calles está (opcional)</Text>
				<FormControl>
					<FormLabel>Calle 1</FormLabel>
					<Input
						size='lg'
						autoComplete='off'
						{...register('referenceStreet1', {
							setValueAs: value =>
								value?.trim() ? formatSpaceByWord(value) : null,
							onChange: e =>
								(e.currentTarget.value = getValues('referenceStreet1')),
						})}
					/>
				</FormControl>

				<FormControl>
					<FormLabel>Calle 2</FormLabel>
					<Input
						size='lg'
						autoComplete='off'
						{...register('referenceStreet2', {
							setValueAs: value =>
								value?.trim() ? formatSpaceByWord(value) : null,
							onChange: e =>
								(e.currentTarget.value = getValues('referenceStreet2')),
						})}
					/>
				</FormControl>
			</Grid>

			<FormControl
				isInvalid={errors.phoneNumber}
				sx={{ paddingBottom: '3rem' }}
			>
				<FormLabel>Teléfono de contacto</FormLabel>
				<InputGroup size='lg'>
					<InputLeftAddon>+52</InputLeftAddon>
					<Input
						placeholder='Ej: 112 345 6789'
						autoComplete='off'
						type='tel'
						{...register('phoneNumber', {
							required: 'El campo es requerido.',
							validate: value =>
								validatePhoneNumber(value) ||
								'El número debe ser de 10 digitos.',
							setValueAs: value => formatNumber(value, { maxLength: 10 }),
							onChange: e =>
								(e.currentTarget.value = formatPhoneNumber(
									getValues('phoneNumber')
								)),
						})}
					/>
				</InputGroup>
				{!errors.phoneNumber && (
					<FormHelperText>
						Llamarán a este número si hay algún problema en el envío.
					</FormHelperText>
				)}
				<FormErrorMessage>{errors.phoneNumber?.message}</FormErrorMessage>
			</FormControl>

			<FormControl
				isInvalid={errors.indications}
				sx={{ paddingBottom: '3rem' }}
			>
				<FormLabel>Indicaciones adicionales</FormLabel>
				<Textarea
					placeholder='Descripción de la fachada, puntos de referencia para encontrarla, indicaciones de seguridad, etc.'
					autoComplete='off'
					{...register('indications', {
						required: 'El campo es requerido.',
						setValueAs: value =>
							value?.trim()
								? formatSpaceByWord(value, {
										canAcceptNumbers: true,
										maxLegth: 128,
								  })
								: null,
						onChange: e => (e.currentTarget.value = getValues('indications')),
					})}
					sx={{ minHeight: '8rem' }}
				/>
				<FormHelperText sx={{ float: 'right' }}>
					{watch('indications')?.length ?? 0}/128
				</FormHelperText>
				<FormErrorMessage>{errors.indications?.message} </FormErrorMessage>
			</FormControl>

			<Button size='lg' type='submit' sx={{ marginTop: 'auto' }}>
				Enviar
			</Button>
		</ModalBody>
	)
}
