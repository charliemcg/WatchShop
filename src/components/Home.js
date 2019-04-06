import React, { Component } from "react";
import jumboImg from "../images/jumboImg.jpg";

export default class Home extends Component {
  render() {
    return (
      <>
        <h3>Home</h3>
        <img src={jumboImg} alt="blah" />
      </>
    );
  }
}
