import axios from "axios";
import * as actionTypes from "./actionTypes";

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
      const url = "http://localhost:8000/products";
      const response = await axios.get(url);
      const apiData = response?.data;
      // console.log("Pro Action");
      // console.log(apiData);
      dispatch({
        type: actionTypes.FETCH_PRODUCTS_SUCCESS,
        payload: apiData,
      });
    } catch (error) {
      dispatch({ type: actionTypes.FETCH_PRODUCTS_FAILURE, payload: error });
    }
  };
};
