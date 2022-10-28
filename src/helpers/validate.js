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
export const validateEmail = value => {
	const regEx =
		/^(([^<>()[\]\\.,:\s@"]+(\.[^<>()[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return regEx.test(value)
}

export const validateProductId = value => {
	const regEx = /^\d{5}$/
	return regEx.test(value)
}

export const validateCreditCard = creditCard => {
	return (
		validateCardNumber(creditCard.number) &&
		validateCardExpirationDate(creditCard.expirationDate) &&
		validateCardCCV(creditCard.ccv)
	)
}
