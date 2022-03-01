import { useGetMovie } from "../../api/hooks";
import { useAtomValue } from 'jotai';
import { movieParamsAtom, searchWordAtom } from "../Movie.store";

export function MovieList () {
  const movieParams = useAtomValue(movieParamsAtom)

  const {
    movieList,
  } = useGetMovie(movieParams);

  if(movieList === undefined || movieList.items.length === 0) {
    return (
      <p>
        검색 결과가 없습니다.
      </p>
    )
  }

  return (
    <div>
      <p>{`totalcount: ${movieList.total}`}</p>
      <article>
        <ul>
          {movieList.items.map((movie, i) => (
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
    </div>
  )
}