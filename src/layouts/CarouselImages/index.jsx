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
					objectFit: 'contain',
					objectPosition: 'top',
				}}
			/>
		)

	if (hasOneImg)
		return (
			<Image
				src={imgs[0].url}
				alt={imgs[0].alt}
				sx={{
					minWidth: '300px',
					flex: '1.5 0',
					position: 'relative',
					objectFit: 'contain',
					objectPosition: 'top',
				}}
			/>
		)

	return (
		<Carousel>
			{imgs.map(({ url, alt }, i) => (
				<CarouselImage
					key={i}
					imgUrl={url}
					description={alt}
					badge={i + 1 + '/' + quantityImgs}
				/>
			))}
		</Carousel>
	)
}
