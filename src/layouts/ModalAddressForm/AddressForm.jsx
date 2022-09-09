import {
	Button,
	Checkbox,
	CircularProgress,
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
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
import { Controller } from 'react-hook-form'
import {
	formatPhoneNumber,
	transformToNumber,
	validatePostalCode,
} from '../../helpers'

export const AddressForm = ({
	onSubmit,
	handleSubmit,
	register,
	formState: { errors, touchedFields },
	control,
	statePostalCode,
	hasOutdoorNumber,
	handleChangeCheckboxOutdoorNumber,
	watch,
	getValues,
	colognesName,
}) => {
	return (
		<ModalBody
			as='form'
			onSubmit={handleSubmit(onSubmit)}
			sx={{ display: 'grid', gap: '2rem', marginBottom: '1rem' }}
		>
			<FormControl isInvalid={errors.nameAndSurname}>
				<FormLabel>Nombre y apellido</FormLabel>
				<Input
					size='lg'
					{...register('nameAndSurname', {
						required: {
							value: true,
							message: 'El campo es requerido.',
						},
						setValueAs: value => value?.trim().slice(0, 100) || null,
					})}
					maxLength={100}
				/>
				{!errors.nameAndSurname && (
					<FormHelperText>Tal cual figura en el INE o IFE.</FormHelperText>
				)}
				<FormErrorMessage>{errors.nameAndSurname?.message}</FormErrorMessage>
			</FormControl>

			<FormControl
				isInvalid={
					errors.postalCode ||
					(touchedFields.postalCode &&
						!!getValues('postalCode')?.trim() &&
						statePostalCode.error)
				}
			>
				<FormLabel>Código postal</FormLabel>
				<InputGroup>
					<Input
						size='lg'
						{...register('postalCode', {
							onChange: e => {
								const value = e.target.value
								value.trim().length === 5 && statePostalCode.refetch()
								value.trim().length < 5 &&
									statePostalCode.data &&
									statePostalCode.reset()
							},

							setValueAs: value => value?.trim()?.slice(0, 5) || null,

							required: 'El campo es requerido.',

							validate: value =>
								validatePostalCode(value) || 'No es un código postal válido.',
						})}
						maxLength={5}
					/>

					<InputRightElement
						sx={{ width: 'max-content', height: '100%', marginRight: '1rem' }}
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
				<Input
					size='lg'
					isDisabled
					value={statePostalCode.data?.[0].d_estado ?? ''}
				/>
			</FormControl>

			<FormControl>
				<FormLabel>Municipio/Alcaldía</FormLabel>
				<Input
					size='lg'
					isDisabled
					value={statePostalCode.data?.[0].D_mnpio ?? ''}
				/>
			</FormControl>

			<Controller
				control={control}
				name='cologne'
				rules={{
					required: 'El campo es requerido.',
				}}
				render={({ field, fieldState: { error } }) => (
					<FormControl isInvalid={error}>
						<FormLabel>Colonía</FormLabel>
						<Select
							{...field}
							size='lg'
							value={field.value ?? ''}
							isDisabled={!statePostalCode.data}
							placeholder={colognesName.length === 1 ? '' : ' '}
						>
							{colognesName.map(cologneName => (
								<option key={cologneName} value={cologneName}>
									{cologneName}
								</option>
							))}
						</Select>
						<FormErrorMessage>{error?.message}</FormErrorMessage>
					</FormControl>
				)}
			/>

			<FormControl isInvalid={errors.street}>
				<FormLabel>Calle</FormLabel>
				<Input
					size='lg'
					{...register('street', {
						required: {
							value: true,
							message: 'El campo es requerido.',
						},
						setValueAs: value => value?.trim().slice(0, 100) || null,
					})}
					maxLength={100}
				/>
				<FormErrorMessage>{errors.street?.message}</FormErrorMessage>
			</FormControl>

			<FormControl isInvalid={errors.outdoorNumber}>
				<FormLabel>Número exterior.</FormLabel>
				<InputGroup>
					<Input
						size='lg'
						type='number'
						isDisabled={!hasOutdoorNumber}
						placeholder={hasOutdoorNumber ? '' : 'SN'}
						{...register('outdoorNumber', {
							required: {
								value: hasOutdoorNumber,
								message: 'El campo es requerido.',
							},
							min: {
								value: 1,
								message: 'El campo es menor a 1.',
							},
							max: {
								value: 9999999,
								message: 'El campo es mayor a 9999999.',
							},
							setValueAs: transformToNumber,
						})}
						min={1}
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
					{...register('interiorNumber', {
						min: {
							value: 1,
							message: 'El campo es menor a 1.',
						},
						max: {
							value: 99999,
							message: 'El campo es mayor a 99999.',
						},
						setValueAs: transformToNumber,
					})}
					min={1}
				/>
				<FormErrorMessage>{errors.interiorNumber?.message}</FormErrorMessage>
			</FormControl>

			<Text>Entre qué calles está (opcional)</Text>
			<FormControl isInvalid={errors.referenceStreet1}>
				<FormLabel>Calle 1</FormLabel>
				<Input
					size='lg'
					{...register('referenceStreet1', {
						maxLength: {
							value: 100,
							message: 'El campo ess mayor a 100 caracteres.',
						},
						setValueAs: value => value?.trim() || null,
					})}
				/>
				<FormErrorMessage>{errors.referenceStreet1?.message}</FormErrorMessage>
			</FormControl>

			<FormControl isInvalid={errors.referenceStreet2}>
				<FormLabel>Calle 2</FormLabel>
				<Input
					size='lg'
					{...register('referenceStreet2', {
						maxLength: {
							value: 100,
							message: 'Campo mayor a 100 caracteres.',
						},
						setValueAs: value => value?.trim() || null,
					})}
				/>
				<FormErrorMessage>{errors.referenceStreet2?.message}</FormErrorMessage>
			</FormControl>

			<Controller
				control={control}
				name='phoneNumber'
				rules={{
					required: {
						value: true,
						message: 'El campo es requerido.',
					},
					min: {
						value: 1000000000,
						message: 'El número debe ser de 10 digitos.',
					},
					max: {
						value: 9999999999,
						message: 'El número debe ser de 10 digitos.',
					},
				}}
				render={({ field, fieldState: { error } }) => (
					<FormControl isInvalid={error}>
						<FormLabel>Teléfono de contacto</FormLabel>
						<InputGroup size='lg'>
							<InputLeftAddon>+52</InputLeftAddon>
							<Input
								placeholder='Ej: 112 345 6789'
								onChange={e =>
									field.onChange(
										transformToNumber(e.currentTarget.value.slice(0, 12))
									)
								}
								value={formatPhoneNumber(field.value)}
							/>
						</InputGroup>
						{!error && (
							<FormHelperText>
								Llamarán a este número si hay algún problema en el envío.
							</FormHelperText>
						)}

						<FormErrorMessage>{error?.message}</FormErrorMessage>
					</FormControl>
				)}
			/>
			<FormControl isInvalid={errors.indications}>
				<FormLabel>Indicaciones adicionales</FormLabel>
				<Textarea
					{...register('indications', {
						required: {
							value: true,
							message: 'El campo es requerido.',
						},
						maxLength: {
							value: 128,
							message: 'El campo es mayor a 128 caracteres.',
						},
						setValueAs: value => value?.trim().slice(0, 128) || null,
					})}
					placeholder='Descripción de la fachada, puntos de referencia para encontrarla, indicaciones de seguridad, etc.'
					maxLength={128}
					sx={{ minHeight: '8rem' }}
				/>
				<FormHelperText sx={{ float: 'right' }}>
					{watch('indications')?.length ?? 0}/128
				</FormHelperText>
				<FormErrorMessage>{errors.indications?.message} </FormErrorMessage>
			</FormControl>

			<Button size='lg' type='submit'>
				Enviar
			</Button>
		</ModalBody>
	)
}
