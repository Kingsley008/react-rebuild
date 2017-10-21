import * as actionTypes from './actionTypes';
import * as status from '../status';

/**
 * reducer 根据dispatcher action  改变store的状态
 * **/

export const sliderReducer = (state = { status: status.LOADING }, action )=> {

    switch (action.type){
        case actionTypes.FETCH_SLIDER_STARTED: {
            return { status: status.LOADING}
        }
        case actionTypes.FETCH_SLIDER_SUCCESS: {
            // const newState =  object.assign({},state,action.result);
            // newState.status = status.SUCCESS;
            return {...state, status: status.SUCCESS, ...action.result}
        }
        case actionTypes.FETCH_SLIDER_FAILURE: {
            return
        }

        default:
            return state;
    }
};

export const manReducer  = (state ={status: status.LOADING}, action) => {

    switch (action.type){

        case actionTypes.FETCH_MAN_STARTED: {
            return { status: status.LOADING }
        }
        case actionTypes.FETCH_MAN_SUCCESS: {

            return {...state, status:status.SUCCESS, ...action.result}
        }
        case actionTypes.FETCH_MAN_FAILURE: {
            return {
                status:status.FAILURE
            }
        }
        default:
            return state;
    }
};

export const ladyReducer = (state = {status: status.LOADING}, action ) => {
    switch (action.type){
        case actionTypes.FETCH_WOMAN_STARTED:{
            return {status:status.LOADING}
        }
        case actionTypes.FETCH_WOMAN_SUCCESS:{
            return {...state, status:status.SUCCESS, ...action.result}
        }
        case actionTypes.FETCH_WOMAN_FAILURE:{
            return {status:status.FAILURE}
        }
        default:{
            return state
        }
    }
};

export const commentReducer = (state = {status: status.LOADING}, action) => {

    switch (action.type){
        case actionTypes.FETCH_COMMENT_STARTED:{
            return {status:status.LOADING}
        }
        case actionTypes.FETCH_COMMENT_SUCCESS:{
            return {...state, status:status.SUCCESS, ...action.result}
        }
        case actionTypes.FETCH_COMMENT_FAILURE:{
            return {status:status.FAILURE}
        }

        default:{
            return state
        }
    }
};