import * as actionTypes from "../Actions/actionTypes";
const initialState = {
  categories: [],
  loading: false,
  error: null,
};
const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CATEGORIES_BEGIN:
      return { ...state, loading: true, error: null };
    case actionTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };
    case actionTypes.FETCH_CATEGORIES_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};
export default categoryReducer;
