import React from "react";
import Titulo from "../Titulo";
import Curso from "../Curso";
import "./style.css";

class CursosContainer extends React.Component {
  render() {
    return (
      <div className="container-div">
        <Titulo text="Nuestros cursos y carreras" />
        <div className="container-div-cursos">
          <Curso
            title="Frontend Avanzado"
            desc="Aumentá tu nivel en Frontend aprendiendo React, Redux y NextJS"
            estadocurso=""
            color="rgb(66, 184, 202)"
          />

          <Curso
            title="Desarrollo Frontend"
            desc="Aprendé a crear sitios web desde cero con HTML, CSS, Javascript, React y Node."
            estadocurso=""
            color="#d24b79"
          />
        </div>
      </div>
    );
  }
}

export default CursosContainer;