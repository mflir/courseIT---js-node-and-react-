// import React from 'react';
// import Header from './Header'
// import HeaderUno from './HeaderUno'
// import Suma from './Suma'
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       {/* <Header propDePrueba="valor de prueba" /> */}
//       <HeaderUno />
//       {/* <Suma /> */}
//     </div>
//   );
// }

// export default App;



import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import PropuestaValor from "./PropuestaValor";
import CursosContainer from './CursosContainer'

class App extends React.Component {
  componentDidMount() {
    fetch("https://api.github.com/users/mflir")
      .then(respuesta => {
        respuesta.json().then(data => {
          console.log(data);
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="App">
        <PropuestaValor />
        <CursosContainer />
      </div>
    );
  }
}

export default App;
