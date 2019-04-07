import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Brandbar extends Component {
  render() {
    if (this.props.showBrands) {
      return null;
    }
    return (
      <div className="brandBar">
        <NavLink to="/rolex" style={{ textDecoration: "none", color: "#000" }}>
          Rolex
        </NavLink>{" "}
        |{" "}
        <NavLink to="/sohne" style={{ textDecoration: "none", color: "#000" }}>
          A Lange and Sohne
        </NavLink>{" "}
        |{" "}
        <NavLink
          to="/audemars"
          style={{ textDecoration: "none", color: "#000" }}
        >
          Audemars Piguet
        </NavLink>{" "}
        |{" "}
        <NavLink
          to="/breguet"
          style={{ textDecoration: "none", color: "#000" }}
        >
          Breguet
        </NavLink>{" "}
        |{" "}
        <NavLink
          to="/breitling"
          style={{ textDecoration: "none", color: "#000" }}
        >
          Breitling
        </NavLink>{" "}
        |{" "}
        <NavLink
          to="/cartier"
          style={{ textDecoration: "none", color: "#000" }}
        >
          Cartier
        </NavLink>{" "}
        |{" "}
        <NavLink to="/hublot" style={{ textDecoration: "none", color: "#000" }}>
          Hublot
        </NavLink>{" "}
        |{" "}
        <NavLink to="/omega" style={{ textDecoration: "none", color: "#000" }}>
          Omega
        </NavLink>{" "}
        |{" "}
        <NavLink to="/patek" style={{ textDecoration: "none", color: "#000" }}>
          Patek Philippe
        </NavLink>{" "}
        |{" "}
        <NavLink
          to="/vacheron"
          style={{ textDecoration: "none", color: "#000" }}
        >
          Vacheron Constantin
        </NavLink>
      </div>
    );
  }
}
