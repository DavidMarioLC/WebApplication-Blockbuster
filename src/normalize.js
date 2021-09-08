function movieListAsMap(newlist) {
  return newlist.reduce((accumulator, movie) => {
    return accumulator.set(movie.id, movie);
  }, new Map());
}

function getAllIds(list) {
  return list.map((movie) => movie.id);
}

const accumulatorPopular = (accumulator, movie) => {
  if (movie.vote_average > 7) {
    accumulator = [...accumulator, movie.id];
  }

  return accumulator;
};

function getMostValuedIds(list) {
  return list.reduce(accumulatorPopular, []);
}

const accumulatorNotPopular = (accumulator, movie) => {
  if (movie.vote_average <= 7) {
    accumulator = [...accumulator, movie.id];
  }
  return accumulator;
};

function getLeastValuedIds(list) {
  return list.reduce(accumulatorNotPopular, []);
}

// let popularList = [...rawMoviesList].sort((a, b) =>
//   a.vote_average > b.vote_average ? -1 : 1
// );
// let notPopularList = [...popularList].reverse();

// const moviesPopular =

// console.log(moviesPopular);
// console.log(moviesNotPopular);

// console.log(allMovies);

// console.log(movieList);

export {
  movieListAsMap,
  getAllIds,
  getMostValuedIds,
  getLeastValuedIds,
  // allMovies,
  // moviesPopular,
  // moviesNotPopular
};
