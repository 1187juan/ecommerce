import { Flex } from '@chakra-ui/react'

export const GraphicProducts = ({
	children,
	size = '100%',
	sizeBall = '85%',
	rotationDirection = '',
}) => {
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
					background:
						'radial-gradient(50% 50% at 50% 50%, #000000 0%, #C6FAFF 100%)',

					borderRadius: '50%',
					aspectRatio: '1 / 1',
					mixBlendMode: 'screen',
					opacity: 0.15,
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
