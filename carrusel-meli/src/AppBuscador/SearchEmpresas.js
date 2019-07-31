import React from "react";






class SearchEmpresas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }


  handleChange(e) {
    this.props.handleCallback(e.target.value)
  }


  render() {

    return (
      <div>
        <input placeholder="buscador" value={this.state.value} type="text" onChange={(e) => this.handleChange(e)} />
        <button>Buscar</button>
      </div>

    );
  }
}

export default SearchEmpresas;