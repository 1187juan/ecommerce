export const limitRange = (value, [num1, num2]) => {
	const rangeTop = num1 > num2 ? num1 : num2
	const rangeBottom = rangeTop === num1 ? num2 : num1

	if (value > rangeTop) return rangeTop
	if (value < rangeBottom) return rangeBottom

	return value
}
