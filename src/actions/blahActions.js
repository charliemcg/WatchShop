export function updateBlah(val) {
  return {
    type: "DO_BLAH",
    payload: val
  };
}

export function updateCart(newArr) {
  return {
    type: "UPDATE_CART",
    payload: newArr
  };
}
