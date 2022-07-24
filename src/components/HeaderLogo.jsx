import { Box, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Logo } from './Logo'

export const HeaderLogo = () => {
	return (
		<Box as='header' pos='sticky' top={0} height='3.5rem' bgColor='surface'>
			<Flex
				as='nav'
				height='100%'
				w='min(100% - 2rem, 992px)'
				alignItems='center'
				mx='auto'
			>
				<Link to='/'>
					<Logo />
				</Link>
			</Flex>
		</Box>
	)
}
