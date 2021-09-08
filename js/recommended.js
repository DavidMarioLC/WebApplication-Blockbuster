import movies from "./movies.js";
import renderMoviesList from "./render.js";

const $button = window.recommended;
$button.addEventListener("click", () => {
  renderMoviesList(setRecommendMovies(movies));
});

function setRecommendMovies(movies) {
  return movies.map((movie) => ({
    ...movie,
    recommended: movie.vote_average >= 7,
  }));
}
