import * as actionTypes from "./actionTypes";
import data from "../api/db.json";

export const fetchProductsBegin = () => {
  return {
    type: actionTypes.FETCH_PRODUCTS_BEGIN,
  };
};
export const fetchProductsFailure = (error) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_FAILURE,
    payload: error,
  };
};
export const fetchProductSuccess = ({ data }) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: data,
  };
};
export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchProductsBegin());
      const apiData = data.products;
      dispatch({
        type: actionTypes.FETCH_PRODUCTS_SUCCESS,
        payload: apiData,
      });
    } catch (error) {
      dispatch({ type: actionTypes.FETCH_PRODUCTS_FAILURE, payload: error });
    }
  };
};
