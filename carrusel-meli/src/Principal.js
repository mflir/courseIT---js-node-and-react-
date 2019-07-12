import React from "react";
import "./App.css";
import logo from "./static/mllogo.png"
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ComponentContainer = styled.div`
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0 auto; 
  display: flex; 
  flex-direction: row;
  background-color: blue;

  img {
    width: 250px;
    height: 200px;
  }

  .buttones-container {
    height: 200px;
    display: flex; 
    align-items: center;
    flex-direction: column;
  }

  button {

  }

  .country {
    
  }
`

class Principal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }


  handleClick(id) {
    this.setState = {
      value: { id }
    }
  }
  render() {
    return (
      <ComponentContainer>
        <img src={logo} alt="" />
        <div className="buttones-container">
          <Link className="country" to="/carousel/MLA">Argentina</Link>
          <Link className="country" to="/carousel/MBO">Bolivia</Link>
          <Link className="country" to="/carousel/MLB">Brasil</Link>
          <Link className="country" to="/carousel/MCO">Colombia</Link>
        </div>
      </ComponentContainer>

    )
  }
}

export default Principal;