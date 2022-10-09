import { timeout } from './timeout'

export const retry = async (promise, { delay = 1500, maxRetries = 3 } = {}) => {
	let currentTry = 1
	do {
		try {
			return await promise()
		} catch (error) {
			if (currentTry === maxRetries) throw error
			await timeout(delay)
		}
		currentTry++
	} while (currentTry <= maxRetries)
}
