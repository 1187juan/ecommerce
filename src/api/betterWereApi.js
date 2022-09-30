import axios from 'axios'

export const betterWereApi = axios.create({
	baseURL: 'https://www.betterware.com.mx/mx/es',
	params: {
		t: +new Date(),
	},
})
