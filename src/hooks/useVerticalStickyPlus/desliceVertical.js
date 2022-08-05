import { limitRange } from '../../helpers'

export const desliceVertical = (element, { positionName, range }) => {
	const elementProperties = element.getBoundingClientRect()
	let initialPosition = Number(element.getAttribute('data-initialPosition'))
	let position = elementProperties[positionName]
	range ??= elementProperties.height * -1

	if (positionName === 'bottom') {
		const { innerHeight } = window
		position = innerHeight - position
		initialPosition = innerHeight - initialPosition
	}

	const scrollYBefore = Number(element.getAttribute('data-scrollY'))
	const { scrollY } = window

	const displacementY = scrollYBefore - scrollY
	position += displacementY

	position = limitRange(position, [initialPosition, initialPosition + range])

	element.style[positionName] = position + 'px'
	element.setAttribute('data-scrollY', scrollY)
}
