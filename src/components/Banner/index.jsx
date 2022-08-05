import {
	Box,
	Grid,
	Heading,
	Image,
	Text,
	useColorModeValue,
} from '@chakra-ui/react'
import model from '../../assets/banner/model.webp'
import { Graphic } from './Graphic'
import { Container } from '../Container'

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
						Title of the
						<br />
						<Box
							as='span'
							sx={{
								color,
							}}
						>
							product
						</Box>
					</Heading>
					<Text>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
						rerum magni laudantium placeat.
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
						src={model}
						alt='model'
						sx={{
							gridColumnStart: 2,
							pt: '20%',
						}}
					/>
				</Grid>
			</Container>
		</Box>
	)
}
