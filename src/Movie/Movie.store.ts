import { atom } from 'jotai';
import { MovieParams } from '../api/getMovieList';

export const searchWordAtom = atom<string>('');

export const movieParamsAtom = atom<MovieParams>({
  query : '',
  display: 10,
  country: undefined,
  genere: undefined,
  start: undefined,
  yearfrom: 1900,
  yearto: 2022,
})
