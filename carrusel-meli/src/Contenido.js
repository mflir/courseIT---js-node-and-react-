import React from "react";
import styled from 'styled-components'
import Card from './card'

import Lupa from './static/buscar.png'


const ContainerBusqueda = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  .cards-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`

const ContainerInput = styled.div`
  width: 600px;
  padding: 7px 15px 9px 15px;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
  height: 39px;
  display: flex;
  justify-content: space-between;
  margin: 96px auto;

  input {
    width: 65%;
    border: none;
  }

  button {
    border: none;
    padding: 0px;
    .nav-search-btn:focus:before {
    content: '';
    display: block;
    height: 26px;
    border-left: 1px solid #e6e6e6;
    position: absolute;
    top: 6.5px;
  }

  .nav-icon-search {
    width: 21px;
    height: 21px;
  }
}
`


class Contenido extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: "",
      value: ""
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }


  async handleClick() {
    const response = await fetch(
      `https://api.mercadolibre.com/sites/${this.props.match.params.site}/search?q=${this.state.value}`
    );

    const responseJson = await response.json();

    const results = responseJson.results;

    this.setState({
      results
    });
  }

  render() {
    const { results } = this.state;
    return (
      <div className="App">
        <ContainerBusqueda>
          <ContainerInput>
            <input value={this.state.value} onChange={e => this.handleChange(e)} className="input-buscar" placeholder="Buscar productos, marcas y más…" />
            <button className="nav-search-btn" onClick={() => this.handleClick()}>
              <img className="nav-icon-search" src={Lupa} alt="lupa" />
            </button>
          </ContainerInput>
          <section className="cards-container">
            {results.length > 1 &&
              results.map((item, i) => (
                <Card
                  id={i}
                  price={item.price}
                  shipping={item.shipping}
                  img={item.thumbnail}
                />
              ))}
          </section>
        </ContainerBusqueda>
      </div>
    );
  }
}

export default Contenido;
