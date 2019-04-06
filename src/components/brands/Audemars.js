import React, { Component } from "react";
import royalOakImg from "../../images/audemars/royalOak.jpg";
import code1159Img from "../../images/audemars/code1159.jpg";
import conceptImg from "../../images/audemars/concept.png";
import julesImg from "../../images/audemars/jules.jpg";
import offshoreImg from "../../images/audemars/offshore.jpg";
import Watches from "./Watches";

export default class Audemars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          brand: "Audemars Piguet",
          model: "Royal Oak",
          price: 26000,
          image: royalOakImg,
          qty: 1
        },
        {
          brand: "Audemars Piguet",
          model: "Code 11.59",
          price: 36000,
          image: code1159Img,
          qty: 1
        },
        {
          brand: "Audemars Piguet",
          model: "Concept",
          price: 30000,
          image: conceptImg,
          qty: 1
        },
        {
          brand: "Audemars Piguet",
          model: "Jules",
          price: 23000,
          image: julesImg,
          qty: 1
        },
        {
          brand: "Audemars Piguet",
          model: "Offshore",
          price: 28000,
          image: offshoreImg,
          qty: 1
        }
      ]
    };
  }
  render() {
    return (
      <>
        <h3>Audemars</h3>
        <Watches
          watches={this.state.products}
          addToCart={watch => this.props.addToCart(watch)}
        />
      </>
    );
  }
}
