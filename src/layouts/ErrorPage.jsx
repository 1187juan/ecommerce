import { Flex, Image, Text } from '@chakra-ui/react'
import cancel from '../assets/undraw/undraw_cancel_re_pkdm.svg'

export const ErrorPage = () => {
	return (
		<Flex
			as='main'
			sx={{
				minHeight: 'calc(100vh - 4rem)',
				alignItems: 'center',
				justifyContent: 'center',
				gap: '1rem',
				flexDirection: 'column',
			}}
		>
			<Image
				src={cancel}
				alt='error'
				sx={{ width: '100%', maxWidth: '20rem' }}
			/>
			<Text sx={{ fontSize: '2xl', fontWeight: 'semibold' }}>
				No es una página valida.
			</Text>
		</Flex>
	)
}
