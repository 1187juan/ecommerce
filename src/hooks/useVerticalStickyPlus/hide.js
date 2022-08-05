export const hide = (element, { positionName, range }) => {
	const elementProperties = element.getBoundingClientRect()
	let initialPosition = Number(element.getAttribute('data-initialPosition'))
	let position = elementProperties[positionName]
	range ??= elementProperties.height * -1

	if (positionName === 'bottom') {
		const { innerHeight } = window
		initialPosition = innerHeight - initialPosition
		position = innerHeight - position
	}

	const limitCenter = initialPosition + range / 2
	const center = initialPosition < limitCenter ? initialPosition : limitCenter

	const isHide = position < center

	element.style.transition = positionName + ' 100ms ease'

	isHide
		? (element.style[positionName] = initialPosition + range + 'px')
		: (element.style[positionName] = initialPosition + 'px')
}

export const hideReset = element => (element.style.transition = '')
