import React, { Component } from "react";
import classiqueImg from "../../images/breguet/classique.jpg";
import heritageImg from "../../images/breguet/heritage.jpg";
import marineImg from "../../images/breguet/marine.jpg";
import traditionImg from "../../images/breguet/tradition.jpg";
import typeXXImg from "../../images/breguet/typeXX.jpg";
import Watches from "../Watches";

export default class Breitling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          brand: "Breguet",
          model: "Classique",
          price: 11000,
          image: classiqueImg,
          qty: 1
        },
        {
          brand: "Breguet",
          model: "Heritage",
          price: 25000,
          image: heritageImg,
          qty: 1
        },
        {
          brand: "Breguet",
          model: "La Marine",
          price: 23000,
          image: marineImg,
          qty: 1
        },
        {
          brand: "Breguet",
          model: "Tradition",
          price: 19000,
          image: traditionImg,
          qty: 1
        },
        {
          brand: "Breguet",
          model: "Type XX",
          price: 8000,
          image: typeXXImg,
          qty: 1
        }
      ]
    };
  }
  render() {
    return (
      <>
        <h3>Breguet</h3>
        <Watches
          watches={this.state.products}
          addToCart={watch => this.props.addToCart(watch)}
        />
      </>
    );
  }
}
