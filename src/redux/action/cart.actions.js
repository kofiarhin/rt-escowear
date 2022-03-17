import { ADD_ITEM, CLEAR_CART, REMOVE_ITEM, GET_CART_DATA } from "../constants";

const getSessionData = (key) => {
  return sessionStorage.getItem(key);
};

const setSessionData = (data) => {};

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

export const setCartData = (data) => {
  sessionStorage.setItem("cartData", JSON.stringify(data));
};

export const getCartData = () => {
  let cartData = [];
  const data = sessionStorage.getItem("cartData");

  if (data) {
    cartData = JSON.parse(data);
  }
  return {
    type: GET_CART_DATA,
    payload: cartData,
  };
};
