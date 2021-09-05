import * as actionTypes from "../Actions/actionTypes";
import { initialState } from "./initialState";

const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT_TO_CART:
      let { product, productCount } = action.payload;
      let addedProduct = state.find((i) => i.product.id === product.id);
      if (addedProduct) {
        let newState = state.map((item) => {
          if (item.product.id === product.id) {
            return Object.assign({}, addedProduct, {
              productCount: item.productCount + productCount,
            });
          }
          return item;
        });
        return newState;
      } else {
        return [...state, { ...action.payload }];
      }
    case actionTypes.REMOVE_PRODUCT_FROM_CART:
      let filteredCart = state.filter((i) => i.product.id !== action.payload);
      return [...filteredCart];
    default:
      return state;
  }
};

export default cartReducer;
