import { Box, Badge, Image } from '@chakra-ui/react'

export const CarouselImage = ({ badge, imgUrl, imgAlt = '' }) => {
	return (
		<Box
			sx={{
				position: 'relative',
				flexGrow: 1,
				minWidth: '300px',
			}}
		>
			<Badge
				colorScheme='gray'
				sx={{
					position: 'absolute',
					top: '1rem',
					right: '1rem',
				}}
			>
				{badge}
			</Badge>
			<Image src={imgUrl} alt={imgAlt} boxSize='100%' />
		</Box>
	)
}
