import { Component, createElement } from "../lib/react/index.js";
import styled from "../lib/styled-components.js";
import Header from "./header.js";
import Actions from "./acciones.js";
import Search from "./search.js";
import Filters from "./filters.js";
import MovieList from "./movieList.js";

const AppStyled = styled.div``;

class App extends Component {
  render() {
    return AppStyled({
      children: [
        new Header(),
        new Actions({
          children: [new Search(), new Filters()],
        }),
        new MovieList(),
      ],
    });
  }
}

export default App;
