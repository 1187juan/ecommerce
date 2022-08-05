import { Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Container } from './Container'
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
			<Container
				as='nav'
				sx={{
					display: 'flex',
					alignItems: 'center',
					height: '100%',
				}}
			>
				<Link to='/'>
					<Logo />
				</Link>
			</Container>
		</Box>
	)
}
