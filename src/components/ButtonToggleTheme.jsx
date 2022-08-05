import { useColorMode } from '@chakra-ui/react'
import { ButtonNav } from './ButtonNav'

export const ButtonToggleTheme = ({ colorScheme }) => {
	const { colorMode, toggleColorMode } = useColorMode()
	return (
		<ButtonNav
			colorScheme={colorScheme}
			onClick={toggleColorMode}
			label='Tema'
			icon={
				colorMode === 'light' ? (
					<div style={{ fontSize: '1.5rem', lineHeight: 1 }}>🧥</div>
				) : (
					<div style={{ fontSize: '1.5rem', lineHeight: 1 }}>🥼</div>
				)
			}
		/>
	)
}
