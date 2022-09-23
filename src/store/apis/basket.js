import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'

export const basketApi = createApi({
	reducerPath: 'basketApi',
	baseQuery: fakeBaseQuery(),
	tagTypes: ['basket'],
	endpoints: builder => ({
		getBasket: builder.query({
			async queryFn() {},
		}),
	}),
})

export const { useGetBasketQuery } = basketApi
