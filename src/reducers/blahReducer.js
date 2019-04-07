const blahReducer = (
  state = {
    blahValue: "Initial Blah Value",
    productsInCart: []
  },
  action
) => {
  switch (action.type) {
    case "DO_BLAH":
      state = {
        // ...state,
        blahValue: action.payload
      };
      break;
    case "UPDATE_CART":
      state = {
        productsInCart: action.payload
      };
      break;
    default:
      return state;
  }
  return state;
};

export default blahReducer;
