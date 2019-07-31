import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"
import Principal from './CarouselMeli/Principal'
import Contenido from './CarouselMeli/Contenido'
import BotonContainer from './ButtonCallback/ButtonContainer'
import BuscadorEmpresas from './AppBuscador/BuscadorEmpresas'

class App extends React.Component {

  render() {

    return (
      <Router>
        <Route path="/" exact component={Principal}></Route>
        <Route path="/carousel/:site" component={Contenido}></Route>
        <Route path="/boton" exact component={BotonContainer}></Route>
        <Route path="/buscador" exact component={BuscadorEmpresas}></Route>
      </Router>
    );
  }
}

export default App;
