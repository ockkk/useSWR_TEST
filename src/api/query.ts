import { BaseQueryFn, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios, { AxiosRequestConfig, AxiosError } from 'axios'
import { MovieList, MovieParams } from './getMovieList';

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' }
  ): BaseQueryFn<
    {
      url: string
      method: AxiosRequestConfig['method']
      data?: AxiosRequestConfig['data']
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data }) => {
    try {
      const result = await axios({ 
        url: baseUrl + url, 
        method, 
        data, 
        headers: {
        'X-Naver-Client-Id': clientId,
        'X-Naver-Client-Secret': clientSecret
        } 
      })

      return { data: result.data }
    } catch (axiosError) {
      let err = axiosError as AxiosError
      return {
        error: { status: err.response?.status, data: err.response?.data },
      }
    }
  }

const clientId = import.meta.env.VITE_NAVER_CLIENT_ID as string;
const clientSecret = import.meta.env.VITE_NAVER_CLIENT_SECRET as string;
  
export const getMovieApi = createApi({
  reducerPath: 'getMovieApi',
  baseQuery: axiosBaseQuery({ 
    baseUrl: 'http://localhost:3000',
  }),
  endpoints: (builder) => ({
    getMovieList: builder.query<MovieList, MovieParams>({
      query: (params) => {
        const {
          query,
          display,
          yearfrom,
          yearto,
        } = params;

        const url = `/v1/search/movie?query=${query}&display=${display}&yearfrom=${yearfrom}&yearto=${yearto}
        `
        return {
          url,
          method: 'get'
        }
      },
    })
  })
})

export const { useGetMovieListQuery } = getMovieApi;