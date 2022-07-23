import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
import { breakpoints } from './breakpoints'
import { colors } from './colors'
import { config } from './config'
import { fonts } from './fonts'
import { semanticTokens } from './semanticTokens'
import { styles } from './styles'

export const theme = extendTheme(
	{
		config,
		semanticTokens,
		breakpoints,
		styles,
		colors,
		fonts,
	},
	withDefaultColorScheme({ colorScheme: 'primary' })
)
