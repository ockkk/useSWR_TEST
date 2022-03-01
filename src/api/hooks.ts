import useSWR from 'swr';
import { getMovie, MovieParams } from './getMovieList';
import { swrKeys } from './swrKeys';

export function useGetMovie(params: MovieParams) {
  const {
    data: movieList,
    error,
    mutate: MovieMutate,
  } = useSWR(params.query === '' ? null : [swrKeys.getMovie, params], getMovie, { suspense: true });

  return {
    movieList,
    isLoading: !movieList && !error,
    MovieMutate,
  }
}