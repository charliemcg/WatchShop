import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { selectWatch } from "../actions/blahActions";
import { connect } from "react-redux";

// const Watches = props => {
//   const renderedList = props.watches.map((item, i) => {
//     return (
//       <NavLink
//         to={`/indivProduct/"bloomin"`}
//         style={{ textDecoration: "none", color: "#DDD" }}
//         // onClick={() => props.watchToShow(item)}
//       >
//         <div
//           key={i}
//           style={{
//             width: 500,
//             height: 500,
//             margin: 5,
//             backgroundColor: "#FFF",
//             color: "#000"
//           }}
//         >
//           <br />
//           <img src={item.image} style={{ maxHeight: 300 }} alt={"Blah"} />
//           <br />
//           {item.brand}
//           <br />
//           {item.model}
//           <br />
//           {item.price}
//           <br />
//           {/* <button onClick={() => props.addToCart(item)}>Add to cart</button> */}
//           {/* <br /> */}
//         </div>
//       </NavLink>
//     );
//   });
//   return (
//     <div style={{ display: "flex", flexWrap: "wrap" }}>{renderedList}</div>
//   );
// };

// export default Watches;

class Watches extends Component {
  render() {
    const renderedList = this.props.watches.map((item, i) => {
      return (
        <NavLink
          to={`/indivProduct/"bloomin"`}
          style={{ textDecoration: "none", color: "#DDD" }}
          // onClick={() => props.watchToShow(item)}
          onClick={() => this.props.selectWatch(item)}
        >
          <div
            key={i}
            style={{
              width: 500,
              height: 500,
              margin: 5,
              backgroundColor: "#FFF",
              color: "#000"
            }}
          >
            <br />
            <img src={item.image} style={{ maxHeight: 300 }} alt={"Blah"} />
            <br />
            {item.brand}
            <br />
            {item.model}
            <br />
            {item.price}
            <br />
            {/* <button onClick={() => props.addToCart(item)}>Add to cart</button> */}
            {/* <br /> */}
          </div>
        </NavLink>
      );
    });
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>{renderedList}</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedWatch: state.selectedWatch
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectWatch: watch => {
      dispatch(selectWatch(watch));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Watches);
