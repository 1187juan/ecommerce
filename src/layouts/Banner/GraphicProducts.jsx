import { Flex, useColorModeValue } from '@chakra-ui/react'

export const GraphicProducts = ({
	children,
	size = '100%',
	sizeBall = '85%',
	rotationDirection = '',
}) => {
	const backgroundImage = useColorModeValue(
		`
		radial-gradient(
			circle, 
			transparent 0%, 
			hsla(192 100% 90% / .30) 100%
		)`,
		`radial-gradient(
			circle, 
			transparent 0%, 
			hsla(192 100% 90% / .10) 100%
			)`
	)

	return (
		<Flex
			as='ul'
			sx={{
				position: 'absolute',
				justifyContent: 'center',
				alignItems: 'center',
				height: size,
				aspectRatio: '1 / 1',
				'&::before': {
					content: '""',
					position: 'relative',
					display: 'block',
					height: sizeBall,
					backgroundImage,
					borderRadius: '50%',
					aspectRatio: '1 / 1',
				},
				animation: `turn1 32s infinite linear ${rotationDirection}`,
				'@keyframes turn1': {
					to: {
						transform: 'rotate(1turn)',
					},
				},
			}}
		>
			{children}
		</Flex>
	)
}
