import { ChakraProvider } from '@chakra-ui/react'
import { AppRouter } from './routes/AppRouter'
import { theme } from './theme'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './store'
import { AuthChangeObserver, BasketState } from './layouts'

export const App = () => {
	return (
		<ReduxProvider store={store}>
			<ChakraProvider resetCSS theme={theme}>
				<AuthChangeObserver>
					<BasketState />
					<AppRouter />
				</AuthChangeObserver>
			</ChakraProvider>
		</ReduxProvider>
	)
}
