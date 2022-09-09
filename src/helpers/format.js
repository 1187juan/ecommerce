export const formatCardNumber = value => {
	return value
		.replace(/\s/g, '')
		.replace(/\D/g, '')
		.slice(0, 16)
		.replace(/([0-9]{4})/g, '$1 ')
		.trim()
}

export const formatPhoneNumber = value => {
	typeof value === 'number' && (value = value.toString())

	const numbers = value?.match(/\d+/g)?.join('').slice(0, 10) ?? ''

	if (numbers.length === 10)
		return numbers.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3')

	return numbers.replace(/(\d{3})/g, '$1 ').trim()
}

export const formatPostalCode = (value = '') => {
	typeof value === 'number' && (value = value.toString())
	const prefixes = ['00000', '0000', '000', '00', '0', '']

	const stringsOfNumbers = value?.match(/\d+/)?.[0].slice(0, 5) ?? ''
	const prefixNumber = prefixes[stringsOfNumbers.length]

	return prefixNumber + stringsOfNumbers
}

export const formatNumber = value => {
	typeof value === 'number' && (value = value.toString())

	return value?.match(/\d+/g)?.join('') ?? ''
}
