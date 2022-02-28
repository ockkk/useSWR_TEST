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

const clientId = import.meta.env.VITE_NAVER_CLIENT_ID as string;
const clientSecret = import.meta.env.VITE_NAVER_CLIENT_SECRET as string;

export function getMovie(url: string, params: MovieParams): Promise<MovieList | undefined> {
  return axios.get<MovieList>(url, { 
    params,
    headers: {
      'X-Naver-Client-Id': clientId,
      'X-Naver-Client-Secret': clientSecret
    }
   }).then(response => response.data).catch(error => undefined);
}
