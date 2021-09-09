import * as actions from "../actionTypes/index.js";
import {
  getAllIds,
  getLeastValuedIds,
  getMostValuedIds,
  movieListAsMap,
} from "../normalize.js";

const filterByTitle = (title, movies) => {
  const list = [];

  movies.forEach((movie) => {
    if (movie.title.toLowerCase().includes(title.toLowerCase())) {
      list.push(movie.id);
    }
  });

  return list;
};

const findById = (id, allIds) => {
  const parseId = parseInt(id, 10);

  if (allIds.includes(parseId)) {
    return [parseId];
  }

  return allIds;
  // movies.find((movie) => movie.id === parseId);
};

const searchMovie = (query, list, allIds) => {
  if (isNaN(query)) {
    return filterByTitle(query, list);
  }

  // if (query === "") {
  //   return movies;
  // }

  return findById(query, allIds);
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_MOVIES:
      return {
        ...state,
        movieList: movieListAsMap(action.payload.value, state.movieList),
        list: {
          ...state.list,
          all: getAllIds(action.payload.value, state.list.all),
          leastValued: getLeastValuedIds(
            action.payload.value,
            state.list.leastValued
          ),
          mostValued: getMostValuedIds(
            action.payload.value,
            state.list.mostValued
          ),
        },
      };

    case actions.SET_FILTER:
      return {
        ...state,
        filter: action.payload.value,
      };

    case actions.SEARCH_MOVIE:
      return {
        ...state,
        filter: "search",
        list: {
          ...state.list,
          search: searchMovie(
            action.payload.value,
            state.movieList,
            state.list.all
          ),
        },
      };

    default:
      return state;
  }
};

export { reducer };
