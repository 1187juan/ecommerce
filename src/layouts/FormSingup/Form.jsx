import {
	Button,
	FormControl,
	FormErrorMessage,
	Grid,
	IconButton,
	Input,
	InputGroup,
	InputRightElement,
} from '@chakra-ui/react'
import { HideIcon, ShowIcon } from '../../boxicons'
import { validateEmail } from '../../helpers'

export const Form = ({
	handleSubmit,
	onSubmit,
	formState: { errors },
	register,
	getValues,
	showPasswords,
	setShowPasswords,
	onClose,
	isLoading,
}) => {
	return (
		<Grid
			as='form'
			onSubmit={handleSubmit(onSubmit)}
			sx={{
				gap: '1rem',
			}}
		>
			<FormControl isInvalid={errors.email}>
				<Input
					size='lg'
					placeholder='Correo electrónico'
					type='email'
					autoComplete='off'
					{...register('email', {
						required: 'El campo es requerido.',
						validate: value =>
							validateEmail(value) || 'No es un formato de correo valido.',

						setValueAs: value => value?.trim() ?? null,
						onChange: e => (e.currentTarget.value = getValues('email')),
					})}
				/>
				<FormErrorMessage>{errors.email?.message}</FormErrorMessage>
			</FormControl>

			<FormControl isInvalid={errors.password}>
				<InputGroup>
					<Input
						size='lg'
						placeholder='Contraseña'
						type={showPasswords ? 'text' : 'password'}
						autoComplete='off'
						{...register('password', {
							required: 'El campo es requerido.',
							minLength: {
								value: 6,
								message: 'La contraseña debe tener por lo menos 6 caracteres.',
							},
							setValueAs: value => value?.trim() ?? null,
							onChange: e => (e.currentTarget.value = getValues('password')),
						})}
						sx={{ paddingRight: '4rem' }}
					/>
					<InputRightElement sx={{ height: '100%', marginRight: '1rem' }}>
						<IconButton
							isRound
							variant='ghost'
							colorScheme='gray'
							onClick={() => setShowPasswords(prev => !prev)}
						>
							{showPasswords ? <HideIcon /> : <ShowIcon />}
						</IconButton>
					</InputRightElement>
				</InputGroup>
				<FormErrorMessage>{errors.password?.message}</FormErrorMessage>
			</FormControl>

			<FormControl isInvalid={errors.passwordRepeat}>
				<InputGroup>
					<Input
						size='lg'
						placeholder='Repite la contraseña'
						type={showPasswords ? 'text' : 'password'}
						autoComplete='off'
						{...register('passwordRepeat', {
							required: 'El campo es requerido.',
							validate: value =>
								value === getValues('password') ||
								'Las contraseñas no son iguales.',
							setValueAs: value => value?.trim() ?? null,
							onChange: e =>
								(e.currentTarget.value = getValues('passwordRepeat')),
						})}
						sx={{ paddingRight: '4rem' }}
					/>
					<InputRightElement sx={{ height: '100%', marginRight: '1rem' }}>
						<IconButton
							onClick={() => setShowPasswords(prev => !prev)}
							colorScheme='gray'
							variant='ghost'
							isRound
						>
							{showPasswords ? <HideIcon /> : <ShowIcon />}
						</IconButton>
					</InputRightElement>
				</InputGroup>
				<FormErrorMessage>{errors.passwordRepeat?.message}</FormErrorMessage>
			</FormControl>

			<Button size='lg' type='submit'>
				Registrarme
			</Button>
			<Button
				size='lg'
				variant='ghost'
				colorScheme='gray'
				onClick={onClose}
				isLoading={isLoading}
			>
				Regresar
			</Button>
		</Grid>
	)
}
