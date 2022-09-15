export const validatePostalCode = value => {
	const regEx = /^\d{5}$/
	return regEx.test(value)
}
export const validatePhoneNumber = value => {
	const regEx = /^\d{10}$/
	return regEx.test(value)
}

export const validateNanoId = value => {
	const regEx = /^[A-Za-z0-9_-]{21}$/
	return regEx.test(value)
}

export const validateCardNumber = value => {
	const regEx = /^\d{16}$/
	return regEx.test(value)
}
export const validateCardExpirationDate = value => {
	const regEx = /^((0[1-9]|10|11|12)\/([1-2][0-9]))$/
	return regEx.test(value)
}
export const validateCardCCV = value => {
	const regEx = /^\d{3}$/
	return regEx.test(value)
}
