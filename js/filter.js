import { renderMovieListFromMap } from "./render.js";
import {
  movieList,
  allMovies,
  moviesPopular,
  moviesNotPopular,
} from "./normalize.js";

filter.addEventListener("change", function () {
  switch (this.value) {
    case "most-valued":
      return renderMovieListFromMap(moviesPopular, movieList);

    case "least-valued":
      return renderMovieListFromMap(moviesNotPopular, movieList);

    default:
      return renderMovieListFromMap(allMovies, movieList);
  }
});
