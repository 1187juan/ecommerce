import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import {
	collection,
	getDocs,
	limit,
	orderBy,
	query,
	startAfter,
} from 'firebase/firestore'
import { db } from '../../firebase'
import {
	getProductDetails,
	getProductsById,
	getProductsData,
	returnDocs,
} from '../../helpers'

export const productsApi = createApi({
	reducerPath: 'productsApi',
	baseQuery: fakeBaseQuery(),
	tagTypes: ['products'],
	endpoints: builder => ({
		getProducts: builder.query({
			async queryFn(page) {
				try {
					const productsData = await getProductsData()

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
					const productsRes = await getDocs(q)
					const products = returnDocs(productsRes)

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
		getProduct: builder.query({
			async queryFn(productId) {
				try {
					const product = await getProductDetails(productId)
					return { data: product }
				} catch ({ message }) {
					return { error: message }
				}
			},
		}),
		getProductsRandom: builder.query({
			async queryFn(productId) {
				try {
					const { ids } = await getProductsData()
					const newIds = ids.filter(({ id }) => id !== productId)
					const idsRandom = newIds.sort(() => 0.5 - Math.random()).slice(0, 10)
					const productsRandom = await getProductsById(idsRandom, 'success')

					return { data: productsRandom }
				} catch ({ message }) {
					return { error: message }
				}
			},
		}),
	}),
})

export const {
	useGetProductsQuery,
	useGetProductQuery,
	useGetProductsRandomQuery,
} = productsApi
