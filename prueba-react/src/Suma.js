import React, { Component } from 'react';


class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      input1: '',
      input2: '',
      resultado: ''
    }
  }


  // handleChange(e) {
  //   this.setState({
  //     input1: e.target.value,
  //   })
  //   console.log(this.state.input1)
  // }


  // handleChangeTwo(e) {
  //   this.setState({
  //     input2: e.target.value
  //   })
  //   console.log(this.state.input2)
  // }

  handleChange(e) {
    const name = e.target.name
    const value = e.target.value

    this.setState ({
      [name]: value
    })

  }

  handleClick() {

    const resultado = parseInt(this.state.input1) + parseInt(this.state.input2)
    this.setState({
      resultado: resultado
    })
  }



  render() {
    return (
      <div>
        {/* <input onChange={(e) => this.handleChange(e)} type="number" />
        <input onChange={(e) => this.handleChangeTwo(e)} type="number" /> */}

        <input name="input1" onChange={(e) => this.handleChange(e)} type="number" />
        <input name="input2" onChange={(e) => this.handleChange(e)} type="number" />

        <button onClick={(e) => this.handleClick(e)}>Sumar</button>
        <p>Resultado : {this.state.resultado}</p>
      </div>
    )
  }

}

export default Header;
