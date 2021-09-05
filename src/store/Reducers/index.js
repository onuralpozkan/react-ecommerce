import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";
const rootReducer = combineReducers({
  productReducer,
  cartReducer
});
export default rootReducer;
