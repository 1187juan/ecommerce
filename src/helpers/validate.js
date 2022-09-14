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
