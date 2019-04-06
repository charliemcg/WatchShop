import React, { Component } from "react";
import eighteenImg from "../../images/sohne/1815.jpg";
import langeOneImg from "../../images/sohne/lange1.png";
import richardImg from "../../images/sohne/richard.jpg";
import saxoniaImg from "../../images/sohne/saxonia.jpg";
import zeitwerkImg from "../../images/sohne/zeitwerk.jpg";
import Watches from "./Watches";

export default class Sohne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          brand: "A. Lange & Sohne",
          model: "1815",
          price: 120000,
          image: eighteenImg,
          qty: 1
        },
        {
          brand: "A. Lange & Sohne",
          model: "Lange 1",
          price: 90000,
          image: langeOneImg,
          qty: 1
        },
        {
          brand: "A. Lange & Sohne",
          model: "Richard Lange",
          price: 80000,
          image: richardImg,
          qty: 1
        },
        {
          brand: "A. Lange & Sohne",
          model: "Saxonia",
          price: 75000,
          image: saxoniaImg,
          qty: 1
        },
        {
          brand: "A. Lange & Sohne",
          model: "Zeitwerk",
          price: 90000,
          image: zeitwerkImg,
          qty: 1
        }
      ]
    };
  }
  render() {
    return (
      <>
        <h3>A. Lange and Sohne</h3>
        <Watches
          watches={this.state.products}
          addToCart={watch => this.props.addToCart(watch)}
        />
      </>
    );
  }
}
