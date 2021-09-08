import { createStore } from "./redux/index.js";
import { reducer } from "./reducers/index.js";
import movies from "./movies.js";
import {
  getAllIds,
  movieListAsMap,
  getMostValuedIds,
  getLeastValuedIds,
} from "./normalize.js";

let initialState = {
  movieList: movieListAsMap(movies),
  filter: "all",
  list: {
    all: getAllIds(movies),
    mostValued: getMostValuedIds(movies),
    leastValued: getLeastValuedIds(movies),
  },
};

const store = createStore(initialState, reducer);

export default store;
