import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = '/api';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl}),
    tagTypes: ['Anecdotes'],
    endpoints: builder => ({
        getAll: builder.query({
            query: () => '/anecdotes',
            providesTags: ['Anecdotes']
        }),
        addNew: builder.mutation({
            query: (content) => ({
                url: '/anecdotes',
                method: 'POST',
                body: {
                    content,
                    votes: 0
                }
            }),
            invalidatesTags: ['Anecdotes']
        })
    })
});

export const {
    useGetAllQuery,
    useAddNewMutation
} = apiSlice;