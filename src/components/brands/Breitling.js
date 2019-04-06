import React, { Component } from "react";
import avengerImg from "../../images/breitling/avenger.jpg";
import chronomatImg from "../../images/breitling/chronomat.jpg";
import navitimerImg from "../../images/breitling/navitimer.jpg";
import premierImg from "../../images/breitling/premier.jpg";
import superoceanImg from "../../images/breitling/superocean.jpg";
import Watches from "./Watches";

export default class Breitling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          brand: "Breitling",
          model: "Avenger",
          price: 8000,
          image: avengerImg,
          qty: 1
        },
        {
          brand: "Breitling",
          model: "chronomat",
          price: 8000,
          image: chronomatImg,
          qty: 1
        },
        {
          brand: "Breitling",
          model: "Navitimer",
          price: 9000,
          image: navitimerImg,
          qty: 1
        },
        {
          brand: "Breitling",
          model: "Premier",
          price: 7000,
          image: premierImg,
          qty: 1
        },
        {
          brand: "Breitling",
          model: "Superocean",
          price: 9000,
          image: superoceanImg,
          qty: 1
        }
      ]
    };
  }
  render() {
    return (
      <>
        <h3>Breitling</h3>
        <Watches
          watches={this.state.products}
          addToCart={watch => this.props.addToCart(watch)}
        />
      </>
    );
  }
}
