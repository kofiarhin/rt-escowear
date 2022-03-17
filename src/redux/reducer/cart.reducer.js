import { ADD_ITEM, CLEAR_CART, REMOVE_ITEM, GET_CART_DATA } from "../constants";
const initialState = {
  cartData: [],
};

const checkItem = (cartData, item) => {
  let data = sessionStorage.getItem("cartData");

  if (!data) {
    sessionStorage.setItem("cartData", JSON.stringify([item]));
    return [{ item }];
  } else {
    data = JSON.parse(sessionStorage.getItem("cartData"));

    // check if item already exist;
    const check = data.find(
      (dataItem) => dataItem.name.toLowerCase() === item.name.toLowerCase()
    );

    if (!check) {
      let newData = [item, ...data];
      sessionStorage.setItem("cartData", JSON.stringify(newData));
      return newData;
    } else {
      return data;
    }
  }

  // // add item to session
  // if (cartData && cartData.length > 0) {
  //   // check if item already exist
  //   const check = cartData.find(
  //     (cartItem) => cartItem.name.toLowerCase() === item.name.toLowerCase()
  //   );

  //   if (check) {
  //     return cartData;
  //   } else {
  //     return [item, ...cartData];
  //   }
  // } else {
  //   return [item];
  // }
};

const handleRemove = (cartData, item) => {
  const filtered = cartData.filter(
    (cartItem) => cartItem.name.toLowerCase() !== item.name.toLowerCase()
  );

  sessionStorage.setItem("cartData", JSON.stringify(filtered));
  return filtered;
};

const clearCart = () => {
  sessionStorage.removeItem("cartData");
  return [];
};
// cart reducer
const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART_DATA:
      return { ...state, cartData: action.payload };
    case REMOVE_ITEM:
      return {
        ...state,
        cartData: handleRemove(state.cartData, action.payload),
      };
    case CLEAR_CART:
      return { ...state, cartData: clearCart() };
    case ADD_ITEM:
      return { ...state, cartData: checkItem(state.cartData, action.payload) };
    default:
      return state;
  }
};

export default CartReducer;
