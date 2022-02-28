import { Suspense } from "react";
import { Loading } from "../components/Loading";
import { MovieList } from "./components/MovieList";
import { SearchInput } from "./components/SearchInput";
import './Movie.css'

export function Movie() {
  return (
    <div className="movie">
      <h2>
        영화 검색
      </h2>
      <SearchInput />
      <Suspense fallback={<Loading/>}>
        <MovieList />
      </Suspense>
    </div>
  )
}