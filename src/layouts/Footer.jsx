import { Flex } from '@chakra-ui/react'
import { LogoBetterWare } from '../components'

export const Footer = () => {
	return (
		<Flex
			sx={{
				height: '35vmin',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<LogoBetterWare
				style={{
					width: '8rem',
					opacity: 0.5,
				}}
			/>
		</Flex>
	)
}
