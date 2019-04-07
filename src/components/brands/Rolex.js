import React, { Component } from "react";
import daytonaImg from "../../images/rolex/daytona.jpg";
import dateJustImg from "../../images/rolex/datejust.jpg";
import dayDateImg from "../../images/rolex/dayDate.jpg";
import gmtMasterImg from "../../images/rolex/gmtMaster.jpg";
import milgaussImg from "../../images/rolex/milgauss.jpg";
import skyDwellerImg from "../../images/rolex/skyDweller.jpg";
import submarinerImg from "../../images/rolex/submariner.jpg";
import yachtMasterImg from "../../images/rolex/yachtMaster.png";
import Watches from "../Watches";

export default class Rolex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          brand: "Rolex",
          model: "Daytona",
          price: 22000,
          image: daytonaImg,
          qty: 1
        },
        {
          brand: "Rolex",
          model: "Date Just",
          price: 14000,
          image: dateJustImg,
          qty: 1
        },
        {
          brand: "Rolex",
          model: "Day Date",
          price: 12000,
          image: dayDateImg,
          qty: 1
        },
        {
          brand: "Rolex",
          model: "GMT Master II",
          price: 16000,
          image: gmtMasterImg,
          qty: 1
        },
        {
          brand: "Rolex",
          model: "Milgauss",
          price: 13000,
          image: milgaussImg,
          qty: 1
        },
        {
          brand: "Rolex",
          model: "Sky Dweller",
          price: 25000,
          image: skyDwellerImg,
          qty: 1
        },
        {
          brand: "Rolex",
          model: "Submariner",
          price: 18000,
          image: submarinerImg,
          qty: 1
        },
        {
          brand: "Rolex",
          model: "Yacht Master",
          price: 19000,
          image: yachtMasterImg,
          qty: 1
        }
      ]
    };
  }
  render() {
    return (
      <>
        <h3>Rolex</h3>
        <Watches
          watchToShow={watch => {
            this.props.watchToShow(watch);
          }}
          watches={this.state.products}
          addToCart={watch => this.props.addToCart(watch)}
        />
      </>
    );
  }
}
