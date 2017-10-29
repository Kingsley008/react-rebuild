import * as actionTypes from './actionTypes';

export const showProductDetail = ()=>{
    return {
        type:actionTypes.SHOW_PPRODUCT_DETAIL,
        isDetail:true,
        isComment:false
    }
};

export const showProductComments = ()=>{
    return {
        type:actionTypes.SHOW_PRODUCT_COMMENT,
        isDetail:false,
        isComment:true,
    }
};

/**
 * 得到商品信息的JSON格式 保存到localStorage
 * **/
export const addToShoppingCart = (infoJson)=>{
    return {
        type:actionTypes.ADD_SHOPPING_CART,
        product:infoJson
    }
};

/**
 *  携带商品信息直接跳转到订单支付页面
 * ***/
/*export const buyProduct = () => {
    return {
        type:actionTypes.BUY_PRODUCT,

    }
};*/

export const chooseSize = (size) => {
    return {
        type:actionTypes.CHOOSE_SIZE,
        size:size
    }
};

export const chooseColor = (color) => {
    return {
        type:actionTypes.CHOOSE_COLOR,
        color:color
    }
};

export const chooseNumber = (number) => {
    return {
        type:actionTypes.CHOOSE_NUMBER,
        number:number
    }
};

export const decreaseNumber = (number) => {
    const num = Math.max(number - 1,1);
    return {
        type:actionTypes.INCREASE_NUMBER,
        number: num
    }
};

export const increaseNumber = (number) => {
    const num = Math.min(number + 1, 50);
    return {
        type:actionTypes.DECREASE_NUMBER,
        number: num
    }
};

export const changeIcon = (src) => {
    console.log(src);
    return {
        type:actionTypes.CHANGE_ICON,
        src:src
    }
};


export const fetchProduct = (url)=> {
    let apiUrl = url;
    return{
        promise: fetch(apiUrl,{
            method: 'GET',
            credentials: 'include',
        }).then((response) => {

            if((response.status >= 200 && response.status < 300) || response.status === 304 ){
                return response.json().then(response => response)
            } else {
                throw new Error('Fail to get response with status ' + response.status);
            }
        }).catch((error)=>{
            throw new Error('Error:' + error);
        }),
        types:[actionTypes.FETCH_PRODUCT_STARTED, actionTypes.FETCH_PRODUCT_SUCCESS, actionTypes.FETCH_PRODUCT_FAILURE]
    }
};

