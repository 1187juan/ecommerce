const filters = {
	none: (ids, items) => {
		return items.map((item, i) => ({
			status: item.status === 'fulfilled' ? 'success' : 'error',
			message: item.reason,
			data:
				item.status === 'fulfilled'
					? { ...item.value, id: ids[i] }
					: { id: ids[i] },
		}))
	},
	success: (ids, items) => {
		return items
			.filter(({ status }) => status === 'fulfilled')
			.map((item, i) => ({
				...item.value,
				id: ids[i],
			}))
	},
	error: (ids, items) => {
		return items
			.filter(({ status }) => status === 'rejected')
			.map((item, i) => ({
				message: item.reason,
				id: ids[i],
			}))
	},
}

export const filterAllSettled = ({ ids, items, status = 'none' }) => {
	return filters[status](ids, items) ?? []
}
