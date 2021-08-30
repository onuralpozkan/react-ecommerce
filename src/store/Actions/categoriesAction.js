import * as actionTypes from "./actionTypes";

const getCategories = () => {
  return (dispatch) => {
    try {
      fetch("http://localhost:8000/categories")
        .then((res) => res.json())
        .then((data) =>
          dispatch({ type: actionTypes.GET_CATEGORIES, payload: data })
        );
    } catch (e) {
      console.log(e);
    }
  };
};
export default getCategories;



export const fetchCategoriesBegin = () => ({
  type: actionTypes.FETCH_CATEGORIES_BEGIN
});

export const fetchCategoriesSuccess = categories => ({
  type:actionTypes.FETCH_CATEGORIES_SUCCESS,
  payload: { categories }
});

export const fetchCategoriesFailure = error => ({
  type:actionTypes.FETCH_CATEGORIES_FAILURE,
  payload: { error }
});

export function fetchCategories() {
  return dispatch => {
    dispatch(fetchCategoriesBegin());
    return fetch("http://localhost:8000/categories")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        console.log("JSON", json);
        dispatch(fetchCategoriesSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchCategoriesFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

