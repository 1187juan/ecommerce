export const deleteProperty = (prop, obj) => {
	const newObj = { ...obj }
	delete newObj[prop]
	return newObj
}
