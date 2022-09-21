import {
	Button,
	FormControl,
	FormErrorMessage,
	Grid,
	IconButton,
	Input,
	InputGroup,
	InputRightElement,
	Link,
} from '@chakra-ui/react'
import { HideIcon, ShowIcon } from '../../boxicons'
import { validateEmail } from '../../helpers'
import { Link as LinkRRD } from 'react-router-dom'

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
			<Link as={LinkRRD} to='/forgot-password'>
				¿Olividaste tu contraseña?
			</Link>

			<Button size='lg' type='submit'>
				Acceder
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
