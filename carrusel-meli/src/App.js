import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"
import Principal from './Principal'
import Contenido from './Contenido'

class App extends React.Component {

  render() {

    return (
      <Router>
        <Route path="/" exact component={Principal}></Route>
        <Route path="/carousel/:site" component={Contenido}></Route>
      </Router>
    );
  }
}

export default App;
