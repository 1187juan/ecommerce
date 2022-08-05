export const getMatchInitialPosition = element => {
	const initialPosition = Number(element.getAttribute('data-initialPosition'))
	const { scrollY } = window

	return scrollY === initialPosition
}
