import React, { Component } from "react";
import santosImg from "../../images/cartier/santos.jpg";
import ballonBleuImg from "../../images/cartier/ballonBleu.jpg";
import calibreImg from "../../images/cartier/calibre.jpg";
import driveImg from "../../images/cartier/drive.jpg";
import rondeImg from "../../images/cartier/ronde.png";
import tankImg from "../../images/cartier/tank.jpg";
import Watches from "../Watches";

export default class Cartier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          brand: "Cartier",
          model: "Santos",
          price: 8000,
          image: santosImg,
          qty: 1
        },
        {
          brand: "Cartier",
          model: "Ballon Bleu",
          price: 7000,
          image: ballonBleuImg,
          qty: 1
        },
        {
          brand: "Cartier",
          model: "Calibre",
          price: 8000,
          image: calibreImg,
          qty: 1
        },
        {
          brand: "Cartier",
          model: "Drive",
          price: 6000,
          image: driveImg,
          qty: 1
        },
        {
          brand: "Cartier",
          model: "Ronde",
          price: 6000,
          image: rondeImg,
          qty: 1
        },
        {
          brand: "Cartier",
          model: "Tank",
          price: 9000,
          image: tankImg,
          qty: 1
        }
      ]
    };
  }
  render() {
    return (
      <>
        <h3>Cartier</h3>
        <Watches
          watches={this.state.products}
          addToCart={watch => this.props.addToCart(watch)}
        />
      </>
    );
  }
}
