import { Box, Badge, Image } from '@chakra-ui/react'

export const CarouselImage = ({ badge, url, description = '' }) => {
	return (
		<Box minW='300px' flexGrow={1} position='relative'>
			<Badge position='absolute' top='1rem' right='1rem' colorScheme='gray'>
				{badge}
			</Badge>
			<Image src={url} alt={description} />
		</Box>
	)
}
