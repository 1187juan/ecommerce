import { Image } from '@chakra-ui/react'
import { Carousel } from './Carousel'
import { CarouselImage } from './CarouselImage'

export const CarouselImages = ({ imgs = [] }) => {
	const quantityImgs = imgs.length
	const hasImgs = quantityImgs > 0
	const hasOneImg = quantityImgs === 1

	if (!hasImgs)
		return (
			<Image
				src={import.meta.env.VITE_PLACEHOLDER_320}
				alt={'product'}
				sx={{
					minWidth: '300px',
					flex: '1.5 0',
					position: 'relative',
				}}
			/>
		)

	if (hasOneImg)
		return (
			<Image
				src={imgs[0].imgUrl}
				alt={imgs[0].imgAlt}
				sx={{
					minWidth: '300px',
					flex: '1.5 0',
					position: 'relative',
				}}
			/>
		)

	return (
		<Carousel>
			{imgs.map(({ imgUrl, imgAlt }, i) => (
				<CarouselImage
					key={i}
					imgUrl={imgUrl}
					description={imgAlt}
					badge={i + 1 + '/' + quantityImgs}
				/>
			))}
		</Carousel>
	)
}
