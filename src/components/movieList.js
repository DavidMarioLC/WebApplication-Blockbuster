import { Component, createElement } from "../lib/react/index.js";
import styled from "../lib/styled-components.js";
import Wrapper from "./wrapper.js";
import Movie from "./movie.js";
import store from "../store.js";
import API from "../api.js";
import { addMovies } from "../actions/index.js";

const MovieListStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content: center;
  box-sizing: border-box;
  gap: 1em;
`;

class MovieList extends Component {
  state = {
    page: 1,
  };

  getPage = async (page) => {
    const { results } = await API.moviePage(page);
    store.dispatch(addMovies(results));
  };

  handlerInterception = ([entries]) => {
    if (entries.isIntersecting) {
      console.log("traer pagina new");
      this.getPage(this.state.page);
      this.setSate({
        page: this.state.page + 1,
      });
    }
  };

  componentDidMount() {
    store.subscribe(() => {
      this.setSate();
    });

    const observer = new IntersectionObserver(
      this.handlerInterception
      // options
    );

    observer.observe(window.intersector);
  }

  render() {
    const state = store.getState();
    const movieListId = state.list[state.filter];
    const movieList = state.movieList;

    return Wrapper({
      children: MovieListStyled({
        children: movieListId.map((id) => new Movie(movieList.get(id))),
      }),
    });
  }
}

export default MovieList;
