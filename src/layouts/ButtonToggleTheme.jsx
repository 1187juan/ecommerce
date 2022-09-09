import { useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '../boxicons'
import { ButtonNav } from '../components'

export const ButtonToggleTheme = ({ colorScheme }) => {
	const { colorMode, toggleColorMode } = useColorMode()
	return (
		<ButtonNav
			colorScheme={colorScheme}
			onClick={toggleColorMode}
			label='Tema'
			icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
		/>
	)
}
