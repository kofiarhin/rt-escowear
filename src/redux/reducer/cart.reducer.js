import { ADD_ITEM, CLEAR_CART, REMOVE_ITEM } from "../constants";
const initialState = {
  cartData: [],
};

const checkItem = (cartData, item) => {
  if (cartData && cartData.length > 0) {
    // check if item already exist

    const check = cartData.find(
      (cartItem) => cartItem.name.toLowerCase() === item.name.toLowerCase()
    );

    if (check) {
      console.log("item already exist");
      return cartData;
    } else {
      console.log("new item added");
      return [item, ...cartData];
    }
  } else {
    return [item];
  }
};

const handleRemove = (cartData, item) => {
  const filtered = cartData.filter(
    (cartItem) => cartItem.name.toLowerCase() !== item.name.toLowerCase()
  );
  return filtered;
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_ITEM:
      return {
        ...state,
        cartData: handleRemove(state.cartData, action.payload),
      };
    case CLEAR_CART:
      return { ...state, cartData: [] };
    case ADD_ITEM:
      return { ...state, cartData: checkItem(state.cartData, action.payload) };
    default:
      return state;
  }
};

export default CartReducer;
