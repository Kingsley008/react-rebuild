import * as actionTypes from './actionTypes';
import * as Status from '../status';

export const settlementReducer = ( state = {status: Status.LOADING, shoppingCart:JSON.parse(window.localStorage.getItem('shoppingCart')) || [] },action)=> {
    switch (action.type){
        case actionTypes.MAKE_ORDER_STARTED:{
                return {...state, status:Status.LOADING}
        }
        break;
        case actionTypes.MAKE_ORDER_SUCCESS:{
            return {...state, status: Status.SUCCESS, ...action.result}
        }
        break;
        case actionTypes.MAKR_ORDER_FAILURE:{
            return {...state, status:Status.FAILURE}
        }
        break;
        case actionTypes.CHANGE_INFO_STARTED:{
            return {...state, status:Status.LOADING}
        }
        break;
        case actionTypes.CHANGE_INFO_SUCCESS:{
            return {...state, status: Status.SUCCESS, ...action.result}
        }
        break;
        case actionTypes.CHANGE_INFO_FAILURE:{
            return {...state, status:Status.FAILURE}
        }
        break;
        default:{
            return {...state}
        }
    }
};
