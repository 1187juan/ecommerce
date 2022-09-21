import { ChakraProvider } from '@chakra-ui/react'
import { AppRouter } from './routes/AppRouter'
import { theme } from './theme'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './store'
import { LoadingPages } from './layouts/LoadingPages'

export const App = () => {
	return (
		<ReduxProvider store={store}>
			<ChakraProvider resetCSS theme={theme}>
				<LoadingPages>
					<AppRouter />
				</LoadingPages>
			</ChakraProvider>
		</ReduxProvider>
	)
}
