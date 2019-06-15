import React, { Component } from 'react';
//import Search from './Search'
import './Header.css'

class Header extends Component {
  // handleClick() {
  //   console.log('click')
  // }

  // handleChange(e) {
  //   let name = e.target.name
  //   let valor = e.target.value;
  //   console.log(name, valor)
  // }

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     value: 'magia'

  //   }
  // }

  // handleChange(e) {
  //   this.setState({
  //     value: e.target.value
  //   });
  // }

  constructor(props) {
    super(props)
    this.state = {
      active: false

    }
  }

 

  handleClick() {
    // console.log(123)
    const currentState = this.state.active
    console.log(currentState)
    this.setState({
      active: !currentState
    })
  }

  render() {
    // const name = "courseIT"
    let pClass = ''
    if (this.state.active) {
      pClass = 'blue'
    }
    return (
      <div>
        {/* <div className="red">Hola {name}</div>
        <button onClick={() => this.handleClick()}>Click me</button> */}
        {/* <input type="text" name="apellido" onChange={e => this.handleChange(e)} /> */}
        {/* <Search /> */}

        {/* <input type="text" name="nombre" value={this.state.value} onChange={e => this.handleChange(e)} />

        <p>{this.state.value}</p> */}


        <p className={pClass}>Hola courseIT</p>
        <button onClick={() => this.handleClick()}>cambiar</button>
      </div>
    )
  }

}

export default Header;
