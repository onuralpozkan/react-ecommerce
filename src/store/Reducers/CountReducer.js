import * as actionTypes from "../Actions/actionTypes";

const CountReducer = (state = 0, action) => {
    switch(action.type){
        case actionTypes.COUNT:
            return state = action.payload;
        default:
            return state;
    }
}
export default  CountReducer;