import  * as actionTypes from './actionTypes';

export const changInfo = (url)=> {
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
        types:[actionTypes.CHANGE_INFO_STARTED, actionTypes.CHANGE_INFO_SUCCESS, actionTypes.CHANGE_INFO_FAILURE]
    }
};


export const makeOrder = (url,content)=>{
    let apiUrl = url;
    let productOrderList = content;
    return{
        promise: fetch(apiUrl,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productOrderList)
        }).then((response) => {

            if((response.status >= 200 && response.status < 300) || response.status === 304 ){
                return response.json().then(response => response)
            } else {
                throw new Error('Fail to get response with status ' + response.status);
            }
        }).catch((error)=>{
            throw new Error('Error:' + error);
        }),
        types:[actionTypes.MAKE_ORDER_STARTED, actionTypes.MAKE_ORDER_SUCCESS, actionTypes.MAKR_ORDER_FAILURE]
    }
};

