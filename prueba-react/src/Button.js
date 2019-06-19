import React, { Component } from 'react';

// import './Button.css'

class Button extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <button>{this.props.text}</button>
    )
  }

}

export default Button;
