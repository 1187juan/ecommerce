import states from '../data/states.json'
import { formatPostalCode } from './format'
import { validatePostalCode } from './validate'

export const getInfoPostalCode = async postalCode => {
	if (!validatePostalCode(postalCode))
		throw new Error('No es un código postal válido.')

	const state = states.find(
		({ postalCodesRange }) =>
			postalCode >= postalCodesRange[0] && postalCode <= postalCodesRange[1]
	)

	if (!state) throw new Error('No es un código postal válido.')

	const postalCodes = await import(`../data/pcsByState/${state.id}.json`)

	const infoPostalCode = postalCodes.default.filter(
		codes => formatPostalCode(codes.d_codigo) === postalCode.toString()
	)

	if (!infoPostalCode.length) throw new Error('No es un código postal válido.')

	return infoPostalCode
}
