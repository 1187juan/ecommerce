import { Box, Badge, Image } from '@chakra-ui/react'

export const OneImage = ({ url, description = '' }) => {
	return (
		<Box minW='300px' flex='1.5 0' position='relative'>
			<Badge position='absolute' top='1rem' right='1rem' colorScheme='gray'>
				1/1
			</Badge>
			<Image src={url} alt={description} />
		</Box>
	)
}
