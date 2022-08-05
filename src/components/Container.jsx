import { Box } from '@chakra-ui/react'

export const Container = ({
	children,
	as = 'div',
	fullWidth = false,
	sx = {},
	...props
}) => {
	return (
		<Box
			as={as}
			sx={{
				display: 'block',
				width: fullWidth ? 'min(100%, 992px)' : 'min(100% - 2rem, 992px)',
				marginLeft: 'auto',
				marginRight: 'auto',
				...sx,
			}}
			{...props}
		>
			{children}
		</Box>
	)
}
