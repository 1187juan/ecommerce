import { Box, Grid, Heading, Text } from '@chakra-ui/react'
import error404Svg from '../../assets/undraw/undraw_page_not_found_re_e9o6.svg'
import { Container } from '../../components'

export const Content = () => {
	return (
		<Container
			as='section'
			sx={{
				display: 'grid',
				gridTemplateRows: '50vmin max-content max-content',
				justifyItems: 'center',
				alignContent: 'center',
				gap: '1rem',
				minHeight: 'calc(100vh - 3.5rem)',
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
