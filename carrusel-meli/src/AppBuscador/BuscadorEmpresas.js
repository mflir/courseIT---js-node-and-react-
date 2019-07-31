import React from "react";
import CardEmpresa from "./CardEmpresa"
import HeaderBuscador from "./HeaderBuscador";




class BuscadorEmpresas extends React.Component {

  handleFilters(data) {
    console.log(data)
  }

  render() {
    // const results = [
    //   { name: "changa" }, { name: "publica.la" }, { name: "tan intensa" }, { name: "lution-bot" }]
    return (

      <div>
        <HeaderBuscador handleFilters={() => this.handleFilters} />

        <section className="cards-container">
          <CardEmpresa />
          <CardEmpresa />
          <CardEmpresa />
          <CardEmpresa />
        </section>
      </div>

    );
  }
}

export default BuscadorEmpresas;
