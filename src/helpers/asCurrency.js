export const asCurrency = (number, { currency = 'MXN' } = {}) =>
	new Intl.NumberFormat('es-MX', { style: 'currency', currency }).format(number)
