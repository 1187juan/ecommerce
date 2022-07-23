import { Button, useColorMode } from '@chakra-ui/react'

export const AppRouter = () => {
	const { colorMode, toggleColorMode } = useColorMode()

	return <Button onClick={toggleColorMode}>{colorMode}</Button>
}
