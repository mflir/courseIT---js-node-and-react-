import React from "react";
import Titulo from "../Titulo";
import Card from "../Card";
import "./style.css";

class PropuestaValor extends React.Component {
  render() {
    return (
      <div className="container-div">
        <Titulo text="Titulo de prueba" />
        <div className="container">
          <Card
            title="Card1"
            desc="Descripcion de prueba 1"
            img="https://courseit.com.ar/static/icons/camara-web.png"
          />

          <Card
            title="Card2"
            desc="Descripcion de prueba 2"
            img="https://courseit.com.ar/static/icons/charlar.png"
          />

          <Card
            title="Card3"
            desc="Descripcion de prueba 3"
            img="https://courseit.com.ar/static/icons/apoyar.png"
          />
        </div>
      </div>
    );
  }
}

export default PropuestaValor;
