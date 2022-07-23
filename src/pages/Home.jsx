import { Button, useColorMode } from '@chakra-ui/react'

export const Home = () => {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<div>
			<Button onClick={toggleColorMode}>{colorMode}</Button>
		</div>
	)
}
