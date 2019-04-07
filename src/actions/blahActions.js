export function updateCart(newArr) {
  return {
    type: "UPDATE_CART",
    payload: newArr
  };
}

export function selectWatch(watch) {
  return {
    type: "SELECT_WATCH",
    payload: watch
  };
}
