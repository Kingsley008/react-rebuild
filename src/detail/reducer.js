import * as actionTypes from './actionTypes';
import * as Status from '../status';


export const productReducer = (state = {status: Status.LOADING , productColor:null, productSize:null, productNumber:1, shoppingCart:JSON.parse(window.localStorage.getItem('shoppingCart')) || [],
    isDetail:true }, action) => {

    switch (action.type){
        case actionTypes.FETCH_PRODUCT_STARTED:{
            return {...state ,status : Status.LOADING}
        }
        case actionTypes.FETCH_PRODUCT_SUCCESS:{
            return {...state, status : Status.SUCCESS, ...action.result, showIcon:action.result.arrImg[0]}
        }
        case actionTypes.FETCH_PRODUCT_FAILURE:{
            return {...state, status : Status.FAILURE}
        }
        case actionTypes.CHOOSE_COLOR:{
            return{...state, productColor:action.color}
        }
        case actionTypes.CHOOSE_SIZE:{
            return{...state, productSize:action.size}
        }
        case actionTypes.CHOOSE_NUMBER:{
            return{...state, productNumber:action.number}
        }
        case actionTypes.ADD_SHOPPING_CART:{
            action.product.id = state.shoppingCart.length;
            state.shoppingCart.push(action.product);
            localStorage.setItem('shoppingCart',JSON.stringify(state.shoppingCart));

            return{...state, shoppingCart: state.shoppingCart}
        }
        case actionTypes.SHOW_PRODUCT_COMMENT:{
            return{...state,isDetail:false}
        }
        case actionTypes.SHOW_PPRODUCT_DETAIL:{
            return{...state,isDetail:true}
        }
        case actionTypes.DECREASE_NUMBER:{
            return{...state,productNumber:action.number}
        }
        case actionTypes.INCREASE_NUMBER:{
            return{...state,productNumber:action.number}
        }
        case actionTypes.CHANGE_ICON:{
            return{...state,showIcon:action.src}
        }
        // 清空全部购物车
        case actionTypes.REMOVE_ALL:{
            localStorage.removeItem('shoppingCart');
            return {...state, shoppingCart:[]}
        }
        default:
            return state;
    }

};




