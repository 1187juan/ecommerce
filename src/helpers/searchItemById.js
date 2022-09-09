export const searchItemById = (id, items) => {
	return items?.find(item => item.id === id) ?? null
}
