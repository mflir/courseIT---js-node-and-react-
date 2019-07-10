import React, { Component } from "react";
import styled from 'styled-components'

const PriceContainer = styled.span`
  color: #333;
  font-size: 24px;
`

class Price extends Component {
  render() {
    const { price } = this.props;
    return <PriceContainer>$ {price}</PriceContainer>;
  }
}

export default Price;