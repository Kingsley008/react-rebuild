import * as actionTypes from './actionTypes';
import {FETCH_SLIDER_STARTED} from "./actionTypes";
import {FETCH_SLIDER_SUCCESS} from "./actionTypes";
import {FETCH_SLIDER_FAILURE} from "./actionTypes";

/**
 * 异步加载行为 取得slider图片地址
 * **/

export const fetchInfo = (url)=> {
      let apiUrl = url;
      return{
          promise: fetch(apiUrl,{
              method: 'GET',
              credentials: 'include',
          }).then((response) => {

              if((response.status >= 200 && response.status < 300) || response.status === 304 ){
                    return response.json().then(responseJSON=> responseJSON)
              } else {
                  throw new Error('Fail to get response with status ' + response.status);
              }
          }),
          types:[FETCH_SLIDER_STARTED, FETCH_SLIDER_SUCCESS, FETCH_SLIDER_FAILURE]
      }
};

/**
 * 异步加载行为 取得男装信息
 * **/


export const fetchMan = (url) => {

    return {
        promise: fetch(url,{
            method: 'GET',
            credentials: 'include',
        }).then((response) => {
            if((response.status >= 200 && response.status < 300) || response.status === 304 ){
                return response.json().then(responseJSON=> responseJSON)
            } else {
                throw new Error('Fail to get response with status ' + response.status);
            }
        }),
        types:[actionTypes.FETCH_MAN_STARTED, actionTypes.FETCH_MAN_SUCCESS, actionTypes.FETCH_MAN_FAILURE]
    }
};

export const fetchLady = (url) => {
    return {
        promise: fetch(url, {
            method:'GET',
            credentials:'include',
        }).then((response) => {
            if((response.status >= 200 && response.status < 300) || response.status ===304){
                return response.json().then(responseJSON => responseJSON)
            } else {
                throw new Error('Fail to get response with status ' + response.status);
            }
        }),
        types:[actionTypes.FETCH_WOMAN_STARTED, actionTypes.FETCH_WOMAN_SUCCESS, actionTypes.FETCH_WOMAN_FAILURE]
    }
};

export const fetchComment = (url) =>{
    return {
        promise: fetch(url, {
            method:'GET',
            credentials:'include',
        }).then((response) => {
            if((response.status >= 200 && response.status < 300) || response.status ===304){
                return response.json().then(responseJSON => responseJSON)
            } else {
                throw new Error('Fail to get response with status ' + response.status);
            }
        }),
        types:[actionTypes.FETCH_COMMENT_STARTED, actionTypes.FETCH_COMMENT_SUCCESS, actionTypes.FETCH_COMMENT_FAILURE]
    }
};


