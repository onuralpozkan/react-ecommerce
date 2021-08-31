import * as actionTypes from "../Actions/actionTypes";

const initialState = {
  products: [],
  error: null,
  isLoading: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_BEGIN:
      return { ...state, isLoading: true };
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, products: action.payload };
    case actionTypes.FETCH_PRODUCTS_FAILURE:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default productReducer;