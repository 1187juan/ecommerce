import { Box, useColorModeValue } from '@chakra-ui/react'
import { forwardRef } from 'react'

export const RadioCard = forwardRef(
	({ children, size = '1.25rem', sx = {}, rootProps = {}, ...props }, ref) => {
		const backgroundColor = useColorModeValue('gray.200', 'whiteAlpha.300')

		return (
			<Box
				as='label'
				sx={{
					display: 'flex',
					gap: '1rem',
					padding: '1rem',
					borderRadius: '.5rem',
					fontSize: '1.125rem',
					fontWeight: 'semibold',
					'&:hover': {
						backgroundColor,
					},
					...sx,
				}}
				{...rootProps}
			>
				<input type='radio' style={{ display: 'none' }} ref={ref} {...props} />
				<Box
					as='span'
					sx={{
						flexShrink: '0',
						display: 'block',
						color: backgroundColor,
						width: size,
						height: size,
						border: '.125rem solid',
						borderRadius: '50%',

						'input:checked + &': {
							color: 'primary',
							border: '.375rem solid',
						},
					}}
				/>
				{children}
			</Box>
		)
	}
)
