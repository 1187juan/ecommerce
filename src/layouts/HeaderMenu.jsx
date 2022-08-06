import { Box } from '@chakra-ui/react'
import { useVerticalStickyPlus } from '../hooks'
import { NavMenu } from './NavMenu'

export const HeaderMenu = ({ alpha = false, sx = {} }) => {
	const [headerRef, { isMatchInitialPosition }] = useVerticalStickyPlus({
		matchInitialPosition: alpha,
	})
	const colorScheme = isMatchInitialPosition ? 'whiteAlpha' : 'gray'

	return (
		<Box
			as='header'
			ref={headerRef}
			sx={{
				position: 'sticky',
				top: 0,
				zIndex: 1,
				width: '100%',
				height: '4rem',
				backgroundColor:
					alpha && isMatchInitialPosition ? 'transparent' : 'surface',
				color:
					alpha && isMatchInitialPosition ? 'onPrimaryHigh' : 'onSurfaceHigh',

				transition: alpha ? 'background 300ms ease, color 300ms ease' : 'none',
				...sx,
			}}
		>
			<NavMenu colorScheme={colorScheme} />
		</Box>
	)
}
