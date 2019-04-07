import React, { Component } from "react";
import overseasImg from "../../images/vacheron/overseas.jpg";
import harmonyImg from "../../images/vacheron/harmony.jpg";
import historiquesImg from "../../images/vacheron/historiques.jpg";
import patrimonyImg from "../../images/vacheron/patrimony.jpg";
import Watches from "../Watches";

export default class Vacheron extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          brand: "Vacheron Constantin",
          model: "Overseas",
          price: 22000,
          image: overseasImg,
          qty: 1
        },
        {
          brand: "Vacheron Constantin",
          model: "Harmony",
          price: 25000,
          image: harmonyImg,
          qty: 1
        },
        {
          brand: "Vacheron Constantin",
          model: "Historiques",
          price: 24000,
          image: historiquesImg,
          qty: 1
        },
        {
          brand: "Vacheron Constantin",
          model: "Patrimony",
          price: 18000,
          image: patrimonyImg,
          qty: 1
        }
      ]
    };
  }
  render() {
    return (
      <>
        <h3>Vacheron Constantin</h3>
        <Watches
          watches={this.state.products}
          addToCart={watch => this.props.addToCart(watch)}
        />
      </>
    );
  }
}
