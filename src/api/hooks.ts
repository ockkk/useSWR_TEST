import useSWR from 'swr';
import { getMovie, GetMovieParams } from './getMovieList';
import { swrKeys } from './swrKeys';

export function useGetMovie(params: GetMovieParams) {
  const {
    data: MovieList,
    error,
    mutate: MovieMutate,
  } = useSWR(params.query === '' ? null : [swrKeys.getMovie, params], getMovie, { suspense: true });

  return {
    MovieList,
    isLoading: !MovieList && !error,
    MovieMutate,
  }
}