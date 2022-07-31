import { Heading } from '@chakra-ui/react'

export const Logo = ({ sx, ...props }) => {
	return (
		<Heading
			sx={{
				letterSpacing: -2,
				...sx,
			}}
			{...props}
		>
			LOGO
		</Heading>
	)
}
