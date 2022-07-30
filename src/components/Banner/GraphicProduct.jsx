import { Grid, Image } from '@chakra-ui/react'

export const GraphicProduct = ({
	src = '',
	rotationDirection = '',
	rotation = 0,
	deley = 0,
	size = '15%',
}) => {
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
			<Image
				src={src}
				alt={src}
				sx={{
					borderRadius: '50%',
					boxShadow: '0 0 .5rem .5rem white',
					bgColor: 'white',
					animation: `turn1 32s ${deley}s infinite linear ${rotationDirection}`,
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
