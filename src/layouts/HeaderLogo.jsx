import { Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Container, Logo } from '../components'

export const HeaderLogo = ({ position = 'sticky' }) => {
	return (
		<Box
			as='header'
			sx={{
				position,
				top: 0,
				zIndex: 2,
				height: '4rem',
				width: '100%',
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
