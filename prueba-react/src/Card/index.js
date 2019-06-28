
import React from "react";
import "./style.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card-container">
        <img src={this.props.img} />
        <h5>{this.props.title}</h5>
        <p>{this.props.desc}</p>
      </div>
    );
  }
}

export default Card;