import * as actionTypes from './actionTypes';

export const fetchLogin = (url)=> {
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
        types:[actionTypes.FETCH_LOGIN_STARTED, actionTypes.FETCH_LOGIN_SUCCESS, actionTypes.FETCH_LOGIN_FAILURE]
    }
};

export const checkValidateUserName = (input) => {
  return {
      type: actionTypes.CHECK_VALIDATE_LOCAL_USERNAME,
      input:input
  }
};

export const checkValidatePassword = (input)=> {
    return {
        type: actionTypes.CHECK_VALIDATE_LOCAL_PASSWORD,
        input:input
    }
};

export const checkValidateServerFail = ()=> {
    return {
        type: actionTypes.CHECK_VALIDATE_SERVER_FAIL,
    }
};

export const checkValidateServerSuccess = ()=> {
    return {
        type: actionTypes.CHECK_VALIDATE_SERVER_SUCCESS
    }
};

