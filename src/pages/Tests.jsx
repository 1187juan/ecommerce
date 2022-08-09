import products from '../data/products.json'
export const Tests = () => {
	const newBasket = products.slice(0, 20).map(({ id }) => {
		const cuantity = parseInt(Math.random() * 4 + 1)

		return { id, cuantity }
	})
	console.log(newBasket)
	return <div>Tests</div>
}
