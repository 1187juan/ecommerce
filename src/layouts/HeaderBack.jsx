import { Box, Button } from '@chakra-ui/react'
import { Container } from '../components'
import { useNavigate } from 'react-router-dom'
import { useVerticalStickyPlus } from '../hooks'
import { ChevronLeftIcon } from '../boxicons'

export const HeaderBack = ({ position = 'sticky', sx = {} }) => {
	const navigate = useNavigate()
	const [headerRef] = useVerticalStickyPlus()

	return (
		<Box
			ref={headerRef}
			as='header'
			sx={{
				position,
				top: 0,
				zIndex: 1,
				height: '4rem',
				marginBottom: '1rem',
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
				}}
			>
				<Button
					variant='ghost'
					colorScheme='inherit'
					leftIcon={<ChevronLeftIcon />}
					onClick={() => navigate(-1)}
				>
					Regresar
				</Button>
			</Container>
		</Box>
	)
}
