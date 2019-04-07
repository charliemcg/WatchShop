import daytonaImg from "../images/rolex/daytona.jpg";

const blahReducer = (
  state = {
    productsInCart: [],
    selectedWatch: {
      brand: "Rolex",
      model: "Daytona",
      price: 22000,
      image: daytonaImg,
      qty: 1
    }
  },
  action
) => {
  switch (action.type) {
    case "UPDATE_CART":
      state = {
        ...state,
        productsInCart: action.payload
      };
      break;
    case "SELECT_WATCH":
      state = {
        ...state,
        selectedWatch: action.payload
      };
      break;
    default:
      return state;
  }
  return state;
};

export default blahReducer;
