export const transformToNumber = value => {
	typeof value === 'number' && (value = value.toString())

	const stringOfNumbers = value?.match(/\d+/g)?.join('') ?? ''
	const numbers = stringOfNumbers ? parseInt(stringOfNumbers) : null

	return numbers
}
