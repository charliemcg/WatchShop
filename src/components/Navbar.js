import React, { Component } from "react";
import { NavLink } from "react-router-dom";

function getItemCount(props) {
  let items = 0;
  for (let i = 0; i < props.length; i++) {
    items += props[i].qty;
  }
  return items;
}

export default class Navbar extends Component {
  render() {
    const numberOfItems = getItemCount(this.props.productsInCart);
    return (
      <>
        <NavLink to="/">Home</NavLink> |{" "}
        <button
          onClick={() => {
            this.props.toggleBrands();
          }}
        >
          Products
        </button>{" "}
        | <NavLink to="/cart">Cart</NavLink> ({numberOfItems}) |{" "}
        <NavLink to="/contact">Contact</NavLink>
      </>
    );
  }
}
