import { ADD_ITEM, CLEAR_CART, REMOVE_ITEM } from "../constants";

export const addItemToCart = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

export const removeCartItem = (item) => {
  return {
    type: REMOVE_ITEM,
    payload: item,
  };
};
