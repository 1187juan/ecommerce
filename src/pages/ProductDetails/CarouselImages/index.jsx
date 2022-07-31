import styled from '@emotion/styled'
import { Carousel } from '@trendyol-js/react-carousel'
import { OneImage } from './OneImage'
import { CarouselImage } from './CarouselImage'
import { ButtonDirection } from './ButtonDirection'

const CarouselCustom = styled(Carousel)({
	flex: '1.5 0',
	minWidth: 'calc(300px - 1.5rem)',
})

export const CarouselImages = ({ images }) => {
	const quantityImages = images.length
	const isOneImage = quantityImages === 1

	if (isOneImage)
		return (
			<OneImage imageUrl={images[0].url} description={images[0].description} />
		)

	return (
		<CarouselCustom
			show={1}
			slide={1}
			swipeOn={0}
			swiping
			infinite
			leftArrow={<ButtonDirection direction='left' />}
			rightArrow={<ButtonDirection direction='right' />}
		>
			{images.map((image, i) => (
				<CarouselImage
					key={i}
					imageUrl={image.url}
					description={image.description}
					badge={i + 1 + '/' + quantityImages}
				/>
			))}
		</CarouselCustom>
	)
}