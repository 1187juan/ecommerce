import { Flex } from '@chakra-ui/react'
import { Logo } from '../components'

export const Footer = () => {
	return (
		<Flex
			sx={{
				height: '35vmin',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Logo
				sx={{
					opacity: 0.5,
				}}
			/>
		</Flex>
	)
}
