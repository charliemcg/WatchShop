import React, { Component } from "react";
import aquanautImg from "../../images/patek/aquanaut.jpg";
import calatravaImg from "../../images/patek/calatrava.jpg";
import complicationsImg from "../../images/patek/complications.jpg";
import grandComplicationsImg from "../../images/patek/grandComplications.jpg";
import nautilusImg from "../../images/patek/nautilus.jpg";
import Watches from "../Watches";

export default class Patek extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          brand: "Patek Philippe",
          model: "Aquanaut",
          price: 30000,
          image: aquanautImg,
          qty: 1
        },
        {
          brand: "Patek Philippe",
          model: "Calatrava",
          price: 35000,
          image: calatravaImg,
          qty: 1
        },
        {
          brand: "Patek Philippe",
          model: "Complications",
          price: 100000,
          image: complicationsImg,
          qty: 1
        },
        {
          brand: "Patek Philippe",
          model: "Grand Complications",
          price: 150000,
          image: grandComplicationsImg,
          qty: 1
        },
        {
          brand: "Patek Philippe",
          model: "Nautilus",
          price: 40000,
          image: nautilusImg,
          qty: 1
        }
      ]
    };
  }
  render() {
    return (
      <>
        <h3>Patek Philippe</h3>
        <Watches
          watches={this.state.products}
          addToCart={watch => this.props.addToCart(watch)}
        />
      </>
    );
  }
}
