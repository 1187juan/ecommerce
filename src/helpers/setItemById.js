export const setItemById = (newItem, items) => {
	const newItems = [...items]
	return newItems.filter(item => item.id !== newItem.id).concat(newItem)
}
