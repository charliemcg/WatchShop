import React from "react";

const Watches = props => {
  const renderedList = props.watches.map((item, i) => {
    return (
      <div key={i}>
        <br />
        <img src={item.image} style={{ width: 300 }} alt={"Blah"} />
        <br />
        {item.brand}
        <br />
        {item.model}
        <br />
        {item.price}
        <br />
        <button onClick={() => props.addToCart(item)}>Add to cart</button>
        <br />
      </div>
    );
  });
  return renderedList;
};

export default Watches;
