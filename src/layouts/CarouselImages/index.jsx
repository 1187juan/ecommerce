import { Carousel } from './Carousel'
import { CarouselImage } from './CarouselImage'
import { OneImage } from './OneImage'

export const CarouselImages = ({ images }) => {
	const quantityImages = images.length
	const isOneImage = quantityImages === 1

	if (isOneImage)
		return (
			<OneImage imageUrl={images[0].url} description={images[0].description} />
		)

	return (
		<Carousel>
			{images.map((image, i) => (
				<CarouselImage
					key={i}
					imageUrl={image.url}
					description={image.description}
					badge={i + 1 + '/' + quantityImages}
				/>
			))}
		</Carousel>
	)
}
