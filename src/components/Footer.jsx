import { Flex } from '@chakra-ui/react'
import { Logo } from './Logo'

export const Footer = () => {
	return (
		<Flex height='35vmin' justifyContent='center' alignItems='center'>
			<Logo opacity={0.5} />
		</Flex>
	)
}
