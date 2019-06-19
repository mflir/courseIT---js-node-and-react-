import React, { Component } from 'react';

import './Header.css'


class HeaderUno extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: "",
      password: "",
      login: null
    };
  }

  handleChange(e) {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  }

  handleClick() {
    const user = "Juani";
    const password = "123";

    if (this.state.usuario === user && this.state.password === password) {
      this.setState({
        login: true
      });
    } else {
      this.setState({
        login: false
      });
    }
  }

  render() {
    return (
      <div>
        <span>Nombre de usuario</span>
        <input
          name="usuario"
          onChange={e => this.handleChange(e)}
          type="text"
        />
        <span>Password</span>
        <input
          name="password"
          type="text"
          onChange={e => this.handleChange(e)}
        />
        <button onClick={() => this.handleClick()}>Log in</button>
        {this.state.login != null && (
          <React.Fragment>
            {this.state.login === true ? (
              <span>Correcto</span>
            ) : (
                <span>Incorrecto</span>
              )}
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default HeaderUno;
