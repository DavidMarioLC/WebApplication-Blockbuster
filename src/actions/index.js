import * as actions from "../actionTypes/index.js";

export const clickAdd = (value) => ({
  type: actions.BURN,
  payload: {
    value,
  },
});

export const discountCalories = (value) => ({
  type: actions.DESCOUNT,
  payload: {
    value,
  },
});

export const addMovies = (value) => ({
  type: actions.ADD_MOVIES,
  payload: {
    value,
  },
});

export const setFilter = (value) => ({
  type: actions.SET_FILTER,
  payload: {
    value,
  },
});

export const searchMovie = (value) => ({
  type: actions.SEARCH_MOVIE,
  payload: {
    value,
  },
});
