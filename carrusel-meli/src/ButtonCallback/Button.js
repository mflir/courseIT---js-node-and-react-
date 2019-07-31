import React from "react";


class Boton extends React.Component {

  handleClick() {
    this.props.handleCallback('Click')
  }


  render() {


    return (
      <div>
        <button onClick={() => this.handleClick()}>{this.props.title}</button>
      </div>

    );
  }
}

export default Boton;
