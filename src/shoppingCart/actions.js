import * as actionTypes from './actionTypes';

export const removeItem = (id) => {
    return {
        type: actionTypes.REMOVE_ITEM,
        id:id
    }
};


/**
 * 反选 是否提交到订单中
 * **/
export const toggleItem = () => {
    return {
        type: actionTypes.TOGGLE_ITEM
    }
};

export const selectAll = () => {
    return {
        type: actionTypes.SELECT_ALL
    }
};

/**
 *  加入到订单中
 * **/
export const addTOOrderList = () => {
    return {
        type: actionTypes.ADD_TO_ORDERlIST
    }
}