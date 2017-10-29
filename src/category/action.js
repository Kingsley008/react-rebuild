import * as actionTypes from './actionTypes';

export const fetchManClothesCategory = (url)=> {
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
        types:[actionTypes.FETCH_CATEGORY_STARTED, actionTypes.FETCH_CATEGORY_SUCCESS, actionTypes.FETCH_CATAGORY_FAILURE]
    }
};