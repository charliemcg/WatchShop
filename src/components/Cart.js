import React, { Component } from "react";

const TheList = props => {
  const renderedList = props.products.map((item, i) => {
    return (
      <div key={i}>
        <br />
        <img src={item.image} style={{ width: 80 }} alt={"blah"} />
        <br />
        {item.brand}
        <br />
        {item.model}
        <br />
        {item.price}
        <br />
        {item.qty}
        <br />
        <button onClick={() => props.removeFromCart(item)}>
          Remove from cart
        </button>
        <br />
      </div>
    );
  });
  return renderedList;
};

const RenderedProducts = props => {
  let total = getTotal() + 20;
  function getTotal() {
    let runningTotal = 0;
    for (let i = 0; i < props.products.length; i++) {
      const quantity = props.products[i].qty;
      const price = props.products[i].price;
      const productTotal = quantity * price;
      runningTotal += productTotal;
    }
    return runningTotal;
  }
  if (props.products.length !== 0) {
    return (
      <>
        <TheList
          products={props.products}
          removeFromCart={watch => props.removeFromCart(watch)}
        />
        <br />
        Shipping: $20
        <br />
        Total: ${total}{" "}
        <button onClick={() => alert(`You just spent $${total}`)}>BUY!</button>
      </>
    );
  }
  return <>Your cart is empty</>;
};

class Cart extends Component {
  render() {
    return (
      <>
        <h3>Cart</h3>
        <RenderedProducts
          products={this.props.products}
          removeFromCart={watch => this.props.removeFromCart(watch)}
        />
      </>
    );
  }
}

export default Cart;
