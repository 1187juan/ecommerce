import {
	Button,
	FormControl,
	FormErrorMessage,
	Grid,
	Input,
} from '@chakra-ui/react'
import { validateEmail } from '../../helpers'

export const Form = ({
	handleSubmit,
	onSubmit,
	formState: { errors },
	register,
	isLoading,
	getValues,
}) => {
	return (
		<Grid as='form' onSubmit={handleSubmit(onSubmit)} sx={{ gap: '1rem' }}>
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
			<Button size='lg' type='submit' isLoading={isLoading}>
				Acceder
			</Button>
		</Grid>
	)
}
