import { Box } from '@chakra-ui/react'

export const Section = ({ children, sx = {}, ...props }) => {
	return (
		<Box
			as='section'
			sx={{
				padding: '1rem',
				backgroundColor: 'surface',
				borderRadius: '.25rem',
				...sx,
			}}
			{...props}
		>
			{children}
		</Box>
	)
}
