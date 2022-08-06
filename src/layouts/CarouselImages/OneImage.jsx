import { Box, Badge, Image } from '@chakra-ui/react'

export const OneImage = ({ imageUrl, description = '' }) => {
	return (
		<Box
			sx={{
				minWidth: '300px',
				flex: '1.5 0',
				position: 'relative',
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
				1/1
			</Badge>
			<Image src={imageUrl} alt={description} />
		</Box>
	)
}
