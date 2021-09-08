function renderElement(movie) {
  const element = buildElement(movie);

  window.container.innerHTML += element;
}

function buildElement({ title, poster_path, vote_average, id, recommended }) {
  const template = `
  <article class="movie ${recommended ? "recommended" : ""}">
  <img
    class="movie-poster"
    src="//image.tmdb.org/t/p/w220_and_h330_face/${poster_path}"
    alt="${title}"
    title="${title}"
  />
  <p class="movie-title">${title}</p>
  <p class="movie-id">${id}</p>
  <span class="movie-rate">${vote_average}</span>
</article>
  `;

  return template;
}

function cleanHtml() {
  window.container.innerHTML = "";
}

export function renderMovieListFromMap(list, map) {
  cleanHtml();
  list.forEach((movieId) => renderElement(map.get(movieId)));
}

/**
 * @param {title, poster_path, vote_average, id} movies
 */

function renderMoviesList(movies) {
  cleanHtml();
  movies.forEach(renderElement);
}

export default renderMoviesList;
