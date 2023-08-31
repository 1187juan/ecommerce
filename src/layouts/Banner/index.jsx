import {
	Box,
	Grid,
	Heading,
	Image,
	Text,
	useColorModeValue,
} from '@chakra-ui/react'

import { Graphic } from './Graphic'
import { Container } from '../../components'

export const Banner = () => {
	const background = useColorModeValue(
		`hsl(192 100% 50%) radial-gradient(circle at bottom right,
			hsl(186 100% 64%) 10%,
			hsl(192 100% 50%) 45%,
			hsl(196 100% 42%) 75%)`,
		`hsl(192 100% 50%) radial-gradient(circle at bottom right,
			hsl(192 100% 48%) 10%,
			hsl(192 100% 24%) 45%,
			hsl(196 100% 12%) 75%)`
	)
	const color = useColorModeValue('primary.900', 'primary.400')

	return (
		<Box
			sx={{
				mb: '1rem',
				pt: '6rem',
				textAlign: ['center', 'left'],
				color: 'white',
				background,
				overflow: 'hidden',
			}}
		>
			<Container
				as='section'
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
				}}
			>
				<Box
					sx={{
						flex: '1 0 min(100%, 300px - 1.5rem)',
						alignSelf: 'center',
						paddingBottom: '1rem',
					}}
				>
					<Heading
						fontSize={['5xl', '6xl']}
						sx={{
							lineHeight: 0.8,
							marginBottom: '1rem',
						}}
					>
						Hogar en
						<br />
						<Box
							as='span'
							sx={{
								color,
							}}
						>
							armonía
						</Box>
					</Heading>
					<Text>
						Disfruta de la originalidad de nuestros productos que harán la vida
						en tu hogar más cómoda.
					</Text>
				</Box>
				<Grid
					sx={{
						position: 'relative',
						flex: '2 0 min(100%, 300px - 1.5rem)',
						gridTemplateColumns: '1fr 68%',
						alignItems: 'end',
						height: 'max-content',
						marginTop: 'auto',
					}}
				>
					<Graphic />
					<Image
						src={
							'https://firebasestorage.googleapis.com/v0/b/ecommerce-5f57e.appspot.com/o/banner%2Fmodel.webp?alt=media&token=633511e8-b004-4874-b50f-8349efc6d984'
						}
						alt='model'
						width='100%'
						sx={{
							gridColumnStart: 2,
							mt: '20%',
							aspectRatio: '992 / 824',
						}}
					/>
				</Grid>
			</Container>
		</Box>
	)
}
