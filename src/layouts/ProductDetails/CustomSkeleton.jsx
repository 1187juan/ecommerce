import { Grid, Skeleton, SkeletonText } from '@chakra-ui/react'
import { Container } from '../../components'

export const CustomSkeleton = () => {
	return (
		<Container
			fullWidth
			sx={{
				display: 'flex',
				flexWrap: 'wrap',
				gap: '1rem',
				marginTop: '1rem',
				marginBottom: '1rem',
				backgroundColor: 'surface',
			}}
		>
			<Skeleton
				sx={{
					minWidth: '300px',
					flex: '1.5 0',
					aspectRatio: '1/1',
				}}
			/>
			<Grid
				sx={{
					flex: '1 0',
					alignContent: 'start',
					gap: '1rem',
					minWidth: 'calc(300px - 1.5rem)',
					padding: ['1rem', '2rem 1rem'],
				}}
			>
				<Skeleton
					sx={{
						height: '1.3125rem',

						width: '6rem',
					}}
				/>
				<Skeleton sx={{ height: '2.6875rem' }} />
				<Skeleton sx={{ height: '1.5rem', width: '80%' }} />
				<Skeleton sx={{ height: '2.8125rem', width: '6rem' }} />
				<SkeletonText noOfLines={2} spacing='4' skeletonHeight='4' />
				<SkeletonText
					noOfLines={3}
					sx={{ marginTop: '1rem' }}
					spacing='4'
					skeletonHeight='4'
				/>
				<Skeleton sx={{ height: '3rem' }} />
			</Grid>
		</Container>
	)
}
