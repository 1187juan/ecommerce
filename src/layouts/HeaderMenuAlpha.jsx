import { Container, Logo, ButtonNav } from '../components'
import { Box, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { ButtonToggleTheme } from './ButtonToggleTheme'
import { useVerticalStickyPlus } from '../hooks'

export const HeaderMenuAlpha = () => {
	const [headerRef, { isMatchInitialPosition }] = useVerticalStickyPlus({
		matchInitialPosition: true,
	})
	const colorScheme = isMatchInitialPosition ? 'whiteAlpha' : 'gray'

	return (
		<Box
			as='header'
			ref={headerRef}
			sx={{
				position: 'fixed',
				top: 0,
				zIndex: 1,
				width: '100%',
				height: '4rem',
				backgroundColor: isMatchInitialPosition ? 'transparent' : 'surface',
				color: isMatchInitialPosition ? 'onPrimaryHigh' : 'onSurfaceHigh',

				transition: 'background 300ms ease, color 300ms ease',
			}}
		>
			<Container
				as='nav'
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					height: '100%',
				}}
			>
				<Link to='/'>
					<Logo />
				</Link>
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
							icon={<div style={{ fontSize: '1.5rem', lineHeight: 1 }}>🦄</div>}
						/>
					</Box>
					<Box as='li'>
						<ButtonToggleTheme colorScheme={colorScheme} />
					</Box>
					<Box as='li'>
						<ButtonNav
							colorScheme={colorScheme}
							label='Carrito'
							icon={<div style={{ fontSize: '1.5rem', lineHeight: 1 }}>🛒</div>}
						/>
					</Box>
				</Flex>
			</Container>
		</Box>
	)
}
