import { Box, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { UserIcon } from '../boxicons'
import {
	ButtonNav,
	Container,
	LogoBetterWare,
	LogoBetterWareIcon,
} from '../components'
import { ButtonBasket } from './ButtonBasket'
import { ButtonToggleTheme } from './ButtonToggleTheme'

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
					<ButtonNav
						colorScheme={colorScheme}
						label='Cuenta'
						icon={<UserIcon />}
					/>
				</Box>
				<Box as='li'>
					<ButtonToggleTheme colorScheme={colorScheme} />
				</Box>
				<Box as='li'>
					<ButtonBasket colorScheme={colorScheme} />
				</Box>
			</Flex>
		</Container>
	)
}
