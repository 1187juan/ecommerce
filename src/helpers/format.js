import { repeatString } from './repeatString'

const transformNumberToString = value =>
	typeof value === 'number' ? value.toString() : value

export const formatPhoneNumber = value => {
	value = transformNumberToString(value)
	const numbers = value?.match(/\d+/g)?.join('').slice(0, 10) ?? ''

	if (numbers.length === 10)
		return numbers.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3')

	return numbers.replace(/(\d{3})/g, '$1 ').trim()
}

export const formatPostalCode = (value, { autocomplete = false } = {}) => {
	value = transformNumberToString(value)
	let numbers = value?.match(/\d+/g)?.join('')?.slice(0, 5) ?? ''
	if (autocomplete) {
		const cuantity = 5 - numbers.length
		numbers = repeatString(cuantity, '0') + numbers
	}
	return numbers
}

export const formatNumber = (value, { maxLength = null } = {}) => {
	value = transformNumberToString(value)

	let numbers = value?.match(/\d+/g)?.join('') ?? ''
	if (maxLength) {
		numbers = numbers.slice(0, maxLength)
	}

	return numbers ? parseInt(numbers) : null
}

export const formatCardNumber = (value, { autocomplete = false } = {}) => {
	value = transformNumberToString(value)
	let numbers = value?.match(/\d+/g)?.join('').slice(0, 16) ?? ''

	if (autocomplete) {
		const cuantity = 16 - numbers.length
		numbers += repeatString(cuantity)
	}

	return numbers.replace(/([\d•]{4})/g, '$1 ').trim()
}

export const formatCardExpiredDate = (value, { autocomplete = false } = {}) => {
	value = transformNumberToString(value)
	const numbers = value?.match(/\d+/g)?.join('')?.slice(0, 4) ?? ''
	const hasDiagonal = !!value?.includes('/')
	const month = numbers.slice(0, 2)
	const year = numbers.slice(2, 4)

	if (autocomplete) {
		const digits = {
			month: { 0: 'MM', 1: 'M', 2: '' },
			year: { 0: 'AA', 1: 'A', 2: '' },
		}
		return (
			month + digits.month[month.length] + '/' + year + digits.year[year.length]
		)
	}

	console.log(year)

	const diagonal =
		year || (month.length === 2 && !hasDiagonal && !year) ? '/' : ''

	return month + diagonal + year
}

export const formatCCV = (value, { autocomplete = false } = {}) => {
	value = transformNumberToString(value)
	let numbers = value?.match(/\d+/g)?.join('').slice(0, 3) ?? ''

	if (autocomplete) {
		const cuantity = 3 - numbers.length
		numbers += repeatString(cuantity)
	}

	return numbers
}

export const formatSpaceByWord = (
	value,
	{ canAcceptNumbers = false, maxLegth = 100 } = {}
) => {
	let words = value?.replace(/\s+/g, ' ') ?? ''
	if (!canAcceptNumbers) {
		words = words.replace(/\d/g, '')
	}
	return words.slice(0, maxLegth)
}
