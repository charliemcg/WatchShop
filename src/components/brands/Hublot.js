import React, { Component } from "react";
import spiritOfBigBangImg from "../../images/hublot/spiritOfBigBang.png";
import bigBangImg from "../../images/hublot/bigBang.jpg";
import fusionImg from "../../images/hublot/fusion.png";
import Watches from "./Watches";

export default class Hublot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          brand: "Hublot",
          model: "Spirit of Big Bang",
          price: 21000,
          image: spiritOfBigBangImg,
          qty: 1
        },
        {
          brand: "Hublot",
          model: "Big Bang",
          price: 25000,
          image: bigBangImg,
          qty: 1
        },
        {
          brand: "Hublot",
          model: "Fusion",
          price: 22000,
          image: fusionImg,
          qty: 1
        }
      ]
    };
  }
  render() {
    return (
      <>
        <h3>Hublot</h3>
        <Watches
          watches={this.state.products}
          addToCart={watch => this.props.addToCart(watch)}
        />
      </>
    );
  }
}
