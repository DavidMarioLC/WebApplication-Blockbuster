import { Component, createElement } from "../lib/react/index.js";
import Select from "./select.js";

{
  /* <select name="" id="filter">
  <option value="all">Todas</option>
  <option value="most-valued">Más valoradas</option>
  <option value="least-valued">Menos valoradas</option>
</select>; */
}

class Filters extends Component {
  render() {
    return Select({
      children: [
        createElement("option", { value: "all" }, "Todas"),
        createElement("option", { value: "mostValued" }, "Más valoradas"),
        createElement("option", { value: "leastValued" }, "Menos valoradas"),
      ],
    });
  }
}

export default Filters;
