import * as actionTypes from './actionTypes';

import './shoppingcart.css';

 export const cartReducer = (state = {shoppingCart:JSON.parse(window.localStorage.getItem('shoppingCart')) || [],selectedItems : [],
     orderList:JSON.parse(window.localStorage.getItem('orderList')) || []}, action)=> {
     switch (action.type){
         // 全选
         case actionTypes.SELECT_ALL: {
             return {...state, selectedItems:state.shoppingCart}
         }
         // 反选
         case actionTypes.TOGGLE_ITEM: {
             return {...state, shoppingCart:state.shoppingCart.map((v)=>{if(v.id !== action.id ){
                  v.isSelected = ! v.isSelected;
                 return v;
             } else {
                 return v;
             }
             })}
         }
         // 清空全部购物车
         case actionTypes.REMOVE_ALL:{
             console.log('remove');
             localStorage.removeItem('shoppingCart');
             return {...state, shoppingCart:[]}
         }
         // 清空一项
         case actionTypes.REMOVE_ITEM: {
            return {...state, selectedItems: state.selectedItems.filter((v)=>{ return v.id !== action.id})}
         }
         /**
          *  TODO logic 再理一理... 好像有点问题
          * **/
         case actionTypes.ADD_TO_ORDERlIST: {
             state.orderList = state.selectedItems;
             localStorage.setItem('orderlist', JSON.stringify(state.orderList));
             return {...state, orderList:state.selectedItems, selectedItems:[]}
         }
         default:return state;
     }
};



