import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../reducers/anecdoteReducer';

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat([apiSlice.middleware])
});