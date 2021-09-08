class Component {
  constructor(props = {}, state = {}) {
    this.props = props;
    this.state = state;
  }

  update() {}

  #updater() {
    this.update(this.render());
    this.componentDidUpdate();
  }

  setSate(newState) {
    this.state = {
      ...this.state,
      ...newState,
    };

    this.#updater();
  }

  componentWillMount() {}

  componentDidMount() {}

  componentDidUpdate() {}

  build() {
    this.componentWillMount();
    return this.render();
  }
}

export { Component };
