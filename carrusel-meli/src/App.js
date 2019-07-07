import React from "react";
import "./App.css";


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
        hola
      </div>
    );
  }
}

export default App;
