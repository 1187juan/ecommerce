import { Box, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Container, LogoBetterWare, LogoBetterWareIcon } from '../components'
import { BasketNav } from './BasketNav'
import { ButtonToggleTheme } from './ButtonToggleTheme'
import { MenuNav } from './MenuNav'

export const NavMenu = ({ colorScheme = 'gray' }) => {
	return (
		<Container
			as='nav'
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				height: '100%',
			}}
		>
			<Box
				as={Link}
				to='/'
				sx={{
					'svg:first-of-type': {
						display: ['block', 'none'],
					},
					'svg:last-of-type': {
						display: ['none', 'block'],
					},
				}}
			>
				<LogoBetterWareIcon height='2rem' />
				<LogoBetterWare height='2rem' />
			</Box>
			<Flex
				as='ul'
				sx={{
					listStyle: 'none',
					gap: '1rem',
				}}
			>
				<Box as='li'>
					<MenuNav colorScheme={colorScheme} />
				</Box>
				<Box as='li'>
					<ButtonToggleTheme colorScheme={colorScheme} />
				</Box>
				<Box as='li'>
					<BasketNav colorScheme={colorScheme} />
				</Box>
			</Flex>
		</Container>
	)
}
