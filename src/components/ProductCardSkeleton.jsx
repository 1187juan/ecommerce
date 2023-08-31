import { Grid, Skeleton, SkeletonText } from '@chakra-ui/react'

export const ProductCardSkeleton = ({ sx = {} }) => {
	return (
		<Grid
			sx={{
				backgroundColor: 'surface',
				borderRadius: 'base',
				shadow: 'xl',
				...sx,
			}}
		>
			<Skeleton sx={{ aspectRatio: '1/1' }} />
			<SkeletonText
				skeletonHeight='4'
				noOfLines={1}
				sx={{ margin: '1rem', padding: '.25rem 0' }}
			/>
		</Grid>
	)
}
