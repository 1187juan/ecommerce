import { Grid, Skeleton, SkeletonText } from '@chakra-ui/react'

export const ProductCardSkeleton = ({ sx = {}, isVertical = false }) => {
	return (
		<Grid
			sx={{
				gridTemplateColumns: isVertical ? '1fr' : ['2fr 3fr', '1fr'],
				alignItems: isVertical ? 'start' : ['center', 'start'],
				backgroundColor: 'surface',
				borderRadius: 'base',
				overflow: 'hidden',
				shadow: 'xl',
				...sx,
			}}
		>
			<Skeleton sx={{ aspectRatio: '1/1' }} />
			<SkeletonText
				skeletonHeight='4'
				noOfLines={isVertical ? 2 : [2, 1]}
				sx={{ margin: '1rem', padding: '.25rem 0' }}
			/>
		</Grid>
	)
}
