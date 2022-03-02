import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { getMovieApi } from '../api/query';
import movieReducer from './Movie.store';

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    [getMovieApi.reducerPath]: getMovieApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(getMovieApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch);