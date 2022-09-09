import { Box, Grid, Image, useColorModeValue } from '@chakra-ui/react'

export const GraphicProduct = ({
	src = '',
	rotationDirection = '',
	rotation = 0,
	deley = 0,
	size = '15%',
}) => {
	const backgroundImage = useColorModeValue(
		`radial-gradient(
			circle, 
			hsla(192 100% 100% / .35) 30%, 
			hsla(0 100% 50% / 0) 65%
			)`,
		`radial-gradient(
			circle, 
			hsla(192 100% 65% / .2) 30%, 
			hsla(0 100% 50% / 0) 65%
			)`
	)
	const filter = useColorModeValue(
		`drop-shadow(0px 0px 4px hsla(192 100% 100% / 1.0))`,
		`drop-shadow(0px 0px 2px hsla(192 100% 100% / .85))`
	)

	return (
		<Grid
			as='li'
			sx={{
				position: 'absolute',
				width: size,
				height: '100%',
				transform: `rotate(${rotation}deg)`,
			}}
		>
			<Box
				sx={{
					position: 'absolute',
					width: '100%',
					aspectRatio: '1 / 1',
					backgroundImage,
					borderRadius: '50%',
					transform: 'scale(1.85)',
				}}
			></Box>
			<Image
				src={src}
				alt={src}
				sx={{
					animation: `turn1 32s ${deley}s infinite linear ${rotationDirection}`,
					width: '100%',
					aspectRatio: '1 / 1',
					objectFit: 'contain',
					filter,

					'@keyframes turn1': {
						to: {
							transform: 'rotate(1turn)',
						},
					},
				}}
			/>
		</Grid>
	)
}
