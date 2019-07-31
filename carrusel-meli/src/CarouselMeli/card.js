import React from "react";
// import "./App.css";
import styled from 'styled-components'

import Price from "../price.js";
import TruckIcon from "../truckicon.js";

const CardContainer = styled.div`
  margin: 0 8px 16px;
  width: 224px;
  height: 314px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background-color: #fff;
  overflow: hidden;
  position: relative;

  img {
    background-color: #dadada;
    width: 225px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .truck-icon {
    width: 36px;
    height: 36px;
    top: 212px;
    right: 16px;
    border: 1px solid rgba(51, 51, 51, 0.1);
    background-color: #fff;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    position: absolute;
    padding: 8px 4px 0px 7px;
    box-sizing: border-box;
  }
  
  .price-payment-container {
    border-top: 1px solid rgba(51, 51, 51, 0.1);
    padding: 24px 24px 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`

class Card extends React.Component {
  render() {
    const { price, shipping, img } = this.props;
    const freeShipping = shipping.free_shipping;
    return (
      <CardContainer>
        <img src={img} alt="" />
        {
          freeShipping && (
            <div className="truck-icon">
              <TruckIcon />
            </div>
          )
        }
        <div className="price-payment-container">
          <Price price={price} />
        </div>
      </CardContainer>
    );
  }
}

export default Card;