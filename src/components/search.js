import { Component, createElement } from "../lib/react/index.js";
import Form from "./form.js";
import Input from "./input.js";
import Button from "./button.js";
import store from "../store.js";
import { searchMovie, setFilter } from "../actions/index.js";

class Search extends Component {
  handlerSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const query = formData.get("title");

    if (query) {
      return store.dispatch(searchMovie(query));
    }

    return store.dispatch(setFilter("all"));
  };
  render() {
    return new Form({
      onSubmit: this.handlerSubmit,
      children: [
        new Input({
          placeholder: "Escribe tu pelicula favorita",
          name: "title",
          type: "text",
        }),
        new Button(null, "Buscar"),
      ],
    });
  }
}

export default Search;
