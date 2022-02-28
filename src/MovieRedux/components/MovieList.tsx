import { useGetMovie } from "../../api/hooks";
import { useAtomValue } from 'jotai';
import { movieParamsAtom, searchWordAtom } from "../Movie.store";

export function MovieList () {
  const movieParams = useAtomValue(movieParamsAtom)

  const {
    MovieList,
  } = useGetMovie(movieParams);

  if(MovieList === undefined || MovieList.items.length === 0) {
    return (
      <p>
        검색 결과가 없습니다.
      </p>
    )
  }

  return (
    <article>
      <ul>
        {MovieList.items.map((movie, i) => (
          <li key={`${movie.title}-${i}`}>
            <img src={movie.image}/>
            <p 
              dangerouslySetInnerHTML={{
              __html: movie.title
              }} 
            />
          </li>
        ))}
      </ul>
    </article>
  )
}