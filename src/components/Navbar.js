import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../app.css";
import Dropdown from "react-bootstrap/Dropdown";
import Brandbar from "./Brandbar";

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
      <div className="nav">
        <NavLink
          to="/"
          style={{
            textDecoration: "none",
            color: "#DDD"
          }}
        >
          Home
        </NavLink>{" "}
        |{" "}
        <Dropdown>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            style={{ backgroundColor: "#000", color: "#DDD", fontSize: 20 }}
          >
            Products
          </Dropdown.Toggle>
          <Dropdown.Menu
            style={{
              backgroundColor: "#DDD",
              color: "#000"
            }}
          >
            <Brandbar />
          </Dropdown.Menu>
        </Dropdown>
        |{" "}
        <NavLink to="/cart" style={{ textDecoration: "none", color: "#DDD" }}>
          Cart
        </NavLink>{" "}
        ({numberOfItems}) |{" "}
        <NavLink
          to="/contact"
          style={{ textDecoration: "none", color: "#DDD" }}
        >
          Contact
        </NavLink>
      </div>
    );
  }
}
