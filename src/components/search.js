import { Component, createElement } from "../lib/react/index.js";
import styled from "../lib/styled-components.js";
import Form from "./form.js";
import Input from "./input.js";
import Button from "./button.js";

// <section class="wrapper">
// <div class="actions">
//
//   <button id="recommended">Películas recomendadas</button>
//
// </div>
// </section>

class Search extends Component {
  render() {
    return new Form({
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
