import { Box, Flex } from '@chakra-ui/react'
import { signOut } from 'firebase/auth'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { LogInIcon, UserIcon } from '../boxicons'
import {
	ButtonNav,
	Container,
	LogoBetterWare,
	LogoBetterWareIcon,
} from '../components'
import { auth } from '../firebase'
import { ButtonBasket } from './ButtonBasket'
import { ButtonToggleTheme } from './ButtonToggleTheme'

export const NavMenu = ({ colorScheme = 'gray' }) => {
	const { isLogin } = useSelector(({ auth }) => auth)

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
					{isLogin && (
						<ButtonNav
							colorScheme={colorScheme}
							label='Salir'
							icon={<UserIcon />}
							onClick={() => signOut(auth).catch(e => console.log(e))}
						/>
					)}
					{!isLogin && (
						<ButtonNav
							as={Link}
							to='/login'
							colorScheme={colorScheme}
							label='Acceder'
							icon={<LogInIcon />}
						/>
					)}
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
