import states from '../data/states.json'
import { formatPostalCode } from './format'
import { validatePostalCode } from './validate'

const transformPostalCodeData = items => {
	const data = items.map(item => ({
		state: item.d_estado,
		municipalityOrTownHall: item.D_mnpio,
		cologne: item.d_asenta,
	}))

	return data
}

export const getPostalCodeData = async postalCode => {
	if (!validatePostalCode(postalCode))
		throw new Error('No es un código postal válido.')

	const state = states.find(
		({ postalCodesRange }) =>
			postalCode >= postalCodesRange[0] && postalCode <= postalCodesRange[1]
	)

	if (!state) throw new Error('No es un código postal válido.')

	const postalCodes = await import(`../data/pcsByState/${state.id}.json`)

	const postalCodeData = postalCodes.default.filter(
		codes =>
			formatPostalCode(codes.d_codigo, { autocomplete: true }) === postalCode
	)

	if (!postalCodeData.length) throw new Error('No es un código postal válido.')

	return transformPostalCodeData(postalCodeData)
}
