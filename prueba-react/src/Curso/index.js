
import React from "react";
import "./style.css";

class Curso extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="curso-container">
        <div className="container-color" style={{ backgroundColor: this.props.color }}>
          <h2 className="titulo-curso"> {this.props.title}</h2>
        </div>
        <h5>{this.props.estadocurso}</h5>
        <p>{this.props.desc}</p>
      </div>
    );
  }
}

export default Curso;