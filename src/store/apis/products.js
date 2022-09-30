import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import {
	collection,
	doc,
	getDoc,
	getDocs,
	limit,
	orderBy,
	query,
	startAfter,
} from 'firebase/firestore'
import { db } from '../../firebase'

export const productsApi = createApi({
	reducerPath: 'productsApi',
	baseQuery: fakeBaseQuery(),
	endpoints: builder => ({
		getProducts: builder.query({
			async queryFn(page) {
				try {
					let productsData = JSON.parse(localStorage.getItem('productsData'))

					if (!productsData) {
						const productsDataRef = doc(db, 'products', 'data')
						const resProductsData = await getDoc(productsDataRef)
						productsData = resProductsData.data()
						localStorage.setItem('productsData', JSON.stringify(productsData))
					}

					const ids = productsData.ids.sort((a, b) => a - b)
					const totalProducts = productsData.ids.length
					const pageSize = 21
					const totalPages = Math.ceil(totalProducts / pageSize)
					const nextPage = page < totalPages ? page + 1 : null
					const previousPage = page > 1 ? page - 1 : null
					const indexLastId = page * pageSize
					const indexFirstId = indexLastId - pageSize

					if (!(page <= totalPages)) {
						return { error: 'Página no disponible.' }
					}

					const productsRef = collection(db, 'products/data/items')
					const q = query(
						productsRef,
						orderBy('id', 'asc'),
						limit(pageSize),
						startAfter(ids[indexFirstId])
					)
					const res = await getDocs(q)
					const products = []
					res.forEach(item => products.push(item.data()))

					return {
						data: {
							nextPage,
							page,
							previousPage,
							results: products,
							totalPages,
							totalProducts,
						},
					}
				} catch ({ message }) {
					return { error: message }
				}
			},
		}),
	}),
})

export const { useGetProductsQuery } = productsApi
