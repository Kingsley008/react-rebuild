import * as actionTypes from './actionTypes';
import * as Status from '../status';

export const categoryReducer = (state = { status: Status.LOADING}, action) => {
    // console.log(state);
    switch (action.type){
        case actionTypes.FETCH_CATEGORY_STARTED:{
            return {...state ,status : Status.LOADING}
        }
        case actionTypes.FETCH_CATEGORY_SUCCESS:{
            return {...state, status : Status.SUCCESS, ...action.result}
        }
        case actionTypes.FETCH_CATAGORY_FAILURE:{
            return {...state, status : Status.FAILURE}
        }
        default:
            return state;
    }

};