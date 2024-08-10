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
        }),
        incrementVote: builder.mutation({
            query: (item) => ({
                url: `/anecdotes/${item.id}`,
                method: 'PUT',
                body: {
                    id: item.id,
                    content: item.content,
                    votes: item.votes + 1
                }
            }),
            invalidatesTags: ['Anecdotes']
        })
    })
});

export const {
    useGetAllQuery,
    useAddNewMutation,
    useIncrementVoteMutation
} = apiSlice;