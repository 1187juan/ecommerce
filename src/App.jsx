import { ChakraProvider } from '@chakra-ui/react'
import { AppRouter } from './routes/AppRouter'
import { theme } from './theme'

export const App = () => {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<AppRouter />
		</ChakraProvider>
	)
}
