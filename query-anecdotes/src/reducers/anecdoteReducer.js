import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = '/api';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl}),
    tagTypes: ['Anecdotes'],
    endpoints: builder => ({
        getAll: builder.query({
            query: () => '/anecdotes'
        })
    })
});

export const {
    useGetAllQuery
} = apiSlice;