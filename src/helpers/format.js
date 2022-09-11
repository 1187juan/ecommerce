const transformNumberToString = value =>
	typeof value === 'number' ? value.toString() : value

const repeatString = (cuantity, value = '•') =>
	Array(cuantity).fill(value).join('')

export const formatPhoneNumber = value => {
	value = transformNumberToString(value)
	const numbers = value?.match(/\d+/g)?.join('').slice(0, 10) ?? ''

	if (numbers.length === 10)
		return numbers.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3')

	return numbers.replace(/(\d{3})/g, '$1 ').trim()
}

export const formatPostalCode = (value = '') => {
	value = transformNumberToString(value)
	const prefixes = ['00000', '0000', '000', '00', '0', '']
	const stringsOfNumbers = value?.match(/\d+/)?.[0].slice(0, 5) ?? ''
	const prefixNumber = prefixes[stringsOfNumbers.length]

	return prefixNumber + stringsOfNumbers
}

export const formatNumber = value => {
	value = transformNumberToString(value)

	return value?.match(/\d+/g)?.join('') ?? ''
}

export const formatCardNumber = (value, { autocomplete = false } = {}) => {
	value = transformNumberToString(value)
	let numbers = value?.match(/\d+/g)?.join('').slice(0, 16) ?? ''

	if (autocomplete) {
		const missingNumbers = 16 - numbers.length
		numbers += repeatString(missingNumbers)
	}

	return numbers.replace(/([\d•]{4})/g, '$1 ').trim()
}

export const formatCardExpiredDate = (value, { autocomplete = false } = {}) => {
	value = transformNumberToString(value)
	let numbers = value?.match(/\d+/g)?.join('').slice(0, 4) ?? ''
	if (autocomplete) {
		const missingNumbers = 4 - numbers.length
		numbers += repeatString(missingNumbers)
	}

	return numbers.replace(/([\d•]{2})/g, '$1/').slice(0, 5)
}
export const formatCCV = (value, { autocomplete = false } = {}) => {
	value = transformNumberToString(value)
	let numbers = value?.match(/\d+/g)?.join('').slice(0, 3) ?? ''

	if (autocomplete) {
		const missingNumbers = 3 - numbers.length
		numbers += repeatString(missingNumbers)
	}

	return numbers
}
