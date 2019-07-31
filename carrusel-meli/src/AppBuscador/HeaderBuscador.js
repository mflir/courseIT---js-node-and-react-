import React from "react";
import SearchEmpresas from './SearchEmpresas'





class HeaderBuscador extends React.Component {
  handleCallBack(data) {
    this.props.handleFilters(data)
  }

  render() {

    return (

      <nav>
        <SearchEmpresas handleCallback={data => this.handleCallback(data)} />
      </nav>

    );
  }
}

export default HeaderBuscador;
