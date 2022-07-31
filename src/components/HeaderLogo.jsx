import { Box, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Logo } from './Logo'

export const HeaderLogo = () => {
	return (
		<Box
			as='header'
			sx={{
				position: 'sticky',
				top: 0,
				zIndex: 2,
				height: '3.5rem',
				backgroundColor: 'surface',
			}}
		>
			<Flex
				as='nav'
				sx={{
					alignItems: 'center',
					height: '100%',
					width: 'min(100% - 2rem, 992px)',
					margin: '0 auto',
				}}
			>
				<Link to='/'>
					<Logo />
				</Link>
			</Flex>
		</Box>
	)
}
