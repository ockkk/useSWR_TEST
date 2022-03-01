import { useGetMovie } from "../../api/hooks";
import useSelectorTyped from "../hooks";

export function MovieList () {
  const movie = useSelectorTyped((state) => state.movie);

  const {
    movieList,
  } = useGetMovie(movie);

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