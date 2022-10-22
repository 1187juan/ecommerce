export const returnDocs = docs => {
	const data = []
	docs.forEach(doc =>
		data.push({
			id: doc.id,
			...doc.data(),
		})
	)

	return data
}
