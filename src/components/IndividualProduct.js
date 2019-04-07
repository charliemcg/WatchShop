// import React from "react";

// const IndividualProduct = props => {
//   const watch = props.model;
//   return (
//     <>
//       <h2>{watch.brand}</h2>
//       <h2>{watch.model}</h2>
//       <br />
//       <img src={watch.image} style={{ maxHeight: 600 }} alt={"Blah"} />
//       <br />
//       This is a pretty sick watch hey. Should probably buy it.
//       <br />${watch.price}
//       <br />
//       <button onClick={() => props.addToCart(watch)}>Add to cart</button>
//     </>
//   );
// };

// export default IndividualProduct;

import React, { Component } from "react";
import { updateCart } from "../actions/blahActions";
import { connect } from "react-redux";

class IndividualProduct extends Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart = watch => {
    const newArr = this.props.productsInCart;
    let needToAdd = true;
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] === watch) {
        newArr[i].qty++;
        needToAdd = false;
      }
    }
    if (needToAdd) {
      newArr.push(watch);
    }
    this.props.updateCart(newArr);
  };

  render() {
    const watch = this.props.model;
    return (
      <>
        <h2>{watch.brand}</h2>
        <h2>{watch.model}</h2>
        <br />
        <img src={watch.image} style={{ maxHeight: 600 }} alt={"Blah"} />
        <br />
        This is a pretty sick watch hey. Should probably buy it.
        <br />${watch.price}
        <br />
        {/* <button onClick={() => props.addToCart(watch)}>Add to cart</button> */}
        <button onClick={() => this.props.addToCart(watch)}>Add to cart</button>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    productsInCart: state.productsInCart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateCart: newArr => {
      dispatch(updateCart(newArr));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndividualProduct);
