import axios  from "axios";

export interface MovieParams {
  query: string;
  display: number;
  start?: string;
  genere?: string;
  country?: string;
  yearfrom?: number;
  yearto?: number;
}

export interface Movie {
  title: string;
  link: string;
  image: string;
  subtitle: string;
  pubDate: string;
  director: string;
  actor: string;
  userRating: string;
}

export interface MovieList {
  display: number;
  items: Movie[];
  lastBuildDate: string;
  start: number;
  total: number;
}

export function getMovie(_: string, params: MovieParams): Promise<MovieList | undefined> {
  const url = '/v1/search/movie';

  return axios.get<MovieList>(url, { 
    params,
    headers: {
      'X-Naver-Client-Id':'1_H8pQJZpH953pVNnhAf', 
      'X-Naver-Client-Secret': 'f0e7sYyLb3'
    }
   }).then(response => response.data).catch(error => undefined);
}
