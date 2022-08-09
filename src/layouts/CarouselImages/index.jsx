import { Image } from '@chakra-ui/react'
import { Carousel } from './Carousel'
import { CarouselImage } from './CarouselImage'
import imageDelete from '../../assets/banner/product-01.webp'

export const CarouselImages = ({ images }) => {
	const quantityImages = images.length
	const isOneImage = quantityImages === 1

	if (isOneImage)
		return (
			<Image
				src={imageDelete ?? images[0].url}
				alt={images[0].description}
				sx={{
					minWidth: '300px',
					flex: '1.5 0',
					position: 'relative',
				}}
			/>
		)

	return (
		<Carousel>
			{images.map((image, i) => (
				<CarouselImage
					key={i}
					imageUrl={imageDelete ?? image.url}
					description={image.description}
					badge={i + 1 + '/' + quantityImages}
				/>
			))}
		</Carousel>
	)
}
