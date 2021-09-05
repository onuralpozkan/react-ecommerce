import * as actionTypes from "../Actions/actionTypes";

const initialState = {
  products: [],
  error: null,
  isLoading: false,
  product: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_BEGIN:
      return { ...state, isLoading: true };
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, products: action.payload };
    case actionTypes.FETCH_PRODUCTS_FAILURE:
      return { ...state, error: action.payload };
    case actionTypes.GET_PRODUCT_BY_ID:
      const product = state.products.filter(
        (item) => item.id == action.payload
      );
      console.log("payload", action.payload);
      return { ...state, product };
    default:
      return state;
  }
};

export default productReducer;
