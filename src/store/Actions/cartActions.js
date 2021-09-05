import * as actionTypes from "./actionTypes";

export const addProductToCart = (product) => {
  return {
    type: actionTypes.ADD_PRODUCT_TO_CART,
    payload: product,
  };
};

export const removeProductFromCart = (id) => {
  return {
    type: actionTypes.REMOVE_PRODUCT_FROM_CART,
    payload: id,
  };
};
