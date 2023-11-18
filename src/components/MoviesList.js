import { useState } from "react";
import { Movies } from "./Movies";

export function MoviesList({ tempMovieData }) {
  const [movies, setMovies] = useState(tempMovieData);
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movies movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
