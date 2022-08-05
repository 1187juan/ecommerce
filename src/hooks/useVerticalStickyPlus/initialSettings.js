export const initialSettings = (element, { positionName }) => {
	const elementProperties = element.getBoundingClientRect()
	const { scrollY } = window

	element.setAttribute('data-initialPosition', elementProperties[positionName])
	element.setAttribute('data-scrollY', scrollY)
}
