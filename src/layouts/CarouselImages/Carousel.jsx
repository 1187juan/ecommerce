import { Carousel as CarouselBase } from '@trendyol-js/react-carousel'
import { ButtonDirection } from '../../components'
import styled from '@emotion/styled'

const CarouselCustom = styled(CarouselBase)({
	flex: '1.5 0',
	minWidth: 'calc(300px - 1.5rem)',
})

export const Carousel = ({ children }) => {
	return (
		<CarouselCustom
			show={1}
			slide={1}
			swipeOn={0}
			swiping
			infinite
			leftArrow={
				<ButtonDirection
					direction='left'
					variant='ghost'
					sx={{
						position: 'absolute',
						top: '50%',
						left: '.5rem',
						zIndex: 1,
						display: ['none', 'flex'],
						transform: 'translateY(-50%)',
					}}
				/>
			}
			rightArrow={
				<ButtonDirection
					direction='right'
					variant='ghost'
					sx={{
						position: 'absolute',
						top: '50%',
						right: '.5rem',
						zIndex: 1,
						display: ['none', 'flex'],
						transform: 'translateY(-50%)',
					}}
				/>
			}
		>
			{children}
		</CarouselCustom>
	)
}
