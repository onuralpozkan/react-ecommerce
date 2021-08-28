import * as actionTypes from './actionTypes';

const getCount = () => {
    return {
        type: actionTypes.COUNT,
        payload: 18,
    }
}
export default getCount;