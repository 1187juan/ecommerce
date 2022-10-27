export const deleteProp = (prop, obj) => {
	const newObj = { ...obj }
	delete newObj[prop]
	return newObj
}
