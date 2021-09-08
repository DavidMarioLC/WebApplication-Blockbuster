import movies from "./movies.js";
import renderMoviesList from "./render.js";

const search = window["search-form"];

const filterByTitle = (title) =>
  movies.filter((movie) =>
    movie.title.toLowerCase().includes(title.toLowerCase())
  );

const findById = (id) => movies.find((movie) => movie.id === parseInt(id, 10));

const searchMovie = (query) => {
  if (isNaN(query)) {
    return filterByTitle(query);
  }

  if (query === "") {
    return movies;
  }

  return [findById(query)];
};

search.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  const query = formData.get("title");
  const movies = searchMovie(query);

  renderMoviesList(movies);
});
