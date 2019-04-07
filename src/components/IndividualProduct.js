import React from "react";

const IndividualProduct = props => {
  const watch = props.model;
  return (
    <>
      <h2>{watch.brand}</h2>
      <h2>{watch.model}</h2>
      <br />
      <img src={watch.image} style={{ maxHeight: 600 }} alt={"Blah"} />
      <br />
      This is a pretty sick watch hey. Sould probably buy it.
      <br />${watch.price}
      <br />
      <button
        onClick={() =>
          /*props.addToCart(item)*/ alert("Add this sucker to cart")
        }
      >
        Add to cart
      </button>
    </>
  );
};

export default IndividualProduct;
