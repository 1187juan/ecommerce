import { Box, Container, Grid, Heading, Text } from '@chakra-ui/react'
import error404Svg from '../assets/undraw/undraw_page_not_found_re_e9o6.svg'

export const Error404 = () => {
	return (
		<Container
			as='main'
			sx={{
				display: 'grid',
				gridTemplateRows: '50vmin max-content max-content',
				justifyItems: 'center',
				alignContent: 'center',
				gap: '1rem',
				minHeight: 'calc(100vh - 4rem)',
			}}
		>
			<Box
				as='img'
				src={error404Svg}
				alt='Error 404'
				sx={{
					height: '100%',
				}}
			/>
			<Grid
				sx={{
					textAlign: 'center',
				}}
			>
				<Heading as='h1'>Hmmm!</Heading>
				<Text>No encontramos lo que buscabas.</Text>
			</Grid>
		</Container>
	)
}
