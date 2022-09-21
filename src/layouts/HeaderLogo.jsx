import { Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Container, LogoBetterWare } from '../components'

export const HeaderLogo = ({ position = 'sticky', sx = {} }) => {
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
				...sx,
			}}
		>
			<Container
				as='nav'
				sx={{
					display: 'flex',
					alignItems: 'center',
					height: '100%',
					color: 'primary',
				}}
			>
				<Link to='/'>
					<LogoBetterWare height='2rem' />
				</Link>
			</Container>
		</Box>
	)
}
