import { createElement } from "./react/index.js";

const styled = {};
const elements = [
  "button",
  "select",
  "form",
  "input",
  "h1",
  "p",
  "div",
  "img",
  "article",
  "footer",
  "header",
  "section",
];

function buildStyles(strings, dynamicValues, props) {
  let style = strings.slice();
  dynamicValues.forEach((value, index) => {
    style[index] += value(props);
  });

  return style.join("");
}

elements.forEach((tag) => {
  styled[tag] = function (strings, ...dynamicValues) {
    return function (props, content) {
      const styles = buildStyles(strings, dynamicValues, props);
      return createElement(
        tag,
        {
          ...props,
          style: styles,
        },
        content
      );
    };
  };
});

export default styled;
