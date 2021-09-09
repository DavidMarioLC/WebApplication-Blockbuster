function movieListAsMap(newlist, oldList = new Map()) {
  return newlist.reduce((accumulator, movie) => {
    return accumulator.set(movie.id, movie);
  }, oldList);
}

function getAllIds(list, oldList = []) {
  return oldList.concat(list.map((movie) => movie.id));
}

const accumulatorPopular = (accumulator, movie) => {
  if (movie.vote_average > 7) {
    accumulator = [...accumulator, movie.id];
  }

  return accumulator;
};

function getMostValuedIds(list, oldList = []) {
  return list.reduce(accumulatorPopular, oldList);
}

const accumulatorNotPopular = (accumulator, movie) => {
  if (movie.vote_average < 7) {
    accumulator = [...accumulator, movie.id];
  }
  return accumulator;
};

function getLeastValuedIds(list, oldList = []) {
  return list.reduce(accumulatorNotPopular, oldList);
}

export { movieListAsMap, getAllIds, getMostValuedIds, getLeastValuedIds };
