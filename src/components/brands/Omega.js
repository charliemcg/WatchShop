import React, { Component } from "react";
import speedmasterImg from "../../images/omega/speedmaster.jpg";
import devilleImg from "../../images/omega/deville.jpg";
import seamasterImg from "../../images/omega/seamaster.png";
import constellationImg from "../../images/omega/constellation.png";
import Watches from "../Watches";

export default class Omega extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          brand: "Omega",
          model: "Speedmaster",
          price: 6000,
          image: speedmasterImg,
          qty: 1
        },
        {
          brand: "Omega",
          model: "Constellation",
          price: 12000,
          image: constellationImg,
          qty: 1
        },
        {
          brand: "Omega",
          model: "De Ville",
          price: 9000,
          image: devilleImg,
          qty: 1
        },
        {
          brand: "Omega",
          model: "Seamaster",
          price: 8000,
          image: seamasterImg,
          qty: 1
        }
      ]
    };
  }
  render() {
    return (
      <>
        <h3>Omega</h3>
        <Watches
          watches={this.state.products}
          addToCart={watch => this.props.addToCart(watch)}
        />
      </>
    );
  }
}
