import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Brandbar extends Component {
  render() {
    if (this.props.showBrands) {
      return null;
    }
    return (
      <>
        <NavLink to="/rolex">Rolex</NavLink> |{" "}
        <NavLink to="/sohne">A Lange and Sohne</NavLink> |{" "}
        <NavLink to="/audemars">Audemars Piguet</NavLink> |{" "}
        <NavLink to="/breguet">Breguet</NavLink> |{" "}
        <NavLink to="/breitling">Breitling</NavLink> |{" "}
        <NavLink to="/cartier">Cartier</NavLink> |{" "}
        <NavLink to="/hublot">Hublot</NavLink> |{" "}
        <NavLink to="/omega">Omega</NavLink> |{" "}
        <NavLink to="/patek">Patek Philippe</NavLink> |{" "}
        <NavLink to="/vacheron">Vacheron Constantin</NavLink>
      </>
    );
  }
}
