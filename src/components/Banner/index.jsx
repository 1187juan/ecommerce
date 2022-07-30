import { Box, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react'
import model from '../../assets/banner/model.webp'
import { Graphic } from './Graphic'

export const Banner = () => {
	return (
		<Box
			sx={{
				mb: '1rem',
				pt: '2rem',
				textAlign: ['center', 'left'],
				color: 'white',
				bg: '#00EAFF radial-gradient(100% 1820.44% at 0% 0%, #3C8CE7 0%, #00EAFF 100%)',
			}}
		>
			<Flex
				as='section'
				sx={{
					width: 'min(100% - 2rem, 992px)',
					flexWrap: 'wrap',
					margin: '0 auto',
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
								color: 'primary.900',
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
			</Flex>
		</Box>
	)
}
