import { Suspense } from "react";
import { Loading } from "../components/Loading";
import { MovieList } from "./components/MovieList";
import { SearchInput } from "./components/SearchInput";

import { store } from './rootStore';
import { Provider } from 'react-redux';
import './Movie.css'

export function Movie() {
  return (
    <div className="movie">
      <p>Redux</p>
      <h2>
        영화 검색
      </h2>
      <Provider store={store}>
        <SearchInput />
        <Suspense fallback={<Loading/>}>
          <MovieList />
        </Suspense>
      </Provider>
    </div>
  )
}