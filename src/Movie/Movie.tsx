import { Suspense } from "react";
import { Loading } from "../components/Loading";
import { MovieList } from "./components/MovieList";
import { SearchInput } from "./components/SearchInput";
import './Movie.css'

export function Movie() {
  return (
    <div className="movie">
      <SearchInput />
      <Suspense fallback={<Loading/>}>
        <MovieList />
      </Suspense>
    </div>
  )
}