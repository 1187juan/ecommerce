export const removeDiacritics = value =>
	value.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
