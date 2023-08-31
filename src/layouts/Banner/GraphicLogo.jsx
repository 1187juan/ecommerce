import { Flex, Image } from '@chakra-ui/react'
import { LogoBetterWareIcon } from '../../components'

export const GraphicLogo = () => {
	return (
		<Flex
			sx={{
				position: 'relative',
				justifyContent: 'center',
				alignItems: 'center',
				height: '20%',
				bgColor: 'white',
				color: 'primary',
				borderRadius: '50%',
				boxShadow: '0 0 1rem 1rem white',
				aspectRatio: '1 / 1',
			}}
		>
			<Image
				src='https://firebasestorage.googleapis.com/v0/b/ecommerce-5f57e.appspot.com/o/banner%2Fenergy-ball.webp?alt=media&token=ff7ff84d-dc24-4e71-8358-249f4d3f3372'
				alt='energy ball'
				sx={{
					position: 'absolute',
					minWidth: '250%',
					mixBlendMode: 'screen',
					animation: 'turn1 10s infinite linear',
					color: 'red',
					'@keyframes turn1': {
						to: {
							transform: 'rotate(1turn)',
						},
					},
				}}
			/>
			<LogoBetterWareIcon height='85%' />
		</Flex>
	)
}
