import { ScrollingCarousel } from '@trendyol-js/react-carousel'
import { ButtonDirection } from '../../components'
import styled from '@emotion/styled'

const CarouselCustom = styled(ScrollingCarousel)({
	'& .styles-module_slider__o0fqa': {
		gap: '1rem',
		width: 'calc(100% + 2rem)',
		marginLeft: '-1rem',
		padding: '1rem',
	},
})

export const Carousel = ({ children }) => {
	return (
		<CarouselCustom
			leftIcon={
				<ButtonDirection
					direction='left'
					sx={{
						position: 'absolute',
						top: '50%',
						left: 0,
						display: ['none', 'flex'],
						transform: 'translateY(-50%)',
					}}
				/>
			}
			rightIcon={
				<ButtonDirection
					direction='right'
					sx={{
						position: 'absolute',
						top: '50%',
						right: 0,
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
