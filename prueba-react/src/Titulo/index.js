import React from "react";

class Titulo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h3>{this.props.text}</h3>;
  }
}

export default Titulo;