import { Box } from '@chakra-ui/react'

export const Card = ({ children, sx = {} }) => {
	return (
		<Box
			sx={{
				display: 'grid',
				width: '100%',
				height: '100%',
				padding: '1em',
				position: 'absolute',
				backgroundImage:
					'radial-gradient( circle farthest-corner at -5.7% -16.7%,  rgba(0,249,243,1) 0%, rgba(14,113,159,1) 90% )',
				borderRadius: '1rem',
				...sx,
			}}
		>
			{children}
		</Box>
	)
}
